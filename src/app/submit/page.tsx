'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SubmitToolPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        toolName: '', website: '', category: '', description: '', pricing: '', email: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const fieldStyle: React.CSSProperties = {
        width: '100%', padding: '0.875rem 1rem',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--glass-border)',
        borderRadius: '0.625rem', color: '#fff',
        fontSize: '0.95rem', outline: 'none',
        fontFamily: 'inherit',
    };

    const labelStyle: React.CSSProperties = {
        display: 'block', color: '#e2e8f0',
        fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem',
    };

    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                <section style={{
                    padding: '5rem 2rem 3rem',
                    textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'linear-gradient(180deg, rgba(139,92,246,0.08) 0%, transparent 100%)',
                }}>
                    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-block', fontSize: '2.5rem', marginBottom: '1.5rem',
                        }}>🔧</div>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontFamily: 'var(--font-playfair)', color: '#fff',
                            fontWeight: 700, lineHeight: 1.15, marginBottom: '1rem',
                        }}>
                            Submit a Tool
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Know a tool that belongs in our directory? Submit it for review. We evaluate every submission for quality, relevance, and usefulness to growth teams.
                        </p>
                    </div>
                </section>

                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                        {submitted ? (
                            <div style={{
                                background: 'rgba(16,185,129,0.08)',
                                border: '1px solid rgba(16,185,129,0.3)',
                                borderRadius: '1.25rem', padding: '3rem 2rem',
                                textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>✅</div>
                                <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '0.75rem' }}>
                                    Submission Received!
                                </h2>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    We review every tool submission within 5 business days. If approved, your tool will be listed in our directory with full attribution.
                                </p>
                                <Link href="/directory" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                                    color: '#fff', fontWeight: 700, textDecoration: 'none',
                                    padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                }}>
                                    Browse the Directory →
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={labelStyle}>Tool Name *</label>
                                    <input
                                        type="text" required placeholder="e.g. Ahrefs, Notion, Make.com"
                                        style={fieldStyle}
                                        value={form.toolName}
                                        onChange={e => setForm({ ...form, toolName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Website URL *</label>
                                    <input
                                        type="url" required placeholder="https://yourtool.com"
                                        style={fieldStyle}
                                        value={form.website}
                                        onChange={e => setForm({ ...form, website: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Category *</label>
                                    <select
                                        required style={{ ...fieldStyle, appearance: 'none' }}
                                        value={form.category}
                                        onChange={e => setForm({ ...form, category: e.target.value })}
                                    >
                                        <option value="">Select a category</option>
                                        {['CRM & Sales', 'SEO & GEO', 'Email Marketing', 'Analytics', 'Automation', 'AI Writing', 'Design & Brand', 'Scheduling', 'Video', 'Productivity', 'Other'].map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label style={labelStyle}>What does it do? *</label>
                                    <textarea
                                        required rows={4}
                                        placeholder="Describe the tool's core function and who it's for. What problem does it solve?"
                                        style={{ ...fieldStyle, resize: 'vertical', lineHeight: 1.6 }}
                                        value={form.description}
                                        onChange={e => setForm({ ...form, description: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Pricing Model</label>
                                    <select
                                        style={{ ...fieldStyle, appearance: 'none' }}
                                        value={form.pricing}
                                        onChange={e => setForm({ ...form, pricing: e.target.value })}
                                    >
                                        <option value="">Select pricing model</option>
                                        {['Free', 'Freemium', 'Paid (subscription)', 'Paid (one-time)', 'Usage-based', 'Enterprise'].map(p => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label style={labelStyle}>Your Email *</label>
                                    <input
                                        type="email" required placeholder="you@company.com"
                                        style={fieldStyle}
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                    />
                                    <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '0.4rem' }}>
                                        We'll only contact you if we have questions about your submission.
                                    </p>
                                </div>
                                <button type="submit" style={{
                                    padding: '1rem 2rem',
                                    background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                                    color: '#fff', fontWeight: 700, border: 'none',
                                    borderRadius: '0.75rem', cursor: 'pointer',
                                    fontSize: '1rem', boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
                                }}>
                                    Submit Tool →
                                </button>
                            </form>
                        )}

                        <div style={{
                            marginTop: '3rem', padding: '1.5rem 2rem',
                            background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                            borderRadius: '1rem',
                        }}>
                            <h3 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                Submission Guidelines
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {[
                                    'Tool must be live and publicly accessible',
                                    'No duplicate submissions (search the directory first)',
                                    'Tools must serve growth, marketing, or productivity use cases',
                                    'Affiliate disclosure: some listings include affiliate links',
                                ].map(item => (
                                    <li key={item} style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', gap: '0.6rem' }}>
                                        <span style={{ color: '#6366f1' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
