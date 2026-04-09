/**
 * Group Discovery Module
 *
 * Searches Telegram for groups matching target keywords,
 * scores them by member count, activity level, and relevance,
 * filters spam, and stores results in groups_db.json.
 */

const { Api } = require('telegram');
const logger = require('../utils/logger');
const db = require('../utils/db');
const { withBackoff, humanDelay } = require('../safety/rate_limiter');

const SPAM_SIGNALS = [
    'airdrop', 'crypto pump', 'binance signal', 'forex signal',
    '100x', 'moon soon', 'guaranteed profit', 'earn daily',
    'passive income', 'ponzi',
];

/**
 * Score a group based on its attributes
 * Returns a score from 0–100
 */
function scoreGroup(group, config) {
    let score = 0;

    // Member count scoring (prefer 1k–20k — large enough to have active users, small enough to engage)
    const members = group.participantsCount || 0;
    if (members >= 1000 && members <= 5000) score += 40;
    else if (members > 5000 && members <= 20000) score += 35;
    else if (members > 200 && members < 1000) score += 25;
    else if (members > 20000) score += 15;

    // Has a username (public, joinable)
    if (group.username) score += 20;

    // Has a description
    if (group.about) score += 10;

    // Recent activity signal (megagroup = active)
    if (group.megagroup) score += 15;

    // Keyword relevance in title and description
    const text = `${group.title || ''} ${group.about || ''}`.toLowerCase();
    const keywords = config.target_keywords || [];
    const matches = keywords.filter(kw => text.includes(kw.toLowerCase()));
    score += Math.min(matches.length * 5, 20);

    // Spam signals in title/about
    const isSpam = SPAM_SIGNALS.some(sig => text.includes(sig));
    if (isSpam) score -= 60;

    // Blacklisted keywords
    const blacklisted = (config.blacklisted_keywords || []).some(kw => text.includes(kw.toLowerCase()));
    if (blacklisted) score -= 80;

    return Math.max(0, Math.min(100, score));
}

/**
 * Search Telegram for groups matching a keyword
 */
async function searchGroupsByKeyword(client, keyword, config) {
    logger.info(`Searching groups for keyword: "${keyword}"`);

    const results = await withBackoff(async () => {
        return await client.invoke(
            new Api.contacts.Search({
                q: keyword,
                limit: 50,
            })
        );
    });

    const groups = [];

    for (const chat of results.chats || []) {
        if (!chat.className || (!chat.megagroup && chat.className !== 'Chat')) continue;

        // Skip blacklisted groups
        const blacklist = config.blacklisted_groups || [];
        if (blacklist.includes(chat.username) || blacklist.includes(String(chat.id))) continue;

        // Member count filter
        const members = chat.participantsCount || 0;
        const minMembers = config.min_group_members || 200;
        const maxMembers = config.max_group_members || 50000;
        if (members < minMembers || members > maxMembers) continue;

        const enriched = {
            id: String(chat.id),
            access_hash: String(chat.accessHash || ''),
            username: chat.username || null,
            title: chat.title || 'Unknown',
            about: chat.about || '',
            members: members,
            megagroup: !!chat.megagroup,
            score: 0,
            keyword_matched: keyword,
            discovered_at: new Date().toISOString(),
            joined: false,
            joined_at: null,
            posts_sent: 0,
            leads_scraped: 0,
            last_posted_at: null,
        };

        enriched.score = scoreGroup({ ...enriched, about: enriched.about }, config);
        groups.push(enriched);
    }

    logger.info(`Found ${groups.length} qualifying groups for "${keyword}"`);
    return groups;
}

/**
 * Main run function
 */
async function run(client, config) {
    const existing = db.read('groups_db');
    const existingIds = new Set((existing.groups || []).map(g => g.id));

    const newGroups = [];

    for (const keyword of config.target_keywords || []) {
        try {
            const found = await searchGroupsByKeyword(client, keyword, config);
            for (const g of found) {
                if (!existingIds.has(g.id)) {
                    newGroups.push(g);
                    existingIds.add(g.id);
                }
            }
            await humanDelay(config);
        } catch (err) {
            logger.error(`Error searching for "${keyword}": ${err.message}`);
        }
    }

    // Merge with existing and sort by score
    const allGroups = [...(existing.groups || []), ...newGroups]
        .sort((a, b) => b.score - a.score);

    db.write('groups_db', {
        groups: allGroups,
        last_updated: new Date().toISOString(),
        total_discovered: allGroups.length,
        total_joined: allGroups.filter(g => g.joined).length,
    });

    logger.info(`Group discovery complete. Total: ${allGroups.length}, New: ${newGroups.length}`);
    return { discovered: allGroups.length, new: newGroups.length };
}

module.exports = { run, scoreGroup };
