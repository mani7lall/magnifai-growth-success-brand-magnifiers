import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Careers at WeMagnifAI | Join the AI Growth Engine',
    description: 'Join a team of AI practitioners, growth engineers, and creative technologists building the future of growth. See open positions at WeMagnifAI.',
};

const positions = [
    {
        title: 'Senior AI Engineer (LLM & Agents)',
        type: 'Full-time · Remote',
        location: 'UK / EU preferred',
        department: 'Engineering',
        summary: 'Build and maintain the AI orchestration systems, agent protocols, and LLM integrations that power our client results. You\'ll work closely with the founding team on the most technically interesting problems at the intersection of AI and growth.',
        requirements: ['3+ years experience with LLM APIs (OpenAI, Anthropic, open-source)', 'Experience building multi-agent systems or agentic workflows', 'Strong TypeScript/Python — we use both', 'Experience with vector databases (Pinecone, Qdrant, pgvector)', 'Bonus: fine-tuning experience, RAG system design'],
        accentColor: '#8B5CF6',
    },
    {
        title: 'Growth Engineer',
        type: 'Full-time · Remote',
        location: 'Global',
        department: 'Growth',
        summary: 'Own and build growth systems for our clients — from programmatic SEO to automated outreach pipelines. You\'re someone who writes code, runs experiments, and thinks in systems. You\'ll spend half your time building and half your time analysing results.',
        requirements: ['Experience with programmatic SEO and content systems', 'Proficiency with automation tools (Make.com, n8n, Zapier)', 'JavaScript/TypeScript for data scraping and processing', 'SQL for analytics and data extraction', 'Analytical mindset — you measure everything'],
        accentColor: '#22D3EE',
    },
    {
        title: 'Senior Content Strategist',
        type: 'Full-time · Remote',
        location: 'UK preferred',
        department: 'Content',
        summary: 'Lead content strategy for 5–7 client accounts. You\'ll own the content roadmap from keyword research through to production and distribution — with AI-assisted production tools that let you output at 3–5x human speed without losing quality.',
        requirements: ['5+ years in B2B content marketing or SEO', 'Demonstrable track record of content-driven growth', 'Experience with AI writing tools (GPT-4, Claude, Jasper)', 'Understanding of GEO (Generative Engine Optimisation)', 'Strong editorial voice and quality standards'],
        accentColor: '#ec4899',
    },
    {
        title: 'Automation Consultant (Make.com / n8n)',
        type: 'Contract · Remote',
        location: 'Global',
        department: 'Automation',
        summary: 'Build and maintain automation systems for our clients — primarily in Make.com and n8n, with some custom Python/JavaScript for edge cases. Project-based engagement with strong potential for full-time conversion.',
        requirements: ['Expert-level Make.com or n8n experience', 'Portfolio of production automation builds', 'Experience integrating with major CRMs (HubSpot, Salesforce)', 'Understanding of API design and webhook handling', 'Strong documentation habits'],
        accentColor: '#10b981',
    },
];

const benefits = [
    { icon: '🌍', title: 'Fully Remote', desc: 'Work from anywhere. Async-first culture with one weekly team sync.' },
    { icon: '📈', title: 'Revenue Share', desc: 'Senior roles include a client portfolio performance bonus.' },
    { icon: '💻', title: 'Equipment Budget', desc: '£1,500 one-time budget for your home office setup.' },
    { icon: '📚', title: 'Learning Budget', desc: '£1,000/year for courses, conferences, and books.' },
    { icon: '⏱', title: 'Async by Default', desc: 'We trust you to manage your time. No time-tracking or micromanagement.' },
    { icon: '🔬', title: 'AI Tool Access', desc: 'Full access to all premium AI tools and APIs we use in client work.' },
];

