import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'B2B Website Growth System 2026 — The Complete Framework | WeMagnifAI',
    description: 'The complete B2B website growth system for 2026. Covers positioning, conversion architecture, GEO optimisation, content strategy, and compounding growth flywheels for modern B2B buyers.',
};

const tableOfContents = [
    { id: 'positioning', title: 'Section 1: Positioning & Differentiation' },
    { id: 'conversion', title: 'Section 2: Conversion Architecture' },
    { id: 'geo', title: 'Section 3: GEO & AI Search Visibility' },
    { id: 'content', title: 'Section 4: Content Engine' },
    { id: 'trust', title: 'Section 5: Trust & Social Proof Systems' },
    { id: 'leads', title: 'Section 6: Lead Capture & Nurture' },
    { id: 'measurement', title: 'Section 7: Measurement & Iteration' },
];

const articleSchema = generateArticleSchema(
    'B2B Website Growth System 2026',
    'The complete framework for turning your B2B website into a compounding revenue engine.',
    '2026-01-15', '2026-04-01', 'https://wemagnifai.com/playbooks/b2b-growth-system-2026',
);
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://wemagnifai.com' },
    { name: 'Playbooks', url: 'https://wemagnifai.com/playbooks' },
    { name: 'B2B Website Growth System 2026', url: 'https://wemagnifai.com/playbooks/b2b-growth-system-2026' },
]);

