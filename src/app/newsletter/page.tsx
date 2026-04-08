import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Growth Intelligence Weekly — Newsletter | WeMagnifAI',
    description: 'Join 3,000+ founders and operators getting the Growth Intelligence Weekly digest. Actionable AI, growth strategy, and marketing frameworks every week.',
};

const valueProps = [
    { icon: '🤖', title: 'AI Tool Roundups', desc: 'The most useful new AI tools for growth teams — tested, rated, and ready to implement.' },
    { icon: '📈', title: 'Growth Frameworks', desc: 'Practical frameworks and playbooks distilled to their core steps. No padding, no filler.' },
    { icon: '⚖️', title: 'Tool Comparisons', desc: 'Honest, side-by-side comparisons of the tools your team is debating — with a clear recommendation.' },
    { icon: '📁', title: 'Case Study Breakdowns', desc: 'Real-world campaign teardowns — what worked, what didn\'t, and the numbers behind the results.' },
    { icon: '💡', title: 'Contrarian Takes', desc: 'One opinion per issue that challenges conventional marketing wisdom. Backed by data.' },
];

const recentIssues = [
    {
        number: '#041',
        date: 'April 2026',
        title: 'GEO Surpasses SEO: The First Month of Data',
        preview: 'We tracked 12 client sites over 30 days after implementing GEO tactics. Here\'s what the traffic data actually shows.',
        tags: ['GEO', 'Data'],
    },
    {
        number: '#040',
        date: 'March 2026',
        title: 'The 5-Email Welcome Sequence That Converts 31% of Leads',
        preview: 'The exact email sequence we use for high-ticket B2B clients — subject lines, timing, and the psychological triggers that make it work.',
        tags: ['Email', 'Conversion'],
    },
    {
        number: '#039',
        date: 'March 2026',
        title: 'HubSpot vs Pipedrive: After Testing Both for 90 Days',
        preview: 'Our agency tested both CRMs in real client environments. This is our unfiltered verdict — with the data to back it up.',
        tags: ['Tools', 'CRM'],
    },
];

const testimonials = [
    { quote: 'The most actionable newsletter in my inbox. Every issue has at least one thing I can implement that week.', name: 'Aisha T.', role: 'Marketing Director, SaaS' },
    { quote: 'I\'ve tried dozens of marketing newsletters. This is one of three I still read every week without skimming.', name: 'Marcus L.', role: 'Founder, Agency' },
    { quote: 'The tool comparisons alone are worth subscribing for. Someone who actually uses the tools, writing about them honestly.', name: 'Priya N.', role: 'Head of Growth' },
];

export default function NewsletterPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: '7rem 2rem 5rem', textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 55%)',
                }}>
                    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            📬 3,000+ Subscribers · Weekly · Free
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.15, fontWeight: 700, marginBottom: '1.25rem',
                        }}>
                            Growth Intelligence Weekly
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 3rem' }}>
                            A premium weekly digest for founders and operators. AI tools, growth frameworks, case study teardowns, and one contrarian take — every Thursday morning.
                        </p>

                        {/* SIGNUP FORM */}
                        <form action="/thank-you" method="get" style={{
                            display: 'flex', gap: '0.75rem', maxWidth: '480px',
                            margin: '0 auto 1.5rem', flexWrap: 'wrap',
                        }}>
                            <input
                                type="text" name="name" required placeholder="Your first name"
                                style={{
                                    flex: '0 0 auto', width: '160px', padding: '0.875rem 1rem',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.625rem', color: '#fff',
                                    fontSize: '0.95rem', outline: 'none',
                                }}
                            />
                            <input
                                type="email" name="email" required placeholder="you@company.com"
                                style={{
                                    flex: 1, minWidth: '200px', padding: '0.875rem 1rem',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.625rem', color: '#fff',
                                    fontSize: '0.95rem', outline: 'none',
                                }}
                            />
                            <button type="submit" style={{
                                padding: '0.875rem 1.75rem',
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                                border: 'none', borderRadius: '0.625rem', cursor: 'pointer',
                                whiteSpace: 'nowrap',
                            }}>
                                Join Free →
                            </button>
                        </form>

                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', color: '#64748b', fontSize: '0.85rem', flexWrap: 'wrap' }}>
                            <span>✓ 3,000+ subscribers</span>
                            <span>✓ No spam</span>
                            <span>✓ Unsubscribe anytime</span>
                        </div>
                    </div>
                </section>

                {/* VALUE PROPS */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>
                            What You Get Every Week
                        </h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '1.25rem',
                        }}>
                            {valueProps.map((vp, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem', padding: '1.75rem',
                                }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{vp.icon}</div>
                                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{vp.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{vp.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RECENT ISSUES */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>
                            Recent Issues
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {recentIssues.map((issue, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem', padding: '1.75rem',
                                }}>
                                    <div style={{
                                        flexShrink: 0, textAlign: 'center', minWidth: '60px',
                                    }}>
                                        <p style={{ color: '#6366f1', fontWeight: 900, fontSize: '1.1rem', margin: '0 0 0.2rem', fontFamily: 'var(--font-playfair)' }}>
                                            {issue.number}
                                        </p>
                                        <p style={{ color: '#475569', fontSize: '0.75rem', margin: 0 }}>{issue.date}</p>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                            {issue.tags.map(tag => (
                                                <span key={tag} style={{
                                                    background: 'rgba(99,102,241,0.1)', color: '#818cf8',
                                                    border: '1px solid rgba(99,102,241,0.2)',
                                                    fontSize: '0.7rem', fontWeight: 700,
                                                    padding: '0.15rem 0.5rem', borderRadius: '999px',
                                                }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.35 }}>
                                            {issue.title}
                                        </h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                            {issue.preview}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section style={{ padding: '5rem 2rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>
                            What Subscribers Say
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {testimonials.map((t, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem', padding: '2rem',
                                }}>
                                    <div style={{ color: '#6366f1', fontSize: '1.5rem', marginBottom: '1rem' }}>❝</div>
                                    <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                        {t.quote}
                                    </p>
                                    <div>
                                        <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.2rem', fontSize: '0.9rem' }}>{t.name}</p>
                                        <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>{t.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(236,72,153,0.08) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                }}>
                    <div style={{ maxWidth: '520px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '0.75rem' }}>
                            Join 3,000+ Founders Getting Weekly Growth Intelligence
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                            Every Thursday. Free forever. Unsubscribe in one click.
                        </p>
                        <form action="/thank-you" method="get" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <input
                                type="email" name="email" required placeholder="your@email.com"
                                style={{
                                    flex: '1', minWidth: '220px', padding: '0.875rem 1rem',
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '0.625rem', color: '#fff', fontSize: '0.95rem', outline: 'none',
                                }}
                            />
                            <button type="submit" style={{
                                padding: '0.875rem 1.75rem', background: '#6366f1',
                                color: '#fff', fontWeight: 700, border: 'none',
                                borderRadius: '0.625rem', cursor: 'pointer', fontSize: '0.95rem',
                            }}>
                                Join Free →
                            </button>
                        </form>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
