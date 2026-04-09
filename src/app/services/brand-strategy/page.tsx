import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Target, Lightbulb, BarChart3, Users, Globe, Layers } from 'lucide-react';
import styles from '../services.module.css';

export const metadata = {
    title: 'Brand Strategy Services | WeMagnifAI',
    description: 'Position your brand to win. WeMagnifAI\'s brand strategy service covers positioning, messaging, visual identity, and go-to-market frameworks for B2B companies.',
};

export default function BrandStrategyPage() {
    return (
        <>
            <Header />
            <main className={styles.servicePage} style={{ '--accent-color': '#8B5CF6', '--accent-light': '#A78BFA', '--icon-bg': 'rgba(139,92,246,0.12)', '--icon-color': '#8B5CF6' } as React.CSSProperties}>

                <section className={styles.heroSection}>
                    <span className={styles.eyebrow}>Brand Strategy</span>
                    <h1 className={styles.heroTitle}>
                        Position to Win.<br />Build to Last.
                    </h1>
                    <p className={styles.heroDescription}>
                        A brand strategy that aligns your team, attracts the right clients, and makes you the obvious choice in a crowded market.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Start Brand Strategy <ArrowRight size={20} />
                    </Link>
                </section>

                <section className={styles.sectionDark}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>What's Included</h2>
                        <p className={styles.sectionSubtitle} style={{ color: '#94a3b8' }}>A complete brand strategy from positioning through to visual identity.</p>
                        <div className={styles.featuresGrid}>
                            {[
                                { icon: <Target size={28} />, title: 'Positioning Strategy', desc: 'Define your unique market position, ideal client profile, and the single compelling reason clients choose you over competitors.' },
                                { icon: <Lightbulb size={28} />, title: 'Messaging Framework', desc: 'Craft headline messaging, value propositions, and proof points that resonate at every touchpoint — from your homepage to investor decks.' },
                                { icon: <Layers size={28} />, title: 'Visual Identity System', desc: 'Logo, colour palette, typography, and brand guidelines that communicate your positioning instantly and consistently.' },
                                { icon: <Users size={28} />, title: 'Audience Research', desc: 'Stakeholder interviews, buyer persona development, and competitive landscape analysis to ground your strategy in reality.' },
                                { icon: <Globe size={28} />, title: 'Go-to-Market Framework', desc: 'Channel strategy, launch sequencing, and partner ecosystem mapping to turn brand into pipeline.' },
                                { icon: <BarChart3 size={28} />, title: 'Brand Measurement', desc: 'NPS baselines, brand awareness tracking, and the KPI framework to measure brand equity as a business asset.' },
                            ].map(f => (
                                <div key={f.title} className={styles.featureCard}>
                                    <div className={styles.featureIcon}>{f.icon}</div>
                                    <h3 className={styles.featureTitle} style={{ color: '#fff' }}>{f.title}</h3>
                                    <p className={styles.featureDescription} style={{ color: '#94a3b8' }}>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.processSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '0.75rem' }}>Our Process</h2>
                        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '3rem' }}>Four phases. No fluff. Complete clarity at every stage.</p>
                        <div className={styles.processGrid}>
                            {[
                                { n: '01', title: 'Discover', desc: 'Stakeholder interviews, customer surveys, competitor audit, and market landscape analysis.' },
                                { n: '02', title: 'Define', desc: 'Positioning workshop, messaging hierarchy, brand archetype and personality framework.' },
                                { n: '03', title: 'Design', desc: 'Visual identity creation, brand system design, and all supporting collateral.' },
                                { n: '04', title: 'Deploy', desc: 'Brand guidelines handoff, team training, launch roadmap, and 90-day activation plan.' },
                            ].map(step => (
                                <div key={step.n} className={styles.processStep}>
                                    <div className={styles.stepNumber}>{step.n}</div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.pricingSection}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '0.75rem' }}>Pricing</h2>
                        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '3rem' }}>Fixed-fee. No surprises. Full ownership of all assets.</p>
                        <div className={styles.pricingGrid}>
                            {[
                                { name: 'Foundation', price: '£3,500', period: 'one-time', features: ['Brand audit & positioning', 'Messaging framework', 'Logo + colour palette', 'Basic brand guidelines', '2 revision rounds'], primary: false },
                                { name: 'Growth', price: '£7,500', period: 'one-time', features: ['Everything in Foundation', 'Full visual identity system', 'Website messaging copy', 'Social media templates', 'Investor deck design', '3 revision rounds', '30-day post-launch support'], primary: true },
                                { name: 'Enterprise', price: 'Custom', period: '', features: ['Everything in Growth', 'Multi-brand architecture', 'Full go-to-market strategy', 'Quarterly brand reviews', 'Team brand training', 'Dedicated strategist'], primary: false },
                            ].map(tier => (
                                <div key={tier.name} className={tier.primary ? styles.pricingCardFeatured : styles.pricingCard}>
                                    <div className={styles.pricingName}>{tier.name}</div>
                                    <div className={styles.pricingPrice}>{tier.price}{tier.period && <span>/{tier.period}</span>}</div>
                                    <ul className={styles.pricingFeatures}>
                                        {tier.features.map(f => <li key={f}>{f}</li>)}
                                    </ul>
                                    <Link href="/contact" className={tier.primary ? styles.pricingButtonPrimary : styles.pricingButton}>
                                        Get Started
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.sectionDark}>
                    <div className={styles.container} style={{ maxWidth: '760px' }}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
                        {[
                            { q: 'How long does a brand strategy project take?', a: 'Foundation projects typically take 4–6 weeks. Growth projects run 8–12 weeks. Enterprise engagements vary based on complexity but we always provide a detailed timeline at kickoff.' },
                            { q: 'Who do we interview during discovery?', a: 'We interview your founders, senior team, 3–5 existing clients, and 2–3 prospects. This triangulated view is what makes our strategies grounded rather than theoretical.' },
                            { q: 'Do we own all the brand assets?', a: 'Yes, 100%. You receive all source files, full IP ownership, and the right to use and modify everything we create. No licensing, no lock-in.' },
                            { q: 'Can you just do the visual identity without the strategy?', a: 'We offer a standalone visual identity package starting at £2,500, but we always recommend the strategy first. Design without strategy is just decoration.' },
                        ].map((item, i) => (
                            <div key={i} style={{
                                borderBottom: '1px solid var(--glass-border)',
                                padding: '2rem 0',
                            }}>
                                <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.q}</h3>
                                <p style={{ color: '#94a3b8', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-accent)' }}>
                    <div style={{ maxWidth: '580px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Ready to build a brand that commands attention?
                        </h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Book a free 30-minute discovery call. We'll audit your current brand position and show you the fastest path to market leadership.
                        </p>
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                            color: '#fff', fontWeight: 800, textDecoration: 'none',
                            padding: '1rem 2.5rem', borderRadius: '0.875rem',
                            boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
                        }}>
                            Book Free Discovery Call →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