export default function B2BSystemPlaybook() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* BREADCRUMB */}
                <div style={{ padding: '1.5rem 2rem 0', maxWidth: '1200px', margin: '0 auto' }}>
                    <nav style={{ display: 'flex', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
                        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
                        <span>/</span>
                        <Link href="/playbooks" style={{ color: '#64748b', textDecoration: 'none' }}>Playbooks</Link>
                        <span>/</span>
                        <span style={{ color: 'var(--text-muted)' }}>B2B Growth System 2026</span>
                    </nav>
                </div>

                {/* HERO */}
                <section style={{
                    padding: '4rem 2rem 3rem',
                    borderBottom: '1px solid var(--glass-border)',
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            <span style={{
                                background: 'rgba(99,102,241,0.15)', color: '#818cf8',
                                border: '1px solid rgba(99,102,241,0.3)',
                                fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem',
                                borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em',
                            }}>
                                Growth Strategy
                            </span>
                            <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                🕐 25 min read · 7 sections
                            </span>
                            <span style={{
                                background: 'rgba(99,102,241,0.1)', color: '#818cf8',
                                border: '1px solid rgba(99,102,241,0.2)',
                                fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem',
                                borderRadius: '999px',
                            }}>
                                Most Popular
                            </span>
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.2, fontWeight: 700, marginBottom: '1.25rem',
                        }}>
                            B2B Website Growth System 2026
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                            The complete framework for turning your B2B website from a digital brochure into a compounding revenue engine. This playbook covers positioning, conversion architecture, GEO visibility, and the measurement systems that make growth predictable — not accidental.
                        </p>
                    </div>
                </section>

                {/* CONTENT */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '4rem', alignItems: 'start' }}>

                    {/* MAIN CONTENT */}
                    <article>

                        {/* TOC */}
                        <div style={{
                            background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                            borderRadius: '1.25rem', padding: '1.75rem', marginBottom: '3rem',
                            display: 'none',
                        }} id="toc-mobile" />

                        {/* Section 1 */}
                        <section id="positioning" style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                                Section 1: Positioning & Differentiation
                            </h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
                                The single biggest growth lever for most B2B websites isn't traffic — it's positioning. A generic "we help businesses grow" message is invisible to modern buyers who are drowning in options. The goal is to become the only obvious choice for a specific, high-value problem.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
                                Start with your ICP (Ideal Customer Profile). Not a demographic profile — a psychographic one. What specific outcome do they desperately want? What have they already tried that hasn't worked? What do they believe about the category that is holding them back?
                            </p>
                            <div style={{
                                background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                                borderLeft: '4px solid #6366f1', borderRadius: '0.75rem', padding: '1.5rem',
                                marginBottom: '1.5rem',
                            }}>
                                <p style={{ color: '#818cf8', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                                    Key Takeaway
                                </p>
                                <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                    Your homepage should answer "Why you, why now, and why not your competitor?" within 5 seconds. Test this with someone unfamiliar with your business.
                                </p>
                            </div>
                            <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                The Positioning Formula
                            </h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                                Use this structure: <em style={{ color: '#e2e8f0' }}>"We help [specific ICP] achieve [specific outcome] without [specific frustration] — even if [common objection]."</em> Run it past three ideal clients. If they say "that's exactly my problem", your positioning is working.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section id="conversion" style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                                Section 2: Conversion Architecture
                            </h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
                                Most B2B websites are built to impress, not convert. The architecture of a high-converting website follows a deliberate visitor journey: awareness → interest → trust → action. Each page has one job, and one primary CTA.
                            </p>
                            <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>The 5-Layer Conversion Stack</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                {[
                                    ['Layer 1 — Headline', 'Communicates the specific outcome in plain language. No clever wordplay.'],
                                    ['Layer 2 — Sub-headline', 'Addresses the primary objection or mechanism. "Here\'s how we do it differently."'],
                                    ['Layer 3 — Social Proof', 'Specific results, not vague testimonials. Numbers matter. "3x leads in 90 days."'],
                                    ['Layer 4 — Risk Reversal', 'Remove friction from the decision. Free audit, money-back, pilot project.'],
                                    ['Layer 5 — CTA', 'One clear next step. Not "Learn More" — "Book a Free 30-Minute Strategy Call."'],
                                ].map(([title, desc]) => (
                                    <div key={title as string} style={{
                                        display: 'flex', gap: '1rem', alignItems: 'flex-start',
                                        background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                        borderRadius: '0.875rem', padding: '1rem 1.25rem',
                                    }}>
                                        <div>
                                            <p style={{ color: '#818cf8', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{title}</p>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section id="geo" style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                                Section 3: GEO & AI Search Visibility
                            </h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
                                Generative Engine Optimisation (GEO) is the practice of structuring your content to be cited and summarised by AI-powered search tools — ChatGPT Search, Perplexity, Google AI Overviews, Claude, and others. By 2026, an estimated 30% of search queries are already resolved by AI answers without a click.
                            </p>
                            <div style={{
                                background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
                                borderLeft: '4px solid #10b981', borderRadius: '0.75rem', padding: '1.5rem',
                                marginBottom: '1.5rem',
                            }}>
                                <p style={{ color: '#34d399', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                                    GEO Principle
                                </p>
                                <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                    AI models cite sources that are authoritative, clearly structured, and written in an answer-first format. Write every piece of content as if you're answering a specific question — because you are.
                                </p>
                            </div>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                                Key GEO tactics: answer-first H1s, FAQ schema markup, clear entity definition (who you are, what you do, where you operate), citation-worthy statistics with sources, and structured long-form content that demonstrates topical authority across your niche.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section id="content" style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                                Section 4: Content Engine
                            </h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
                                A content engine is a systematic process for producing, distributing, and repurposing content that builds authority, captures organic traffic, and generates qualified leads — without requiring heroic effort each week.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                                The modern B2B content engine starts with 3-5 "pillar" topics that directly intersect your ICP's biggest problems. Each pillar becomes a hub page, supported by cluster content, case studies, and tools. The hub captures search intent; the cluster content captures long-tail queries and demonstrates depth.
                            </p>
                        </section>

                        {/* Sections 5-7 condensed */}
                        {[
                            { id: 'trust', title: 'Section 5: Trust & Social Proof Systems', content: 'Modern B2B buyers are deeply sceptical. The trust signals that worked in 2020 — generic testimonials, logo strips — are table stakes. What moves the needle in 2026 is specificity. Specific results ("127 leads in 60 days"), named clients with context, before/after case study narratives, and third-party validation from platforms like G2 or Clutch. Every claim needs evidence. Every evidence element needs to be scannable.' },
                            { id: 'leads', title: 'Section 6: Lead Capture & Nurture', content: 'The most overlooked growth lever is the quality of your lead capture and nurture sequence. Most B2B sites offer one conversion point — a contact form. High-performance sites offer a tiered system: low-commitment (newsletter/checklist), medium-commitment (audit/assessment), and high-commitment (book a call). Each tier captures a different level of readiness, and your nurture sequence guides leads up the ladder.' },
                            { id: 'measurement', title: 'Section 7: Measurement & Iteration', content: 'A growth system without measurement is a guessing system. The non-negotiable baseline: GA4 properly configured with conversion events, a heatmap tool (Hotjar or Microsoft Clarity), and a monthly review cadence. Review the three metrics that matter most: visitor-to-lead rate, lead-to-call rate, and call-to-client rate. Improving any of these by 20% compounds into a material revenue difference.' },
                        ].map(section => (
                            <section key={section.id} id={section.id} style={{ marginBottom: '4rem' }}>
                                <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                                    {section.title}
                                </h2>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                                    {section.content}
                                </p>
                            </section>
                        ))}

                        {/* CTA */}
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))',
                            border: '1px solid rgba(99,102,241,0.25)', borderRadius: '1.25rem',
                            padding: '2.5rem', textAlign: 'center', marginTop: '2rem',
                        }}>
                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '0.75rem' }}>
                                Ready to implement this system?
                            </h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                                Book a free audit and we'll show you which parts of this system your website is missing — and the priority order to implement them.
                            </p>
                            <Link href="/free-audit" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#6366f1', color: '#fff',
                                padding: '1rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 700, textDecoration: 'none',
                            }}>
                                Book a Free Audit →
                            </Link>
                        </div>
                    </article>

                    {/* SIDEBAR TOC */}
                    <aside style={{ position: 'sticky', top: '6rem' }}>
                        <div style={{
                            background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                            borderRadius: '1.25rem', padding: '1.5rem',
                        }}>
                            <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                                Table of Contents
                            </p>
                            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                {tableOfContents.map(item => (
                                    <a key={item.id} href={`#${item.id}`} style={{
                                        color: 'var(--text-muted)', fontSize: '0.875rem',
                                        textDecoration: 'none', padding: '0.4rem 0.75rem',
                                        borderRadius: '0.5rem', transition: 'all 0.2s',
                                        lineHeight: 1.4,
                                    }}>
                                        {item.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div style={{
                            background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)',
                            borderRadius: '1.25rem', padding: '1.5rem', marginTop: '1rem',
                            textAlign: 'center',
                        }}>
                            <p style={{ color: '#818cf8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                                Related Resources
                            </p>
                            {[
                                { label: '📋 Website Audit Checklist', href: '/lead-magnets/website-audit-checklist' },
                                { label: '🧮 ROI Calculator', href: '/tools/roi' },
                                { label: '⚖️ Tool Comparisons', href: '/compare' },
                            ].map(r => (
                                <Link key={r.href} href={r.href} style={{
                                    display: 'block', color: 'var(--text-muted)',
                                    textDecoration: 'none', fontSize: '0.85rem',
                                    padding: '0.5rem 0', borderBottom: '1px solid var(--glass-border)',
                                    transition: 'color 0.2s',
                                }}>
                                    {r.label}
                                </Link>
                            ))}
                        </div>
                    </aside>

                </div>

            </main>
            <Footer />
        </>
    );
}
