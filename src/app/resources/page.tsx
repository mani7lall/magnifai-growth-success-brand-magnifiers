import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { resources, featuredResources, categories } from '@/content/resources-data';
import type { ResourceCategory } from '@/content/resources-data';
import { generateFAQSchema, generateBreadcrumbSchema, generateOrganizationSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resource Hub | Guides, Templates & Tools — WeMagnifAI',
    description: 'Free guides, templates, calculators, and case studies to help B2B founders and growth teams scale their website, marketing, and AI strategy. Curated by WeMagnifAI.',
};

const categoryIcons: Record<string, string> = {
    Guide: '📖',
    Template: '📋',
    Calculator: '🧮',
    Comparison: '⚖️',
    'Case Study': '📁',
    Insight: '💡',
};

const categoryColors: Record<string, string> = {
    Guide: '#6366f1',
    Template: '#10b981',
    Calculator: '#f59e0b',
    Comparison: '#ec4899',
    'Case Study': '#3b82f6',
    Insight: '#8b5cf6',
};

const faqData = [
    { question: 'Are all resources free?', answer: 'Most resources are free to access. Some downloadable templates and checklists require an email opt-in. All calculators and comparison pages are completely free.' },
    { question: 'How often is the Resource Hub updated?', answer: 'We add new resources at least twice per month, covering guides, templates, and industry insights relevant to B2B growth teams.' },
    { question: 'Can I share these resources with my team?', answer: 'Absolutely. All resources are designed for team use. Share links freely — no paywalls on core content.' },
    { question: 'I can\'t find what I need. What should I do?', answer: 'Book a free audit with our team. We\'ll point you to the right resource or create a custom plan based on your specific growth challenges.' },
];

const orgSchema = generateOrganizationSchema();
const faqSchema = generateFAQSchema(faqData);
const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://wemagnifai.com' },
    { name: 'Resources', url: 'https://wemagnifai.com/resources' },
]);

