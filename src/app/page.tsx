import Header from '@/components/Header';
import { BentoGrid, BentoItem } from '@/components/BentoGrid';
import styles from './page.module.css';
import { Bot, Zap, Globe, Database } from 'lucide-react';
import TrustedBy from '@/components/TrustedBy';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ServicesGrid from '@/components/ServicesGrid';
import TerminalDemo from '@/components/TerminalDemo';

import { SliceZone } from "@prismicio/react";
import { createClient } from "@/lib/prismic";
import { components } from "@/slices";

import { Render } from '@measured/puck'
import { config } from '@/lib/puck-config'
import fs from 'fs'
import path from 'path'

// Try to load content: Puck -> Prismic -> Static Fallback
async function getPageData() {
    // 1. Try Puck Local Data
    try {
        const DATA_FILE = path.join(process.cwd(), 'src/content/puck-data.json')
        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8')
            const puckData = JSON.parse(fileContent)
            // Only use Puck if it has actual content
            if (puckData.content && puckData.content.length > 0) {
                return { type: 'puck' as const, data: puckData }
            }
        }
    } catch (e) {
        console.error('Puck load failed', e)
    }

    // 2. Try Prismic (only if explicitly enabled)
    if (process.env.ENABLE_PRISMIC === 'true' && process.env.PRISMIC_ACCESS_TOKEN) {
        try {
            const client = createClient();
            const page = await client.getSingle("homepage" as any);
            return { type: 'prismic' as const, page };
        } catch (error) {
            console.log('Prismic unavailable, using static fallback');
        }
    }

    // 3. Static fallback
    return { type: 'static' as const, page: null };
}

