import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CASE_STUDIES } from '@/content/case-studies-data';

export function generateStaticParams() {
    return CASE_STUDIES.map(cs => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cs = CASE_STUDIES.find(c => c.slug === slug);
    if (!cs) return {};
    return {
        title: `${cs.client} Case Study | WeMagnifAI`,
        description: cs.tagline,
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cs = CASE_STUDIES.find(c => c.slug === slug);
    if (!cs) notFound();

    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                {/* Hero */}
                <section style={{
                    padding: '5rem 2rem 4rem',
                    background: `linear-gradient(180deg, ${cs!.accentColor}12 0%, transparent 100%)`,
                    borderBottom: '1px solid var(--glass-border)',
                }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <Link href="/case-studies" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                            color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem',
                            marginBottom: '2rem',
                        }}>
                            ← All Case Studies
                        </Link>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '2.5rem' }}>{cs!.emoji}</span>
                            <div>
                                <span style={{
                                    background: `${cs!.accentColor}18`, color: cs!.accentColor,
                                    border: `1px solid ${cs!.accentColor}40`,
                                    borderRadius: '999px', padding: '0.3rem 0.9rem',
                                    fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                                }}>{cs!.industry}</span>
                            </div>
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.25rem',
                        }}>
                            {cs!.client}: {cs!.tagline}
                        </h1>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            color: cs!.accentColor, fontSize: '0.875rem', fontWeight: 600,
                        }}>
                            ⏱ Delivered in {cs!.timeline}
                        </div>
                    </div>
                </section>

                {/* Results Metrics Bar */}
                <section style={{
                    padding: '3rem 2rem',
                    background: 'var(--bg-secondary)',
                    borderBottom: '1px solid var(--glass-border)',
                }}>
                    <div style={{
                        maxWidth: '900px', margin: '0 auto',
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem',
                    }}>
                        {cs!.results.map(r => (
                            <div key={r.label} style={{
                                background: `${cs!.accentColor}0a`,
                                border: `1px solid ${cs!.accentColor}25`,
                                borderRadius: '1rem', padding: '1.5rem', textAlign: 'center',
                            }}>
                                <div style={{
                                    fontSize: '2.25rem', fontWeight: 800,
                                    fontFamily: 'var(--font-playfair)', color: cs!.accentColor,
                                    marginBottom: '0.5rem',
                                }}>{r.value}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.4 }}>{r.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Content */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                            {/* Challenge */}
                            <div>
                                <h2 style={{
                                    fontSize: '1.5rem', fontFamily: 'var(--font-playfair)',
                                    color: '#fff', fontWeight: 700, marginBottom: '1rem',
                                    paddingBottom: '0.75rem', borderBottom: `2px solid ${cs!.accentColor}`,
                                    display: 'inline-block',
                                }}>
                                    The Challenge
                                </h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                                    {cs!.challenge}
                                </p>
                            </div>
                            {/* Solution */}
                            <div>
                                <h2 style={{
                                    fontSize: '1.5rem', fontFamily: 'var(--font-playfair)',
                                    color: '#fff', fontWeight: 700, marginBottom: '1rem',
                                    paddingBottom: '0.75rem', borderBottom: `2px solid ${cs!.accentColor}`,
                                    display: 'inline-block',
                                }}>
                                    Our Approach
                                </h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                                    {cs!.solution}
                                </p>
                            </div>
                            {/* Deliverables */}
                            <div>
                                <h2 style={{
                                    fontSize: '1.5rem', fontFamily: 'var(--font-playfair)',
                                    color: '#fff', fontWeight: 700, marginBottom: '1.25rem',
                                    paddingBottom: '0.75rem', borderBottom: `2px solid ${cs!.accentColor}`,
                                    display: 'inline-block',
                                }}>
                                    What We Delivered
                                </h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {cs!.deliverables.map(d => (
                                        <div key={d} style={{
                                            display: 'flex', alignItems: 'center', gap: '0.75rem',
                                            background: 'var(--bg-secondary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '0.75rem', padding: '0.875rem 1rem',
                                        }}>
                                            <span style={{ color: cs!.accentColor, fontSize: '1rem' }}>✓</span>
                                            <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Testimonial */}
                            <blockquote style={{
                                background: `linear-gradient(135deg, ${cs!.accentColor}10, ${cs!.accentColor}05)`,
                                border: `1px solid ${cs!.accentColor}30`,
                                borderLeft: `4px solid ${cs!.accentColor}`,
                                borderRadius: '1rem', padding: '2rem',
                                margin: 0,
                            }}>
                                <p style={{
                                    color: '#e2e8f0', fontSize: '1.1rem', lineHeight: 1.75,
                                    fontStyle: 'italic', marginBottom: '1.25rem',
                                }}>
                                    "{cs!.testimonial.quote}"
                                </p>
                                <footer>
                                    <strong style={{ color: '#fff', fontSize: '0.95rem' }}>{cs!.testimonial.author}</strong>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}> — {cs!.testimonial.role}</span>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)',
                }}>
                    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Want results like {cs!.client}?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Book a free strategy call and let's map out what growth looks like for your business.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" style={{
                                background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                                color: '#fff', fontWeight: 700, textDecoration: 'none',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                boxShadow: '0 8px 32px rgba(139,92,246,0.35)',
                            }}>
                                Book Strategy Call →
                            </Link>
                            <Link href="/case-studies" style={{
                                background: 'var(--bg-tertiary)', color: 'var(--text-muted)',
                                fontWeight: 600, textDecoration: 'none',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                border: '1px solid var(--glass-border)',
                            }}>
                                ← All Case Studies
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
