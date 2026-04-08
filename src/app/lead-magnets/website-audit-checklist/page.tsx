import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Website Growth Audit Checklist — Free Download | WeMagnifAI',
    description: 'Download the 80-point Website Growth Audit Checklist used by 2,400+ B2B founders and marketing teams to find revenue leaks and improve conversion rates.',
};

const checklistSections = [
    { icon: '⚡', title: 'Speed & Performance', desc: '12 checks covering Core Web Vitals, image optimisation, and server response times.' },
    { icon: '🔍', title: 'SEO & GEO Fundamentals', desc: '18 checks covering on-page SEO, schema markup, and AI search discoverability signals.' },
    { icon: '💬', title: 'Messaging & Positioning', desc: '15 checks to ensure your homepage communicates value in 5 seconds or less.' },
    { icon: '🎯', title: 'Conversion Architecture', desc: '14 checks on CTA placement, form design, and lead capture optimisation.' },
    { icon: '📱', title: 'Mobile & Accessibility', desc: '11 checks for mobile experience, touch targets, and WCAG compliance basics.' },
    { icon: '🔗', title: 'Technical & Trust Signals', desc: '10 checks covering SSL, broken links, privacy, social proof, and credibility markers.' },
];

const personas = [
    {
        icon: '🚀',
        title: 'Founders',
        description: 'You built a great product but your website isn\'t converting. This checklist helps you identify exactly what\'s holding back your inbound pipeline — without needing a designer.',
        color: '#6366f1',
    },
    {
        icon: '📈',
        title: 'Marketing Leads',
        description: 'Traffic isn\'t the problem — conversion is. Use this checklist to build a systematic case for improvements and prioritise fixes by revenue impact.',
        color: '#ec4899',
    },
    {
        icon: '🏢',
        title: 'Agency Teams',
        description: 'Deliver more value to clients on day one. Run this audit in the first week of any engagement to demonstrate quick wins and earn trust before the big strategy work begins.',
        color: '#10b981',
    },
];

const outcomes = [
    { number: '01', text: 'Identify the 3-5 highest-impact conversion fixes on your site within 2 hours' },
    { number: '02', text: 'Build a prioritised optimisation roadmap ranked by estimated revenue impact' },
    { number: '03', text: 'Eliminate common messaging mistakes that cause visitors to bounce without converting' },
    { number: '04', text: 'Benchmark your site against B2B best practices and understand exactly where you stand' },
];

const testimonials = [
    { quote: 'Ran this on our site in 90 minutes and found 11 quick wins. Three of them we fixed that week — bounce rate dropped noticeably.', name: 'James K.', role: 'CEO, SaaS startup' },
    { quote: 'We now run this checklist on every new client website in week one. It\'s become our standard discovery tool.', name: 'Priya M.', role: 'Agency Director' },
    { quote: 'Finally — a practical audit that doesn\'t just tell you to "improve your CTA." Each point is specific and actionable.', name: 'Tom R.', role: 'Head of Growth' },
];

const faqs = [
    { q: 'Is this checklist suitable for any type of website?', a: 'Yes. The checklist covers universal principles that apply to B2B service sites, SaaS products, agency websites, and professional services firms. Some checks are particularly relevant to lead-generation-focused sites.' },
    { q: 'How long does the full audit take?', a: 'Most people complete the full 80-point audit in 90 minutes to 3 hours depending on site complexity. We recommend blocking a half-day to do it properly and document findings as you go.' },
    { q: 'Do I need technical knowledge to use it?', a: 'No. The checklist is designed for non-technical founders and marketing leads. Where technical knowledge helps (e.g. Core Web Vitals), we include links to free tools that surface the data for you.' },
    { q: 'What format is the checklist in?', a: 'The checklist is delivered as a Google Doc and PDF. You\'ll receive immediate access via email after submitting the form.' },
];

export default function WebsiteAuditChecklistPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: '7rem 2rem 5rem',
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 60%)',
                    borderBottom: '1px solid var(--glass-border)',
                    textAlign: 'center',
                }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#34d399', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            ✅ Free Download · No credit card
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.15, fontWeight: 700, marginBottom: '1.5rem',
                        }}>
                            Download the Website Growth<br />
                            <span style={{ background: 'linear-gradient(90deg, #818cf8, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Audit Checklist
                            </span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 2rem' }}>
                            The 80-point website audit used by 2,400+ founders, marketing leads, and agency teams to find revenue leaks, fix conversion blockers, and turn more visitors into customers.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', color: '#64748b', fontSize: '0.9rem' }}>
                            <span>📥 2,400+ downloads</span>
                            <span>⏱️ 90-min audit</span>
                            <span>📋 80 actionable checks</span>
                        </div>
                    </div>
                </section>

                {/* WHAT'S INSIDE + FORM */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* Left: Whats Inside */}
                        <div>
                            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '0.5rem' }}>
                                What's Inside
                            </h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Six sections covering every dimension of website growth performance:
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {checklistSections.map((section, i) => (
                                    <div key={i} style={{
                                        display: 'flex', gap: '1rem', alignItems: 'flex-start',
                                        background: 'var(--bg-secondary)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '1rem', padding: '1.25rem',
                                    }}>
                                        <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{section.icon}</span>
                                        <div>
                                            <h3 style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.3rem' }}>
                                                {section.title}
                                            </h3>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                                                {section.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid rgba(99,102,241,0.3)',
                            borderRadius: '1.5rem', padding: '2.5rem',
                            position: 'sticky', top: '6rem',
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📋</div>
                                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                                    Get Your Free Copy
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    Instant access. No spam, ever.
                                </p>
                            </div>
                            <form action="/thank-you" method="get" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                                        Full Name
                                    </label>
                                    <input
                                        type="text" name="name" required placeholder="Your name"
                                        style={{
                                            width: '100%', padding: '0.875rem 1rem',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '0.625rem', color: '#fff',
                                            fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box',
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                                        Work Email
                                    </label>
                                    <input
                                        type="email" name="email" required placeholder="you@company.com"
                                        style={{
                                            width: '100%', padding: '0.875rem 1rem',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '0.625rem', color: '#fff',
                                            fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box',
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                                        Company
                                    </label>
                                    <input
                                        type="text" name="company" placeholder="Your company name"
                                        style={{
                                            width: '100%', padding: '0.875rem 1rem',
                                            background: 'var(--bg-tertiary)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '0.625rem', color: '#fff',
                                            fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box',
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        width: '100%', padding: '1rem',
                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        color: '#fff', fontWeight: 700, fontSize: '1rem',
                                        border: 'none', borderRadius: '0.75rem',
                                        cursor: 'pointer', marginTop: '0.5rem',
                                    }}
                                >
                                    Download Free Checklist →
                                </button>
                                <p style={{ color: '#475569', fontSize: '0.8rem', textAlign: 'center', margin: '0.5rem 0 0' }}>
                                    🔒 No spam. Unsubscribe anytime.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>

                {/* WHO THIS IS FOR */}
                <section style={{ padding: '4rem 2rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>
                            Who This Is For
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {personas.map((persona, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-tertiary)',
                                    border: `1px solid ${persona.color}30`,
                                    borderRadius: '1.25rem', padding: '2rem',
                                    borderTop: `3px solid ${persona.color}`,
                                }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{persona.icon}</div>
                                    <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                        {persona.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                                        {persona.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUTCOMES */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>
                            What You'll Achieve
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {outcomes.map((outcome, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.75rem',
                                }}>
                                    <span style={{
                                        fontSize: '2rem', fontWeight: 900, color: 'rgba(99,102,241,0.3)',
                                        fontFamily: 'var(--font-playfair)', flexShrink: 0, lineHeight: 1,
                                    }}>
                                        {outcome.number}
                                    </span>
                                    <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.5, margin: 0 }}>
                                        {outcome.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section style={{ padding: '4rem 2rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                2,400+ downloads and counting
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {testimonials.map((t, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '2rem',
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

                {/* FAQ */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', textAlign: 'center', marginBottom: '2rem' }}>
                            Common Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.5rem',
                                }}>
                                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{faq.q}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED RESOURCES */}
                <section style={{
                    padding: '4rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(236,72,153,0.07) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Explore More Resources
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Guides, templates, and tools to accelerate every part of your growth strategy.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/resources" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#6366f1', color: '#fff',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
                            }}>
                                Browse All Resources →
                            </Link>
                            <Link href="/tools/roi" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                                color: '#fff', padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
                            }}>
                                ROI Calculator
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
