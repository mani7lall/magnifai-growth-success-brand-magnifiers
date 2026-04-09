/**
 * WeMagnifAI Rate Limiter & Safety System
 *
 * Enforces all daily limits, implements exponential backoff,
 * handles Telegram flood waits, and introduces human-like randomisation.
 */

const logger = require('../utils/logger');
const db = require('../utils/db');

// In-memory counters (reset on process restart; daily reset via scheduler)
const counters = {
    messages: 0,
    group_joins: 0,
    dms: 0,
    posts: 0,
    comments: 0,
    actions: 0,
    lastReset: new Date().toDateString(),
};

/**
 * Reset counters if it's a new day
 */
function checkDayReset() {
    const today = new Date().toDateString();
    if (counters.lastReset !== today) {
        Object.assign(counters, {
            messages: 0,
            group_joins: 0,
            dms: 0,
            posts: 0,
            comments: 0,
            actions: 0,
            lastReset: today,
        });
        logger.info('Daily counters reset');
    }
}

/**
 * Check if an action type is within its daily limit
 * @param {'group_joins'|'dms'|'posts'|'comments'|'messages'} type
 * @param {object} config
 * @returns {boolean}
 */
function canPerformAction(type, config) {
    checkDayReset();
    const limits = {
        group_joins: config.daily_group_join_limit || 10,
        dms: config.daily_dm_limit || 25,
        posts: config.daily_post_limit || 15,
        comments: config.daily_comment_limit || 30,
        messages: config.daily_message_limit || 50,
    };
    const limit = limits[type];
    const current = counters[type] || 0;
    if (current >= limit) {
        logger.warn(`Daily limit reached for ${type}: ${current}/${limit}`);
        return false;
    }
    return true;
}

/**
 * Increment a counter after an action is performed
 */
function recordAction(type) {
    checkDayReset();
    counters[type] = (counters[type] || 0) + 1;
    counters.actions += 1;
}

/**
 * Get a human-like random delay in milliseconds
 */
function getHumanDelay(config) {
    const min = (config.human_delay_min_seconds || 45) * 1000;
    const max = (config.human_delay_max_seconds || 180) * 1000;
    // Add micro-jitter: ±5% of base
    const base = Math.floor(Math.random() * (max - min + 1)) + min;
    const jitter = Math.floor(base * 0.05 * (Math.random() - 0.5) * 2);
    return base + jitter;
}

/**
 * Vary the message length slightly to avoid pattern detection
 * Randomly adds/removes trailing whitespace, changes punctuation
 */
function humaniseText(text) {
    const variations = [
        t => t,
        t => t.replace(/\. /g, '.  '),
        t => t.trimEnd(),
        t => t + ' ',
        t => t.replace(/!$/m, '.'),
    ];
    const fn = variations[Math.floor(Math.random() * variations.length)];
    return fn(text);
}

/**
 * Sleep for a human-like delay, then resolve
 */
async function humanDelay(config) {
    const ms = getHumanDelay(config);
    logger.debug(`Waiting ${Math.round(ms / 1000)}s before next action`);
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Execute an async action with exponential backoff on FloodWaitError
 * @param {Function} fn - async function to execute
 * @param {number} maxRetries
 */
async function withBackoff(fn, maxRetries = 5) {
    let attempt = 0;
    while (attempt < maxRetries) {
        try {
            return await fn();
        } catch (err) {
            const isFlood = err.errorMessage && err.errorMessage.includes('FLOOD_WAIT');
            const isSlowMode = err.errorMessage && err.errorMessage.includes('SLOWMODE_WAIT');

            if (isFlood || isSlowMode) {
                const waitSeconds = err.seconds || Math.pow(2, attempt + 3) * 10;
                logger.warn(`Flood/slowmode wait: ${waitSeconds}s (attempt ${attempt + 1})`);
                await new Promise(resolve => setTimeout(resolve, (waitSeconds + 5) * 1000));
            } else if (err.code === 420 || err.errorCode === 420) {
                const waitSeconds = err.seconds || 60;
                logger.warn(`Rate limit hit, waiting ${waitSeconds}s`);
                await new Promise(resolve => setTimeout(resolve, waitSeconds * 1000));
            } else {
                const backoff = Math.pow(2, attempt) * 2000 + Math.random() * 1000;
                logger.warn(`Error (attempt ${attempt + 1}): ${err.message} — retrying in ${Math.round(backoff / 1000)}s`);
                await new Promise(resolve => setTimeout(resolve, backoff));
            }

            attempt++;
            if (attempt >= maxRetries) {
                throw err;
            }
        }
    }
}

/**
 * Get current counter snapshot
 */
function getCounters() {
    checkDayReset();
    return { ...counters };
}

module.exports = {
    canPerformAction,
    recordAction,
    getHumanDelay,
    humanDelay,
    humaniseText,
    withBackoff,
    getCounters,
};
