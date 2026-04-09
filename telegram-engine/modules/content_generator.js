/**
 * Content Generator Module
 *
 * Uses OpenAI GPT-4o to generate platform-native Telegram content.
 * Rotates across 5 content types: value tips, mini case studies,
 * question posts, resource shares, and polls.
 */

const OpenAI = require('openai');
const logger = require('../utils/logger');
const db = require('../utils/db');

let openai = null;

function getOpenAI(config) {
    if (!openai) {
        openai = new OpenAI({ apiKey: config.openai_api_key });
    }
    return openai;
}

const CONTENT_TEMPLATES = {
    value_tip: {
        name: 'Value Tip',
        prompt: (niche, group, cta) => `
You are an expert content writer for Telegram marketing in the ${niche} space.
Write a practical, value-packed tip post for a Telegram group called "${group.title}".

Requirements:
- Start with a bold hook line (no emojis in the opening hook)
- Share a genuinely useful insight, tactic, or strategy
- Be specific with numbers and examples
- 150-220 words total
- End with a natural, soft CTA that mentions: ${cta}
- Use 2-3 relevant emojis throughout (not at the start)
- Format with line breaks for readability
- Do NOT sound like an ad

Output only the post text, nothing else.`,
    },

    mini_case_study: {
        name: 'Mini Case Study',
        prompt: (niche, group, cta) => `
You are a ${niche} expert sharing insights on Telegram.
Write a short anonymised case study post for "${group.title}".

Requirements:
- Client type: a business in the ${niche} space
- Include: the problem, the solution approach, a specific result (with realistic numbers)
- 180-250 words
- Conversational, not salesy
- Mention naturally that this is the kind of work you do, with a soft link to: ${cta}
- Use 2-3 emojis
- End with a question to drive engagement

Output only the post text, nothing else.`,
    },

    question_post: {
        name: 'Engagement Question',
        prompt: (niche, group, cta) => `
Write an engaging question post for a Telegram group focused on "${group.title}".
The audience is interested in ${niche}.

Requirements:
- Ask a genuinely interesting question that sparks debate or reflection
- Add 2-3 bullet points of context to frame the question
- 80-130 words
- End with a poll-style option: "Drop A or B below 👇"
- Very naturally mention in the context that you run ${cta}

Output only the post text, nothing else.`,
    },

    resource_share: {
        name: 'Resource Share',
        prompt: (niche, group, cta) => `
You're sharing a useful resource with a Telegram group called "${group.title}" focused on ${niche}.

Requirements:
- Frame a concept, framework, or approach as a "free resource"
- Use a numbered list format (5-7 points)
- Each point should be genuinely actionable
- 150-200 words
- At the end: mention you share more at ${cta}
- Use emojis only as bullet decorators

Output only the post text, nothing else.`,
    },

    poll_post: {
        name: 'Poll Post',
        prompt: (niche, group, cta) => `
Write a poll-style post for a Telegram group about ${niche} called "${group.title}".

Requirements:
- Topic: a genuinely interesting ${niche} question
- Provide 3-4 reply options (labelled A, B, C, D)
- Keep it under 100 words
- End: "Reply below — curious where everyone's at!"
- Subtly mention that you help with these challenges at ${cta}

Output only the post text, nothing else.`,
    },
};

const TEMPLATE_KEYS = Object.keys(CONTENT_TEMPLATES);

/**
 * Pick the next template in rotation for a group
 */
function pickTemplate(group) {
    const postsCount = group.posts_sent || 0;
    return TEMPLATE_KEYS[postsCount % TEMPLATE_KEYS.length];
}

/**
 * Generate content for a specific group
 */
async function generateForGroup(group, config) {
    const ai = getOpenAI(config);
    const templateKey = pickTemplate(group);
    const template = CONTENT_TEMPLATES[templateKey];

    logger.info(`Generating ${template.name} for group: ${group.title}`);

    const prompt = template.prompt(config.niche, group, config.cta_message || config.website_url);

    const response = await ai.chat.completions.create({
        model: config.openai_model || 'gpt-4o',
        messages: [
            {
                role: 'system',
                content: `You are a ${config.niche} marketing expert who writes authentic, value-first Telegram content. Your style is knowledgeable, direct, and community-oriented — never corporate or salesy.`,
            },
            { role: 'user', content: prompt },
        ],
        temperature: 0.85,
        max_tokens: 400,
    });

    const content = response.choices[0].message.content.trim();
    logger.info(`Generated ${content.length} chars for ${group.title}`);

    return {
        group_id: group.id,
        group_title: group.title,
        template: templateKey,
        content,
        generated_at: new Date().toISOString(),
        posted: false,
    };
}

/**
 * Main run function — generates content for all joined, eligible groups
 */
async function run(client, config) {
    const groupsData = db.read('groups_db');
    const groups = (groupsData.groups || []).filter(g => g.joined);

    const now = Date.now();
    const cooldownMs = (config.post_cooldown_hours || 48) * 3600000;

    const eligible = groups.filter(g => {
        if (!g.last_posted_at) return true;
        return now - new Date(g.last_posted_at).getTime() > cooldownMs;
    });

    logger.info(`Generating content for ${eligible.length} eligible groups`);

    const contentQueue = [];
    for (const group of eligible) {
        try {
            const item = await generateForGroup(group, config);
            contentQueue.push(item);
        } catch (err) {
            logger.error(`Content generation failed for ${group.title}: ${err.message}`);
        }
    }

    // Save content queue
    const existing = db.read('content_queue');
    db.write('content_queue', {
        queue: [...(existing.queue || []).filter(i => !i.posted), ...contentQueue],
        last_updated: new Date().toISOString(),
    });

    logger.info(`Content generation complete. Queue: ${contentQueue.length} new items`);
    return { generated: contentQueue.length };
}

module.exports = { run, generateForGroup, CONTENT_TEMPLATES };
