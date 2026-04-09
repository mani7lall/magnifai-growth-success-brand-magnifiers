import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { comparisons } from '@/content/comparisons-data';
import type { Metadata } from 'next';

const PAIR_LINKS = [
    { a: 'HubSpot', b: 'Pipedrive', slug: 'hubspot-vs-pipedrive', category: 'CRM', aEmoji: '🟠', bEmoji: '🟢' },
    { a: 'Notion', b: 'Airtable', slug: 'notion-vs-airtable', category: 'Productivity', aEmoji: '⬜', bEmoji: '🟡' },
    { a: 'Webflow', b: 'WordPress', slug: 'webflow-vs-wordpress', category: 'Website', aEmoji: '🔵', bEmoji: '🅦' },
    { a: 'Klaviyo', b: 'Mailchimp', slug: 'klaviyo-vs-mailchimp', category: 'Email', aEmoji: '📧', bEmoji: '🐵' },
    { a: 'Make.com', b: 'Zapier', slug: 'make-vs-zapier', category: 'Automation', aEmoji: '⚙️', bEmoji: '⚡' },
    { a: 'Ahrefs', b: 'SEMrush', slug: 'ahrefs-vs-semrush', category: 'SEO', aEmoji: '🔍', bEmoji: '🟠' },
    { a: 'HubSpot', b: 'Mailchimp', slug: 'hubspot-vs-mailchimp', category: 'Email + CRM', aEmoji: '🟠', bEmoji: '🐵' },
    { a: 'Notion', b: 'HubSpot', slug: 'notion-vs-hubspot', category: 'Productivity vs CRM', aEmoji: '⬜', bEmoji: '🟠' },
    { a: 'Make.com', b: 'HubSpot', slug: 'make-vs-hubspot', category: 'Automation', aEmoji: '⚙️', bEmoji: '🟠' },
    { a: 'Ahrefs', b: 'Google Analytics', slug: 'ahrefs-vs-google-analytics', category: 'Analytics', aEmoji: '🔍', bEmoji: '📊' },
];

export const metadata: Metadata = {
    title: 'Tool Comparisons — Unbiased Reviews for B2B Teams | WeMagnifAI',
    description: 'In-depth, unbiased comparisons of the most popular B2B tools. CRM, design, productivity, and website platforms — find the right tool for your team.',
};

const categoryBadges: Record<string, { label: string; color: string }> = {
    'hubspot-vs-pipedrive': { label: 'CRM', color: '#FF7A59' },
    'notion-vs-airtable': { label: 'Productivity', color: '#FCB400' },
    'webflow-vs-wordpress': { label: 'Website Platform', color: '#146EF5' },
};

