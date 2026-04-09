import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const commands = `cd telegram-engine
cp config.example.json config.json
npm install
node core/bot_engine.js --auth
npm start`;

const configSnippet = `{
  "telegram_api_id": "YOUR_API_ID",
  "telegram_api_hash": "YOUR_API_HASH",
  "openai_api_key": "YOUR_OPENAI_API_KEY",
  "brand_name": "WeMagnifAI",
  "website_url": "https://wemagnifai.com",
  "target_keywords": ["AI agency", "SaaS founders", "growth marketing"]
}`;

export default function TelegramSetupPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '90px' }}>
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ color: '#22d3ee', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Setup Guide</p>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontFamily: 'var(--font-playfair)', fontWeight: 900, lineHeight: 1.05, margin: '0.5rem 0 1rem' }}>
              Telegram Growth Engine Setup
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '760px', lineHeight: 1.7 }}>
              Follow these steps to install, authenticate, configure, and launch the autonomous Telegram system.
            </p>
          </div>

          <div style={card}>
            <h2 style={h2}>Prerequisites</h2>
            <ul style={list}>
              <li>Node.js 18+</li>
              <li>Telegram account with phone access</li>
              <li>OpenAI API key</li>
              <li>Telegram API ID and API hash</li>
              <li>VPS or always-on server</li>
            </ul>
          </div>

          <div style={card}>
            <h2 style={h2}>Step 1: Get Telegram API Credentials</h2>
            <p style={p}>Go to <a href="https://my.telegram.org" style={a}>my.telegram.org</a>, log in, and create an API application. Copy your API ID and API hash.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Step 2: Install</h2>
            <pre style={pre}>{commands}</pre>
          </div>

          <div style={card}>
            <h2 style={h2}>Step 3: Configure config.json</h2>
            <pre style={pre}>{configSnippet}</pre>
          </div>

          <div style={card}>
            <h2 style={h2}>Step 4: Run Authentication</h2>
            <p style={p}>Enter your phone number, Telegram code, and 2FA password if needed. The session will be saved for future runs.</p>
            <pre style={pre}>{`node core/bot_engine.js --auth`}</pre>
          </div>

          <div style={card}>
            <h2 style={h2}>Step 5: Start the Scheduler</h2>
            <pre style={pre}>{`npm start`}</pre>
            <p style={p}>Keep the process alive on your server so the cron jobs can run throughout the day.</p>
          </div>

          <div style={card}>
            <h2 style={h2}>Monitor the Dashboard</h2>
            <p style={p}>Open the dashboard to watch live activity, lead scores, group performance, and campaign status.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/telegram-dashboard" style={btnPrimary}>Open Dashboard</Link>
              <Link href="/telegram-growth" style={btnSecondary}>Back to Sales Page</Link>
            </div>
          </div>

          <div style={card}>
            <h2 style={h2}>Video Placeholder</h2>
            <div style={{ aspectRatio: '16 / 9', borderRadius: '1rem', border: '1px dashed rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 700 }}>
              Setup walkthrough video placeholder
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const card: React.CSSProperties = { background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1.25rem', padding: '1.5rem', marginBottom: '1rem' };
const h2: React.CSSProperties = { color: '#fff', fontSize: '1.2rem', fontWeight: 800, margin: '0 0 0.75rem' };
const p: React.CSSProperties = { color: '#94a3b8', lineHeight: 1.7, margin: 0 };
const a: React.CSSProperties = { color: '#22d3ee', textDecoration: 'none', fontWeight: 700 };
const pre: React.CSSProperties = { margin: 0, padding: '1rem', borderRadius: '0.9rem', overflowX: 'auto', background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0', fontSize: '0.9rem' };
const list: React.CSSProperties = { margin: 0, paddingLeft: '1.2rem', color: '#cbd5e1', lineHeight: 1.8 };
const btnPrimary: React.CSSProperties = { display: 'inline-flex', padding: '0.9rem 1.2rem', borderRadius: '0.8rem', background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)', color: '#fff', textDecoration: 'none', fontWeight: 800 };
const btnSecondary: React.CSSProperties = { display: 'inline-flex', padding: '0.9rem 1.2rem', borderRadius: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', textDecoration: 'none', fontWeight: 700 };
