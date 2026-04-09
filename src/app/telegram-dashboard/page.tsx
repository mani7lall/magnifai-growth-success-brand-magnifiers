'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TelegramDashboard() {
    const [status, setStatus] = useState<'active' | 'paused' | 'stopped'>('active');
    const [toast, setToast] = useState<string | null>(null);
    const [settings, setSettings] = useState({ niche: 'AI Growth Agency', keywords: 'AI agency, digital marketing, automation, SaaS founders', daily_dms: 25, daily_posts: 15, cta: 'We build AI growth systems for B2B brands → wemagnifai.com' });
    const feedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => setToast(null), 2200);
        return () => clearTimeout(t);
    }, [toast]);

    const saveSettings = () => setToast('Settings saved successfully');

    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '80px' }}>
                <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>
                    <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1.25rem', padding: '1.5rem' }}>
                        <h2 style={{ color: '#fff', marginTop: 0 }}>Settings</h2>
                        <label style={label}>Niche <input value={settings.niche} onChange={e => setSettings(s => ({ ...s, niche: e.target.value }))} style={input} /></label>
                        <label style={label}>Keywords <input value={settings.keywords} onChange={e => setSettings(s => ({ ...s, keywords: e.target.value }))} style={input} /></label>
                        <label style={label}>Daily DMs <input type="number" value={settings.daily_dms} onChange={e => setSettings(s => ({ ...s, daily_dms: Number(e.target.value) }))} style={input} /></label>
                        <label style={label}>Daily Posts <input type="number" value={settings.daily_posts} onChange={e => setSettings(s => ({ ...s, daily_posts: Number(e.target.value) }))} style={input} /></label>
                        <label style={label}>CTA <textarea value={settings.cta} onChange={e => setSettings(s => ({ ...s, cta: e.target.value }))} style={{ ...input, minHeight: 96, resize: 'vertical' }} /></label>
                        <button onClick={saveSettings} style={button}>Save Settings</button>
                    </div>
                </section>
                {toast && <div style={toastStyle}>{toast}</div>}
            </main>
            <Footer />
        </>
    );
}

const label: React.CSSProperties = { display: 'block', color: '#94a3b8', marginBottom: '0.85rem', fontWeight: 700 };
const input: React.CSSProperties = { width: '100%', marginTop: '0.4rem', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--glass-border)', borderRadius: '0.7rem', padding: '0.8rem 1rem', color: '#fff', boxSizing: 'border-box' };
const button: React.CSSProperties = { padding: '0.85rem 1.2rem', border: 'none', borderRadius: '0.75rem', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', fontWeight: 800, cursor: 'pointer' };
const toastStyle: React.CSSProperties = { position: 'fixed', right: '1.25rem', bottom: '1.25rem', background: '#10b981', color: '#fff', padding: '0.9rem 1.2rem', borderRadius: '0.8rem', fontWeight: 800, boxShadow: '0 20px 40px rgba(0,0,0,0.35)' };
