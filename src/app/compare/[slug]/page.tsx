import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getComparisonBySlug, getAllComparisonSlugs, comparisons } from '@/content/comparisons-data';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return getAllComparisonSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const comparison = getComparisonBySlug(params.slug);
    if (!comparison) return {};
    return {
        title: `${comparison.toolA.name} vs ${comparison.toolB.name} — WeMagnifAI`,
        description: comparison.metaDescription,
    };
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
    const comparison = getComparisonBySlug(params.slug);
    if (!comparison) notFound();

    const faqSchema = generateFAQSchema(comparison.faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://wemagnifai.com' },
        { name: 'Comparisons', url: 'https://wemagnifai.com/compare' },
        { name: `${comparison.toolA.name} vs ${comparison.toolB.name}`, url: `https://wemagnifai.com/compare/${comparison.slug}` },
    ]);

    const relatedComparisons = comparisons.filter(c => comparison.relatedComparisons.includes(c.slug));

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* BREADCRUMB */}
                <div style={{ padding: '1.5rem 2rem 0', maxWidth: '1000px', margin: '0 auto' }}>
                    <nav style={{ display: 'flex', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
                        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
                        <span>/</span>
                        <Link href="/compare" style={{ color: '#64748b', textDecoration: 'none' }}>Comparisons</Link>
                        <span>/</span>
                        <span style={{ color: 'var(--text-muted)' }}>{comparison.toolA.name} vs {comparison.toolB.name}</span>
                    </nav>
                </div>

                {/* HERO */}
                <section style={{
                    padding: '4rem 2rem 3rem', textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 55%)',
                }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{comparison.toolA.logo}</div>
                                <p style={{ color: '#fff', fontWeight: 700, margin: 0 }}>{comparison.toolA.name}</p>
                            </div>
                            <div style={{
                                padding: '0.5rem 1rem', background: 'var(--bg-secondary)',
                                border: '1px solid var(--glass-border)', borderRadius: '0.75rem',
                                color: '#94a3b8', fontWeight: 900, fontSize: '1.1rem',
                            }}>
                                VS
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{comparison.toolB.logo}</div>
                                <p style={{ color: '#fff', fontWeight: 700, margin: 0 }}>{comparison.toolB.name}</p>
                            </div>
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.2, fontWeight: 700, marginBottom: '1.25rem',
                        }}>
                            {comparison.title}
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto' }}>
                            {comparison.summary}
                        </p>
                    </div>
                </section>

                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>

                    {/* VERDICT BOX */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))',
                        border: '1px solid rgba(99,102,241,0.3)',
                        borderRadius: '1.25rem', padding: '2rem',
                        marginBottom: '4rem',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '1.25rem' }}>⚡</span>
                            <p style={{ color: '#818cf8', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
                                Quick Verdict
                            </p>
                        </div>
                        <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
                            {comparison.verdict}
                        </p>
                    </div>

                    {/* PROS & CONS */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1.5rem' }}>
                            Pros & Cons
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {[comparison.toolA, comparison.toolB].map(tool => (
                                <div key={tool.name} style={{
                                    background: 'var(--bg-secondary)',
                                    border: `1px solid ${tool.accentColor}30`,
                                    borderTop: `3px solid ${tool.accentColor}`,
                                    borderRadius: '1.25rem', padding: '1.75rem',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                                        <span style={{ fontSize: '1.75rem' }}>{tool.logo}</span>
                                        <h3 style={{ color: '#fff', fontWeight: 700, margin: 0 }}>{tool.name}</h3>
                                    </div>
                                    <div style={{ marginBottom: '1.25rem' }}>
                                        <p style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                            Pros
                                        </p>
                                        {tool.pros.map((pro, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                <span style={{ color: '#34d399', flexShrink: 0 }}>✓</span>
                                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>{pro}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p style={{ color: '#f87171', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                            Cons
                                        </p>
                                        {tool.cons.map((con, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                <span style={{ color: '#f87171', flexShrink: 0 }}>✗</span>
                                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>{con}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{
                                        marginTop: '1.25rem', paddingTop: '1.25rem',
                                        borderTop: '1px solid var(--glass-border)',
                                    }}>
                                        <p style={{ color: '#fbbf24', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                                            Best For
                                        </p>
                                        <p style={{ color: '#e2e8f0', fontSize: '0.875rem', margin: '0 0 0.75rem', lineHeight: 1.5 }}>{tool.bestFor}</p>
                                        <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>{tool.pricing}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FEATURE TABLE */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1.5rem' }}>
                            Feature Comparison
                        </h2>
                        <div style={{
                            background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                            borderRadius: '1.25rem', overflow: 'hidden',
                        }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: 'var(--bg-tertiary)' }}>
                                        <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: '#64748b', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--glass-border)' }}>
                                            Feature
                                        </th>
                                        <th style={{ padding: '1rem 1.5rem', textAlign: 'center', color: comparison.toolA.accentColor, fontSize: '0.9rem', fontWeight: 700, borderBottom: '1px solid var(--glass-border)' }}>
                                            {comparison.toolA.logo} {comparison.toolA.name}
                                        </th>
                                        <th style={{ padding: '1rem 1.5rem', textAlign: 'center', color: comparison.toolB.accentColor, fontSize: '0.9rem', fontWeight: 700, borderBottom: '1px solid var(--glass-border)' }}>
                                            {comparison.toolB.logo} {comparison.toolB.name}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.features.map((feature, i) => (
                                        <tr
                                            key={i}
                                            style={{ borderBottom: i < comparison.features.length - 1 ? '1px solid var(--glass-border)' : 'none' }}
                                        >
                                            <td style={{ padding: '1rem 1.5rem', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>
                                                {feature.feature}
                                            </td>
                                            <td style={{
                                                padding: '1rem 1.5rem', textAlign: 'center', fontSize: '0.875rem',
                                                color: feature.winner === 'A' ? '#34d399' : 'var(--text-muted)',
                                                fontWeight: feature.winner === 'A' ? 700 : 400,
                                            }}>
                                                {typeof feature.toolA === 'boolean' ? (feature.toolA ? '✓' : '✗') : feature.toolA}
                                                {feature.winner === 'A' && <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem', color: '#34d399' }}>★</span>}
                                            </td>
                                            <td style={{
                                                padding: '1rem 1.5rem', textAlign: 'center', fontSize: '0.875rem',
                                                color: feature.winner === 'B' ? '#34d399' : 'var(--text-muted)',
                                                fontWeight: feature.winner === 'B' ? 700 : 400,
                                            }}>
                                                {typeof feature.toolB === 'boolean' ? (feature.toolB ? '✓' : '✗') : feature.toolB}
                                                {feature.winner === 'B' && <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem', color: '#34d399' }}>★</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '0.75rem' }}>★ = winner for this category</p>
                    </section>

                    {/* FAQ */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1.5rem' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {comparison.faqs.map((faq, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.5rem',
                                }}>
                                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{faq.question}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* RELATED */}
                    {relatedComparisons.length > 0 && (
                        <section style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1.25rem' }}>
                                Related Comparisons
                            </h2>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {relatedComparisons.map(rel => (
                                    <Link key={rel.slug} href={`/compare/${rel.slug}`} style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                                        background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                        borderRadius: '0.875rem', padding: '1rem 1.25rem',
                                        textDecoration: 'none', color: '#fff', fontWeight: 600,
                                        fontSize: '0.9rem', transition: 'all 0.2s',
                                    }}>
                                        {rel.toolA.logo} vs {rel.toolB.logo} {rel.toolA.name} vs {rel.toolB.name} →
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(236,72,153,0.08))',
                        border: '1px solid rgba(99,102,241,0.25)', borderRadius: '1.25rem',
                        padding: '2.5rem', textAlign: 'center',
                    }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '0.75rem' }}>
                            Need Help Choosing & Implementing?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '480px', margin: '0 auto 1.75rem' }}>
                            Don't just pick the right tool — build the right stack. We audit, implement, and optimise your full growth toolkit.
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
                </div>

            </main>
            <Footer />
        </>
    );
}
