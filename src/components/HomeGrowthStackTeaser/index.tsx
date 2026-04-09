import Link from 'next/link';

const TOOLS = [
    { name: 'CRM', tool: 'HubSpot', emoji: '🟠', desc: 'Contact & pipeline management', color: '#FF7A59' },
    { name: 'Email', tool: 'Mailchimp', emoji: '🐵', desc: 'Newsletters & automation', color: '#FFE01B' },
    { name: 'SEO', tool: 'Ahrefs', emoji: '🔍', desc: 'Keyword & backlink research', color: '#FF5733' },
    { name: 'Automation', tool: 'Make.com', emoji: '⚙️', desc: 'Multi-step workflow automation', color: '#6D00CC' },
];

export default function HomeGrowthStackTeaser() {
    return (
        <section style={{
            padding: '5rem 2rem',
            borderBottom: '1px solid var(--glass-border)',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center',
                }}>
                    <div>
                        <p style={{
                            color: '#10b981',
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            marginBottom: '0.75rem',
                        }}>
                            The Stack
                        </p>
                        <h2 style={{
                            color: '#fff',
                            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            fontWeight: 900,
                            lineHeight: 1.1,
                            margin: '0 0 1.25rem',
                        }}>
                            The Growth Stack We Use &amp; Recommend
                        </h2>
                        <p style={{
                            color: '#94a3b8',
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            marginBottom: '2rem',
                        }}>
                            24 battle-tested tools across 8 categories. No fluff — just what we actually use across 40+ client accounts.
                        </p>
                        <Link href="/growth-stack" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.9rem 1.5rem',
                            borderRadius: '0.8rem',
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            color: '#fff',
                            fontWeight: 800,
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                        }}>
                            Explore the Full Stack →
                        </Link>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                    }}>
                        {TOOLS.map(t => (
                            <div key={t.name} style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '1.125rem',
                                padding: '1.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                            }}>
                                <div style={{ fontSize: '1.75rem' }}>{t.emoji}</div>
                                <div style={{
                                    display: 'inline-block',
                                    background: `${t.color}18`,
                                    color: t.color,
                                    border: `1px solid ${t.color}35`,
                                    fontSize: '0.65rem',
                                    fontWeight: 700,
                                    padding: '0.15rem 0.5rem',
                                    borderRadius: '999px',
                                    textTransform: 'uppercase',
                                    alignSelf: 'flex-start',
                                }}>
                                    {t.name}
                                </div>
                                <p style={{ color: '#f1f5f9', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>{t.tool}</p>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
