/**
 * Group Poster Module
 *
 * Posts AI-generated content from the content queue to joined groups.
 * Respects per-group cooldowns, daily post limits, and scheduling.
 */

const { Api } = require('telegram');
const logger = require('../utils/logger');
const db = require('../utils/db');
const { canPerformAction, recordAction, humanDelay, humaniseText, withBackoff } = require('../safety/rate_limiter');

/**
 * Send a message to a Telegram group
 */
async function postToGroup(client, group, content) {
    const target = group.username ? `@${group.username}` : group.id;

    return await withBackoff(async () => {
        return await client.sendMessage(target, {
            message: humaniseText(content),
            parseMode: 'md',
        });
    });
}

/**
 * Main run function
 */
async function run(client, config) {
    const contentData = db.read('content_queue');
    const groupsData = db.read('groups_db');

    const queue = (contentData.queue || []).filter(i => !i.posted);
    const groups = groupsData.groups || [];
    const groupMap = Object.fromEntries(groups.map(g => [g.id, g]));

    const now = Date.now();
    const cooldownMs = (config.post_cooldown_hours || 48) * 3600000;

    logger.info(`Content queue has ${queue.length} unposted items`);

    let posted = 0;
    let skipped = 0;

    for (const item of queue) {
        if (!canPerformAction('posts', config)) {
            logger.info('Daily post limit reached');
            break;
        }

        const group = groupMap[item.group_id];
        if (!group || !group.joined) {
            item.posted = true; // Mark stale items
            skipped++;
            continue;
        }

        // Per-group cooldown check
        if (group.last_posted_at) {
            const elapsed = now - new Date(group.last_posted_at).getTime();
            if (elapsed < cooldownMs) {
                logger.debug(`Cooldown active for ${group.title} — skipping`);
                skipped++;
                continue;
            }
        }

        try {
            logger.info(`Posting to: ${group.title} (${item.template})`);
            await postToGroup(client, group, item.content);

            // Update tracking
            item.posted = true;
            item.posted_at = new Date().toISOString();
            group.posts_sent = (group.posts_sent || 0) + 1;
            group.last_posted_at = new Date().toISOString();

            posted++;
            recordAction('posts');
            recordAction('messages');

            logger.info(`Posted to ${group.title} successfully`);
            await humanDelay(config);
        } catch (err) {
            logger.error(`Failed to post to ${group.title}: ${err.message}`);

            // If we're banned from posting, mark the group
            if (err.errorMessage && err.errorMessage.includes('CHAT_WRITE_FORBIDDEN')) {
                group.write_forbidden = true;
                logger.warn(`Write forbidden in ${group.title} — marking`);
            }
        }
    }

    // Persist updates
    db.write('content_queue', { queue, last_updated: new Date().toISOString() });
    db.write('groups_db', { ...groupsData, groups, last_updated: new Date().toISOString() });

    logger.info(`Group poster complete. Posted: ${posted}, Skipped: ${skipped}`);
    return { posted, skipped };
}

module.exports = { run };
