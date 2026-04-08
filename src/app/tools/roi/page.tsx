'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useMemo } from 'react';

const MAGNIFAI_RATE_PER_MONTH = 3500;

export default function ROICalculatorPage() {
    const [visitors, setVisitors] = useState(5000);
    const [conversionRate, setConversionRate] = useState(2);
    const [dealValue, setDealValue] = useState(3000);
    const [improvement, setImprovement] = useState(30);
    const [horizon, setHorizon] = useState<3 | 6 | 12>(12);

    const results = useMemo(() => {
        const currentLeads = (visitors * conversionRate) / 100;
        const newConversionRate = conversionRate * (1 + improvement / 100);
        const newLeads = (visitors * newConversionRate) / 100;
        const extraLeads = newLeads - currentLeads;
        const extraRevenueMonthly = extraLeads * dealValue;
        const totalRevenue = extraRevenueMonthly * horizon;
        const investmentTotal = MAGNIFAI_RATE_PER_MONTH * Math.min(3, horizon);
        const roiMultiplier = investmentTotal > 0 ? totalRevenue / investmentTotal : 0;
        const paybackWeeks = extraRevenueMonthly > 0 ? Math.ceil((MAGNIFAI_RATE_PER_MONTH / extraRevenueMonthly) * 4.3) : 0;
        return { currentLeads, newLeads, extraLeads, extraRevenueMonthly, totalRevenue, roiMultiplier, paybackWeeks };
    }, [visitors, conversionRate, dealValue, improvement, horizon]);

    const fmt = (n: number) =>
        n >= 1000 ? `£${(n / 1000).toFixed(1)}k` : `£${Math.round(n).toLocaleString()}`;

    const SliderInput = ({
        label, value, min, max, step, unit, onChange, formatValue
    }: {
        label: string; value: number; min: number; max: number; step: number;
        unit?: string; onChange: (v: number) => void; formatValue?: (v: number) => string;
    }) => (
        <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <label style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600 }}>{label}</label>
                <span style={{
                    color: '#818cf8', fontWeight: 700, fontSize: '1.1rem',
                    background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                    padding: '0.1rem 0.6rem', borderRadius: '0.5rem',
                }}>
                    {formatValue ? formatValue(value) : `${value.toLocaleString()}${unit || ''}`}
                </span>
            </div>
            <input
                type="range" min={min} max={max} step={step} value={value}
                onChange={e => onChange(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#6366f1', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                <span>{min.toLocaleString()}{unit || ''}</span>
                <span>{max.toLocaleString()}{unit || ''}</span>
            </div>
        </div>
    );

    const StatCard = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
        <div style={{
            background: highlight ? 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))' : 'var(--bg-tertiary)',
            border: highlight ? '1px solid rgba(99,102,241,0.4)' : '1px solid var(--glass-border)',
            borderRadius: '1rem', padding: '1.5rem', textAlign: 'center',
        }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                {label}
            </p>
            <p style={{ color: highlight ? '#818cf8' : '#fff', fontSize: '1.75rem', fontWeight: 800, margin: 0 }}>
                {value}
            </p>
        </div>
    );

    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: '7rem 2rem 4rem', textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 55%)',
                }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#fbbf24', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            🧮 Interactive Calculator
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.15, fontWeight: 700, marginBottom: '1.5rem',
                        }}>
                            Calculate Your Growth ROI
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                            Input your current traffic, conversion rate, and deal value. See your exact revenue upside from a conversion rate improvement — in real time.
                        </p>
                    </div>
                </section>

                {/* CALCULATOR */}
                <section style={{ padding: '4rem 2rem' }}>
                    <div style={{
                        maxWidth: '1100px', margin: '0 auto',
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
                        gap: '2.5rem', alignItems: 'start',
                    }}>

                        {/* INPUTS */}
                        <div style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '1.5rem', padding: '2.5rem',
                        }}>
                            <h2 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, marginBottom: '2rem', fontFamily: 'var(--font-playfair)' }}>
                                Your Inputs
                            </h2>

                            <SliderInput label="Monthly Website Visitors" value={visitors} min={500} max={100000} step={500} onChange={setVisitors} />
                            <SliderInput label="Current Conversion Rate" value={conversionRate} min={0.5} max={15} step={0.5} unit="%" onChange={setConversionRate} />
                            <SliderInput label="Average Deal / Project Value" value={dealValue} min={500} max={50000} step={500} onChange={setDealValue} formatValue={v => `£${v.toLocaleString()}`} />
                            <SliderInput label="Target Conversion Improvement" value={improvement} min={5} max={100} step={5} unit="%" onChange={setImprovement} />

                            <div style={{ marginBottom: '0' }}>
                                <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                                    Time Horizon
                                </label>
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    {([3, 6, 12] as const).map(h => (
                                        <button
                                            key={h}
                                            onClick={() => setHorizon(h)}
                                            style={{
                                                flex: 1, padding: '0.75rem',
                                                background: horizon === h ? '#6366f1' : 'var(--bg-tertiary)',
                                                border: horizon === h ? '1px solid #6366f1' : '1px solid var(--glass-border)',
                                                borderRadius: '0.625rem', color: '#fff',
                                                fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                                                transition: 'all 0.2s',
                                            }}
                                        >
                                            {h}m
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* OUTPUTS */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{
                                background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                borderRadius: '1.5rem', padding: '2rem',
                            }}>
                                <h2 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-playfair)' }}>
                                    Your Results
                                </h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <StatCard label="Extra Leads / Month" value={`+${results.extraLeads.toFixed(1)}`} />
                                    <StatCard label="Extra Revenue / Month" value={fmt(results.extraRevenueMonthly)} />
                                    <StatCard label={`${horizon}-Month Upside`} value={fmt(results.totalRevenue)} highlight />
                                    <StatCard label="ROI Multiplier" value={`${results.roiMultiplier.toFixed(1)}x`} highlight />
                                </div>
                                {results.paybackWeeks > 0 && (
                                    <div style={{
                                        background: 'rgba(16,185,129,0.08)',
                                        border: '1px solid rgba(16,185,129,0.25)',
                                        borderRadius: '0.75rem', padding: '1rem',
                                        textAlign: 'center',
                                    }}>
                                        <p style={{ color: '#34d399', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>
                                            ⚡ At MagnifAI's rates, this pays back in{' '}
                                            <strong>{results.paybackWeeks} weeks</strong>
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Breakdown */}
                            <div style={{
                                background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                borderRadius: '1.25rem', padding: '1.5rem',
                            }}>
                                <h3 style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                                    Breakdown
                                </h3>
                                {[
                                    ['Current leads/month', `${results.currentLeads.toFixed(1)}`],
                                    ['New leads/month', `${results.newLeads.toFixed(1)}`],
                                    ['Extra leads/month', `+${results.extraLeads.toFixed(1)}`],
                                    ['Revenue per extra lead', `£${dealValue.toLocaleString()}`],
                                ].map(([label, val]) => (
                                    <div key={label} style={{
                                        display: 'flex', justifyContent: 'space-between',
                                        padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    }}>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{label}</span>
                                        <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem' }}>{val}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/free-audit" style={{
                                display: 'block', textAlign: 'center',
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                color: '#fff', padding: '1.125rem',
                                borderRadius: '0.875rem', fontWeight: 700,
                                fontSize: '1rem', textDecoration: 'none',
                            }}>
                                Ready to achieve this? Book a free strategy call →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* HOW WE CALCULATE */}
                <section style={{
                    padding: '4rem 2rem',
                    background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)',
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1.5rem' }}>
                            How We Calculate
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                            {[
                                ['Extra Leads', 'Visitors × (New conversion rate − Current conversion rate) ÷ 100'],
                                ['Extra Revenue / Month', 'Extra leads × Average deal value'],
                                ['Total Upside', 'Extra monthly revenue × Selected time horizon (months)'],
                                ['Payback Period', 'MagnifAI monthly rate ÷ Extra monthly revenue × 4.3 weeks/month'],
                            ].map(([title, formula]) => (
                                <div key={title} style={{
                                    background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '0.875rem', padding: '1.25rem',
                                }}>
                                    <p style={{ color: '#818cf8', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.4rem' }}>{title}</p>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5, margin: 0, fontFamily: 'monospace' }}>{formula}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ color: '#475569', fontSize: '0.85rem', marginTop: '1.5rem', lineHeight: 1.6 }}>
                            This calculator shows potential upside from conversion rate improvement. Actual results depend on traffic quality, sales process, and market conditions. We use this methodology in client proposals to set conservative, achievable expectations.
                        </p>
                    </div>
                </section>

                {/* RELATED TOOLS */}
                <section style={{ padding: '4rem 2rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '2rem' }}>
                            Related Tools
                        </h2>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {[
                                { label: '🎯 Readiness Quiz', href: '/tools/readiness-quiz' },
                                { label: '🔍 SEO Tool', href: '/tools/seo' },
                                { label: '💬 Token Estimator', href: '/tools/token' },
                                { label: '📊 Resources Hub', href: '/resources' },
                            ].map(tool => (
                                <Link key={tool.href} href={tool.href} style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.75rem', color: '#fff',
                                    fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem',
                                    transition: 'all 0.2s',
                                }}>
                                    {tool.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