export default function ComparePage() {
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
                            background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#f472b6', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            ⚖️ Unbiased · Independent · Thorough
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.15, fontWeight: 700, marginBottom: '1.5rem',
                        }}>
                            Tool Comparisons
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                            Independent, in-depth comparisons of the most popular B2B tools. Feature tables, pricing breakdowns, real-world verdicts — and no affiliate bias.
                        </p>
                    </div>
                </section>

                {/* AFFILIATE DISCLOSURE */}
                <div style={{
                    background: 'rgba(245,158,11,0.07)',
                    borderBottom: '1px solid rgba(245,158,11,0.18)',
                    padding: '0.65rem 2rem',
                    textAlign: 'center',
                }}>
                    <p style={{ color: '#fbbf24', fontSize: '0.82rem', margin: 0 }}>
                        <strong>Disclosure:</strong> Some comparison pages contain affiliate links. We earn a small commission at no extra cost to you if you click through and purchase. All opinions are our own.
                    </p>
                </div>

                {/* ANSWER-FIRST BOX */}
                <section style={{ padding: '3rem 2rem 0' }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <div style={{
                            background: 'rgba(99,102,241,0.06)',
                            border: '1px solid rgba(99,102,241,0.2)',
                            borderRadius: '1rem', padding: '1.5rem',
                        }}>
                            <p style={{ color: '#818cf8', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                                Quick Answer
                            </p>
                            <p style={{ color: '#cbd5e1', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                                Each comparison below goes deep on features, pricing, pros/cons, and real-world verdict — based on our experience implementing these tools across 40+ client accounts. Use the grid to jump to the comparison you need.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 10 COMPARISON PAIR LINKS */}
                <section style={{ padding: '3rem 2rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{
                            color: '#fff', fontSize: '1.25rem', fontWeight: 800,
                            marginBottom: '1.5rem', fontFamily: 'var(--font-playfair)',
                        }}>
                            All Comparisons
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '0.85rem',
                        }}>
                            {PAIR_LINKS.map(pair => (
                                <Link key={pair.slug} href={`/compare/${pair.slug}`} style={{
                                    display: 'flex', flexDirection: 'column', gap: '0.5rem',
                                    textDecoration: 'none',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.1rem',
                                    transition: 'border-color 0.2s',
                                }}>
                                    <span style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{pair.category}</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ fontSize: '1.25rem' }}>{pair.aEmoji}</span>
                                        <span style={{ color: '#475569', fontWeight: 800, fontSize: '0.75rem' }}>VS</span>
                                        <span style={{ fontSize: '1.25rem' }}>{pair.bEmoji}</span>
                                    </div>
                                    <p style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.875rem', margin: 0, lineHeight: 1.3 }}>
                                        {pair.a} vs {pair.b}
                                    </p>
                                    <span style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 700 }}>Compare →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMPARISONS GRID */}
                <section style={{ padding: '0 2rem 5rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: '1.5rem',
                        }}>
                            {comparisons.map(comparison => {
                                const badge = categoryBadges[comparison.slug];
                                return (
                                    <Link
                                        key={comparison.slug}
                                        href={`/compare/${comparison.slug}`}
                                        style={{
                                            display: 'block', textDecoration: 'none',
                                            background: 'var(--bg-secondary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '1.25rem', overflow: 'hidden',
                                            transition: 'all 0.25s',
                                        }}
                                    >
                                        {/* VS Header */}
                                        <div style={{
                                            padding: '1.75rem', display: 'flex',
                                            alignItems: 'center', gap: '1rem',
                                            borderBottom: '1px solid var(--glass-border)',
                                            background: 'var(--bg-tertiary)',
                                        }}>
                                            <div style={{ textAlign: 'center', flex: 1 }}>
                                                <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{comparison.toolA.logo}</div>
                                                <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{comparison.toolA.name}</p>
                                            </div>
                                            <div style={{
                                                color: '#64748b', fontWeight: 900, fontSize: '0.85rem',
                                                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                                                borderRadius: '0.5rem', padding: '0.25rem 0.6rem',
                                            }}>
                                                VS
                                            </div>
                                            <div style={{ textAlign: 'center', flex: 1 }}>
                                                <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{comparison.toolB.logo}</div>
                                                <p style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{comparison.toolB.name}</p>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: '1.5rem' }}>
                                            {badge && (
                                                <div style={{
                                                    display: 'inline-block',
                                                    background: `${badge.color}20`,
                                                    color: badge.color,
                                                    border: `1px solid ${badge.color}40`,
                                                    fontSize: '0.7rem', fontWeight: 700,
                                                    padding: '0.2rem 0.6rem', borderRadius: '999px',
                                                    textTransform: 'uppercase', letterSpacing: '0.05em',
                                                    marginBottom: '0.75rem',
                                                }}>
                                                    {badge.label}
                                                </div>
                                            )}
                                            <h2 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.35, marginBottom: '0.75rem' }}>
                                                {comparison.title}
                                            </h2>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                                {comparison.summary.substring(0, 140)}...
                                            </p>
                                            <div style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                                paddingTop: '1rem', borderTop: '1px solid var(--glass-border)',
                                            }}>
                                                <span style={{ color: '#64748b', fontSize: '0.8rem' }}>
                                                    📊 {comparison.features.length} features compared
                                                </span>
                                                <span style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.875rem' }}>
                                                    Read →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(236,72,153,0.07) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                }}>
                    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Need Help Choosing & Implementing?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Don't just pick a tool — build the right stack. We audit, recommend, and implement your full growth toolkit.
                        </p>
                        <Link href="/free-audit" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: '#6366f1', color: '#fff',
                            padding: '1rem 2.5rem', borderRadius: '0.75rem',
                            fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                        }}>
                            Book a Free Stack Audit →
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
