/**
 * Analytics Tracker Module
 *
 * Aggregates daily action metrics, produces JSON reports,
 * and outputs data for the web dashboard.
 */

const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');
const db = require('../utils/db');
const { getCounters } = require('../safety/rate_limiter');

const REPORTS_DIR = path.join(__dirname, '..', 'data', 'reports');

/**
 * Calculate estimated pipeline value from leads
 */
function estimatePipeline(leads, avgDealValue = 5000) {
    const qualifiedLeads = leads.filter(l => l.score >= 7 && l.status !== 'not_interested').length;
    const inSequence = leads.filter(l => l.status === 'in_sequence').length;

    // Assume 5% close rate on qualified leads, 2% on general
    const estimated = (qualifiedLeads * 0.05 + inSequence * 0.02) * avgDealValue;
    return Math.round(estimated);
}

/**
 * Compute today's report
 */
function computeDailyReport() {
    const groupsData = db.read('groups_db');
    const leadsData = db.read('leads_db');
    const contactedData = db.read('contacted_db');
    const counters = getCounters();

    const groups = groupsData.groups || [];
    const leads = leadsData.leads || [];
    const contacts = contactedData.contacts || [];

    const today = new Date().toISOString().split('T')[0];

    const repliesReceived = contacts.filter(c => {
        const lastMsg = c.messages && c.messages[c.messages.length - 1];
        if (!lastMsg) return false;
        const sent = new Date(lastMsg.sent_at);
        const diff = Date.now() - sent.getTime();
        return diff < 24 * 3600000;
    }).length;

    const report = {
        date: today,
        groups_discovered: groups.length,
        groups_joined: groups.filter(g => g.joined).length,
        posts_published: counters.posts || 0,
        leads_scraped: leads.length,
        dms_sent: counters.dms || 0,
        replies_received: repliesReceived,
        comments_posted: counters.comments || 0,
        conversion_rate: leads.length > 0
            ? ((leads.filter(l => l.status === 'converted').length / leads.length) * 100).toFixed(2)
            : '0.00',
        estimated_pipeline: estimatePipeline(leads),
        lead_scores: {
            high: leads.filter(l => l.score >= 8).length,
            medium: leads.filter(l => l.score >= 5 && l.score < 8).length,
            low: leads.filter(l => l.score < 5).length,
        },
        top_groups: groups
            .filter(g => g.joined)
            .sort((a, b) => b.leads_scraped - a.leads_scraped)
            .slice(0, 5)
            .map(g => ({ title: g.title, members: g.members, posts: g.posts_sent, leads: g.leads_scraped })),
        generated_at: new Date().toISOString(),
    };

    return report;
}

/**
 * Main run function
 */
async function run(client, config) {
    logger.info('Generating analytics report...');

    const report = computeDailyReport();

    // Append to analytics.json
    const analyticsData = db.read('analytics');
    const daily = analyticsData.daily || [];

    // Remove duplicate for today
    const today = report.date;
    const filtered = daily.filter(r => r.date !== today);
    filtered.push(report);

    // Update totals
    const totals = {
        groups_discovered: report.groups_discovered,
        groups_joined: report.groups_joined,
        posts_published: filtered.reduce((s, r) => s + (r.posts_published || 0), 0),
        leads_scraped: report.leads_scraped,
        dms_sent: filtered.reduce((s, r) => s + (r.dms_sent || 0), 0),
        replies_received: filtered.reduce((s, r) => s + (r.replies_received || 0), 0),
        comments_posted: filtered.reduce((s, r) => s + (r.comments_posted || 0), 0),
        estimated_pipeline: report.estimated_pipeline,
    };

    db.write('analytics', {
        daily: filtered.slice(-90), // Keep 90 days
        totals,
        last_report: report,
        last_updated: new Date().toISOString(),
    });

    // Save daily report file
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
    const reportFile = path.join(REPORTS_DIR, `report_${today}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), 'utf-8');

    logger.info(`Analytics report saved: ${reportFile}`);
    logger.info(`Totals — Groups: ${totals.groups_joined} | Leads: ${totals.leads_scraped} | DMs: ${totals.dms_sent} | Pipeline: £${totals.estimated_pipeline.toLocaleString()}`);

    return { report, totals };
}

module.exports = { run, computeDailyReport };
