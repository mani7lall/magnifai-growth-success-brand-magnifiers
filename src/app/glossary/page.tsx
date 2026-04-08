import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { generateFAQSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Growth & Marketing Glossary — 30 Key Terms Explained | WeMagnifAI',
    description: 'Definitions of the most important terms in growth marketing, SEO/GEO, brand strategy, AI automation, CRO, and website strategy. Clear, plain-language explanations.',
};

interface Term {
    term: string;
    letter: string;
    definition: string;
    related: { label: string; href: string }[];
}

const terms: Term[] = [
    { term: 'Answer-First Content', letter: 'A', definition: 'A content structure where the most direct answer to a query appears in the opening paragraph, before context or explanation. Favoured by AI answer engines (GEO) and modern readers who scan before reading in depth. Contrast with the traditional "narrative build-up" approach.', related: [{ label: 'GEO', href: '#geo' }, { label: 'AI Search Guide', href: '/playbooks/ai-search-optimization-guide' }] },
    { term: 'Authority Building', letter: 'A', definition: 'The process of establishing your brand as a trusted, expert source on a topic — through consistent publication, third-party citations, backlinks, social proof, and demonstrable expertise. Authority is a key signal for both traditional SEO and GEO.', related: [{ label: 'GEO', href: '#geo' }, { label: 'Content Hub', href: '/resources' }] },
    { term: 'Brand Positioning', letter: 'B', definition: 'The deliberate process of defining how your brand occupies a specific, valuable place in the mind of your ideal customer. Effective positioning answers: who you serve, what you help them achieve, and what makes you distinctly different from alternatives.', related: [{ label: 'ICP', href: '#icp' }, { label: 'Value Proposition', href: '#value-proposition' }] },
    { term: 'B2B (Business-to-Business)', letter: 'B', definition: 'A commercial model where a business sells products or services to other businesses rather than to consumers. B2B buying cycles are typically longer, involve multiple stakeholders, and require more trust-building than B2C transactions.', related: [{ label: 'ICP', href: '#icp' }, { label: 'Growth Stack', href: '/growth-stack' }] },
    { term: 'Conversion Rate', letter: 'C', definition: 'The percentage of website visitors who take a desired action — submitting a form, booking a call, downloading a resource, or making a purchase. A 2% conversion rate means 2 out of every 100 visitors complete the goal action.', related: [{ label: 'CRO', href: '#cro' }, { label: 'ROI Calculator', href: '/tools/roi' }] },
    { term: 'Content Hub', letter: 'C', definition: 'A centralised section of a website containing depth content on a specific topic — guides, articles, tools, case studies, and comparisons — designed to build topical authority and capture organic search traffic across a topic cluster.', related: [{ label: 'Topical Authority', href: '#topical-authority' }, { label: 'Resources Hub', href: '/resources' }] },
    { term: 'CRO (Conversion Rate Optimisation)', letter: 'C', definition: 'The systematic process of improving the percentage of website visitors who take a desired action. CRO combines quantitative data (analytics, heatmaps) with qualitative research (user interviews, surveys) to identify and fix conversion barriers.', related: [{ label: 'Conversion Rate', href: '#conversion-rate' }, { label: 'Website Audit', href: '/lead-magnets/website-audit-checklist' }] },
    { term: 'Entity (SEO/GEO)', letter: 'E', definition: 'In the context of search and AI engines, an entity is a named, real-world thing — a person, organisation, product, or concept — that has a unique identity. Search engines and AI models build knowledge graphs of entities to understand relationships and answer queries.', related: [{ label: 'GEO', href: '#geo' }, { label: 'Schema Markup', href: '#schema-markup' }] },
    { term: 'GEO (Generative Engine Optimisation)', letter: 'G', definition: 'The practice of structuring and optimising content to be cited, summarised, and used by AI-powered answer engines such as ChatGPT Search, Perplexity, Google AI Overviews, and Claude. GEO is the evolution of SEO for the AI-native search era.', related: [{ label: 'AI Search Guide', href: '/playbooks/ai-search-optimization-guide' }, { label: 'Schema Markup', href: '#schema-markup' }] },
    { term: 'Growth Stack', letter: 'G', definition: 'The curated collection of software tools a business uses to drive and measure growth — typically including a CRM, email marketing platform, analytics tool, SEO tool, and automation software. The optimal growth stack is lean, integrated, and fit for the specific business model.', related: [{ label: 'MagnifAI Growth Stack', href: '/growth-stack' }, { label: 'Tool Comparisons', href: '/compare' }] },
    { term: 'ICP (Ideal Customer Profile)', letter: 'I', definition: 'A detailed description of the company or individual that is the perfect fit for your product or service. For B2B, an ICP typically covers industry, company size, revenue, technical maturity, and the specific problem they are actively trying to solve.', related: [{ label: 'Brand Positioning', href: '#brand-positioning' }, { label: 'B2B Growth System', href: '/playbooks/b2b-growth-system-2026' }] },
    { term: 'Knowledge Graph', letter: 'K', definition: 'A structured database of entities and their relationships, used by search engines (Google\'s Knowledge Graph) and AI models to understand the world. Your brand appearing correctly in knowledge graphs increases your GEO visibility and AI citation probability.', related: [{ label: 'Entity', href: '#entity-seogeo' }, { label: 'GEO', href: '#geo' }] },
    { term: 'Lead Magnet', letter: 'L', definition: 'A free, high-value resource offered in exchange for a visitor\'s contact information — typically an email address. Effective lead magnets solve a specific, immediate problem for a defined audience. Common formats: checklists, templates, calculators, mini-courses, and frameworks.', related: [{ label: 'Website Audit Checklist', href: '/lead-magnets/website-audit-checklist' }, { label: 'Conversion Rate', href: '#conversion-rate' }] },
    { term: 'LCP (Largest Contentful Paint)', letter: 'L', definition: 'A Core Web Vitals metric that measures how long it takes for the largest visible content element on a page to load. Google targets under 2.5 seconds as "good". Poor LCP scores negatively affect search rankings and user experience.', related: [{ label: 'CRO', href: '#cro' }, { label: 'Website Audit', href: '/lead-magnets/website-audit-checklist' }] },
    { term: 'Messaging Hierarchy', letter: 'M', definition: 'The structured order in which key messages are presented on a page — typically: headline (primary outcome), sub-headline (mechanism or differentiator), body copy (proof and detail), CTA (next step). Strong messaging hierarchy guides visitors from awareness to action without cognitive overload.', related: [{ label: 'CRO', href: '#cro' }, { label: 'B2B Growth System', href: '/playbooks/b2b-growth-system-2026' }] },
    { term: 'NPS (Net Promoter Score)', letter: 'N', definition: 'A customer loyalty metric that asks "how likely are you to recommend us to a colleague?" on a 0-10 scale. Scores of 9-10 are "Promoters", 7-8 are "Passives", and 0-6 are "Detractors". NPS = % Promoters − % Detractors.', related: [{ label: 'CRO', href: '#cro' }, { label: 'Social Proof', href: '#social-proof' }] },
    { term: 'Pillar Content', letter: 'P', definition: 'A long-form, comprehensive piece of content that covers a core topic in depth and links to cluster content (shorter, more specific pieces) on related sub-topics. Pillar-and-cluster architecture builds topical authority and improves organic search rankings.', related: [{ label: 'Content Hub', href: '#content-hub' }, { label: 'Topical Authority', href: '#topical-authority' }] },
    { term: 'ROI (Return on Investment)', letter: 'R', definition: 'A performance metric that measures the financial return from an investment relative to its cost. ROI = (Revenue from Investment − Cost of Investment) ÷ Cost of Investment × 100. In marketing, ROI is commonly tracked for paid campaigns, content, and agency retainers.', related: [{ label: 'ROI Calculator', href: '/tools/roi' }, { label: 'Growth Stack', href: '/growth-stack' }] },
    { term: 'Schema Markup', letter: 'S', definition: 'Structured data code (using schema.org vocabulary) added to web pages to help search engines and AI models understand the content — identifying it as an article, FAQ, product, organisation, or other entity. Schema markup improves both SEO and GEO performance.', related: [{ label: 'GEO', href: '#geo' }, { label: 'Entity', href: '#entity-seogeo' }] },
    { term: 'SEO (Search Engine Optimisation)', letter: 'S', definition: 'The practice of optimising web content to rank higher in traditional search engine results pages (SERPs). Covers on-page factors (content, keywords, structure), technical factors (speed, crawlability), and off-page factors (backlinks, authority). Increasingly complemented by GEO.', related: [{ label: 'GEO', href: '#geo' }, { label: 'Content Hub', href: '#content-hub' }] },
    { term: 'Social Proof', letter: 'S', definition: 'Evidence that other people or organisations have used and benefited from a product or service — testimonials, case studies, review ratings, client logos, and media mentions. In B2B, specific social proof (named results, detailed case studies) outperforms generic praise.', related: [{ label: 'B2B Growth System', href: '/playbooks/b2b-growth-system-2026' }, { label: 'CRO', href: '#cro' }] },
    { term: 'Topical Authority', letter: 'T', definition: 'The degree to which a website is perceived as an expert and comprehensive source on a given topic. Topical authority is built by consistently publishing high-quality, interconnected content across a topic cluster — making your site the go-to reference for search engines and AI models.', related: [{ label: 'Pillar Content', href: '#pillar-content' }, { label: 'Content Hub', href: '#content-hub' }] },
    { term: 'Value Proposition', letter: 'V', definition: 'A clear statement of the specific benefit a customer receives from your product or service, why it\'s better than alternatives, and who it\'s for. A strong value proposition is specific, differentiated, and written in the language your ICP uses — not corporate jargon.', related: [{ label: 'Brand Positioning', href: '#brand-positioning' }, { label: 'ICP', href: '#icp' }] },
    { term: 'Workflow Automation', letter: 'W', definition: 'The use of software to automatically execute repetitive, rule-based tasks that would otherwise require manual effort — such as lead routing, email sequences, data syncing, and report generation. Automation tools include Make.com, Zapier, and n8n.', related: [{ label: 'Growth Stack', href: '/growth-stack' }, { label: 'AI Automation', href: '/services/ai-automation' }] },
];

