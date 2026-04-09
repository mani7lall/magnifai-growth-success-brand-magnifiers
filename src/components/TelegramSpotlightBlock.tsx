import Link from 'next/link';

export default function TelegramSpotlightBlock() {
    return (
        <section style={{
            padding: '5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(34,211,238,0.12)',
            borderBottom: '1px solid rgba(139,92,246,0.12)',
        }}>
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                background: 'radial-gradient(ellipse 70% 80% at 60% 50%, rgba(34,211,238,0.06) 0%, transparent 70%)',
            }} />
            <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)',
                        color: '#10b981', padding: '0.3rem 0.9rem', borderRadius: '9999px',
                        fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.09em', textTransform: 'uppercase',
                    }}>
                        <span style={{ width: 6, height: 6, background: '#10b981', borderRadius: '50%', boxShadow: '0 0 6px #10b981', display: 'inline-block' }} />
                        New Product · Live Now
                    </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
                    {/* LEFT */}
                    <div>
                        <h2 style={{
                            color: '#fff', fontSize: 'clamp(2rem, 3.5vw, 2.85rem)',
                            fontFamily: 'var(--font-playfair)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 1rem',
                        }}>
                            Telegram Growth Engine
                            <span style={{
                                display: 'block', background: 'linear-gradient(90deg, #22d3ee, #8b5cf6)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text', marginTop: '0.15em', fontSize: '0.85em',
                            }}>Autonomous Lead Gen, 24/7</span>
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '440px' }}>
                            AI discovers your ideal Telegram groups, posts value-first content,
                            scrapes &amp; scores leads, then sends personalised 3-step DM sequences — all while you sleep.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.25rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {[
                                { icon: '🔍', label: 'AI Group Discovery', sub: 'Finds niche groups matching your ICP automatically' },
                                { icon: '📝', label: 'GPT-4o Content Engine', sub: 'Auto-posts unique, engagement-driving content per group' },
                                { icon: '⭐', label: 'Lead Scoring (0–100)', sub: '14-signal AI scoring on every scraped profile' },
                                { icon: '💬', label: '3-Step DM Sequences', sub: 'Personalised outreach with smart human-like timing' },
                                { icon: '🛡️', label: 'Anti-Ban Safety System', sub: 'Delays, flood-wait handling, multi-account rotation' },
                            ].map(f => (
                                <li key={f.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <span style={{ fontSize: '1.05rem', marginTop: '0.1rem', flexShrink: 0 }}>{f.icon}</span>
                                    <span>
                                        <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.875rem' }}>{f.label}</span>
                                        <span style={{ color: '#475569', fontSize: '0.78rem', display: 'block', marginTop: '0.1rem' }}>{f.sub}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                            <Link href="/telegram-growth" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.85rem 1.6rem',
                                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                                color: '#fff', fontWeight: 800, fontSize: '0.9rem',
                                borderRadius: '0.75rem', textDecoration: 'none',
                                boxShadow: '0 8px 28px rgba(34,211,238,0.22)',
                            }}>See Full Product →</Link>
                            <Link href="/telegram-dashboard" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.85rem 1.6rem',
                                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                                color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem',
                                borderRadius: '0.75rem', textDecoration: 'none',
                            }}>Live Dashboard</Link>
                        </div>
                    </div>

                    {/* RIGHT — Dashboard preview */}
                    <div style={{
                        background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '1.5rem', padding: '1.75rem',
                        boxShadow: '0 0 60px rgba(34,211,238,0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                            <div style={{ display: 'flex', gap: '0.35rem' }}>
                                {['#ff5f57','#febc2e','#28c840'].map(c => (
                                    <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'inline-block' }} />
                                ))}
                            </div>
                            <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0.28rem 0.75rem', color: '#475569', fontSize: '0.7rem', fontFamily: 'monospace' }}>
                                wemagnifai.com/telegram-dashboard
                            </div>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '0.18rem 0.55rem', borderRadius: '9999px', fontSize: '0.68rem', fontWeight: 700 }}>
                                <span style={{ width: 5, height: 5, background: '#10b981', borderRadius: '50%', display: 'inline-block' }} />Live
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                            {[
                                { label: 'Total Leads', value: '1,284', delta: '+312 this week', color: '#6366f1' },
                                { label: 'Groups Active', value: '47', delta: '+3 new', color: '#22d3ee' },
                                { label: 'DMs Sent', value: '612', delta: '+89 today', color: '#a78bfa' },
                                { label: 'Pipeline Value', value: '£142k', delta: '+£28k', color: '#10b981' },
                            ].map(s => (
                                <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${s.color}20`, borderRadius: '0.875rem', padding: '0.9rem' }}>
                                    <div style={{ color: s.color, fontSize: '1.35rem', fontWeight: 900 }}>{s.value}</div>
                                    <div style={{ color: '#94a3b8', fontSize: '0.68rem', fontWeight: 700, margin: '0.15rem 0' }}>{s.label}</div>
                                    <div style={{ color: '#10b981', fontSize: '0.64rem', fontWeight: 700 }}>{s.delta}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.875rem', padding: '1rem' }}>
                            <div style={{ color: '#334155', fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
                                Live Activity
                            </div>
                            {[
                                { t: '2m', e: '✅ Reply from @arjunm_biz · score 94 · hot lead flagged' },
                                { t: '8m', e: '📨 Step-2 DM sent to @saraht_growth' },
                                { t: '15m', e: '👤 84 new leads scraped from AI Founders India' },
                                { t: '22m', e: '✏️ Post published · Growth Hackers UK · 34 views' },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '0.6rem', padding: '0.38rem 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                                    <span style={{ color: '#334155', fontSize: '0.65rem', flexShrink: 0, minWidth: '22px', paddingTop: '0.12rem' }}>{item.t}</span>
                                    <span style={{ color: '#64748b', fontSize: '0.72rem', lineHeight: 1.45 }}>{item.e}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
