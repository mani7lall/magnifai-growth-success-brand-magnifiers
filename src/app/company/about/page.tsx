import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'About WeMagnifAI | The AI Growth Engine',
    description: 'WeMagnifAI is a next-generation AI growth agency. Learn about our mission, team, values, and the story behind why we built the most comprehensive AI growth platform for ambitious businesses.',
};

const team = [
    { name: 'Alex Chen', role: 'CEO & AI Strategy Lead', bio: 'Former ML engineer at DeepMind. Built three growth systems that collectively drove £40M in attributed pipeline. Obsessed with the intersection of AI and B2B growth.', emoji: '🧠' },
    { name: 'Sarah Jenkins', role: 'CTO & Lead Architect', bio: 'Ex-Vercel engineer. Wrote the original Next.js App Router documentation internals. Now builds the AI infrastructure that powers our client results.', emoji: '⚙️' },
    { name: 'Mike Ross', role: 'Head of Growth', bio: 'Serial growth hacker. Took two B2B SaaS companies from £0 to £10M ARR. Expert in programmatic SEO and automated outreach systems.', emoji: '🚀' },
    { name: 'Jessica Wu', role: 'Head of Content & Brand', bio: 'Former Head of Content at HubSpot UK. Built content programmes that generated 2M+ organic visits per month. Believes great writing is the last unfair advantage.', emoji: '✍️' },
    { name: 'Marcus Flynn', role: 'Lead Automation Engineer', bio: 'Built 200+ Make.com automation flows for enterprise clients. Can automate anything. Has automated things he probably shouldn\'t have. No regrets.', emoji: '🔧' },
    { name: 'Priya Sharma', role: 'Creative Director', bio: 'Led brand design at three unicorns. Believes the best UI is invisible and the best brand makes you feel something. Dark mode evangelist.', emoji: '🎨' },
];

const values = [
    { icon: '⚡', title: 'Speed Without Shortcuts', desc: 'We move fast because we plan well. Speed is a competitive advantage, but only when it\'s sustainable.' },
    { icon: '🎯', title: 'Outcome Obsession', desc: 'We measure success in your results, not our deliverables. If it doesn\'t move a metric you care about, we\'re doing the wrong work.' },
    { icon: '🔬', title: 'Systems Over Intuition', desc: 'We build repeatable systems that compound over time. Every solution is designed to get better with use, not worse.' },
    { icon: '🤝', title: 'Radical Transparency', desc: 'We tell you what\'s working and what isn\'t, even when it\'s uncomfortable. You deserve a partner who\'s honest, not one who\'s pleasant.' },
];

export default function AboutPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                {/* Hero */}
                <section style={{
                    padding: '6rem 2rem 5rem',
                    textAlign: 'center',
                    background: 'linear-gradient(180deg, rgba(139,92,246,0.1) 0%, transparent 100%)',
                    borderBottom: '1px solid var(--glass-border)',
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{
                            display: 'inline-block',
                            background: 'rgba(139,92,246,0.12)', border: '1px solid var(--border-accent)',
                            borderRadius: '999px', padding: '0.4rem 1.1rem',
                            color: 'var(--accent-glow)', fontSize: '0.85rem', fontWeight: 700,
                            marginBottom: '2rem', letterSpacing: '0.05em', textTransform: 'uppercase',
                        }}>Our Story</div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem',
                        }}>
                            We Exist to Make<br />
                            <span style={{
                                background: 'var(--gradient-hero)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>AI Work For Business.</span>
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
                            WeMagnifAI was built by practitioners who were tired of watching brilliant companies fail at AI adoption — not because the technology wasn't ready, but because they didn't have the right system around it.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section style={{
                    padding: '3rem 2rem', background: 'var(--bg-secondary)',
                    borderBottom: '1px solid var(--glass-border)',
                }}>
                    <div style={{
                        maxWidth: '900px', margin: '0 auto',
                        display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap',
                    }}>
                        {[
                            { value: '2021', label: 'Founded' },
                            { value: '40+', label: 'Active clients' },
                            { value: '£12M+', label: 'Revenue attributed' },
                            { value: '94%', label: 'Client retention' },
                            { value: '6', label: 'Core team members' },
                        ].map(s => (
                            <div key={s.label} style={{ textAlign: 'center', minWidth: '120px' }}>
                                <div style={{
                                    fontSize: '2.25rem', fontWeight: 800,
                                    fontFamily: 'var(--font-playfair)',
                                    background: 'var(--gradient-hero)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                }}>{s.value}</div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Story */}
                <section style={{ padding: '6rem 2rem' }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', fontWeight: 700, marginBottom: '2rem' }}>
                            The Story
                        </h2>
                        {[
                            'WeMagnifAI was founded in 2021 by Alex Chen and Sarah Jenkins after watching a pattern repeat across dozens of client engagements: companies would invest heavily in AI tools, see initial excitement, and then watch adoption plateau as the tools sat unused while people reverted to old habits.',
                            'The problem wasn\'t the technology. It was the absence of systems — the workflows, automations, and feedback loops that make AI tools compound in value rather than depreciate through neglect. We set out to build those systems for ambitious companies.',
                            'Since then, we\'ve worked with over 40 companies across B2B SaaS, e-commerce, professional services, and fintech. We\'ve attributed over £12M in revenue to our programmes. And we\'ve assembled a team of six specialists who are, collectively, some of the most experienced AI growth practitioners in Europe.',
                            'We\'re not a large agency. We\'re a focused one. Every client engagement involves at least two senior specialists, and we take on fewer than eight new clients per quarter to maintain the depth of engagement that gets real results.',
                        ].map((para, i) => (
                            <p key={i} style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                                {para}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Values */}
                <section style={{ padding: '5rem 2rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
                            How We Work
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                            {values.map(v => (
                                <div key={v.title} style={{
                                    background: 'var(--bg-primary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '2rem',
                                }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                                    <h3 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>{v.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section style={{ padding: '6rem 2rem' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
                            The Team
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                            {team.map(member => (
                                <div key={member.name} style={{
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem', padding: '2rem',
                                }}>
                                    <div style={{
                                        width: '56px', height: '56px', borderRadius: '1rem',
                                        background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.2))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.75rem', marginBottom: '1.25rem',
                                        border: '1px solid var(--border-accent)',
                                    }}>{member.emoji}</div>
                                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{member.name}</div>
                                    <div style={{
                                        color: '#8B5CF6', fontSize: '0.8rem', fontWeight: 600,
                                        textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem',
                                    }}>{member.role}</div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section style={{
                    padding: '5rem 2rem', textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(34,211,238,0.06))',
                    borderTop: '1px solid var(--border-accent)',
                }}>
                    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '1rem' }}>
                            Ready to work together?
                        </h2>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                            We're selective about who we work with because we're serious about getting results. If you're ambitious and ready to build, we'd love to talk.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" style={{
                                background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                                color: '#fff', fontWeight: 700, textDecoration: 'none',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                boxShadow: '0 8px 32px rgba(139,92,246,0.35)',
                            }}>
                                Book a Strategy Call →
                            </Link>
                            <Link href="/case-studies" style={{
                                background: 'var(--bg-secondary)', color: 'var(--text-muted)',
                                fontWeight: 600, textDecoration: 'none',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                border: '1px solid var(--glass-border)',
                            }}>
                                See Our Work
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
