import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Website Redesign Checklist 2026 — The 90-Point B2B Guide | WeMagnifAI',
    description: 'The complete pre/during/post website redesign checklist for B2B businesses. Avoid the most common mistakes that tank SEO, conversions, and brand consistency.',
};

const tableOfContents = [
    { id: 'before', title: 'Section 1: Before You Start' },
    { id: 'strategy', title: 'Section 2: Strategy & Positioning' },
    { id: 'design', title: 'Section 3: Design & UX' },
    { id: 'seo', title: 'Section 4: SEO & Migration' },
    { id: 'launch', title: 'Section 5: Launch & Post-Launch' },
];

const articleSchema = generateArticleSchema(
    'Website Redesign Checklist 2026',
    'The 90-point pre/during/post checklist for B2B website redesigns.',
    '2026-03-01', '2026-04-01',
    'https://wemagnifai.com/playbooks/website-redesign-checklist',
);
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://wemagnifai.com' },
    { name: 'Playbooks', url: 'https://wemagnifai.com/playbooks' },
    { name: 'Website Redesign Checklist', url: 'https://wemagnifai.com/playbooks/website-redesign-checklist' },
]);

const checklistSections = [
    {
        id: 'before', title: 'Section 1: Before You Start',
        color: '#f59e0b',
        items: [
            'Define your primary redesign goal (traffic, leads, conversions, brand)',
            'Establish baseline metrics: traffic, bounce rate, conversion rate, top pages',
            'Audit your current top 20 organic pages — these must be preserved',
            'Identify your ICP and define who the new site is built for',
            'Agree on success metrics before the project begins',
            'Set a realistic timeline — most B2B redesigns take 8-16 weeks',
        ],
    },
    {
        id: 'strategy', title: 'Section 2: Strategy & Positioning',
        color: '#6366f1',
        items: [
            'Rewrite homepage positioning statement using answer-first format',
            'Map primary and secondary ICPs to page goals',
            'Define site architecture: max 3 clicks to any key page',
            'Plan conversion hierarchy: primary CTA, secondary CTA, tertiary CTA',
            'Identify lead magnet and audit offer placement',
            'Plan content hub structure for SEO and GEO',
        ],
    },
    {
        id: 'design', title: 'Section 3: Design & UX',
        color: '#ec4899',
        items: [
            'Establish design system: typography, colours, spacing, components',
            'Design mobile-first — mobile traffic is 60%+ for most B2B sites',
            'Ensure all CTAs are above the fold on mobile',
            'Validate page load targets: under 2.5s LCP on mobile',
            'Remove all stock photo clichés — replace with real team/product images',
            'Test all forms on mobile before launch',
        ],
    },
    {
        id: 'seo', title: 'Section 4: SEO & Migration',
        color: '#10b981',
        items: [
            'Map all current URLs to new URLs — create 301 redirects for every change',
            'Preserve all existing meta titles and descriptions as a baseline',
            'Re-implement canonical tags correctly on the new site',
            'Submit new XML sitemap to Google Search Console immediately post-launch',
            'Add schema markup: Organization, FAQPage, and BreadcrumbList at minimum',
            'Verify GA4 tracking is firing correctly on all key pages post-launch',
        ],
    },
    {
        id: 'launch', title: 'Section 5: Launch & Post-Launch',
        color: '#3b82f6',
        items: [
            'Do a soft launch with team first — test all forms, links, and CTAs',
            'Monitor Google Search Console for crawl errors in first 72 hours',
            'Check all redirect chains — no redirect should have more than 2 hops',
            'Monitor conversion rate for 30 days post-launch against baseline',
            'Install Hotjar (or Clarity) and review session recordings in first week',
            'Share launch internally and collect first-week feedback systematically',
        ],
    },
];

export default function WebsiteRedesignChecklist() {
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
                        <span style={{ color: 'var(--text-muted)' }}>Website Redesign Checklist</span>
                    </nav>
                </div>

                <section style={{ padding: '4rem 2rem 3rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            <span style={{
                                background: 'rgba(245,158,11,0.15)', color: '#fbbf24',
                                border: '1px solid rgba(245,158,11,0.3)',
                                fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem',
                                borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em',
                            }}>
                                Website Strategy
                            </span>
                            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>🕐 18 min read · 5 sections · 30 checks</span>
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.2, fontWeight: 700, marginBottom: '1.25rem',
                        }}>
                            Website Redesign Checklist 2026
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.75 }}>
                            The 90-point framework for B2B website redesigns that don't tank your SEO, lose existing conversions, or go live with critical errors. Covers pre-project strategy, design decisions, SEO migration, and post-launch monitoring.
                        </p>
                    </div>
                </section>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '4rem', alignItems: 'start' }}>
                    <article>
                        {checklistSections.map(section => (
                            <section key={section.id} id={section.id} style={{ marginBottom: '4rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: 10, height: 10, borderRadius: '50%',
                                        background: section.color, flexShrink: 0,
                                    }} />
                                    <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', color: '#fff', margin: 0 }}>
                                        {section.title}
                                    </h2>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {section.items.map((item, i) => (
                                        <div key={i} style={{
                                            display: 'flex', gap: '1rem', alignItems: 'flex-start',
                                            background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                            borderRadius: '0.875rem', padding: '1rem 1.25rem',
                                        }}>
                                            <div style={{
                                                width: 22, height: 22, borderRadius: '6px', flexShrink: 0,
                                                background: `${section.color}15`,
                                                border: `1px solid ${section.color}40`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            }}>
                                                <div style={{ width: 8, height: 8, borderRadius: '2px', border: `1.5px solid ${section.color}` }} />
                                            </div>
                                            <p style={{ color: '#e2e8f0', fontSize: '0.925rem', lineHeight: 1.5, margin: 0 }}>
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}

                        <div style={{
                            background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(99,102,241,0.08))',
                            border: '1px solid rgba(245,158,11,0.25)', borderRadius: '1.25rem',
                            padding: '2.5rem', textAlign: 'center',
                        }}>
                            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '0.75rem' }}>
                                Planning a redesign?
                            </h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
                                We run redesign projects using this exact framework. Book a free scoping call to discuss your project.
                            </p>
                            <Link href="/contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#f59e0b', color: '#000',
                                padding: '1rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 700, textDecoration: 'none',
                            }}>
                                Book a Scoping Call →
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
                    </aside>
                </div>
            </main>
            <Footer />
        </>
    );
}
