/**
 * DM Outreach Module
 *
 * Sends AI-personalised 3-message sequences to qualified leads.
 * Tracks conversation state and handles replies intelligently.
 * Sequence: intro (day 0) → value (day 1) → CTA (day 3)
 */

const OpenAI = require('openai');
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

const SEQUENCE_DELAYS = {
    0: 0,        // Intro — immediate
    1: 24,       // Value follow-up — 24 hours
    2: 72,       // CTA — 72 hours
};

const OBJECTION_RESPONSES = {
    not_interested: `Totally fair! If your situation ever changes and you want to explore AI-powered growth systems, we're here. Best of luck with everything! 🙌`,
    busy: `No worries at all — I know how hectic things get. I'll leave you to it. Feel free to reach out whenever the time is right.`,
    how_much: `Great question! Our packages start at £3,500/month for a full AI growth system. Most clients see 3–5x ROI within 90 days. Want me to send over a quick breakdown?`,
    tell_me_more: null, // Will generate AI response
    default: `Thanks for the message! I'll get back to you with more info shortly. Is there a specific challenge you're trying to solve right now?`,
};

/**
 * Detect the type of reply to determine response strategy
 */
function classifyReply(text) {
    const lower = text.toLowerCase();
    if (/not interest|no thanks|stop|unsubscribe|remove me/i.test(lower)) return 'not_interested';
    if (/busy|not right now|later|bad time/i.test(lower)) return 'busy';
    if (/how much|price|cost|pricing|rates/i.test(lower)) return 'how_much';
    if (/tell me more|sounds interesting|interested|curious|learn more/i.test(lower)) return 'tell_me_more';
    return 'default';
}

/**
 * Generate a personalised AI response to a lead reply
 */
async function generateReplyResponse(lead, replyText, config) {
    const ai = getOpenAI(config);

    const response = await ai.chat.completions.create({
        model: config.openai_model || 'gpt-4o',
        messages: [
            {
                role: 'system',
                content: `You are a friendly, knowledgeable sales rep at ${config.brand_name || 'WeMagnifAI'}, a ${config.niche} agency. 
You're having a Telegram DM conversation with a prospect. Be helpful, genuine, and non-pushy. 
Keep responses concise (2-4 sentences max for Telegram). Your goal is to book a discovery call.
Website: ${config.website_url}`,
            },
            {
                role: 'user',
                content: `The prospect said: "${replyText}"\n\nTheir profile: ${lead.first_name} ${lead.last_name}, Bio: ${lead.bio || 'Not available'}\n\nWrite a natural, helpful response.`,
            },
        ],
        temperature: 0.8,
        max_tokens: 200,
    });

    return response.choices[0].message.content.trim();
}

/**
 * Generate a sequence DM message for a lead
 */
async function generateDM(lead, step, config) {
    const ai = getOpenAI(config);

    const prompts = {
        0: `Write a warm, personalised intro DM on Telegram to a potential client.

Lead info:
- Name: ${lead.first_name} ${lead.last_name}
- Bio: ${lead.bio || 'not available'}
- Found in group: ${lead.source_group}

Your company: ${config.brand_name || 'WeMagnifAI'} — ${config.value_proposition || config.niche}

Requirements:
- Very conversational, like a real human reaching out
- Mention you noticed them in a specific group context (${lead.source_group})
- One brief sentence about what you do — don't pitch, just establish context
- Ask a single, open-ended question related to their potential challenge
- Max 4 sentences total
- No emojis except at most one
- Do NOT sound like a bot or template`,

        1: `Write a follow-up DM (day 2 of a sequence) to ${lead.first_name} who hasn't replied yet.

Context: You're following up from your initial message about ${config.niche} services.
Your brand: ${config.brand_name}
Value prop: ${config.value_proposition}

Requirements:
- Lead with value: share a quick insight, tip, or resource — no strings attached
- Keep it short: 3-4 sentences
- Soft ask at the end: "Would this be useful for your situation?"
- Very human tone, no formality`,

        2: `Write a final CTA DM to ${lead.first_name} (day 4 of sequence, still no reply).

Your brand: ${config.brand_name} | Website: ${config.website_url}

Requirements:
- Acknowledge you've reached out before — be gracious, not pushy
- Give them one compelling reason to respond (specific result or case study result)
- Clear but low-pressure CTA: offer a free 20-min strategy call
- 3 sentences max
- If no response, you'll respect their inbox`,
    };

    const response = await ai.chat.completions.create({
        model: config.openai_model || 'gpt-4o',
        messages: [
            {
                role: 'system',
                content: `You write authentic Telegram DMs for ${config.brand_name || 'WeMagnifAI'}. Sound like a real person, not a marketer.`,
            },
            { role: 'user', content: prompts[step] },
        ],
        temperature: 0.9,
        max_tokens: 250,
    });

    return response.choices[0].message.content.trim();
}

