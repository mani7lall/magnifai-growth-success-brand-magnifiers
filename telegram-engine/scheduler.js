/**
 * WeMagnifAI Telegram Growth Engine — Cron Scheduler
 *
 * Schedule:
 *   08:00 — Group discovery + join top-scored groups
 *   10:00 — Generate AI content + post to groups
 *   14:00 — Scrape leads + send DM sequences
 *   18:00 — Comment engagement (authority building)
 *   22:00 — Compile daily analytics report
 */

const cron = require('node-cron');
const { initClient, getClient, getConfig, disconnect, runModule } = require('./core/bot_engine');
const logger = require('./utils/logger');

let isRunning = false;

async function safeRun(taskName, moduleName) {
    if (isRunning) {
        logger.warn(`Skipping ${taskName} — another task is already running`);
        return;
    }

    isRunning = true;
    logger.info(`=== Starting scheduled task: ${taskName} ===`);

    try {
        const client = await getClient();
        const config = getConfig();
        const mod = require(`./modules/${moduleName}`);
        const result = await mod.run(client, config);
        logger.info(`=== ${taskName} complete ===`, result);
    } catch (err) {
        logger.error(`=== ${taskName} failed: ${err.message} ===`);
    } finally {
        isRunning = false;
    }
}

async function startScheduler() {
    logger.info('Initialising Telegram client...');
    await initClient();
    logger.info('Telegram Growth Engine scheduler started. All tasks scheduled.');

    // 08:00 — Group discovery + join
    cron.schedule('0 8 * * *', async () => {
        await safeRun('Group Discovery', 'group_discovery');
        await new Promise(r => setTimeout(r, 30000)); // 30s gap
        await safeRun('Group Joiner', 'group_joiner');
    }, { timezone: 'Europe/London' });

    // 10:00 — Content generation + posting
    cron.schedule('0 10 * * *', async () => {
        await safeRun('Content Generator', 'content_generator');
        await new Promise(r => setTimeout(r, 60000)); // 1 min gap
        await safeRun('Group Poster', 'group_poster');
    }, { timezone: 'Europe/London' });

    // 14:00 — Lead scraping + DM outreach
    cron.schedule('0 14 * * *', async () => {
        await safeRun('Lead Scraper', 'lead_scraper');
        await new Promise(r => setTimeout(r, 120000)); // 2 min gap
        await safeRun('DM Outreach', 'dm_outreach');
    }, { timezone: 'Europe/London' });

    // 18:00 — Comment engagement
    cron.schedule('0 18 * * *', async () => {
        await safeRun('Comment Engager', 'comment_engager');
    }, { timezone: 'Europe/London' });

    // 22:00 — Analytics report
    cron.schedule('0 22 * * *', async () => {
        await safeRun('Analytics Tracker', 'analytics_tracker');
    }, { timezone: 'Europe/London' });

    // Health check log every hour
    cron.schedule('0 * * * *', () => {
        logger.info('Scheduler heartbeat — engine running');
    });

    logger.info('All cron jobs registered:');
    logger.info('  08:00 — Group Discovery + Join');
    logger.info('  10:00 — Content Generation + Posting');
    logger.info('  14:00 — Lead Scraping + DM Outreach');
    logger.info('  18:00 — Comment Engagement');
    logger.info('  22:00 — Analytics Report');
}

// Graceful shutdown
process.on('SIGTERM', async () => {
    logger.info('Received SIGTERM — shutting down gracefully');
    await disconnect();
    process.exit(0);
});

process.on('SIGINT', async () => {
    logger.info('Received SIGINT — shutting down gracefully');
    await disconnect();
    process.exit(0);
});

startScheduler().catch(err => {
    logger.error('Failed to start scheduler:', err);
    process.exit(1);
});