const letters = [...new Set(terms.map(t => t.letter))].sort();

const faqSchema = generateFAQSchema(terms.slice(0, 5).map(t => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
})));

export default function GlossaryPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: '7rem 2rem 4rem', textAlign: 'center',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 55%)',
                }}>
                    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                            borderRadius: '999px', padding: '0.4rem 1rem',
                            color: '#818cf8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
                        }}>
                            📖 {terms.length} Terms · Plain Language · GEO-Ready
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', lineHeight: 1.15, fontWeight: 700, marginBottom: '1.25rem',
                        }}>
                            Growth & Marketing Glossary
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Plain-language definitions of the most important terms in growth marketing, SEO, GEO, brand strategy, AI automation, and conversion optimisation. No jargon used to explain jargon.
                        </p>
                    </div>
                </section>

                {/* ALPHABET NAV */}
                <div style={{
                    position: 'sticky', top: 0, zIndex: 50,
                    background: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid var(--glass-border)',
                    padding: '0.75rem 2rem',
                }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {letters.map(letter => (
                            <a key={letter} href={`#letter-${letter}`} style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: 36, height: 36, borderRadius: '8px',
                                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                                color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.875rem',
                                textDecoration: 'none', transition: 'all 0.2s',
                            }}>
                                {letter}
                            </a>
                        ))}
                    </div>
                </div>

                {/* TERMS */}
                <section style={{ padding: '4rem 2rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {letters.map(letter => {
                            const letterTerms = terms.filter(t => t.letter === letter);
                            return (
                                <div key={letter} id={`letter-${letter}`} style={{ marginBottom: '3.5rem' }}>
                                    <div style={{
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: 48, height: 48, borderRadius: '12px',
                                        background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
                                        color: '#818cf8', fontWeight: 900, fontSize: '1.4rem',
                                        fontFamily: 'var(--font-playfair)', marginBottom: '1.5rem',
                                    }}>
                                        {letter}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {letterTerms.map(term => (
                                            <div
                                                key={term.term}
                                                id={term.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                                                style={{
                                                    background: 'var(--bg-secondary)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '1rem', padding: '1.75rem',
                                                }}
                                            >
                                                <h2 style={{
                                                    color: '#fff', fontSize: '1.2rem', fontWeight: 700,
                                                    marginBottom: '0.75rem', fontFamily: 'var(--font-playfair)',
                                                }}>
                                                    {term.term}
                                                </h2>
                                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                                                    {term.definition}
                                                </p>
                                                {term.related.length > 0 && (
                                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                                        <span style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 600 }}>Related:</span>
                                                        {term.related.map(r => (
                                                            <Link key={r.href} href={r.href} style={{
                                                                color: '#818cf8', fontSize: '0.8rem',
                                                                background: 'rgba(99,102,241,0.1)',
                                                                border: '1px solid rgba(99,102,241,0.2)',
                                                                padding: '0.2rem 0.6rem', borderRadius: '999px',
                                                                textDecoration: 'none', fontWeight: 600,
                                                            }}>
                                                                {r.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(236,72,153,0.07) 100%)',
                    borderTop: '1px solid rgba(99,102,241,0.2)',
                }}>
                    <div style={{ maxWidth: '520px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Want These in Practice?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Explore our full library of guides, playbooks, and tools — all built around these principles.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/resources" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: '#6366f1', color: '#fff',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 700, textDecoration: 'none',
                            }}>
                                Browse Resources →
                            </Link>
                            <Link href="/playbooks" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                                color: '#fff', padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                fontWeight: 600, textDecoration: 'none',
                            }}>
                                View Playbooks
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
