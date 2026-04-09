import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Search, TrendingUp, FileText, Link2, BarChart3, Zap } from 'lucide-react';
import styles from '../services.module.css';

export const metadata = {
    title: 'SEO & GEO Services | WeMagnifAI — Rank in Search & AI',
    description: 'Search and Generative Engine Optimisation that drives qualified traffic. We build SEO systems that rank in Google, ChatGPT, Perplexity, and AI Overviews.',
};

export default function SEOPage() {
    return (
        <>
            <Header />
            <main className={styles.servicePage} style={{ '--accent-color': '#22D3EE', '--accent-light': '#67E8F9', '--icon-bg': 'rgba(34,211,238,0.12)', '--icon-color': '#22D3EE' } as React.CSSProperties}>
                <section className={styles.heroSection}>
                    <span className={styles.eyebrow}>SEO & GEO Optimisation</span>
                    <h1 className={styles.heroTitle}>
                        Rank Everywhere.<br />AI Search Included.
                    </h1>
                    <p className={styles.heroDescription}>
                        Modern SEO isn't just Google. We optimise for traditional search and Generative Engine Optimisation — so you appear in ChatGPT, Perplexity, and Google AI Overviews.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Start SEO Strategy <ArrowRight size={20} />
                    </Link>
                </section>

                <section className={styles.sectionDark}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>What We Deliver</h2>
                        <p className={styles.sectionSubtitle} style={{ color: '#94a3b8' }}>A full-stack SEO system — from technical foundations to content authority.</p>
                        <div className={styles.featuresGrid}>
                            {[
                                { icon: <Search size={28} />, title: 'Technical SEO Audit', desc: 'Core Web Vitals, crawlability, schema markup, internal linking, and index coverage. We fix what search engines see before we build.' },
                                { icon: <FileText size={28} />, title: 'Content Architecture', desc: 'Keyword clustering, topic authority mapping, and content calendars built around buyer intent — not keyword volume alone.' },
                                { icon: <Zap size={28} />, title: 'GEO Optimisation', desc: 'Structured data, FAQ layers, entity optimisation, and citation building to rank in AI-generated answers and knowledge panels.' },
                                { icon: <Link2 size={28} />, title: 'Link Building', desc: 'Digital PR, guest posting, and resource link acquisition from relevant, high-authority domains. No spam, no shortcuts.' },
                                { icon: <TrendingUp size={28} />, title: 'Programmatic SEO', desc: 'AI-assisted content production at scale — 50–500 pages per quarter targeting long-tail clusters with unique, indexed content.' },
                                { icon: <BarChart3 size={28} />, title: 'Monthly Reporting', desc: 'Ranking movement, traffic attribution, lead conversion analysis, and strategic recommendations — every 30 days.' },
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
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>How We Work</h2>
                        <div className={styles.processGrid}>
                            {[
                                { n: '01', title: 'Audit', desc: 'Full technical, content, and backlink audit to identify quick wins and strategic gaps.' },
                                { n: '02', title: 'Strategy', desc: 'Keyword research, content architecture, and 12-month ranking roadmap.' },
                                { n: '03', title: 'Execute', desc: 'Content production, technical fixes, and link acquisition in monthly sprints.' },
                                { n: '04', title: 'Report', desc: 'Monthly calls to review performance, adjust strategy, and plan the next sprint.' },
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
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Monthly Retainers</h2>
                        <div className={styles.pricingGrid}>
                            {[
                                { name: 'Starter', price: '£1,200', period: 'mo', features: ['Technical audit & fixes', '4 articles/month', 'Monthly reporting', 'Basic GEO setup', 'Keyword tracking (100)'], primary: false },
                                { name: 'Growth', price: '£2,800', period: 'mo', features: ['Everything in Starter', '12 articles/month', 'Link building (4/mo)', 'GEO content layer', 'Keyword tracking (500)', 'Competitor analysis'], primary: true },
                                { name: 'Scale', price: '£5,500', period: 'mo', features: ['Everything in Growth', 'Programmatic SEO', '30+ articles/month', 'Digital PR campaign', 'Unlimited keyword tracking', 'Weekly strategy calls'], primary: false },
                            ].map(tier => (
                                <div key={tier.name} className={tier.primary ? styles.pricingCardFeatured : styles.pricingCard}>
                                    <div className={styles.pricingName}>{tier.name}</div>
                                    <div className={styles.pricingPrice}>{tier.price}<span>/{tier.period}</span></div>
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

                <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'var(--bg-primary)', borderTop: '1px solid var(--border-accent)' }}>
                    <div style={{ maxWidth: '580px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Ready to own your category online?
                        </h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Book a free SEO audit call. We'll review your current rankings and show you exactly where you're losing traffic to competitors.
                        </p>
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, #22D3EE, #6366F1)',
                            color: '#fff', fontWeight: 800, textDecoration: 'none',
                            padding: '1rem 2.5rem', borderRadius: '0.875rem',
                            boxShadow: '0 8px 32px rgba(34,211,238,0.3)',
                        }}>
                            Get Free SEO Audit →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
