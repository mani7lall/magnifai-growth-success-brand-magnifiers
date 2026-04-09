'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function LoginPage() {
    const [tab, setTab] = useState<'login' | 'signup'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const fieldStyle: React.CSSProperties = {
        width: '100%', padding: '0.875rem 1rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid var(--glass-border)',
        borderRadius: '0.625rem', color: '#fff',
        fontSize: '0.95rem', outline: 'none',
        fontFamily: 'inherit', boxSizing: 'border-box',
    };

    const labelStyle: React.CSSProperties = {
        display: 'block', color: '#cbd5e1',
        fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem',
    };

    return (
        <>
            <Header />
            <main style={{
                paddingTop: '80px', minHeight: '100vh',
                background: 'var(--bg-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '5rem 1rem',
            }}>
                <div style={{ width: '100%', maxWidth: '420px' }}>
                    {/* Logo mark */}
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            width: '56px', height: '56px', borderRadius: '16px',
                            background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                            fontSize: '1.5rem', marginBottom: '1rem',
                            boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
                        }}>
                            ✦
                        </div>
                        <h1 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', color: '#fff', fontWeight: 700 }}>
                            WeMagnifAI
                        </h1>
                    </div>

                    {/* Card */}
                    <div style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '1.25rem', padding: '2.5rem',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                    }}>
                        {/* Tabs */}
                        <div style={{
                            display: 'flex', background: 'var(--bg-tertiary)',
                            borderRadius: '0.625rem', padding: '0.25rem',
                            marginBottom: '2rem',
                        }}>
                            {(['login', 'signup'] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    style={{
                                        flex: 1, padding: '0.625rem',
                                        background: tab === t ? 'linear-gradient(135deg, #8B5CF6, #6366F1)' : 'transparent',
                                        border: 'none', borderRadius: '0.375rem',
                                        color: tab === t ? '#fff' : 'var(--text-muted)',
                                        fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem',
                                        fontFamily: 'inherit', transition: 'all 0.2s',
                                    }}
                                >
                                    {t === 'login' ? 'Sign In' : 'Create Account'}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {tab === 'signup' && (
                                <div>
                                    <label style={labelStyle}>Full Name</label>
                                    <input
                                        type="text" placeholder="Alex Chen" style={fieldStyle}
                                        value={name} onChange={e => setName(e.target.value)} required
                                    />
                                </div>
                            )}
                            <div>
                                <label style={labelStyle}>Email Address</label>
                                <input
                                    type="email" placeholder="alex@company.com" style={fieldStyle}
                                    value={email} onChange={e => setEmail(e.target.value)} required
                                />
                            </div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <label style={{ ...labelStyle, margin: 0 }}>Password</label>
                                    {tab === 'login' && (
                                        <Link href="#" style={{ color: '#818cf8', fontSize: '0.8rem', textDecoration: 'none' }}>
                                            Forgot password?
                                        </Link>
                                    )}
                                </div>
                                <input
                                    type="password" placeholder="••••••••" style={fieldStyle}
                                    value={password} onChange={e => setPassword(e.target.value)} required
                                />
                            </div>
                            <button type="submit" style={{
                                width: '100%', padding: '0.9375rem',
                                background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                                color: '#fff', fontWeight: 700, border: 'none',
                                borderRadius: '0.625rem', cursor: 'pointer', fontSize: '1rem',
                                boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
                                fontFamily: 'inherit',
                            }}>
                                {tab === 'login' ? 'Sign In →' : 'Create Account →'}
                            </button>
                        </form>

                        <div style={{ margin: '1.5rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
                            <span style={{ color: '#475569', fontSize: '0.8rem' }}>or continue with</span>
                            <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
                        </div>

                        <button style={{
                            width: '100%', padding: '0.875rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '0.625rem', color: '#fff',
                            fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem',
                            fontFamily: 'inherit', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', gap: '0.75rem',
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>

                        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center', marginTop: '1.5rem', lineHeight: 1.6 }}>
                            By continuing, you agree to our{' '}
                            <Link href="/legal/terms" style={{ color: '#818cf8', textDecoration: 'none' }}>Terms of Service</Link>
                            {' '}and{' '}
                            <Link href="/legal/privacy" style={{ color: '#818cf8', textDecoration: 'none' }}>Privacy Policy</Link>.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
