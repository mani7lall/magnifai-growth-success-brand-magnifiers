import Link from 'next/link';
import { insightsPreview } from '@/data/insights-preview';

const CATEGORY_COLORS: Record<string, string> = {
    'AI Strategy': '#6366f1',
    'Lead Generation': '#22d3ee',
    'Growth Stack': '#10b981',
};

export default function HomeInsightsPreview() {
    return (
        <section style={{
            padding: '5rem 2rem',
            borderBottom: '1px solid var(--glass-border)',
            background: 'var(--bg-secondary)',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2.5rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <div>
                        <p style={{
                            color: '#8b5cf6',
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            marginBottom: '0.4rem',
                        }}>
                            From the Blog
                        </p>
                        <h2 style={{
                            color: '#fff',
                            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                            fontFamily: 'var(--font-playfair)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            margin: 0,
                        }}>
                            Latest Insights
                        </h2>
                    </div>
                    <Link href="/blog" style={{
                        color: '#6366f1',
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        whiteSpace: 'nowrap',
                    }}>
                        View all posts →
                    </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {insightsPreview.map(insight => {
                        const catColor = CATEGORY_COLORS[insight.category] || '#6366f1';
                        return (
                            <Link key={insight.id} href={insight.href} style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr auto',
                                alignItems: 'center',
                                gap: '1.5rem',
                                textDecoration: 'none',
                                background: 'var(--bg-tertiary)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '1.125rem',
                                padding: '1.5rem',
                            }}>
                                <div>
                                    <div style={{
                                        display: 'inline-block',
                                        background: `${catColor}18`,
                                        color: catColor,
                                        border: `1px solid ${catColor}35`,
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        padding: '0.2rem 0.65rem',
                                        borderRadius: '999px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                        marginBottom: '0.6rem',
                                    }}>
                                        {insight.category}
                                    </div>
                                    <h3 style={{
                                        color: '#f1f5f9',
                                        fontSize: '1rem',
                                        fontWeight: 700,
                                        lineHeight: 1.35,
                                        margin: '0 0 0.5rem',
                                    }}>
                                        {insight.title}
                                    </h3>
                                    <p style={{
                                        color: '#64748b',
                                        fontSize: '0.875rem',
                                        lineHeight: 1.6,
                                        margin: '0 0 0.5rem',
                                    }}>
                                        {insight.excerpt}
                                    </p>
                                    <span style={{ color: '#475569', fontSize: '0.78rem' }}>🕐 {insight.readTime}</span>
                                </div>
                                <span style={{
                                    color: '#6366f1',
                                    fontWeight: 800,
                                    fontSize: '1.1rem',
                                    whiteSpace: 'nowrap',
                                }}>
                                    Read →
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
