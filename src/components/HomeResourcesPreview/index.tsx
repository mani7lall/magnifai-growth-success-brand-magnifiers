import Link from 'next/link';
import { resourcesPreview } from '@/data/resources-preview';

const typeColors: Record<string, string> = {
    Guide: '#6366f1',
    Calculator: '#f59e0b',
    Checklist: '#10b981',
    Comparison: '#ec4899',
    Library: '#8b5cf6',
    Template: '#3b82f6',
};

export default function HomeResourcesPreview() {
    return (
        <section style={{
            padding: '5rem 2rem',
            borderBottom: '1px solid var(--glass-border)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{
                        color: '#6366f1',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        marginBottom: '0.75rem',
                    }}>
                        Free Resources
                    </p>
                    <h2 style={{
                        color: '#fff',
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        margin: '0 0 1rem',
                    }}>
                        Free Resources for Growth Teams
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '540px', margin: '0 auto' }}>
                        Calculators, guides, templates, and comparisons — built for founders who want to grow faster.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.25rem',
                    marginBottom: '2.5rem',
                }}>
                    {resourcesPreview.map(r => (
                        <Link key={r.id} href={r.href} style={{
                            display: 'block',
                            textDecoration: 'none',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '1.125rem',
                            padding: '1.5rem',
                            transition: 'border-color 0.2s',
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{r.icon}</div>
                            <div style={{
                                display: 'inline-block',
                                background: `${typeColors[r.type]}18`,
                                color: typeColors[r.type],
                                border: `1px solid ${typeColors[r.type]}35`,
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                padding: '0.2rem 0.6rem',
                                borderRadius: '999px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                marginBottom: '0.65rem',
                            }}>
                                {r.type}
                            </div>
                            <h3 style={{
                                color: '#f1f5f9',
                                fontSize: '1rem',
                                fontWeight: 700,
                                lineHeight: 1.35,
                                marginBottom: '0.5rem',
                            }}>
                                {r.title}
                            </h3>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                {r.description}
                            </p>
                            <span style={{ color: '#6366f1', fontSize: '0.875rem', fontWeight: 700 }}>
                                Explore →
                            </span>
                        </Link>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link href="/resources" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.85rem 1.75rem',
                        borderRadius: '0.75rem',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        color: '#e2e8f0',
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                    }}>
                        View All Resources →
                    </Link>
                </div>
            </div>
        </section>
    );
}
