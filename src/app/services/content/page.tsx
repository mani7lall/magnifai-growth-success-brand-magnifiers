import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, PenTool, Video, Newspaper, Podcast, Mail, BarChart3 } from 'lucide-react';
import styles from '../services.module.css';

export const metadata = {
    title: 'Content Strategy Services | WeMagnifAI',
    description: 'Content strategy that builds authority, attracts ideal buyers, and compounds over time. Articles, guides, video scripts, newsletters, and AI-assisted content systems.',
};

export default function ContentPage() {
    return (
        <>
            <Header />
            <main className={styles.servicePage} style={{ '--accent-color': '#ec4899', '--accent-light': '#f472b6', '--icon-bg': 'rgba(236,72,153,0.12)', '--icon-color': '#ec4899' } as React.CSSProperties}>
                <section className={styles.heroSection}>
                    <span className={styles.eyebrow}>Content Strategy</span>
                    <h1 className={styles.heroTitle}>
                        Content That Compounds.
                    </h1>
                    <p className={styles.heroDescription}>
                        Stop publishing into the void. We build content systems that attract qualified buyers, rank in search and AI, and turn your expertise into a growth engine.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Start Content Strategy <ArrowRight size={20} />
                    </Link>
                </section>

                <section className={styles.sectionDark}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Content Services</h2>
                        <p className={styles.sectionSubtitle} style={{ color: '#94a3b8' }}>Strategy-first. Every piece serves a purpose in your growth system.</p>
                        <div className={styles.featuresGrid}>
                            {[
                                { icon: <PenTool size={28} />, title: 'Long-Form Articles', desc: 'SEO and GEO-optimised deep-dive articles (2,000–6,000 words) that build topical authority and rank for high-intent queries.' },
                                { icon: <Newspaper size={28} />, title: 'Newsletter Strategy', desc: 'Weekly or bi-weekly newsletters that nurture your audience, drive referrals, and build a moat against platform dependency.' },
                                { icon: <Video size={28} />, title: 'Video & Podcast Scripts', desc: 'Scripted content for YouTube, LinkedIn video, and podcast formats — repurposed into written content across channels.' },
                                { icon: <Mail size={28} />, title: 'Email Sequences', desc: 'Onboarding, nurture, re-engagement, and sales sequences that convert leads into clients on autopilot.' },
                                { icon: <Podcast size={28} />, title: 'Thought Leadership', desc: 'LinkedIn ghostwriting, op-eds, and guest posts that position your founders as category authorities.' },
                                { icon: <BarChart3 size={28} />, title: 'Content Analytics', desc: 'Monthly content performance reviews, attribution modelling, and content ROI reporting against pipeline metrics.' },
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
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Our Content Process</h2>
                        <div className={styles.processGrid}>
                            {[
                                { n: '01', title: 'Audit & Strategy', desc: 'Content audit, competitor analysis, audience research, and 12-month content calendar.' },
                                { n: '02', title: 'Brief & Produce', desc: 'Detailed content briefs + AI-assisted production with human editing and brand voice matching.' },
                                { n: '03', title: 'Optimise & Publish', desc: 'SEO/GEO optimisation, internal linking, schema markup, and publishing in your CMS.' },
                                { n: '04', title: 'Distribute & Measure', desc: 'Multi-channel distribution and monthly performance reporting against pipeline metrics.' },
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
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Monthly Content Packages</h2>
                        <div className={styles.pricingGrid}>
                            {[
                                { name: 'Essentials', price: '£950', period: 'mo', features: ['4 long-form articles', 'SEO + GEO optimised', 'Content calendar', 'Monthly reporting', 'Published in your CMS'], primary: false },
                                { name: 'Authority', price: '£2,200', period: 'mo', features: ['12 articles + 4 LinkedIn pieces', 'Weekly newsletter', 'Email sequence (1/quarter)', 'Full distribution strategy', 'Content attribution report', 'Strategy call monthly'], primary: true },
                                { name: 'Machine', price: '£4,500', period: 'mo', features: ['30+ content pieces/month', 'Full omni-channel distribution', 'Podcast/video scripts', 'Thought leadership programme', 'Dedicated content lead', 'Weekly performance review'], primary: false },
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

                <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'var(--bg-primary)', borderTop: '1px solid rgba(236,72,153,0.25)' }}>
                    <div style={{ maxWidth: '580px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Ready to make content your #1 growth channel?
                        </h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Book a content strategy call. We'll audit your current content and map out a 90-day plan to build authority in your market.
                        </p>
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, #ec4899, #8B5CF6)',
                            color: '#fff', fontWeight: 800, textDecoration: 'none',
                            padding: '1rem 2.5rem', borderRadius: '0.875rem',
                            boxShadow: '0 8px 32px rgba(236,72,153,0.3)',
                        }}>
                            Book Content Strategy Call →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
