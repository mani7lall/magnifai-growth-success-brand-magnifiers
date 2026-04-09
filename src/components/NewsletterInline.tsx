'use client';

import { useState } from 'react';

export default function NewsletterInline() {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        await new Promise(r => setTimeout(r, 700));
        setDone(true);
    };

    if (done) {
        return (
            <div style={{ textAlign: 'center', padding: '1rem' }}>
                <p style={{ color: '#10b981', fontWeight: 800, fontSize: '1.05rem', margin: '0 0 0.25rem' }}>🎉 You&apos;re in!</p>
                <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>New resources will land in your inbox every two weeks.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                    flex: 1, minWidth: '200px',
                    padding: '0.85rem 1.25rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '0.75rem',
                    color: '#fff', fontSize: '0.95rem', outline: 'none',
                }}
            />
            <button type="submit" style={{
                padding: '0.85rem 1.5rem',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff', border: 'none', borderRadius: '0.75rem',
                fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', whiteSpace: 'nowrap',
            }}>
                Subscribe Free →
            </button>
        </form>
    );
}
