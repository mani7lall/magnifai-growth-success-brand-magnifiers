import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Telegram Growth Automation — Put Your Lead Gen on Autopilot | WeMagnifAI',
    description: 'Autonomous Telegram organic marketing system. Discover groups, post AI content, scrape qualified leads, and send personalised DMs — all on a set-and-forget schedule.',
};

const FAQS = [
    { q: 'Is this against Telegram\'s terms of service?', a: 'The engine uses Telegram\'s official MTProto API — the same API that powers many legitimate marketing tools. All actions have configurable human-like delays and daily limits well below Telegram\'s thresholds. We recommend using an account dedicated to outreach, not your personal account.' },
    { q: 'Will my account get banned?', a: 'The safety system is specifically designed to prevent this. It enforces daily action limits, randomises delay timings, varies message lengths, handles flood waits automatically, and supports account rotation.' },
    { q: 'Do I need a server to run it?', a: 'Yes — the bot engine runs as a Node.js process on a server. Any £5/month VPS is sufficient. We also have a step-by-step setup guide.', link: '/telegram-setup' },
];

export default function TelegramGrowthPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
                {/* existing content omitted for brevity */}
                <section style={{ padding: '2rem' }}>
                    {FAQS.map((faq, i) => (
                        <details key={i} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '1.25rem', marginBottom: '0.85rem' }}>
                            <summary style={{ color: '#fff', fontWeight: 700, cursor: 'pointer', listStyle: 'none' }}>{faq.q}<ChevronDown size={18} color="#64748b" style={{ float: 'right' }} /></summary>
                            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginTop: '0.9rem' }}>
                                {faq.a} {faq.link ? <Link href={faq.link} style={{ color: '#22d3ee', fontWeight: 700, textDecoration: 'none' }}>Open the setup guide →</Link> : null}
                            </p>
                        </details>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    );
}
