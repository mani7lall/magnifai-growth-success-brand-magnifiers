/**
 * WeMagnifAI Telegram Growth Engine — Main Orchestrator
 * Uses GramJS (MTProto) for full Telegram API access
 */

const { TelegramClient } = require('telegram');
const { StringSession } = require('telegram/sessions');
const { NewMessage } = require('telegram/events');
const input = require('input');
const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

const CONFIG_PATH = path.join(__dirname, '..', 'config.json');
const SESSION_PATH = path.join(__dirname, '..', 'data', 'session.txt');

let client = null;
let config = null;

/**
 * Load config from config.json (falls back to config.example.json for dev)
 */
function loadConfig() {
    const configFile = fs.existsSync(CONFIG_PATH)
        ? CONFIG_PATH
        : path.join(__dirname, '..', 'config.example.json');
    config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
    logger.info(`Config loaded from ${configFile}`);
    return config;
}

/**
 * Initialise and authenticate the Telegram MTProto client
 */
async function initClient(authMode = false) {
    if (!config) loadConfig();

    const savedSession = fs.existsSync(SESSION_PATH)
        ? fs.readFileSync(SESSION_PATH, 'utf-8').trim()
        : '';

    const session = new StringSession(savedSession);

    client = new TelegramClient(session, config.telegram_api_id, config.telegram_api_hash, {
        connectionRetries: 5,
        useWSS: false,
    });

    if (authMode || !savedSession) {
        await client.start({
            phoneNumber: async () => {
                if (config.phone) return config.phone;
                return await input.text('Enter your phone number (+country code): ');
            },
            password: async () => await input.text('Enter 2FA password (leave blank if none): '),
            phoneCode: async () => await input.text('Enter the OTP sent to your Telegram: '),
            onError: (err) => logger.error('Auth error:', err),
        });

        const sessionString = client.session.save();
        fs.mkdirSync(path.dirname(SESSION_PATH), { recursive: true });
        fs.writeFileSync(SESSION_PATH, sessionString, 'utf-8');
        logger.info('Session saved successfully');
    } else {
        await client.connect();
    }

    logger.info('Telegram client connected');
    return client;
}

/**
 * Get the active client (initialise if needed)
 */
async function getClient() {
    if (!client || !client.connected) {
        await initClient();
    }
    return client;
}

/**
 * Get the loaded config
 */
function getConfig() {
    if (!config) loadConfig();
    return config;
}

/**
 * Gracefully disconnect the client
 */
async function disconnect() {
    if (client && client.connected) {
        await client.disconnect();
        logger.info('Telegram client disconnected');
    }
}

/**
 * Run a single named module by name
 */
async function runModule(moduleName) {
    logger.info(`Running module: ${moduleName}`);
    try {
        const mod = require(`../modules/${moduleName}`);
        await mod.run(client, config);
        logger.info(`Module ${moduleName} completed`);
    } catch (err) {
        logger.error(`Module ${moduleName} failed:`, err.message);
        throw err;
    }
}

/**
 * Full engine run — all modules in sequence
 */
async function runAll() {
    await initClient();
    const modules = [
        'group_discovery',
        'group_joiner',
        'content_generator',
        'group_poster',
        'lead_scraper',
        'dm_outreach',
        'comment_engager',
        'analytics_tracker',
    ];

    for (const mod of modules) {
        try {
            await runModule(mod);
        } catch (err) {
            logger.error(`Skipping ${mod} due to error: ${err.message}`);
        }
    }

    await disconnect();
}

// Entry point: node core/bot_engine.js [--auth] [--module=name]
if (require.main === module) {
    const args = process.argv.slice(2);
    const authMode = args.includes('--auth');
    const moduleArg = args.find(a => a.startsWith('--module='));
    const moduleName = moduleArg ? moduleArg.split('=')[1] : null;

    (async () => {
        try {
            await initClient(authMode);
            if (moduleName) {
                await runModule(moduleName);
            } else if (!authMode) {
                await runAll();
            }
        } catch (err) {
            logger.error('Fatal error:', err);
            process.exit(1);
        } finally {
            await disconnect();
        }
    })();
}

module.exports = { initClient, getClient, getConfig, disconnect, runModule, runAll };
