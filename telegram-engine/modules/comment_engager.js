/**
 * Comment Engager Module
 *
 * Monitors joined groups for relevant discussions and posts
 * AI-generated value-adding replies to establish authority.
 */

const OpenAI = require('openai');
const { Api } = require('telegram');
const logger = require('../utils/logger');
const db = require('../utils/db');
const { canPerformAction, recordAction, humanDelay, humaniseText, withBackoff } = require('../safety/rate_limiter');

let openai = null;

function getOpenAI(config) {
    if (!openai) {
        openai = new OpenAI({ apiKey: config.openai_api_key });
    }
    return openai;
}

const ENGAGEMENT_KEYWORDS = [
    'how do you', 'what\'s the best', 'anyone tried', 'recommendation', 'advice',
    'struggling with', 'help with', 'what tool', 'which platform', 'how to get',
    'increase', 'improve', 'automate', 'scale', 'generate leads', 'get clients',
    'marketing strategy', 'content strategy', 'ai tool', 'chatgpt', 'automation',
];

const ENGAGEMENT_HISTORY_KEY = 'engagement_history';

/**
 * Check if a message is relevant to engage with
 */
function isRelevantMessage(text, config) {
    const lower = text.toLowerCase();
    const keywordMatch = ENGAGEMENT_KEYWORDS.some(kw => lower.includes(kw));
    const configKeywords = (config.target_keywords || []).some(kw => lower.includes(kw.toLowerCase()));
    return keywordMatch || configKeywords;
}

/**
 * Generate an expert reply to a group message
 */
async function generateReply(messageText, groupTitle, config, shouldMentionBrand) {
    const ai = getOpenAI(config);

    const brandMention = shouldMentionBrand
        ? `At the end, naturally mention that this is the kind of thing you specialise in at ${config.brand_name} (${config.website_url}) — but only if it fits contextually.`
        : 'Do NOT mention your brand in this reply.';

    const response = await ai.chat.completions.create({
        model: config.openai_model || 'gpt-4o',
        messages: [
            {
                role: 'system',
                content: `You are a ${config.niche} expert participating in a Telegram group called "${groupTitle}". 
You provide genuine, expert value to discussions. You come across as a knowledgeable peer, not a marketer.
Keep replies concise for Telegram (3-5 sentences max). Add real value — specific tactics, frameworks, or numbers.`,
            },
            {
                role: 'user',
                content: `Someone in the group posted:

"${messageText}"

Write a helpful, expert reply that adds genuine value to this conversation.
${brandMention}
Tone: knowledgeable, friendly, direct. No fluff.`,
            },
        ],
        temperature: 0.82,
        max_tokens: 250,
    });

    return response.choices[0].message.content.trim();
}

/**
 * Get recent messages from a group
 */
async function getRecentMessages(client, group, limit = 50) {
    const target = group.username ? group.username : parseInt(group.id);

    return await withBackoff(async () => {
        const messages = await client.getMessages(target, { limit });
        return messages || [];
    });
}

/**
 * Main run function
 */
async function run(client, config) {
    const groupsData = db.read('groups_db');
    const groups = (groupsData.groups || []).filter(g => g.joined);

    // Load engagement history (message IDs we've already replied to)
    const history = db.read(ENGAGEMENT_HISTORY_KEY);
    const repliedIds = new Set((history.replied_message_ids || []));

    let totalComments = 0;
    let commentCount = 0;

    for (const group of groups) {
        if (!canPerformAction('comments', config)) {
            logger.info('Daily comment limit reached');
            break;
        }

        try {
            const messages = await getRecentMessages(client, group);
            const now = Date.now();

            for (const msg of messages) {
                if (!msg.id || !msg.message) continue;
                const msgKey = `${group.id}:${msg.id}`;
                if (repliedIds.has(msgKey)) continue;

                // Only engage with recent messages (last 4 hours)
                const msgAge = now - (msg.date * 1000);
                if (msgAge > 4 * 3600000) continue;

                // Ignore our own messages
                const me = await client.getMe();
                if (msg.senderId && String(msg.senderId) === String(me.id)) continue;

                if (!isRelevantMessage(msg.message, config)) continue;
                if (msg.message.length < 30) continue; // Too short to meaningfully reply to

                if (!canPerformAction('comments', config)) break;

                // Brand mention: only 1 in 4 replies mentions the brand
                const shouldMentionBrand = Math.random() < 0.25;

                logger.info(`Engaging with message in ${group.title}: "${msg.message.slice(0, 60)}..."`);

                const reply = await generateReply(msg.message, group.title, config, shouldMentionBrand);
                const target = group.username ? group.username : parseInt(group.id);

                await withBackoff(async () => {
                    await client.sendMessage(target, {
                        message: humaniseText(reply),
                        replyTo: msg.id,
                    });
                });

                repliedIds.add(msgKey);
                recordAction('comments');
                recordAction('messages');
                commentCount++;
                totalComments++;

                await humanDelay(config);

                // Max 3 comments per group per session to avoid looking like a bot
                if (commentCount >= 3) break;
            }

            commentCount = 0; // Reset per-group counter
        } catch (err) {
            logger.error(`Comment engagement failed in ${group.title}: ${err.message}`);
        }
    }

    // Save engagement history
    db.write(ENGAGEMENT_HISTORY_KEY, {
        replied_message_ids: [...repliedIds].slice(-2000), // Keep last 2000
        last_updated: new Date().toISOString(),
    });

    logger.info(`Comment engagement complete. Comments posted: ${totalComments}`);
    return { comments_posted: totalComments };
}

module.exports = { run, isRelevantMessage };