export default function CareersPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                {/* Hero */}
                <section style={{
                    padding: '6rem 2rem 5rem', textAlign: 'center',
                    background: 'linear-gradient(180deg, rgba(99,102,241,0.08) 0%, transparent 100%)',
                    borderBottom: '1px solid var(--glass-border)',
                }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-block',
                            background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
                            borderRadius: '999px', padding: '0.4rem 1.1rem',
                            color: '#818cf8', fontSize: '0.85rem', fontWeight: 700,
                            marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em',
                        }}>We're Hiring</div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontFamily: 'var(--font-playfair)', color: '#fff', fontWeight: 700,
                            lineHeight: 1.1, marginBottom: '1.5rem',
                        }}>
                            Build the Future of<br />AI-Powered Growth
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                            We're a small team that punches well above our weight. If you want to work on genuinely hard problems with people who care about doing the work right, this is the team.
                        </p>
                    </div>
                </section>

                {/* Benefits */}
                <section style={{ padding: '5rem 2rem', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
                            What We Offer
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
                            {benefits.map(b => (
                                <div key={b.title} style={{
                                    background: 'var(--bg-primary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.75rem',
                                }}>
                                    <div style={{ fontSize: '1.75rem', marginBottom: '0.875rem' }}>{b.icon}</div>
                                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{b.title}</div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section style={{ padding: '6rem 2rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-playfair)', color: '#fff', fontWeight: 700, marginBottom: '3rem' }}>
                            Open Positions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {positions.map(pos => (
                                <div key={pos.title} style={{
                                    background: 'var(--bg-secondary)',
                                    border: `1px solid ${pos.accentColor}25`,
                                    borderLeft: `3px solid ${pos.accentColor}`,
                                    borderRadius: '1.25rem', padding: '2.5rem',
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                                        <div>
                                            <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.4rem' }}>{pos.title}</h3>
                                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                                {[pos.type, pos.location].map(tag => (
                                                    <span key={tag} style={{
                                                        background: `${pos.accentColor}12`,
                                                        color: pos.accentColor,
                                                        border: `1px solid ${pos.accentColor}25`,
                                                        borderRadius: '999px', padding: '0.2rem 0.75rem',
                                                        fontSize: '0.75rem', fontWeight: 600,
                                                    }}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <span style={{
                                            background: `${pos.accentColor}10`,
                                            color: pos.accentColor, border: `1px solid ${pos.accentColor}25`,
                                            borderRadius: '999px', padding: '0.25rem 0.9rem',
                                            fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                                        }}>{pos.department}</span>
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{pos.summary}</p>
                                    <div>
                                        <div style={{ color: '#e2e8f0', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>What we're looking for:</div>
                                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                            {pos.requirements.map(r => (
                                                <li key={r} style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', gap: '0.5rem' }}>
                                                    <span style={{ color: pos.accentColor }}>✓</span> {r}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: `1px solid ${pos.accentColor}15` }}>
                                        <a href={`mailto:careers@wemagnifai.com?subject=${encodeURIComponent('Application: ' + pos.title)}`} style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                            background: `${pos.accentColor}15`, color: pos.accentColor,
                                            border: `1px solid ${pos.accentColor}30`,
                                            fontWeight: 700, textDecoration: 'none',
                                            padding: '0.75rem 1.5rem', borderRadius: '0.625rem',
                                            fontSize: '0.9rem',
                                        }}>
                                            Apply Now →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Speculative */}
                        <div style={{
                            marginTop: '2.5rem',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '1.25rem', padding: '2.5rem',
                            textAlign: 'center',
                        }}>
                            <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                                Don't see your role?
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                We review speculative applications from exceptional practitioners in AI engineering, growth, and creative work. If you're genuinely great at what you do, reach out.
                            </p>
                            <a href="mailto:careers@wemagnifai.com?subject=Speculative Application" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                                color: '#fff', fontWeight: 700, textDecoration: 'none',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                boxShadow: '0 8px 32px rgba(139,92,246,0.3)',
                            }}>
                                Send a Speculative Application →
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
