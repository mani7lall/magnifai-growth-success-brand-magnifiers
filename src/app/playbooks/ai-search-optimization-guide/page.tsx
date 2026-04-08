import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Search Optimisation Guide 2026 — GEO for B2B Websites | WeMagnifAI',
    description: 'How to optimise your content for ChatGPT, Perplexity, Google AI Overviews, and AI-powered answer engines. The tactical GEO guide for B2B teams in 2026.',
};

const tableOfContents = [
    { id: 'what-is-geo', title: 'Section 1: What Is GEO?' },
    { id: 'why-it-matters', title: 'Section 2: Why GEO Matters Now' },
    { id: 'answer-first', title: 'Section 3: The Answer-First Content Structure' },
    { id: 'schema', title: 'Section 4: Schema Markup for AI Engines' },
    { id: 'entity', title: 'Section 5: Entity & Authority Building' },
    { id: 'measurement', title: 'Section 6: Measuring GEO Performance' },
];

const articleSchema = generateArticleSchema(
    'AI Search Optimisation Guide 2026',
    'How to optimise your content for ChatGPT, Perplexity, Google AI Overviews, and AI-powered answer engines.',
    '2026-02-01', '2026-04-01',
    'https://wemagnifai.com/playbooks/ai-search-optimization-guide',
);
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://wemagnifai.com' },
    { name: 'Playbooks', url: 'https://wemagnifai.com/playbooks' },
    { name: 'AI Search Optimisation Guide', url: 'https://wemagnifai.com/playbooks/ai-search-optimization-guide' },
]);