export default async function Home() {
    const data = await getPageData();

    // If Puck content is available, render it
    if (data.type === 'puck') {
        return (
            <>
                <Header />
                <main className={styles.main}>
                    <Render config={config} data={data.data} />
                </main>
                <Footer />
            </>
        );
    }

    // If Prismic content is available, use SliceZone
    if (data.type === 'prismic' && data.page) {
        return (
            <>
                <Header />
                <main className={styles.main}>
                    <SliceZone slices={data.page.data.slices} components={components} />
                </main>
                <Footer />
            </>
        );
    }

    // Static fallback homepage
    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <Zap size={14} />
                            <span>v2.0.0 Now Live</span>
                        </div>

                        <h1 className={styles.heroTitle}>
                            The Growth Engine<br />For Scaling Agencies
                        </h1>

                        <p className={styles.heroDescription}>
                            Stop relying on luck. We build automated AI pipelines that specifically target, nurture, and close your ideal clients. No fluff. Just code &amp; revenue.
                        </p>

                        <div className={styles.ctaGroup}>
                            <Link href="/book" className={styles.primaryCta}>
                                Start Growth Engine
                            </Link>
                            <Link href="/case-studies" className={styles.secondaryCta}>
                                View System Architecture
                            </Link>
                        </div>

                        <TerminalDemo />
                    </div>
                </section>

                {/* Metrics Strip */}
                <div className={styles.metricsStrip}>
                    <div className={styles.metricItem}>
                        <span className={styles.metricValue}>4x</span>
                        <span className={styles.metricLabel}>Faster Execution</span>
                    </div>
                    <div className={styles.metricItem}>
                        <span className={styles.metricValue}>98%</span>
                        <span className={styles.metricLabel}>Open Rates</span>
                    </div>
                    <div className={styles.metricItem}>
                        <span className={styles.metricValue}>24/7</span>
                        <span className={styles.metricLabel}>AI Operation</span>
                    </div>
                    <div className={styles.metricItem}>
                        <span className={styles.metricValue}>&lt; 7 Days</span>
                        <span className={styles.metricLabel}>To Launch</span>
                    </div>
                </div>

                {/* Trusted By */}
                <TrustedBy />

                {/* Architecture Section */}
                <section className={styles.sectionDark}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>System Architecture</h2>
                        <p className={styles.sectionSubtitle}>
                            A modular, scalable ecosystem designed for complete market dominance.
                        </p>
                        <BentoGrid>
                            <BentoItem
                                title="AI Agents Swarm"
                                description="Autonomous agents that handle outreach, booking, and support 24/7 without human intervention."
                                icon={<Bot size={32} />}
                                span={2}
                            />
                            <BentoItem
                                title="Visual Intelligence"
                                description="Generative UI that adapts to user behavior in real-time."
                                icon={<Zap size={32} />}
                            />
                            <BentoItem
                                title="Global CDN"
                                description="Edge-deployed content delivery for sub-100ms load times worldwide."
                                icon={<Globe size={32} />}
                            />
                            <BentoItem
                                title="Data Lake"
                                description="Centralized intelligence gathering from every interaction point."
                                icon={<Database size={32} />}
                                span={2}
                            />
                        </BentoGrid>
                    </div>
                </section>

                {/* Services Grid */}
                <ServicesGrid />

                {/* ── TELEGRAM GROWTH ENGINE TEASER ────────────────────────────── */}
                <section style={{
                    padding: '5rem 2rem',
                    borderTop: '1px solid rgba(34,211,238,0.18)',
                    borderBottom: '1px solid rgba(139,92,246,0.18)',
                    background: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(99,102,241,0.16) 45%, rgba(139,92,246,0.18) 100%)',
                }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                            gap: '2rem',
                            alignItems: 'center',
                        }}>
                            <div>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.35rem 0.9rem',
                                    borderRadius: '9999px',
                                    background: 'rgba(16,185,129,0.12)',
                                    border: '1px solid rgba(16,185,129,0.25)',
                                    marginBottom: '1rem',
                                }}>
                                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                                    <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 700 }}>New Product</span>
                                </div>
                                <h2 style={{
                                    color: '#fff',
                                    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                                    fontFamily: 'var(--font-playfair)',
                                    fontWeight: 900,
                                    lineHeight: 1.05,
                                    margin: '0 0 1rem',
                                }}>
                                    New: Telegram Growth Engine — Now Live
                                </h2>
                                <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                    1,284 leads scraped this week across 47 groups. Fully automated.
                                </p>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: '0.75rem',
                                    marginBottom: '1.75rem',
                                }}>
                                    {['AI Group Discovery', 'GPT-4o Content Engine', 'Lead Scoring', '3-Step DM Sequences'].map(item => (
                                        <div key={item} style={{
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '0.85rem',
                                            padding: '0.85rem 1rem',
                                            color: '#e2e8f0',
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                        }}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                    <Link href="/telegram-growth" style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        padding: '0.9rem 1.25rem', borderRadius: '0.8rem',
                                        background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)',
                                        color: '#fff', fontWeight: 800, textDecoration: 'none',
                                    }}>See How It Works →</Link>
                                    <Link href="/telegram-dashboard" style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        padding: '0.9rem 1.25rem', borderRadius: '0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#e2e8f0', fontWeight: 700, textDecoration: 'none',
                                    }}>View Live Dashboard →</Link>
                                </div>
                            </div>
                            <div style={{
                                background: 'rgba(5,5,5,0.35)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '1.5rem',
                                padding: '1.5rem',
                            }}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: '1rem',
                                }}>
                                    {[
                                        { label: 'Groups', value: '47' },
                                        { label: 'Leads', value: '1,284' },
                                        { label: 'DMs', value: '612' },
                                        { label: 'Pipeline', value: '£142k' },
                                    ].map(stat => (
                                        <div key={stat.label} style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '1rem',
                                            padding: '1rem',
                                        }}>
                                            <div style={{ color: '#22d3ee', fontSize: '1.7rem', fontWeight: 900, marginBottom: '0.25rem' }}>{stat.value}</div>
                                            <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700 }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* === SECTION A: RESOURCE HUB PREVIEW (Violet) === */}
                <section style={{
                    padding: '7rem 2rem',
                    borderTop: '1px solid var(--border-accent)',
                    background: 'var(--gradient-card)',
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <p style={{
                                fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                                textTransform: 'uppercase', color: 'var(--accent-primary)',
                                marginBottom: '1rem',
                            }}>
                                Resource Hub
                            </p>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontFamily: 'var(--font-playfair)',
                                fontWeight: 700, lineHeight: 1.15, margin: '0 0 1rem',
                                background: 'var(--gradient-hero)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                Everything You Need to Grow
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto' }}>
                                Guides, templates, calculators — all free.
                            </p>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '1.5rem',
                        }}>
                            {[
                                { emoji: '📖', label: 'PLAYBOOK', title: 'B2B Growth System 2026', href: '/playbooks/b2b-growth-system-2026' },
                                { emoji: '📊', label: 'CALCULATOR', title: 'Growth ROI Calculator', href: '/tools/roi' },
                                { emoji: '⚡', label: 'GUIDE', title: 'AI Search Optimisation Checklist', href: '/playbooks/ai-search-optimization-guide' },
                            ].map(card => (
                                <Link key={card.href} href={card.href} style={{
                                    display: 'block', textDecoration: 'none',
                                    background: 'rgba(139,92,246,0.06)',
                                    border: '1px solid var(--border-accent)',
                                    borderRadius: '1.25rem', padding: '2rem',
                                    transition: 'all 0.25s',
                                }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.emoji}</div>
                                    <span style={{
                                        display: 'inline-block',
                                        background: 'rgba(139,92,246,0.15)', color: 'var(--accent-glow)',
                                        border: '1px solid var(--border-accent)',
                                        fontSize: '10px', fontWeight: 700,
                                        padding: '0.2rem 0.6rem', borderRadius: '999px',
                                        textTransform: 'uppercase', letterSpacing: '0.08em',
                                        marginBottom: '0.75rem',
                                    }}>{card.label}</span>
                                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.35, margin: 0 }}>
                                        {card.title}
                                    </h3>
                                    <p style={{ color: 'var(--accent-glow)', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem' }}>
                                        Read →
                                    </p>
                                </Link>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                            <Link href="/resources" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'linear-gradient(135deg,#8B5CF6,#6366F1)',
                                color: '#fff', fontWeight: 700, textDecoration: 'none',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
                            }}>
                                Browse All Resources →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* === SECTION B: GROWTH STACK TEASER (Violet) === */}
                <section style={{
                    padding: '6rem 2rem',
                    background: 'rgba(139,92,246,0.04)',
                    borderTop: '1px solid var(--border-accent)',
                    borderBottom: '1px solid var(--border-accent)',
                }}>
                    <div style={{
                        maxWidth: '1200px', margin: '0 auto',
                        display: 'flex', gap: '4rem', alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        {/* Left */}
                        <div style={{ flex: '1', minWidth: '280px' }}>
                            <p style={{
                                fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                                textTransform: 'uppercase', color: 'var(--accent-primary)',
                                marginBottom: '1rem',
                            }}>
                                Growth Stack
                            </p>
                            <h2 style={{
                                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                                fontFamily: 'var(--font-playfair)', color: '#fff',
                                fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem',
                            }}>
                                Tools We Actually Use
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '400px' }}>
                                24 battle-tested tools across 8 categories.
                            </p>
                            <Link href="/growth-stack" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'var(--accent-primary)',
                                color: '#fff', fontWeight: 700, textDecoration: 'none',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                boxShadow: 'var(--glow-violet)',
                            }}>
                                Explore Growth Stack →
                            </Link>
                        </div>
                        {/* Right: pill tags */}
                        <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {['HubSpot', 'Ahrefs', 'Make.com', 'ConvertKit', 'Hotjar', 'Claude', 'Figma', 'Calendly'].map(tool => (
                                <span key={tool} style={{
                                    background: 'rgba(139,92,246,0.1)',
                                    border: '1px solid var(--border-accent)',
                                    color: '#C4B5FD',
                                    borderRadius: '999px',
                                    padding: '0.5rem 1.1rem',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                }}>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* === SECTION C: LEAD MAGNET CTA BAND (Violet-Cyan) === */}
                <section style={{
                    padding: '7rem 2rem',
                    background: 'linear-gradient(135deg,rgba(139,92,246,0.15),rgba(34,211,238,0.08))',
                    textAlign: 'center',
                }}>
                    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                        <p style={{
                            fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                            textTransform: 'uppercase', color: 'var(--accent-cyan)',
                            marginBottom: '1.25rem',
                        }}>
                            Free Download
                        </p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontFamily: 'var(--font-playfair)', color: '#fff',
                            fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem',
                        }}>
                            Website Growth Audit Checklist
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            The exact 47-point checklist used before every client engagement. 2,400+ downloads.
                        </p>
                        <Link href="/lead-magnets/website-audit-checklist" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg,#8B5CF6,#22D3EE)',
                            color: '#fff', fontWeight: 800, textDecoration: 'none',
                            padding: '1rem 2.5rem', borderRadius: '0.875rem', fontSize: '1.05rem',
                            boxShadow: '0 8px 32px rgba(139,92,246,0.4)',
                        }}>
                            Download Free →
                        </Link>
                    </div>
                </section>

                {/* RESOURCE HUB PREVIEW STRIP */}
                <section style={{
                    padding: '6rem 2rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.01)',
                }}>
                    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                    Free Resources
                                </p>
                                <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', margin: 0 }}>
                                    Explore Our Resource Hub
                                </h2>
                            </div>
                            <Link href="/resources" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                color: '#818cf8', fontWeight: 700, textDecoration: 'none',
                                fontSize: '0.95rem', whiteSpace: 'nowrap',
                            }}>
                                View All Resources →
                            </Link>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '1.25rem',
                        }}>
                            {[
                                { icon: '📈', cat: 'Guide', catColor: '#6366f1', title: 'B2B Website Growth System 2026', desc: 'The complete framework for turning your website into a compounding revenue engine.', time: '18 min read', href: '/playbooks/b2b-growth-system-2026' },
                                { icon: '🤖', cat: 'Guide', catColor: '#6366f1', title: 'AI Search Optimisation Checklist', desc: 'Make your content discoverable in ChatGPT, Perplexity, and Google AI Overviews.', time: '12 min read', href: '/playbooks/ai-search-optimization-guide' },
                                { icon: '✅', cat: 'Template', catColor: '#10b981', title: 'Website Growth Audit Checklist', desc: 'The 80-point audit used by 2,400+ growth teams to find revenue leaks.', time: 'Free Download', href: '/lead-magnets/website-audit-checklist' },
                            ].map(resource => (
                                <Link key={resource.href} href={resource.href} style={{
                                    display: 'block', textDecoration: 'none',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.5rem',
                                    transition: 'all 0.2s',
                                }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{resource.icon}</div>
                                    <span style={{
                                        display: 'inline-block',
                                        background: `${resource.catColor}15`, color: resource.catColor,
                                        border: `1px solid ${resource.catColor}30`,
                                        fontSize: '0.7rem', fontWeight: 700,
                                        padding: '0.15rem 0.5rem', borderRadius: '999px',
                                        textTransform: 'uppercase', letterSpacing: '0.05em',
                                        marginBottom: '0.6rem',
                                    }}>
                                        {resource.cat}
                                    </span>
                                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', lineHeight: 1.35, marginBottom: '0.5rem' }}>
                                        {resource.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                        {resource.desc}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: '#64748b', fontSize: '0.78rem' }}>🕐 {resource.time}</span>
                                        <span style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 600 }}>Read →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GROWTH STACK TEASER */}
                <section style={{
                    padding: '5rem 2rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                    <div style={{ maxWidth: '1300px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                            Trusted Tools
                        </p>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Tools We Trust &amp; Recommend
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                            Battle-tested across 40+ client accounts. No affiliate bias — just the stack that actually works.
                        </p>
                        <div style={{
                            display: 'flex', gap: '1rem', justifyContent: 'center',
                            flexWrap: 'wrap', marginBottom: '3rem',
                        }}>
                            {[
                                { name: 'HubSpot', emoji: '🟠', color: '#FF7A59' },
                                { name: 'Ahrefs', emoji: '🔵', color: '#1B6AC9' },
                                { name: 'Make.com', emoji: '⚙️', color: '#6D00CC' },
                                { name: 'Claude', emoji: '🤖', color: '#D4A96A' },
                            ].map(tool => (
                                <div key={tool.name} style={{
                                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.875rem', padding: '0.75rem 1.25rem',
                                }}>
                                    <span style={{ fontSize: '1.25rem' }}>{tool.emoji}</span>
                                    <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                        <Link href="/growth-stack" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            color: '#10b981', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
                        }}>
                            Explore Full Growth Stack →
                        </Link>
                    </div>
                </section>

                {/* LEAD MAGNET CTA BAND */}
                <section style={{
                    padding: '5rem 2rem',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 50%, rgba(236,72,153,0.08) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                    borderBottom: '1px solid rgba(99,102,241,0.2)',
                    textAlign: 'center',
                }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            ✅ Free Download
                        </div>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                            Get the Website Growth Audit Checklist — Free
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                            Used by 2,400+ founders and growth teams to find conversion leaks and revenue opportunities.
                        </p>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginBottom: '2rem' }}>
                            80 checks · 6 sections · Instant access
                        </p>
                        <Link href="/lead-magnets/website-audit-checklist" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: '#fff', color: '#050505',
                            padding: '1rem 2.5rem', borderRadius: '0.75rem',
                            fontWeight: 800, fontSize: '1rem', textDecoration: 'none',
                        }}>
                            Download Free Checklist →
                        </Link>
                    </div>
                </section>

                {/* LATEST INSIGHTS PREVIEW */}
                <section style={{
                    padding: '6rem 2rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <p style={{ color: '#ec4899', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                    Latest Thinking
                                </p>
                                <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', margin: 0 }}>
                                    Latest Insights
                                </h2>
                            </div>
                            <Link href="/insights" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                color: '#f472b6', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
                            }}>
                                View All Insights →
                            </Link>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '1.25rem',
                        }}>
                            {[
                                { cat: 'Strategy', title: 'Why GEO Will Replace SEO in 2026', desc: 'Generative Engine Optimisation is not a buzzword. Here is what it means and the 7 tactics to implement now.', time: '9 min', href: '/insights/automation-guide' },
                                { cat: 'Insights', title: 'The Death of Generic Agency Websites', desc: 'Why templated agency sites are losing business to specialist competitors — and the positioning strategy that wins.', time: '7 min', href: '/insights/branding-2025' },
                                { cat: 'AI & Automation', title: 'How AI is Revolutionising Small Business Marketing', desc: 'What once required teams of specialists can now be accomplished by a solo entrepreneur with the right stack.', time: '8 min', href: '/insights/ai-marketing' },
                            ].map(insight => (
                                <Link key={insight.href} href={insight.href} style={{
                                    display: 'block', textDecoration: 'none',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.5rem',
                                    transition: 'all 0.2s',
                                }}>
                                    <span style={{
                                        display: 'inline-block',
                                        background: 'rgba(236,72,153,0.1)', color: '#f472b6',
                                        border: '1px solid rgba(236,72,153,0.25)',
                                        fontSize: '0.7rem', fontWeight: 700,
                                        padding: '0.15rem 0.5rem', borderRadius: '999px',
                                        textTransform: 'uppercase', letterSpacing: '0.05em',
                                        marginBottom: '0.75rem',
                                    }}>
                                        {insight.cat}
                                    </span>
                                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.35, marginBottom: '0.6rem' }}>
                                        {insight.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                        {insight.desc}
                                    </p>
                                    <span style={{ color: '#64748b', fontSize: '0.78rem' }}>🕐 {insight.time} read</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEWSLETTER CTA STRIP */}
                <section style={{
                    padding: '5rem 2rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    textAlign: 'center',
                }}>
                    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📬</div>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '0.75rem' }}>
                            Join 3,000+ Founders Getting Weekly Growth Intelligence
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                            AI tools, growth frameworks, and case study teardowns — every Thursday. Free forever.
                        </p>
                        <form action="/newsletter" method="get" style={{
                            display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap',
                        }}>
                            <input
                                type="email" name="email" placeholder="your@email.com"
                                style={{
                                    flex: '1', minWidth: '220px', padding: '0.875rem 1rem',
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.625rem', color: '#fff',
                                    fontSize: '0.95rem', outline: 'none',
                                }}
                            />
                            <button type="submit" style={{
                                padding: '0.875rem 1.75rem',
                                background: '#6366f1', color: '#fff',
                                fontWeight: 700, border: 'none',
                                borderRadius: '0.625rem', cursor: 'pointer',
                                fontSize: '0.95rem', whiteSpace: 'nowrap',
                            }}>
                                Subscribe →
                            </button>
                        </form>
                        <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '1rem' }}>
                            No spam · Unsubscribe anytime · <Link href="/newsletter" style={{ color: '#818cf8', textDecoration: 'none' }}>See recent issues</Link>
                        </p>
                    </div>
                </section>

                {/* Testimonials */}
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}

export async function generateMetadata() {
    if (process.env.ENABLE_PRISMIC === 'true') {
        try {
            const client = createClient();
            const page = await client.getSingle("homepage" as any);
            return {
                title: page.data.meta_title || 'WeMagnifAI - The AI Growth Engine',
                description: page.data.meta_description || 'We build automated AI pipelines that target, nurture, and close your ideal clients.',
            };
        } catch {
            // Fall through to default
        }
    }
    return {
        title: 'WeMagnifAI - The AI Growth Engine',
        description: 'We build automated AI pipelines that target, nurture, and close your ideal clients.',
    };
}
