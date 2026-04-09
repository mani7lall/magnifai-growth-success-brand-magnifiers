/**
 * Simple JSON file-based persistence layer
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

function getDbPath(name) {
    return path.join(DATA_DIR, `${name}.json`);
}

function read(name) {
    const p = getDbPath(name);
    if (!fs.existsSync(p)) return getDefault(name);
    try {
        return JSON.parse(fs.readFileSync(p, 'utf-8'));
    } catch {
        return getDefault(name);
    }
}

function write(name, data) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(getDbPath(name), JSON.stringify(data, null, 2), 'utf-8');
}

function getDefault(name) {
    const defaults = {
        groups_db: { groups: [], last_updated: null },
        leads_db: { leads: [], last_updated: null },
        contacted_db: { contacts: [], last_updated: null },
        analytics: {
            daily: [],
            totals: {
                groups_discovered: 0,
                groups_joined: 0,
                posts_published: 0,
                leads_scraped: 0,
                dms_sent: 0,
                replies_received: 0,
                comments_posted: 0,
            },
        },
    };
    return defaults[name] || {};
}

module.exports = { read, write };
