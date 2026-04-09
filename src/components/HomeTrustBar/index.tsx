const METRICS = [
    { label: '200+ Projects', color: '#6366f1' },
    { label: '4.9★ Rating', color: '#f59e0b' },
    { label: '12+ Industries', color: '#10b981' },
];

const LOGOS = ['Nexus AI', 'ScaleUp Co', 'Orbit CRM', 'PulseData', 'FlowHQ'];

export default function HomeTrustBar() {
    return (
        <section style={{
            padding: '3rem 2rem',
            borderBottom: '1px solid var(--glass-border)',
            background: 'var(--bg-secondary)',
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <p style={{
                    textAlign: 'center',
                    color: '#64748b',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '1.75rem',
                }}>
                    Trusted by growth teams at
                </p>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '2rem',
                }}>
                    {LOGOS.map(name => (
                        <div key={name} style={{
                            padding: '0.6rem 1.5rem',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '0.75rem',
                            color: '#475569',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            letterSpacing: '0.02em',
                        }}>
                            {name}
                        </div>
                    ))}
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                }}>
                    {METRICS.map(m => (
                        <div key={m.label} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.45rem 1.1rem',
                            borderRadius: '9999px',
                            background: `${m.color}12`,
                            border: `1px solid ${m.color}30`,
                            color: m.color,
                            fontSize: '0.85rem',
                            fontWeight: 700,
                        }}>
                            {m.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