export default function AISearchOptimizationGuide() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                <div style={{ padding: '1.5rem 2rem 0', maxWidth: '1200px', margin: '0 auto' }}>
                    <nav style={{ display: 'flex', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
                        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
                        <span>/</span>
                        <Link href="/playbooks" style={{ color: '#64748b', textDecoration: 'none' }}>Playbooks</Link>
                        <span>/</span>
                        <span style={{ color: 'var(--text-muted)' }}>AI Search Optimisation Guide</span>
                    </nav>
                </div>

                <section style={{ padding: '4rem 2rem 3rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            <span style={{
                                background: 'rgba(16,185,129,0.15)', color: '#34d399',
                                border: '1px solid rgba(16,185,129,0.3)',
                                fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem',
                                borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em',
                            }}>
                                SEO & GEO
                            </span>
                            <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                🕐 20 min read · 6 sections
                            </span>
                            <span style={{
                                background: 'rgba(16,185,129,0.1)', color: '#34d399',
                                border: '1px solid rgba(16,185,129,0.2)',
                                fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem',
                                borderRadius: '999px',
                            }}>New 2026</span>
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.2, fontWeight: 700, marginBottom: '1.25rem',
                        }}>
                            AI Search Optimisation Guide 2026
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.75 }}>
                            Generative Engine Optimisation (GEO) is not a buzzword — it's the new foundation of organic visibility. This guide covers the exact tactics to make your content discovered, cited, and summarised by ChatGPT, Perplexity, Google AI Overviews, and every AI-powered answer engine that matters in 2026.
                        </p>
                    </div>
                </section>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '4rem', alignItems: 'start' }}>
                    <article>
                        {[
                            {
                                id: 'what-is-geo',
                                title: 'Section 1: What Is GEO?',
                                content: 'Generative Engine Optimisation (GEO) is the practice of structuring content so that AI-powered answer engines — ChatGPT, Perplexity, Google AI Overviews, Claude, Gemini, and others — cite your content in their responses. Unlike traditional SEO, which prioritises ranking on a results page, GEO prioritises being the source that AI engines trust, cite, and summarise. The shift is fundamental: from being found to being used as the answer.',
                                highlight: { label: 'Definition', text: 'GEO (Generative Engine Optimisation) is the discipline of optimising content to be cited and used by AI-powered answer engines, not just ranked in traditional search results.', color: '#10b981' },
                            },
                            {
                                id: 'why-it-matters',
                                title: 'Section 2: Why GEO Matters Now',
                                content: 'Traditional blue-link search clicks declined by an estimated 25% in 2025 as AI Overviews and chat interfaces intercepted queries. For B2B queries — "best CRM for agencies", "how to improve website conversion rate", "top AI tools for marketing" — AI engines now provide the first answer. If your content is not in those answers, you are invisible to an increasing proportion of your ICP.',
                                highlight: { label: 'The Shift', text: 'Research suggests 30-40% of informational queries are now resolved without a click. For B2B research queries, AI-powered answers are becoming the default first touchpoint.', color: '#f59e0b' },
                            },
                            {
                                id: 'answer-first',
                                title: 'Section 3: The Answer-First Content Structure',
                                content: 'AI engines cite content that directly answers questions. The answer-first format means your H1 should be a question or a direct statement of the answer. Your first 100 words should fully address the core query. Subsequent sections deepen the answer with evidence, examples, and nuance. Every heading should be a question or a direct claim. Avoid narrative build-up — AI models excerpt the most direct response, not the most eloquent introduction.',
                                highlight: { label: 'Format Rule', text: 'Structure: Direct answer (100 words) → Why it matters (evidence) → How to implement (steps) → Caveats and context (nuance) → Related answers (internal links).', color: '#6366f1' },
                            },
                            {
                                id: 'schema',
                                title: 'Section 4: Schema Markup for AI Engines',
                                content: 'Structured data (schema.org markup) signals to AI engines what your content is, who wrote it, and how authoritative it is. The priority schema types for GEO: FAQPage (for question-answer content), Article (with author and organisation), HowTo (for process content), and Organization (for entity definition). Schema doesn\'t guarantee citation, but it significantly increases the probability by making your content machine-readable and unambiguous.',
                            },
                            {
                                id: 'entity',
                                title: 'Section 5: Entity & Authority Building',
                                content: 'AI models have "knowledge" of entities — organisations, people, concepts — built from their training data and ongoing retrieval. Building entity recognition means ensuring that consistent, accurate information about your organisation appears across authoritative sources: your website, LinkedIn, Google Business Profile, industry directories, press mentions, and third-party review sites like Clutch or G2. Consistency of name, description, and claims across all these sources reinforces your entity in AI knowledge graphs.',
                            },
                            {
                                id: 'measurement',
                                title: 'Section 6: Measuring GEO Performance',
                                content: 'GEO measurement is still evolving, but the core signals are: (1) Direct traffic increases — AI-cited sources often drive direct navigation rather than click-throughs. (2) Brand search volume — if AI engines are mentioning your brand, branded search queries increase. (3) Manual citation checking — search your target queries on Perplexity, ChatGPT, and Google AI Overviews monthly and record whether your content is cited. (4) Share of Voice in AI tools — track which competitors are cited alongside or instead of you.',
                            },
                        ].map(section => (
                            <section key={section.id} id={section.id} style={{ marginBottom: '4rem' }}>
                                <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                                    {section.title}
                                </h2>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: section.highlight ? '1.5rem' : 0, fontSize: '1rem' }}>
                                    {section.content}
                                </p>
                                {section.highlight && (
                                    <div style={{
                                        background: `${section.highlight.color}10`,
                                        border: `1px solid ${section.highlight.color}30`,
                                        borderLeft: `4px solid ${section.highlight.color}`,
                                        borderRadius: '0.75rem', padding: '1.5rem',
                                    }}>
                                        <p style={{ color: section.highlight.color, fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                                            {section.highlight.label}
                                        </p>
                                        <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                                            {section.highlight.text}
                                        </p>
                                    </div>
                                )}
                            </section>
                        ))}

                        <div style={{
                            background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(99,102,241,0.08))',
                            border: '1px solid rgba(16,185,129,0.25)', borderRadius: '1.25rem',
                            padding: '2.5rem', textAlign: 'center',
                        }}>
                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '0.75rem' }}>
                                Want a GEO Audit of Your Website?
                            </h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                                We'll audit your current content structure for AI discoverability and give you a prioritised action list.
                            </p>
                            <Link href="/free-audit" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#10b981', color: '#fff',
                                padding: '1rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 700, textDecoration: 'none',
                            }}>
                                Book a Free GEO Audit →
                            </Link>
                        </div>
                    </article>

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
                                        borderRadius: '0.5rem', lineHeight: 1.4,
                                    }}>
                                        {item.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div style={{ marginTop: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1.25rem', padding: '1.5rem' }}>
                            <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                                Related
                            </p>
                            {[
                                { label: '📈 B2B Growth System', href: '/playbooks/b2b-growth-system-2026' },
                                { label: '📋 Website Audit Checklist', href: '/lead-magnets/website-audit-checklist' },
                                { label: '📚 All Resources', href: '/resources' },
                            ].map(r => (
                                <Link key={r.href} href={r.href} style={{
                                    display: 'block', color: 'var(--text-muted)',
                                    textDecoration: 'none', fontSize: '0.875rem',
                                    padding: '0.5rem 0', borderBottom: '1px solid var(--glass-border)',
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
