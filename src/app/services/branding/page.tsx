import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Palette, Type, Image, Grid, Sparkles, Package } from 'lucide-react';
import styles from '../services.module.css';

export const metadata = {
    title: 'Brand Identity Design | WeMagnifAI',
    description: 'Brand identity design for modern companies. Logo, colour system, typography, motion guidelines, and the complete visual language your brand needs to stand out.',
};

export default function BrandingPage() {
    return (
        <>
            <Header />
            <main className={styles.servicePage} style={{ '--accent-color': '#f59e0b', '--accent-light': '#fbbf24', '--icon-bg': 'rgba(245,158,11,0.12)', '--icon-color': '#f59e0b' } as React.CSSProperties}>
                <section className={styles.heroSection}>
                    <span className={styles.eyebrow}>Brand Identity</span>
                    <h1 className={styles.heroTitle}>
                        A Visual Identity<br />Worth Remembering.
                    </h1>
                    <p className={styles.heroDescription}>
                        We design brand identities that communicate instantly, scale beautifully, and make your company look as good as you actually are.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Start Brand Identity <ArrowRight size={20} />
                    </Link>
                </section>

                <section className={styles.sectionDark}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>What We Design</h2>
                        <p className={styles.sectionSubtitle} style={{ color: '#94a3b8' }}>Every element of your visual identity — built as a cohesive system.</p>
                        <div className={styles.featuresGrid}>
                            {[
                                { icon: <Sparkles size={28} />, title: 'Logo System', desc: 'Primary logo, wordmark, icon mark, and all lock-up variations — designed for every context from favicon to billboard.' },
                                { icon: <Palette size={28} />, title: 'Colour System', desc: 'Primary, secondary, and accent palettes with accessibility ratios, digital RGB values, and print CMYK equivalents.' },
                                { icon: <Type size={28} />, title: 'Typography', desc: 'Type selection, hierarchy rules, and pairing guidelines. Every heading, body, and caption style defined for consistency.' },
                                { icon: <Image size={28} />, title: 'Photography Style', desc: 'Art direction guidelines, moodboard, and image selection rules so your photo choices always feel on-brand.' },
                                { icon: <Grid size={28} />, title: 'Brand Patterns & Textures', desc: 'Custom graphic elements, patterns, and textures that make your marketing materials unmistakably yours.' },
                                { icon: <Package size={28} />, title: 'Brand Guidelines', desc: 'A comprehensive brand guidelines document with usage rules, examples, and common mistakes to avoid.' },
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
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Design Process</h2>
                        <div className={styles.processGrid}>
                            {[
                                { n: '01', title: 'Exploration', desc: 'Moodboarding, competitor visual audit, and direction selection from 3 distinct concepts.' },
                                { n: '02', title: 'Concept', desc: 'Logo concepts developed from the selected direction with rationale and application mockups.' },
                                { n: '03', title: 'Refinement', desc: 'Chosen concept refined across 2 revision rounds until every detail is perfect.' },
                                { n: '04', title: 'Delivery', desc: 'Full asset package delivered with source files, web exports, and brand guidelines.' },
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
                        <h2 className={styles.sectionTitle} style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Identity Packages</h2>
                        <div className={styles.pricingGrid}>
                            {[
                                { name: 'Logo Only', price: '£1,200', period: 'one-time', features: ['3 logo concepts', 'Primary logo finalized', 'All file formats', '2 revision rounds', 'Basic usage guidelines'], primary: false },
                                { name: 'Full Identity', price: '£4,500', period: 'one-time', features: ['Logo system', 'Full colour palette', 'Typography system', 'Brand patterns', 'Photography guidelines', 'Comprehensive brand guidelines', '3 revision rounds'], primary: true },
                                { name: 'Identity + Web', price: '£9,500', period: 'one-time', features: ['Everything in Full Identity', 'Website design (5 pages)', 'Social media templates', 'Email template design', 'Pitch deck template', 'Dedicated art director'], primary: false },
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

                <section style={{ padding: '6rem 2rem', textAlign: 'center', background: 'var(--bg-primary)', borderTop: '1px solid rgba(245,158,11,0.25)' }}>
                    <div style={{ maxWidth: '580px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Ready to look as good as you are?
                        </h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Share a brief about your brand and we'll come back with a free creative direction proposal within 48 hours.
                        </p>
                        <Link href="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                            color: '#fff', fontWeight: 800, textDecoration: 'none',
                            padding: '1rem 2.5rem', borderRadius: '0.875rem',
                            boxShadow: '0 8px 32px rgba(245,158,11,0.3)',
                        }}>
                            Start Brand Identity →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
