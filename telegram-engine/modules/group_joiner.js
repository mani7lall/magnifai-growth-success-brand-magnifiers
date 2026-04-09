/**
 * Group Joiner Module
 *
 * Joins top-scored groups from groups_db, respects daily limits,
 * adds human-like delays, and tracks join history.
 */

const { Api } = require('telegram');
const logger = require('../utils/logger');
const db = require('../utils/db');
const { canPerformAction, recordAction, humanDelay, withBackoff } = require('../safety/rate_limiter');

/**
 * Join a single Telegram group by username or invite link
 */
async function joinGroup(client, group) {
    if (group.username) {
        return await withBackoff(async () => {
            return await client.invoke(
                new Api.channels.JoinChannel({
                    channel: group.username,
                })
            );
        });
    }
    throw new Error(`Cannot join group without username: ${group.title}`);
}

/**
 * Main run function
 */
async function run(client, config) {
    const groupsData = db.read('groups_db');
    const groups = groupsData.groups || [];

    // Find unjoined, high-scoring groups
    const targets = groups
        .filter(g => !g.joined && g.score >= 40 && g.username)
        .sort((a, b) => b.score - a.score)
        .slice(0, config.daily_group_join_limit || 10);

    logger.info(`Attempting to join ${targets.length} groups`);

    let joined = 0;
    let failed = 0;

    for (const group of targets) {
        if (!canPerformAction('group_joins', config)) {
            logger.info('Daily group join limit reached, stopping');
            break;
        }

        try {
            logger.info(`Joining: ${group.title} (@${group.username}) [score: ${group.score}]`);
            await joinGroup(client, group);

            group.joined = true;
            group.joined_at = new Date().toISOString();
            joined++;
            recordAction('group_joins');

            logger.info(`Successfully joined: ${group.title}`);
            await humanDelay(config);
        } catch (err) {
            const isPrivate = err.errorMessage && err.errorMessage.includes('INVITE_HASH');
            const isBanned = err.errorMessage && err.errorMessage.includes('USER_BANNED');

            if (isPrivate) {
                logger.warn(`Group ${group.title} requires invite link — skipping`);
                group.score = 0; // Deprioritise
            } else if (isBanned) {
                logger.error(`Account banned from ${group.title}`);
                group.score = 0;
            } else {
                logger.error(`Failed to join ${group.title}: ${err.message}`);
            }
            failed++;
        }
    }

    // Save updated group states
    db.write('groups_db', {
        ...groupsData,
        groups,
        last_updated: new Date().toISOString(),
        total_joined: groups.filter(g => g.joined).length,
    });

    logger.info(`Group joiner complete. Joined: ${joined}, Failed: ${failed}`);
    return { joined, failed };
}

module.exports = { run };
