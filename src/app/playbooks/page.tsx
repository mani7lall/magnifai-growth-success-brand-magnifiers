import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Growth Playbooks — Step-by-Step Frameworks for B2B Teams | WeMagnifAI',
    description: 'Free, in-depth growth playbooks for B2B founders and marketing leads. AI search optimisation, B2B growth systems, website redesign checklists — and more.',
};

const playbooks = [
    {
        slug: 'b2b-growth-system-2026',
        title: 'B2B Website Growth System 2026',
        category: 'Growth Strategy',
        readTime: '25 min read',
        emoji: '📈',
        description: 'The complete framework for turning your website into a compounding revenue engine. Covers positioning, CRO, GEO, content architecture, and conversion systems for B2B buyers.',
        accentColor: '#6366f1',
        sections: 7,
        badge: 'Most Popular',
    },
    {
        slug: 'ai-search-optimization-guide',
        title: 'AI Search Optimisation Guide',
        category: 'SEO & GEO',
        readTime: '20 min read',
        emoji: '🤖',
        description: 'How to optimise your content for ChatGPT, Perplexity, Google AI Overviews, and every AI-powered answer engine. The tactical guide for the post-blue-link era.',
        accentColor: '#10b981',
        sections: 6,
        badge: 'New 2026',
    },
    {
        slug: 'website-redesign-checklist',
        title: 'Website Redesign Checklist',
        category: 'Website Strategy',
        readTime: '18 min read',
        emoji: '🔨',
        description: 'The 90-point pre/during/post checklist for B2B website redesigns. Avoid the most common redesign mistakes that tank SEO and conversions.',
        accentColor: '#f59e0b',
        sections: 5,
    },
];

export default function PlaybooksPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: '7rem 2rem 4rem', textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 55%)',
                }}>
                    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            📖 Free · Deep-Dive · GEO-Optimised
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.15, fontWeight: 700, marginBottom: '1.5rem',
                        }}>
                            Growth Playbooks
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto' }}>
                            Structured, long-form frameworks for B2B founders and growth teams. Built to be read, implemented, and returned to — not skimmed and forgotten.
                        </p>
                    </div>
                </section>

                {/* PLAYBOOKS GRID */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {playbooks.map(playbook => (
                            <Link
                                key={playbook.slug}
                                href={`/playbooks/${playbook.slug}`}
                                style={{
                                    display: 'block', textDecoration: 'none',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderLeft: `4px solid ${playbook.accentColor}`,
                                    borderRadius: '1.25rem', padding: '2rem',
                                    transition: 'all 0.25s',
                                }}
                            >
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: 60, height: 60, borderRadius: '14px', flexShrink: 0,
                                        background: `${playbook.accentColor}15`,
                                        border: `1px solid ${playbook.accentColor}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.75rem',
                                    }}>
                                        {playbook.emoji}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                            <span style={{
                                                background: `${playbook.accentColor}15`,
                                                color: playbook.accentColor,
                                                border: `1px solid ${playbook.accentColor}30`,
                                                fontSize: '0.72rem', fontWeight: 700,
                                                padding: '0.2rem 0.6rem', borderRadius: '999px',
                                                textTransform: 'uppercase', letterSpacing: '0.05em',
                                            }}>
                                                {playbook.category}
                                            </span>
                                            {playbook.badge && (
                                                <span style={{
                                                    background: 'rgba(99,102,241,0.15)',
                                                    color: '#818cf8',
                                                    border: '1px solid rgba(99,102,241,0.3)',
                                                    fontSize: '0.72rem', fontWeight: 700,
                                                    padding: '0.2rem 0.6rem', borderRadius: '999px',
                                                }}>
                                                    {playbook.badge}
                                                </span>
                                            )}
                                        </div>
                                        <h2 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.3 }}>
                                            {playbook.title}
                                        </h2>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                            {playbook.description}
                                        </p>
                                        <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b', fontSize: '0.8rem' }}>
                                            <span>🕐 {playbook.readTime}</span>
                                            <span>📑 {playbook.sections} sections</span>
                                            <span style={{ marginLeft: 'auto', color: playbook.accentColor, fontWeight: 700 }}>
                                                Read Playbook →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(236,72,153,0.07) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                }}>
                    <div style={{ maxWidth: '540px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Want a Custom Growth Plan?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            These playbooks are the starting point. A free audit gives you a custom roadmap tailored to your specific business.
                        </p>
                        <Link href="/free-audit" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: '#6366f1', color: '#fff',
                            padding: '1rem 2.5rem', borderRadius: '0.75rem',
                            fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                        }}>
                            Book a Free Audit →
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
