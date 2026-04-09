'use client';

import { useState, useMemo } from 'react';

function Slider({
    label, min, max, step, value, onChange, format,
}: {
    label: string; min: number; max: number; step: number;
    value: number; onChange: (v: number) => void; format: (v: number) => string;
}) {
    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600 }}>{label}</span>
                <span style={{ color: '#818cf8', fontWeight: 800, fontSize: '0.9rem' }}>{format(value)}</span>
            </div>
            <input
                type="range" min={min} max={max} step={step} value={value}
                onChange={e => onChange(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#6366f1' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                <span style={{ color: '#475569', fontSize: '0.75rem' }}>{format(min)}</span>
                <span style={{ color: '#475569', fontSize: '0.75rem' }}>{format(max)}</span>
            </div>
        </div>
    );
}

export default function AIROICalculator() {
    const [adSpend, setAdSpend] = useState(20000);
    const [teamSize, setTeamSize] = useState(5);
    const [hourlyCost, setHourlyCost] = useState(2500);
    const [automationPct, setAutomationPct] = useState(40);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [captured, setCaptured] = useState(false);
    const [loading, setLoading] = useState(false);

    const results = useMemo(() => {
        const hoursSaved = teamSize * 8 * 22 * (automationPct / 100);
        const laborSavings = hoursSaved * hourlyCost;
        const mediaEfficiency = adSpend * 0.22 * (automationPct / 50);
        const annualSavings = (laborSavings + mediaEfficiency) * 12;
        return {
            annualSavings: Math.round(annualSavings),
            hoursSaved: Math.round(hoursSaved),
            mediaEfficiency: Math.round(mediaEfficiency),
            laborSavings: Math.round(laborSavings),
        };
    }, [adSpend, teamSize, hourlyCost, automationPct]);

    const fmt = (n: number) => {
        if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)}Cr`;
        if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
        if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
        return `₹${n}`;
    };

    const handleCapture = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(r => setTimeout(r, 900));
        setLoading(false);
        setCaptured(true);
    };

    const metrics = [
        { label: 'Annual Savings', value: fmt(results.annualSavings), icon: '💰', color: '#10b981' },
        { label: 'Hours Saved / Month', value: `${results.hoursSaved}h`, icon: '⏰', color: '#6366f1' },
        { label: 'Media Efficiency Gain', value: fmt(results.mediaEfficiency), icon: '📈', color: '#f59e0b' },
        { label: 'Monthly Labor Savings', value: fmt(results.laborSavings), icon: '👥', color: '#ec4899' },
    ];

    return (
        <section style={{
            padding: '5rem 2rem',
            borderTop: '1px solid var(--glass-border)',
            background: 'var(--bg-secondary)',
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{
                        color: '#6366f1', fontSize: '0.8rem', fontWeight: 800,
                        textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
                    }}>
                        New Calculator
                    </p>
                    <h2 style={{
                        color: '#fff', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                        fontFamily: 'var(--font-playfair)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 1rem',
                    }}>
                        AI Marketing ROI Calculator
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '540px', margin: '0 auto' }}>
                        Adjust 4 sliders and see your live savings, hours reclaimed, and efficiency gain — in real time.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {/* Sliders */}
                    <div style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '1.25rem', padding: '2rem',
                    }}>
                        <h3 style={{ color: '#fff', fontWeight: 800, margin: '0 0 1.5rem', fontSize: '1rem' }}>Your Inputs</h3>
                        <Slider
                            label="Monthly Ad Spend"
                            min={1000} max={100000} step={1000}
                            value={adSpend} onChange={setAdSpend}
                            format={v => `₹${(v / 1000).toFixed(0)}K`}
                        />
                        <Slider
                            label="Marketing Team Size"
                            min={1} max={25} step={1}
                            value={teamSize} onChange={setTeamSize}
                            format={v => `${v} ${v === 1 ? 'person' : 'people'}`}
                        />
                        <Slider
                            label="Avg Hourly Cost"
                            min={1000} max={10000} step={250}
                            value={hourlyCost} onChange={setHourlyCost}
                            format={v => `₹${(v / 1000).toFixed(1)}K`}
                        />
                        <Slider
                            label="Automation Coverage"
                            min={10} max={80} step={5}
                            value={automationPct} onChange={setAutomationPct}
                            format={v => `${v}%`}
                        />
                    </div>

                    {/* Results */}
                    <div>
                        <div style={{
                            display: 'grid', gridTemplateColumns: '1fr 1fr',
                            gap: '1rem', marginBottom: '1.5rem',
                        }}>
                            {metrics.map(m => (
                                <div key={m.label} style={{
                                    background: 'var(--bg-tertiary)',
                                    border: `1px solid ${m.color}25`,
                                    borderRadius: '1rem', padding: '1.25rem',
                                    display: 'flex', flexDirection: 'column', gap: '0.35rem',
                                }}>
                                    <span style={{ fontSize: '1.5rem' }}>{m.icon}</span>
                                    <span style={{ color: m.color, fontSize: '1.5rem', fontWeight: 900 }}>{m.value}</span>
                                    <span style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>{m.label}</span>
                                </div>
                            ))}
                        </div>

                        {!captured ? (
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.08))',
                                border: '1px solid rgba(99,102,241,0.2)',
                                borderRadius: '1.25rem', padding: '1.5rem',
                            }}>
                                <p style={{ color: '#818cf8', fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                                    📩 Email Me the Full Report
                                </p>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                                    Detailed breakdown with implementation roadmap + 90-day savings projection.
                                </p>
                                <form onSubmit={handleCapture} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    <input
                                        type="text" placeholder="First name" required
                                        value={name} onChange={e => setName(e.target.value)}
                                        style={inputStyle}
                                    />
                                    <input
                                        type="email" placeholder="Work email" required
                                        value={email} onChange={e => setEmail(e.target.value)}
                                        style={inputStyle}
                                    />
                                    <button type="submit" disabled={loading} style={{
                                        padding: '0.75rem', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        color: '#fff', border: 'none', borderRadius: '0.7rem',
                                        fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem',
                                    }}>
                                        {loading ? 'Sending…' : 'Email My Report →'}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div style={{
                                background: 'rgba(16,185,129,0.08)',
                                border: '1px solid rgba(16,185,129,0.25)',
                                borderRadius: '1.25rem', padding: '1.5rem', textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉</div>
                                <p style={{ color: '#10b981', fontWeight: 800, margin: '0 0 0.25rem' }}>Report sent to {email}</p>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>Check your inbox — it arrives within 2 minutes.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

const inputStyle: React.CSSProperties = {
    padding: '0.7rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--glass-border)',
    borderRadius: '0.65rem',
    color: '#fff', fontSize: '0.875rem', outline: 'none',
};
