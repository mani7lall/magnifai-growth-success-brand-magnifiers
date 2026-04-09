'use client';

import { useState } from 'react';

export default function HomeLeadMagnetBand() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        await new Promise(r => setTimeout(r, 900));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section style={{
            padding: '4.5rem 2rem',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 40%, #0c0a1a 100%)',
            borderTop: '1px solid rgba(99,102,241,0.2)',
            borderBottom: '1px solid rgba(99,102,241,0.2)',
        }}>
            <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.3)',
                    borderRadius: '9999px',
                    padding: '0.35rem 1rem',
                    marginBottom: '1.25rem',
                }}>
                    <span style={{ fontSize: '0.8rem' }}>📋</span>
                    <span style={{ color: '#818cf8', fontSize: '0.8rem', fontWeight: 700 }}>Free Download</span>
                </div>

                <h2 style={{
                    color: '#fff',
                    fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 900,
                    lineHeight: 1.15,
                    margin: '0 0 1rem',
                }}>
                    Get the 2026 Website Growth Audit Checklist — Free
                </h2>
                <p style={{
                    color: '#94a3b8',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    margin: '0 0 2rem',
                }}>
                    47 checkpoints covering SEO, CRO, page speed, content gaps, and accessibility. Used by our team on every new client site.
                </p>

                {submitted ? (
                    <div style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1.25rem 2rem',
                        background: 'rgba(16,185,129,0.1)',
                        border: '1px solid rgba(16,185,129,0.3)',
                        borderRadius: '1rem',
                    }}>
                        <span style={{ fontSize: '2rem' }}>🎉</span>
                        <p style={{ color: '#10b981', fontWeight: 800, margin: 0 }}>Check your inbox!</p>
                        <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>The checklist is on its way to {email}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{
                        display: 'flex',
                        gap: '0.75rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            style={{
                                flex: '1',
                                minWidth: '220px',
                                padding: '0.875rem 1.25rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '0.75rem',
                                color: '#fff',
                                fontSize: '0.95rem',
                                outline: 'none',
                            }}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                padding: '0.875rem 1.75rem',
                                background: loading ? '#4f46e5' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '0.75rem',
                                fontWeight: 800,
                                fontSize: '0.95rem',
                                cursor: loading ? 'wait' : 'pointer',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {loading ? 'Sending…' : 'Get Free Checklist →'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
