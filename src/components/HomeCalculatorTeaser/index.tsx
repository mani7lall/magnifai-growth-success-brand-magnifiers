'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomeCalculatorTeaser() {
    const [counter, setCounter] = useState(0);
    const TARGET = 420000;

    useEffect(() => {
        let frame: number;
        const start = Date.now();
        const duration = 2200;
        const animate = () => {
            const progress = Math.min((Date.now() - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCounter(Math.round(ease * TARGET));
            if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    const formatted = `₹${counter.toLocaleString('en-IN')}`;

    return (
        <section style={{
            padding: '5rem 2rem',
            borderBottom: '1px solid var(--glass-border)',
            background: 'var(--bg-secondary)',
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.1) 50%, rgba(34,211,238,0.08) 100%)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    borderRadius: '2rem',
                    padding: '3.5rem 2.5rem',
                    textAlign: 'center',
                }}>
                    <p style={{
                        color: '#6366f1',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        marginBottom: '1rem',
                    }}>
                        Free Calculator
                    </p>
                    <h2 style={{
                        color: '#fff',
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        margin: '0 0 1.25rem',
                    }}>
                        Calculate Your AI Marketing ROI
                    </h2>
                    <p style={{
                        color: '#94a3b8',
                        fontSize: '1.05rem',
                        maxWidth: '560px',
                        margin: '0 auto 1.5rem',
                        lineHeight: 1.7,
                    }}>
                        Slide 4 inputs and see your savings in real time. No email required to get started.
                    </p>

                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: 'rgba(16,185,129,0.08)',
                        border: '1px solid rgba(16,185,129,0.2)',
                        borderRadius: '1rem',
                        padding: '1rem 1.75rem',
                        marginBottom: '2rem',
                    }}>
                        <span style={{ fontSize: '1.4rem' }}>💰</span>
                        <div>
                            <div style={{ color: '#10b981', fontSize: '1.75rem', fontWeight: 900, fontVariantNumeric: 'tabular-nums' }}>
                                {formatted}+
                            </div>
                            <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
                                saved on average per year
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/whatsapp-calculator" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.9rem 1.75rem',
                            borderRadius: '0.8rem',
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            color: '#fff',
                            fontWeight: 800,
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                        }}>
                            Open Calculator →
                        </Link>
                        <Link href="/tools/roi" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.9rem 1.5rem',
                            borderRadius: '0.8rem',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: '#cbd5e1',
                            fontWeight: 700,
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                        }}>
                            ROI Calculator
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