/**
 * Send a DM to a user
 */
async function sendDM(client, lead, message) {
    const target = lead.username ? `@${lead.username}` : parseInt(lead.id);

    return await withBackoff(async () => {
        return await client.sendMessage(target, {
            message: humaniseText(message),
        });
    });
}

/**
 * Main run function
 */
async function run(client, config) {
    const leadsData = db.read('leads_db');
    const contactedData = db.read('contacted_db');

    const now = Date.now();
    const leads = (leadsData.leads || []).filter(l => l.status !== 'not_interested' && l.status !== 'converted');

    let sent = 0;

    for (const lead of leads) {
        if (!canPerformAction('dms', config)) {
            logger.info('Daily DM limit reached');
            break;
        }

        const step = lead.dm_sequence_step || 0;
        if (step >= 3) continue; // Sequence complete

        const delayHours = SEQUENCE_DELAYS[step] || 0;
        if (lead.last_contacted) {
            const hoursSince = (now - new Date(lead.last_contacted).getTime()) / 3600000;
            if (hoursSince < delayHours) continue;
        } else if (step > 0) {
            continue; // Never contacted — only send step 0 to new leads
        }

        try {
            logger.info(`Sending DM step ${step + 1}/3 to @${lead.username || lead.id}`);
            const message = await generateDM(lead, step, config);
            await sendDM(client, lead, message);

            lead.dm_sequence_step = step + 1;
            lead.last_contacted = new Date().toISOString();
            lead.status = step >= 2 ? 'sequence_complete' : 'in_sequence';

            // Log in contacted_db
            const contactedData2 = db.read('contacted_db');
            contactedData2.contacts = contactedData2.contacts || [];
            const existing = contactedData2.contacts.find(c => c.user_id === lead.id);
            if (existing) {
                existing.messages.push({ step, sent_at: new Date().toISOString(), message });
            } else {
                contactedData2.contacts.push({
                    user_id: lead.id,
                    username: lead.username,
                    messages: [{ step, sent_at: new Date().toISOString(), message }],
                    first_contacted: new Date().toISOString(),
                });
            }
            db.write('contacted_db', contactedData2);

            sent++;
            recordAction('dms');
            recordAction('messages');

            await humanDelay(config);
        } catch (err) {
            if (err.errorMessage && err.errorMessage.includes('USER_PRIVACY_RESTRICTED')) {
                lead.status = 'privacy_restricted';
                logger.warn(`Cannot DM @${lead.username} — privacy restricted`);
            } else if (err.errorMessage && err.errorMessage.includes('INPUT_USER_DEACTIVATED')) {
                lead.status = 'deactivated';
            } else {
                logger.error(`DM to @${lead.username || lead.id} failed: ${err.message}`);
            }
        }
    }

    db.write('leads_db', { ...leadsData, leads, last_updated: new Date().toISOString() });
    logger.info(`DM outreach complete. Sent: ${sent}`);
    return { sent };
}

module.exports = { run, generateDM, classifyReply, generateReplyResponse };
