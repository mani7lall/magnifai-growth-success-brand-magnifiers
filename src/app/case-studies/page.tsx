import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CASE_STUDIES } from '@/content/case-studies-data';

export const metadata = {
    title: 'Case Studies | WeMagnifAI — Real Results from Real Clients',
    description: 'Explore WeMagnifAI case studies. Real ROI numbers, revenue uplifts, and growth metrics from B2B SaaS, e-commerce, agency, and fintech clients.',
};

export default function CaseStudiesPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                {/* Hero */}
                <section style={{
                    padding: '6rem 2rem 4rem',
                    textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'linear-gradient(180deg, rgba(139,92,246,0.08) 0%, transparent 100%)',
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(139,92,246,0.12)', border: '1px solid var(--border-accent)',
                            borderRadius: '999px', padding: '0.4rem 1.1rem',
                            color: 'var(--accent-glow)', fontSize: '0.85rem', fontWeight: 700,
                            marginBottom: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase',
                        }}>
                            📊 Client Results
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', fontWeight: 700, lineHeight: 1.1,
                            marginBottom: '1.5rem',
                        }}>
                            Real Results.<br />
                            <span style={{
                                background: 'var(--gradient-hero)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Real Numbers.</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                            We don't do vanity metrics. Every case study is built on verified revenue impact, pipeline growth, and operational efficiency gains.
                        </p>
                    </div>
                </section>

                {/* Stats Bar */}
                <section style={{
                    padding: '2.5rem 2rem',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'var(--bg-secondary)',
                }}>
                    <div style={{
                        maxWidth: '1100px', margin: '0 auto',
                        display: 'flex', gap: '3rem', justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}>
                        {[
                            { value: '40+', label: 'Client accounts' },
                            { value: '£12M+', label: 'Revenue attributed' },
                            { value: '94%', label: 'Client retention rate' },
                            { value: '3.8x', label: 'Average ROI delivered' },
                        ].map(stat => (
                            <div key={stat.label} style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2rem', fontWeight: 800,
                                    fontFamily: 'var(--font-playfair)',
                                    background: 'var(--gradient-hero)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>{stat.value}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{
                        maxWidth: '1200px', margin: '0 auto',
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                        gap: '2rem',
                    }}>
                        {CASE_STUDIES.map(cs => (
                            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} style={{
                                display: 'block', textDecoration: 'none',
                                background: 'var(--bg-secondary)',
                                border: `1px solid ${cs.accentColor}30`,
                                borderTop: `3px solid ${cs.accentColor}`,
                                borderRadius: '1.25rem', padding: '2rem',
                                transition: 'all 0.25s',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                    <span style={{ fontSize: '1.75rem' }}>{cs.emoji}</span>
                                    <div>
                                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>{cs.client}</div>
                                        <div style={{ color: cs.accentColor, fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{cs.industry}</div>
                                    </div>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    {cs.tagline}
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    {cs.results.slice(0, 4).map(r => (
                                        <div key={r.label} style={{
                                            background: `${cs.accentColor}08`,
                                            border: `1px solid ${cs.accentColor}20`,
                                            borderRadius: '0.75rem', padding: '0.75rem',
                                        }}>
                                            <div style={{ color: cs.accentColor, fontWeight: 800, fontSize: '1.25rem', fontFamily: 'var(--font-playfair)' }}>{r.value}</div>
                                            <div style={{ color: '#64748b', fontSize: '0.72rem', lineHeight: 1.3, marginTop: '0.25rem' }}>{r.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    paddingTop: '1rem', borderTop: `1px solid ${cs.accentColor}20`,
                                }}>
                                    <span style={{ color: '#475569', fontSize: '0.8rem' }}>⏱ {cs.timeline}</span>
                                    <span style={{ color: cs.accentColor, fontSize: '0.85rem', fontWeight: 700 }}>Read case study →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section style={{
                    padding: '6rem 2rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(34,211,238,0.06))',
                    borderTop: '1px solid var(--border-accent)',
                }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Ready to be our next case study?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Let's audit your current growth system and show you exactly where the opportunities are.
                        </p>
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                            color: '#fff', fontWeight: 800, textDecoration: 'none',
                            padding: '1rem 2.5rem', borderRadius: '0.875rem', fontSize: '1.05rem',
                            boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
                        }}>
                            Book a Free Strategy Call →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
