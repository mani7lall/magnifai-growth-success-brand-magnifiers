'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeTrustBar from '@/components/HomeTrustBar';
import HomeResourcesPreview from '@/components/HomeResourcesPreview';
import HomeCalculatorTeaser from '@/components/HomeCalculatorTeaser';
import HomeGrowthStackTeaser from '@/components/HomeGrowthStackTeaser';
import HomeLeadMagnetBand from '@/components/HomeLeadMagnetBand';
import HomeInsightsPreview from '@/components/HomeInsightsPreview';

const STATS = [
    { label: 'Groups', value: '47' },
    { label: 'Leads', value: '1,284' },
    { label: 'DMs', value: '612' },
    { label: 'Pipeline', value: '£142k' },
];

export default function Home() {
    return (
        <>
            <Header />
            <main>
                {/* ── TELEGRAM GROWTH TEASER ─────────────────────────────────── */}
                <section style={{
                    padding: '5rem 2rem',
                    borderTop: '1px solid rgba(34,211,238,0.18)',
                    borderBottom: '1px solid rgba(139,92,246,0.18)',
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(99,102,241,0.16) 45%, rgba(139,92,246,0.18) 100%)',
                }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '2rem',
                            alignItems: 'center',
                        }}>
                            <div>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.35rem 0.9rem',
                                    borderRadius: '9999px',
                                    background: 'rgba(16,185,129,0.12)',
                                    border: '1px solid rgba(16,185,129,0.25)',
                                    marginBottom: '1rem',
                                }}>
                                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                                    <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 700 }}>New Product</span>
                                </div>
                                <h2 style={{
                                    color: '#fff',
                                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                                    fontFamily: 'var(--font-playfair)',
                                    fontWeight: 900,
                                    lineHeight: 1.05,
                                    margin: '0 0 1rem',
                                }}>
                                    New: Telegram Growth Engine — Now Live
                                </h2>
                                <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                    1,284 leads scraped this week across 47 groups. Fully automated.
                                </p>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: '0.75rem',
                                    marginBottom: '1.75rem',
                                }}>
                                    {['AI Group Discovery', 'GPT-4o Content Engine', 'Lead Scoring', '3-Step DM Sequences'].map(item => (
                                        <div key={item} style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '0.85rem',
                                            padding: '0.85rem 1rem',
                                            color: '#e2e8f0',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                        }}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                    <Link href="/telegram-growth" style={ctaPrimary}>See How It Works →</Link>
                                    <Link href="/telegram-dashboard" style={ctaSecondary}>View Live Dashboard →</Link>
                                </div>
                            </div>
                            <div style={{
                                background: 'rgba(5,5,5,0.35)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '1.5rem',
                                padding: '1.5rem',
                            }}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: '1rem',
                                }}>
                                    {STATS.map(stat => (
                                        <div key={stat.label} style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '1rem',
                                            padding: '1rem',
                                        }}>
                                            <div style={{ color: '#22d3ee', fontSize: '1.7rem', fontWeight: 900, marginBottom: '0.25rem' }}>{stat.value}</div>
                                            <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700 }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── TRUST BAR ─────────────────────────────────────────────── */}
                <HomeTrustBar />

                {/* ── RESOURCES PREVIEW ─────────────────────────────────────── */}
                <HomeResourcesPreview />

                {/* ── CALCULATOR TEASER ─────────────────────────────────────── */}
                <HomeCalculatorTeaser />

                {/* ── GROWTH STACK TEASER ───────────────────────────────────── */}
                <HomeGrowthStackTeaser />

                {/* ── LEAD MAGNET BAND ──────────────────────────────────────── */}
                <HomeLeadMagnetBand />

                {/* ── INSIGHTS PREVIEW ──────────────────────────────────────── */}
                <HomeInsightsPreview />
            </main>
            <Footer />
        </>
    );
}

const ctaPrimary: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.9rem 1.25rem',
    borderRadius: '0.8rem',
    background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)',
    color: '#fff',
    fontWeight: 800,
    textDecoration: 'none',
};

const ctaSecondary: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.9rem 1.25rem',
    borderRadius: '0.8rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#e2e8f0',
    fontWeight: 700,
    textDecoration: 'none',
};
