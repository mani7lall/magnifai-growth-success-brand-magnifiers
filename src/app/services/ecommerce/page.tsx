import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, TrendingUp, Layers, Mail, BarChart3, Zap } from 'lucide-react';
import styles from '../services.module.css';

export const metadata = {
    title: 'E-commerce Growth Services | WeMagnifAI',
    description: 'E-commerce scaling for DTC and B2B brands. CRO, email marketing, retention systems, and paid channel optimisation that grows revenue without just growing ad spend.',
};

export default function EcommercePage() {
    return (
        <>
            <Header />
            <main className={styles.servicePage} style={{ '--accent-color': '#10b981', '--accent-light': '#34d399', '--icon-bg': 'rgba(16,185,129,0.12)', '--icon-color': '#10b981' } as React.CSSProperties}>
                <section className={styles.heroSection}>
                    <span className={styles.eyebrow}>E-commerce Growth</span>
                    <h1 className={styles.heroTitle}>
                        More Revenue.<br />Same Ad Budget.
                    </h1>
                    <p className={styles.heroDescription}>
                        We fix the leaks before we pour more water. CRO, retention, and email marketing that adds revenue without increasing your CAC.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Scale Your Store <ArrowRight size={20} />
                    </Link>
                </section>

                <section className={styles.sectionDark}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>E-commerce Services</h2>
                        <p className={styles.sectionSubtitle} style={{ color: '#94a3b8' }}>End-to-end growth systems for DTC brands generating £500k+/year.</p>
                        <div className={styles.featuresGrid}>
                            {[
                                { icon: <TrendingUp size={28} />, title: 'Conversion Rate Optimisation', desc: 'Heatmap analysis, A/B testing, product page redesigns, and checkout optimisation. We typically lift CVR by 40–180% within 90 days.' },
                                { icon: <Mail size={28} />, title: 'Email & SMS Marketing', desc: 'Flows, campaigns, and automations in Klaviyo or ConvertKit. Abandoned cart, post-purchase, win-back, and loyalty sequences.' },
                                { icon: <ShoppingCart size={28} />, title: 'Retention Strategy', desc: 'Subscription models, loyalty programmes, VIP tiers, and LTV optimisation strategies that turn one-time buyers into brand advocates.' },
                                { icon: <Layers size={28} />, title: 'Product Page Architecture', desc: 'Above-the-fold design, social proof systems, urgency elements, and mobile-first product experiences that drive add-to-cart.' },
                                { icon: <Zap size={28} />, title: 'Post-Purchase Upsell', desc: 'One-click upsells, cross-sell sequences, and bundle strategies built in Make.com and Shopify to maximise average order value.' },
                                { icon: <BarChart3 size={28} />, title: 'Revenue Analytics', desc: 'Cohort analysis, attribution modelling, and monthly P&L reviews that show you exactly where growth is coming from.' },
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
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Our Process</h2>
                        <div className={styles.processGrid}>
                            {[
                                { n: '01', title: 'Revenue Audit', desc: 'Analyse your funnel, identify the biggest revenue leaks, and prioritise fixes by impact.' },
                                { n: '02', title: 'Quick Wins', desc: 'Implement the highest-impact changes first. Most clients see results within 30 days.' },
                                { n: '03', title: 'Systems Build', desc: 'Build the email flows, retention systems, and upsell sequences for compounding growth.' },
                                { n: '04', title: 'Scale & Optimise', desc: 'Monthly A/B testing, new campaign launches, and continuous CRO to compound gains.' },
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
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Growth Packages</h2>
                        <div className={styles.pricingGrid}>
                            {[
                                { name: 'Foundation', price: '£2,500', period: 'one-time', features: ['Full CRO audit', 'Product page redesign', '3 email flows setup', 'Quick wins roadmap', '30-day implementation'], primary: false },
                                { name: 'Scale', price: '£3,500', period: 'mo', features: ['Everything in Foundation', 'Monthly A/B testing', 'Full email programme', 'Retention strategy', 'Revenue analytics', 'Weekly review calls'], primary: true },
                                { name: 'Enterprise', price: 'Custom', period: '', features: ['Everything in Scale', 'Paid media oversight', 'International expansion', 'Tech stack audit', 'Dedicated growth team', 'P&L responsibility'], primary: false },
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

                <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'var(--bg-primary)', borderTop: '1px solid rgba(16,185,129,0.25)' }}>
                    <div style={{ maxWidth: '580px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Ready to grow revenue without growing costs?
                        </h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Book a free e-commerce audit. We'll identify your top 3 revenue opportunities within 48 hours.
                        </p>
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, #10b981, #22D3EE)',
                            color: '#fff', fontWeight: 800, textDecoration: 'none',
                            padding: '1rem 2.5rem', borderRadius: '0.875rem',
                            boxShadow: '0 8px 32px rgba(16,185,129,0.3)',
                        }}>
                            Get Free E-commerce Audit →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