export default function ResourcesHub() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: '7rem 2rem 4rem',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)',
                    textAlign: 'center',
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            📚 Free Resources
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            fontWeight: 700, color: '#fff', lineHeight: 1.15,
                            marginBottom: '1.5rem',
                        }}>
                            Everything You Need to<br />
                            <span style={{ background: 'linear-gradient(90deg, #818cf8, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Grow Your Business
                            </span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 2rem' }}>
                            Free guides, templates, calculators, and case studies built for B2B founders, marketing leads, and growth teams. No paywalls. No fluff. Just the frameworks that actually work.
                        </p>
                        <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
                            20 resources across 6 categories · Updated monthly
                        </div>
                    </div>
                </section>

                {/* FEATURED STRIP */}
                <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', color: '#fff', margin: 0 }}>
                                ⭐ Featured Resources
                            </h2>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.5rem',
                        }}>
                            {featuredResources.map(resource => (
                                <Link
                                    key={resource.id}
                                    href={resource.href}
                                    style={{
                                        display: 'block', textDecoration: 'none',
                                        background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(236,72,153,0.05) 100%)',
                                        border: '1px solid rgba(99,102,241,0.25)',
                                        borderRadius: '1.25rem', padding: '2rem',
                                        transition: 'all 0.25s',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                >
                                    {resource.badge && (
                                        <div style={{
                                            position: 'absolute', top: '1rem', right: '1rem',
                                            background: '#6366f1', color: '#fff',
                                            fontSize: '0.7rem', fontWeight: 700,
                                            padding: '0.25rem 0.6rem', borderRadius: '999px',
                                            textTransform: 'uppercase', letterSpacing: '0.05em',
                                        }}>
                                            {resource.badge}
                                        </div>
                                    )}
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{resource.icon}</div>
                                    <div style={{
                                        display: 'inline-block',
                                        background: `${categoryColors[resource.category]}20`,
                                        color: categoryColors[resource.category],
                                        border: `1px solid ${categoryColors[resource.category]}40`,
                                        fontSize: '0.75rem', fontWeight: 600,
                                        padding: '0.2rem 0.6rem', borderRadius: '999px',
                                        marginBottom: '0.75rem',
                                    }}>
                                        {categoryIcons[resource.category]} {resource.category}
                                    </div>
                                    <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.35 }}>
                                        {resource.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                        {resource.description}
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#64748b', fontSize: '0.8rem' }}>🕐 {resource.readTime}</span>
                                        <span style={{ color: '#6366f1', fontSize: '0.9rem', fontWeight: 600 }}>Read →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FILTER + GRID */}
                <section style={{ padding: '4rem 2rem' }}>
                    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>

                        {/* Category Tabs */}
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
                            marginBottom: '3rem',
                        }}>
                            {['All', ...categories].map(cat => (
                                <div
                                    key={cat}
                                    style={{
                                        padding: '0.5rem 1.25rem',
                                        borderRadius: '999px',
                                        border: '1px solid var(--glass-border)',
                                        background: cat === 'All' ? '#6366f1' : 'var(--glass-bg)',
                                        color: cat === 'All' ? '#fff' : 'var(--text-muted)',
                                        fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {cat !== 'All' && categoryIcons[cat]} {cat}
                                </div>
                            ))}
                        </div>

                        {/* All Categories */}
                        {categories.map(cat => {
                            const catResources = resources.filter(r => r.category === cat);
                            return (
                                <div key={cat} style={{ marginBottom: '4rem' }}>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                                        marginBottom: '1.5rem',
                                        paddingBottom: '1rem',
                                        borderBottom: `1px solid var(--glass-border)`,
                                    }}>
                                        <span style={{
                                            width: 36, height: 36, borderRadius: '8px',
                                            background: `${categoryColors[cat]}20`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.1rem',
                                        }}>
                                            {categoryIcons[cat]}
                                        </span>
                                        <h2 style={{
                                            fontSize: '1.35rem', fontFamily: 'var(--font-playfair)',
                                            color: '#fff', margin: 0,
                                        }}>
                                            {cat}s
                                        </h2>
                                        <span style={{
                                            marginLeft: 'auto',
                                            background: `${categoryColors[cat]}15`,
                                            color: categoryColors[cat],
                                            border: `1px solid ${categoryColors[cat]}30`,
                                            fontSize: '0.75rem', fontWeight: 700,
                                            padding: '0.2rem 0.6rem', borderRadius: '999px',
                                        }}>
                                            {catResources.length} {catResources.length === 1 ? 'item' : 'items'}
                                        </span>
                                    </div>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                        gap: '1.25rem',
                                    }}>
                                        {catResources.map(resource => (
                                            <Link
                                                key={resource.id}
                                                href={resource.href}
                                                style={{
                                                    display: 'block', textDecoration: 'none',
                                                    background: 'var(--bg-secondary)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '1rem', padding: '1.5rem',
                                                    transition: 'all 0.25s',
                                                    position: 'relative',
                                                }}
                                            >
                                                {resource.badge && (
                                                    <div style={{
                                                        position: 'absolute', top: '1rem', right: '1rem',
                                                        background: `${categoryColors[cat]}20`,
                                                        color: categoryColors[cat],
                                                        border: `1px solid ${categoryColors[cat]}40`,
                                                        fontSize: '0.65rem', fontWeight: 700,
                                                        padding: '0.2rem 0.5rem', borderRadius: '999px',
                                                        textTransform: 'uppercase',
                                                    }}>
                                                        {resource.badge}
                                                    </div>
                                                )}
                                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{resource.icon}</div>
                                                <h3 style={{
                                                    color: '#fff', fontSize: '1.05rem', fontWeight: 700,
                                                    lineHeight: 1.35, marginBottom: '0.6rem',
                                                }}>
                                                    {resource.title}
                                                </h3>
                                                <p style={{
                                                    color: 'var(--text-muted)', fontSize: '0.875rem',
                                                    lineHeight: 1.6, marginBottom: '1.25rem',
                                                }}>
                                                    {resource.description}
                                                </p>
                                                <div style={{
                                                    display: 'flex', alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    borderTop: '1px solid var(--glass-border)',
                                                    paddingTop: '1rem', marginTop: 'auto',
                                                }}>
                                                    <span style={{ color: '#64748b', fontSize: '0.8rem' }}>🕐 {resource.readTime}</span>
                                                    <span style={{
                                                        color: '#fff', fontSize: '0.8rem', fontWeight: 600,
                                                        background: `${categoryColors[cat]}20`,
                                                        border: `1px solid ${categoryColors[cat]}40`,
                                                        padding: '0.3rem 0.8rem', borderRadius: '0.5rem',
                                                    }}>
                                                        {cat === 'Calculator' ? 'Use Tool →' : cat === 'Template' ? 'Download →' : 'Read →'}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* FAQ */}
                <section style={{
                    padding: '4rem 2rem',
                    borderTop: '1px solid var(--glass-border)',
                    background: 'var(--bg-secondary)',
                }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{
                            fontSize: '2rem', fontFamily: 'var(--font-playfair)',
                            color: '#fff', marginBottom: '2rem', textAlign: 'center',
                        }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {faqData.map((faq, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-tertiary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.5rem',
                                }}>
                                    <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                                        {faq.question}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA BAND */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(236,72,153,0.1) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
                        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Can't Find What You Need?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Book a free audit with our team. We'll diagnose your growth gaps and point you to exactly the right framework — or build a custom one with you.
                        </p>
                        <Link href="/free-audit" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: '#6366f1', color: '#fff',
                            padding: '1rem 2.5rem', borderRadius: '0.75rem',
                            fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                            transition: 'all 0.2s',
                        }}>
                            Book a Free Audit →
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
