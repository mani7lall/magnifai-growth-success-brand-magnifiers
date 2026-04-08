import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { tools, toolCategories, getToolsByCategory } from '@/content/growth-stack-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The MagnifAI Growth Stack — Tools We Trust & Recommend',
    description: 'The curated collection of CRM, SEO, email, analytics, automation, and AI tools we recommend and use across 40+ client accounts. Honest reviews and implementation guidance.',
};

const categoryIcons: Record<string, string> = {
    'CRM': '🤝',
    'SEO & GEO': '🔍',
    'Email Marketing': '✉️',
    'Analytics': '📊',
    'Automation': '⚙️',
    'AI Writing': '✨',
    'Design & Brand': '🎨',
    'Scheduling': '📅',
};

export default function GrowthStackPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* AFFILIATE DISCLOSURE */}
                <div style={{
                    background: 'rgba(245,158,11,0.08)',
                    borderBottom: '1px solid rgba(245,158,11,0.2)',
                    padding: '0.75rem 2rem',
                    textAlign: 'center',
                }}>
                    <p style={{ color: '#fbbf24', fontSize: '0.85rem', margin: 0 }}>
                        <strong>Disclosure:</strong> Some links on this page are affiliate links. We may earn a commission at no extra cost to you. We only recommend tools we actively use and trust.
                    </p>
                </div>

                {/* HERO */}
                <section style={{
                    padding: '6rem 2rem 4rem',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 30% 0%, rgba(99,102,241,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 0%, rgba(236,72,153,0.08) 0%, transparent 50%)',
                    textAlign: 'center',
                }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#34d399', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            ⚡ 24 Tools · 8 Categories · Actively Used
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: '1.5rem',
                        }}>
                            The MagnifAI Growth Stack
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 2rem' }}>
                            The curated toolkit we use and recommend across 40+ client accounts. Every tool is battle-tested in real growth campaigns — no theoretical picks, no paid placements. Just the stack that actually drives results.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {toolCategories.map(cat => (
                                <a key={cat} href={`#${cat.replace(/\s+/g, '-').toLowerCase()}`} style={{
                                    padding: '0.5rem 1rem',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '999px', color: 'var(--text-muted)',
                                    fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none',
                                    transition: 'all 0.2s',
                                }}>
                                    {categoryIcons[cat]} {cat}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TOOL CATEGORIES */}
                <section style={{ padding: '4rem 2rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        {toolCategories.map(category => {
                            const categoryTools = getToolsByCategory(category);
                            return (
                                <div
                                    key={category}
                                    id={category.replace(/\s+/g, '-').toLowerCase()}
                                    style={{ marginBottom: '5rem' }}
                                >
                                    {/* Category Header */}
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        marginBottom: '2rem', paddingBottom: '1.25rem',
                                        borderBottom: '1px solid var(--glass-border)',
                                    }}>
                                        <div style={{
                                            width: 48, height: 48, borderRadius: '12px',
                                            background: 'rgba(99,102,241,0.1)',
                                            border: '1px solid rgba(99,102,241,0.2)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.5rem',
                                        }}>
                                            {categoryIcons[category]}
                                        </div>
                                        <div>
                                            <h2 style={{
                                                fontSize: '1.75rem', fontFamily: 'var(--font-playfair)',
                                                color: '#fff', margin: 0, lineHeight: 1.2,
                                            }}>
                                                {category}
                                            </h2>
                                            <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
                                                {categoryTools.length} recommended {categoryTools.length === 1 ? 'tool' : 'tools'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tools Grid */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                                        gap: '1.5rem',
                                    }}>
                                        {categoryTools.map(tool => (
                                            <div
                                                key={tool.id}
                                                style={{
                                                    background: 'var(--bg-secondary)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '1.25rem', overflow: 'hidden',
                                                    transition: 'all 0.25s',
                                                    display: 'flex', flexDirection: 'column',
                                                }}
                                            >
                                                {/* Card Header */}
                                                <div style={{
                                                    padding: '1.75rem 1.75rem 1.25rem',
                                                    borderBottom: '1px solid var(--glass-border)',
                                                    background: `linear-gradient(135deg, ${tool.accentColor}10 0%, transparent 60%)`,
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                                                        <div style={{
                                                            width: 48, height: 48, borderRadius: '12px',
                                                            background: `${tool.accentColor}20`,
                                                            border: `1px solid ${tool.accentColor}40`,
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                            fontSize: '1.5rem', fontWeight: 700,
                                                        }}>
                                                            {tool.emoji}
                                                        </div>
                                                        <div>
                                                            <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                                                                {tool.name}
                                                            </h3>
                                                            <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>
                                                                {tool.tagline}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div style={{
                                                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                                        background: `${tool.accentColor}15`,
                                                        border: `1px solid ${tool.accentColor}30`,
                                                        borderRadius: '999px', padding: '0.25rem 0.75rem',
                                                        color: tool.accentColor, fontSize: '0.75rem', fontWeight: 600,
                                                    }}>
                                                        🏆 Best for: {tool.bestFor}
                                                    </div>
                                                </div>

                                                {/* Card Body */}
                                                <div style={{ padding: '1.5rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                                                        {tool.summary}
                                                    </p>

                                                    <div style={{
                                                        background: 'var(--bg-tertiary)',
                                                        border: '1px solid var(--glass-border)',
                                                        borderRadius: '0.75rem', padding: '1rem',
                                                        marginBottom: '1.25rem',
                                                    }}>
                                                        <p style={{ color: '#818cf8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                                                            Why We Recommend It
                                                        </p>
                                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                                                            {tool.whyWeRecommend}
                                                        </p>
                                                    </div>

                                                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                                                        <Link
                                                            href={tool.affiliateUrl}
                                                            style={{
                                                                flex: 1, textAlign: 'center',
                                                                padding: '0.75rem',
                                                                background: `${tool.accentColor}`,
                                                                color: '#fff', fontWeight: 700,
                                                                borderRadius: '0.625rem', textDecoration: 'none',
                                                                fontSize: '0.875rem', transition: 'opacity 0.2s',
                                                            }}
                                                        >
                                                            Try {tool.name} →
                                                        </Link>
                                                        <Link
                                                            href="/contact"
                                                            style={{
                                                                padding: '0.75rem 1rem',
                                                                background: 'var(--glass-bg)',
                                                                border: '1px solid var(--glass-border)',
                                                                color: 'var(--text-muted)', fontWeight: 600,
                                                                borderRadius: '0.625rem', textDecoration: 'none',
                                                                fontSize: '0.8rem', whiteSpace: 'nowrap',
                                                            }}
                                                        >
                                                            Get Help
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* BOTTOM CTA */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(236,72,153,0.08) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛠️</div>
                        <h2 style={{
                            fontSize: '2.25rem', fontFamily: 'var(--font-playfair)',
                            color: '#fff', marginBottom: '1rem',
                        }}>
                            Want Us to Set This Up for You?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            We don't just recommend these tools — we implement them. From CRM configuration to automation workflows to analytics setup, we build your full growth stack end to end.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/free-audit" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#6366f1', color: '#fff',
                                padding: '1rem 2.5rem', borderRadius: '0.75rem',
                                fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                            }}>
                                Book a Free Stack Audit →
                            </Link>
                            <Link href="/services/ai-automation" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                                color: '#fff', padding: '1rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
                            }}>
                                View Services
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
