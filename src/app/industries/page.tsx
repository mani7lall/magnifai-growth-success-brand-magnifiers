import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Growth Solutions by Industry | WeMagnifAI',
    description: 'Tailored growth, AI automation, and digital marketing solutions for SaaS, professional services, eCommerce, startups, creative agencies, and healthcare businesses.',
};

const industries = [
    {
        icon: '💻',
        title: 'SaaS & Tech',
        accentColor: '#6366f1',
        challenges: [
            'Long sales cycles and high CAC',
            'Difficulty communicating complex value to non-technical buyers',
            'High churn and low product-led growth adoption',
        ],
        howWeHelp: 'We build positioning that makes complex products instantly understandable, CRO systems that improve free-to-paid conversion, and GEO-optimised content that captures AI-era B2B research queries.',
        href: '/services/development',
        cta: 'Explore SaaS Solutions',
    },
    {
        icon: '🏛️',
        title: 'Professional Services',
        accentColor: '#10b981',
        challenges: [
            'Website doesn\'t reflect the quality of offline reputation',
            'Over-reliance on referrals with no scalable inbound system',
            'Generic positioning in competitive markets',
        ],
        howWeHelp: 'We build premium digital presences that command authority, develop lead generation systems that attract inbound enquiries from ideal clients, and sharpen positioning to win at premium price points.',
        href: '/services/marketing',
        cta: 'Explore Professional Services Solutions',
    },
    {
        icon: '🛒',
        title: 'E-commerce',
        accentColor: '#f59e0b',
        challenges: [
            'Increasing paid acquisition costs eroding margins',
            'Low email list engagement and repeat purchase rates',
            'Inefficient product discovery and checkout conversion',
        ],
        howWeHelp: 'We architect retention-first email and SMS programmes, build CRO frameworks that increase AOV and conversion rate, and develop SEO and content strategies that reduce paid dependency.',
        href: '/services/marketing',
        cta: 'Explore E-commerce Solutions',
    },
    {
        icon: '🚀',
        title: 'Startups & Scaleups',
        accentColor: '#ec4899',
        challenges: [
            'Limited brand recognition in competitive categories',
            'Need to move fast with limited budget and headcount',
            'Investor pressure to show inbound pipeline traction',
        ],
        howWeHelp: 'We work with founding teams to define bold positioning, launch high-converting digital presences at pace, and build scalable content and lead generation systems that grow without requiring headcount.',
        href: '/services/ai-automation',
        cta: 'Explore Startup Solutions',
    },
    {
        icon: '🎨',
        title: 'Creative Agencies',
        accentColor: '#8b5cf6',
        challenges: [
            'The "cobbler\'s children" problem — no time to market their own agency',
            'Differentiation in a commoditised market',
            'Inconsistent new business pipeline',
        ],
        howWeHelp: 'We help agencies build authority-first positioning, launch automated new business systems, and create content that attracts premium clients — so they can focus on delivering great work.',
        href: '/services/creative',
        cta: 'Explore Agency Solutions',
    },
    {
        icon: '🏥',
        title: 'Healthcare & Wellness',
        accentColor: '#06b6d4',
        challenges: [
            'Strict regulatory requirements limiting marketing tactics',
            'Building trust and credibility with cautious buyers',
            'Translating clinical expertise into accessible, discoverable content',
        ],
        howWeHelp: 'We build compliant, trust-first digital presences with GEO-optimised educational content, patient-friendly UX, and lead generation systems that work within healthcare marketing guidelines.',
        href: '/services/development',
        cta: 'Explore Healthcare Solutions',
    },
];

export default function IndustriesPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: '7rem 2rem 4rem', textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 55%)',
                }}>
                    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            🏢 6 Industries · Tailored Approaches
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.15, fontWeight: 700, marginBottom: '1.25rem',
                        }}>
                            Growth Solutions<br />
                            <span style={{ background: 'linear-gradient(90deg, #818cf8, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                by Industry
                            </span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                            Every industry has different growth constraints, buyer psychology, and competitive dynamics. Here's how we adapt our approach for the businesses we work with most.
                        </p>
                    </div>
                </section>

                {/* INDUSTRY CARDS */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: '1.5rem',
                        }}>
                            {industries.map((industry, i) => (
                                <div
                                    key={i}
                                    style={{
                                        background: 'var(--bg-secondary)',
                                        border: '1px solid var(--glass-border)',
                                        borderTop: `3px solid ${industry.accentColor}`,
                                        borderRadius: '1.25rem', overflow: 'hidden',
                                        display: 'flex', flexDirection: 'column',
                                        transition: 'all 0.25s',
                                    }}
                                >
                                    {/* Card Header */}
                                    <div style={{
                                        padding: '2rem 2rem 1.5rem',
                                        background: `linear-gradient(135deg, ${industry.accentColor}08 0%, transparent 60%)`,
                                    }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{industry.icon}</div>
                                        <h2 style={{
                                            color: '#fff', fontSize: '1.4rem', fontWeight: 700,
                                            fontFamily: 'var(--font-playfair)', marginBottom: '0.25rem',
                                        }}>
                                            {industry.title}
                                        </h2>
                                    </div>

                                    {/* Challenges */}
                                    <div style={{ padding: '0 2rem 1.5rem' }}>
                                        <p style={{ color: '#f87171', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                            Key Challenges
                                        </p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            {industry.challenges.map((challenge, j) => (
                                                <div key={j} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                                    <span style={{ color: '#f87171', flexShrink: 0, marginTop: '0.1rem' }}>✗</span>
                                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                                                        {challenge}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* How We Help */}
                                    <div style={{
                                        padding: '1.5rem 2rem',
                                        background: `${industry.accentColor}06`,
                                        borderTop: '1px solid var(--glass-border)',
                                        flex: 1,
                                    }}>
                                        <p style={{ color: industry.accentColor, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                                            How MagnifAI Helps
                                        </p>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                                            {industry.howWeHelp}
                                        </p>
                                        <Link href={industry.href} style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                            color: industry.accentColor, fontWeight: 700,
                                            fontSize: '0.875rem', textDecoration: 'none',
                                        }}>
                                            {industry.cta} →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA BAND */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(236,72,153,0.08) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
                        <h2 style={{
                            fontSize: '2.25rem', fontFamily: 'var(--font-playfair)',
                            color: '#fff', marginBottom: '1rem',
                        }}>
                            Don't See Your Industry?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            We work with businesses across many sectors. Book a free audit and we'll be direct about whether we're the right fit — and if we're not, we'll point you in the right direction.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/free-audit" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#6366f1', color: '#fff',
                                padding: '1rem 2.5rem', borderRadius: '0.75rem',
                                fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                            }}>
                                Book a Free Audit →
                            </Link>
                            <Link href="/contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                                color: '#fff', padding: '1rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
                            }}>
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
