# WeMagnifAI Telegram Growth Engine

A complete autonomous Telegram organic marketing and lead generation system. Discovers niche groups, generates AI content, scrapes qualified leads, sends personalised DMs, and engages with discussions — all on a configurable schedule with sophisticated anti-ban safety logic.

---

## Features

- **Group Discovery** — Searches Telegram for groups matching your target keywords, scores them by activity and relevance
- **Auto-Join** — Joins top-scoring groups with human-like random delays, daily limits, and cooldown tracking
- **AI Content Generation** — Uses GPT-4o to write platform-native posts, tips, case studies, polls, and questions tailored to each group
- **Automated Posting** — Schedules and posts AI-generated content with per-group cooldowns and blacklist support
- **Lead Scraping** — Extracts active members, scores them 1–10 on niche fit, filters bots and inactive accounts
- **Personalised DM Outreach** — Sends a 3-message AI-personalised sequence (intro → value → CTA) with conversation state tracking
- **Comment Engagement** — Monitors discussions and auto-replies with value-adding expert commentary
- **Analytics** — Tracks all actions, produces daily JSON reports, feeds the web dashboard
- **Safety System** — Rate limiting, exponential backoff, flood-wait handling, anti-pattern variation, session rotation

---

## Tech Stack

- Node.js 18+
- [GramJS](https://github.com/gram-js/gramjs) — Telegram MTProto client (full API access)
- [OpenAI Node SDK](https://github.com/openai/openai-node) — GPT-4o content and DM generation
- [node-cron](https://github.com/node-cron/node-cron) — Task scheduling
- [Winston](https://github.com/winstonjs/winston) — Structured logging

---

## Setup

### 1. Prerequisites

```bash
node -v  # Must be 18+
npm -v
```

### 2. Install dependencies

```bash
cd telegram-engine
npm install
```

### 3. Get Telegram API credentials

1. Go to [https://my.telegram.org](https://my.telegram.org)
2. Log in with your phone number
3. Click **API development tools**
4. Create a new application — note the `api_id` and `api_hash`

### 4. Configure

```bash
cp config.example.json config.json
# Edit config.json with your credentials
```

Key fields:

| Field | Description |
|---|---|
| `telegram_api_id` | From my.telegram.org |
| `telegram_api_hash` | From my.telegram.org |
| `phone` | Your Telegram account phone number (E.164 format, e.g. +447700123456) |
| `bot_token` | Optional — for bot-mode actions (from @BotFather) |
| `openai_api_key` | Your OpenAI API key |
| `target_keywords` | Array of search terms to find relevant groups |
| `niche` | Your business niche (used to tailor AI content) |
| `website_url` | Your website, included naturally in CTAs |
| `cta_message` | Short CTA appended to content |
| `daily_message_limit` | Max messages/DMs per day (default: 50) |
| `daily_group_join_limit` | Max new groups to join per day (default: 10) |
| `human_delay_min_seconds` | Min delay between actions (default: 45) |
| `human_delay_max_seconds` | Max delay between actions (default: 180) |

### 5. First run (authentication)

```bash
node core/bot_engine.js --auth
```

You will be prompted for your phone number and the OTP Telegram sends you. A session file is saved for future runs.

### 6. Start the scheduler

```bash
npm start
# or for development with auto-restart:
npm run dev
```

---

## Scheduler Timetable

| Time | Task |
|---|---|
| 08:00 | Group discovery + join new top-scored groups |
| 10:00 | Generate and post AI content to joined groups |
| 14:00 | Scrape leads from groups + send personalised DMs |
| 18:00 | Monitor discussions + post expert comments |
| 22:00 | Compile analytics report |

---

## Data Files

All state is persisted in `/data/`:

| File | Contents |
|---|---|
| `groups_db.json` | All discovered and joined groups with scores |
| `leads_db.json` | Scraped leads with qualification scores |
| `contacted_db.json` | DM history and conversation states |
| `analytics.json` | Rolling daily metrics |

---

## Safety Notes

- **Never** set `daily_message_limit` above 80 — Telegram may flag accounts
- **Never** set `daily_group_join_limit` above 15 — account restriction risk
- The rate limiter enforces a minimum 45s gap between all actions
- Flood waits are automatically respected with exponential backoff
- If running multiple accounts, list them all in `config.json` under `accounts[]`

---

## API Output (for Dashboard)

The analytics tracker writes to `/data/analytics.json` every evening. The web dashboard at `/telegram-dashboard` reads this file via the Next.js API route at `/api/telegram-analytics`.

---

## Licence

Internal use + commercial SaaS product — WeMagnifAI © 2026
