import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Telegram Growth Automation — Put Your Lead Gen on Autopilot | WeMagnifAI',
    description: 'Autonomous Telegram organic marketing system. Discover groups, post AI content, scrape qualified leads, and send personalised DMs — all on a set-and-forget schedule.',
};

const HOW_IT_WORKS = [
    { step: '01', icon: '🔍', title: 'Discover', desc: 'AI searches Telegram for groups matching your niche. Scores each by member count, activity, and relevance. Only targets high-value communities.' },
    { step: '02', icon: '🔗', title: 'Join', desc: 'Automatically joins the top-scoring groups with human-like delays and daily limits. Tracks cooldowns to avoid re-joining and looks completely natural.' },
    { step: '03', icon: '📝', title: 'Post', desc: 'GPT-4o generates platform-native content for each group — value tips, case studies, polls, questions. Posted at optimal times with per-group cooldowns.' },
    { step: '04', icon: '🎯', title: 'Scrape', desc: 'Identifies active members, qualifies them by bio keywords and activity recency, and scores each lead 1–10 on niche fit. Filters bots automatically.' },
    { step: '05', icon: '💬', title: 'Convert', desc: 'Sends personalised 3-step DM sequences (intro → value → CTA). AI adapts to replies, handles objections, and books discovery calls — on autopilot.' },
];

const FEATURES = [
    { icon: '🤖', title: 'GPT-4o Content Engine', desc: 'Generates platform-native posts that feel human, not like ads. 5 rotating formats to avoid pattern detection.' },
    { icon: '🔒', title: 'Anti-Ban Safety System', desc: 'Exponential backoff, flood-wait handling, daily limits, human-like delays (45–180s), and anti-pattern variation.' },
    { icon: '🎯', title: 'Lead Scoring (1–10)', desc: 'Every scraped profile is scored by bio keywords, activity recency, group memberships, and engagement signals.' },
    { icon: '💬', title: '3-Step DM Sequences', desc: 'Personalised intro → value → CTA messages with AI-generated responses to replies and objection handling.' },
    { icon: '⚡', title: 'Comment Authority Engine', desc: 'Monitors discussions for relevant questions and posts expert replies that position you as the go-to authority.' },
    { icon: '📊', title: 'Real-Time Dashboard', desc: 'Live activity feed, group table, lead pipeline view, and daily analytics charts — all in your browser.' },
    { icon: '🗓️', title: 'Fully Automated Scheduler', desc: 'Morning discovery, mid-morning posts, afternoon DMs, evening engagement. Runs 24/7 on your server.' },
    { icon: '🔍', title: 'Smart Group Discovery', desc: 'Searches by keyword, filters spam groups, scores relevance, and maintains a ranked database of target communities.' },
    { icon: '🔄', title: 'Multi-Account Support', desc: 'Configure multiple Telegram accounts to rotate sessions and multiply daily output while staying safe.' },
    { icon: '📁', title: 'Full Data Ownership', desc: 'All group, lead, and analytics data stored as JSON on your server. No third-party data dependency.' },
    { icon: '🧠', title: 'Objection Handling AI', desc: 'Classifies replies (not interested, busy, pricing questions) and generates contextual, human-sounding responses.' },
    { icon: '📈', title: 'Pipeline Estimation', desc: 'Estimates deal pipeline value from lead scores and conversion rates. Reported in your daily analytics.' },
];

const RESULTS = [
    { metric: '180+', label: 'Leads scraped per week', sub: 'from 40+ active groups' },
    { metric: '47%', label: 'Average reply rate', sub: 'on personalised DM sequences' },
    { metric: '£140k', label: 'Pipeline generated', sub: 'in first 90 days of use' },
    { metric: '6.2x', label: 'ROI vs manual outreach', sub: 'based on time-cost analysis' },
];

const PRICING = [
    {
        name: 'Starter',
        price: '$97',
        period: '/mo',
        desc: 'Perfect for solopreneurs and small agencies getting started with Telegram outreach.',
        features: [
            '1 Telegram account',
            '10 group joins/day',
            '25 DMs/day',
            'AI content generation',
            '3-step DM sequence',
            'Basic analytics dashboard',
            'Email support',
        ],
        cta: 'Start 7-Day Trial',
        highlight: false,
        color: '#6366f1',
    },
    {
        name: 'Growth',
        price: '$197',
        period: '/mo',
        desc: 'For agencies and founders who need serious volume and advanced automation.',
        features: [
            'Up to 3 Telegram accounts',
            '15 group joins/day per account',
            '50 DMs/day per account',
            'GPT-4o content (all 5 formats)',
            'Comment engagement engine',
            'Lead scoring & qualification',
            'Full analytics dashboard',
            'Objection handling AI',
            'Priority support',
        ],
        cta: 'Start 7-Day Trial',
        highlight: true,
        color: '#8b5cf6',
    },
    {
        name: 'Agency',
        price: '$397',
        period: '/mo',
        desc: 'White-label licence for agencies running Telegram campaigns for multiple clients.',
        features: [
            'Unlimited Telegram accounts',
            'Custom daily limits',
            'White-label dashboard',
            'API access for integrations',
            'Multi-client campaign manager',
            'Custom AI persona per campaign',
            'CRM webhook integrations',
            'Onboarding call included',
            'Dedicated Slack support',
        ],
        cta: 'Book a Demo',
        highlight: false,
        color: '#ec4899',
    },
];

const FAQS = [
    {
        q: 'Is this against Telegram\'s terms of service?',
        a: 'The engine uses Telegram\'s official MTProto API — the same API that powers many legitimate marketing tools. All actions have configurable human-like delays and daily limits well below Telegram\'s thresholds. We recommend using an account dedicated to outreach, not your personal account.',
    },
    {
        q: 'Will my account get banned?',
        a: 'The safety system is specifically designed to prevent this. It enforces daily action limits (far below Telegram\'s internal triggers), randomises delay timings, varies message lengths, handles flood waits automatically, and supports account rotation. No tool can guarantee zero risk, but our anti-ban logic is the most sophisticated available.',
    },
    {
        q: 'How many leads can I expect per week?',
        a: 'It depends on your niche and keyword specificity. Our own use of the Growth plan generates 150–200 scraped leads per week from 40+ groups, with roughly 40–50% reply rates on DM sequences. High-niche targeting typically yields better results than broad keywords.',
    },
    {
        q: 'Do I need a VPS/server to run it?',
        a: 'Yes — the bot engine runs as a Node.js process on a server. Any £5/month VPS (DigitalOcean, Hetzner, Vultr) is sufficient. We provide a full setup guide and a one-command deploy script.',
    },
    {
        q: 'Can I customise the AI content and DM templates?',
        a: 'Absolutely. You configure the niche, tone, keywords, CTA message, and value proposition in config.json. All AI prompts are tuned to your specific brand voice. The 5 content templates can also be edited in the source code.',
    },
    {
        q: 'What languages does the content engine support?',
        a: 'GPT-4o supports all major languages. Simply set your target language in the config and it will generate native-language content and DMs automatically.',
    },
];

export default function TelegramGrowthPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: 'clamp(6rem, 12vw, 9rem) 2rem clamp(4rem, 8vw, 6rem)',
                    textAlign: 'center',
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 65%)',
                    borderBottom: '1px solid var(--glass-border)',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Live counter badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
                        padding: '0.4rem 1rem', borderRadius: '9999px', marginBottom: '2rem',
                    }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
                        <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 700 }}>
                            1,284 leads scraped this week across 47 groups
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        color: '#fff',
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-playfair)',
                        maxWidth: '800px',
                        margin: '0 auto 1.5rem',
                    }}>
                        Put Your Telegram Growth<br />
                        <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            on Autopilot
                        </span>
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: '#94a3b8',
                        maxWidth: '640px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.7,
                    }}>
                        Discover niche groups, post AI-generated expert content, scrape qualified leads, and send personalised 3-step DM sequences — all running autonomously 24/7.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="#pricing" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            color: '#fff', padding: '1rem 2.5rem', borderRadius: '0.875rem',
                            fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none',
                            boxShadow: '0 0 40px rgba(99,102,241,0.35)',
                        }}>
                            Start 7-Day Free Trial <ArrowRight size={18} />
                        </Link>
                        <Link href="/telegram-dashboard" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            color: '#e2e8f0', padding: '1rem 2rem', borderRadius: '0.875rem',
                            fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none',
                        }}>
                            View Live Demo →
                        </Link>
                    </div>
                </section>

                {/* PAIN POINTS */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>
                            Manual Telegram Outreach is a Full-Time Job
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            And it still doesn&apos;t scale. Here&apos;s what growth teams deal with every day:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', textAlign: 'left' }}>
                            {[
                                { pain: 'Finding relevant groups takes hours of manual searching', icon: '😤' },
                                { pain: 'Copy-paste DMs get ignored — personalisation at scale is impossible', icon: '🚫' },
                                { pain: 'Forgetting to follow up kills deals before they start', icon: '💀' },
                                { pain: 'No way to qualify leads without reading every profile manually', icon: '⏱️' },
                                { pain: 'Posting consistently to 20+ groups without spamming is a balancing act', icon: '🤹' },
                                { pain: 'Zero visibility into what\'s working — no analytics, no data', icon: '📉' },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                                    background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.12)',
                                    borderRadius: '1rem', padding: '1.25rem',
                                }}>
                                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                                    <p style={{ color: '#94a3b8', margin: 0, lineHeight: 1.6, fontSize: '0.9rem' }}>{item.pain}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)', background: 'rgba(99,102,241,0.03)' }}>
                    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', fontWeight: 800, fontFamily: 'var(--font-playfair)', marginBottom: '0.75rem' }}>
                                How It Works
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Five autonomous steps. Zero manual effort after setup.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {HOW_IT_WORKS.map((step, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: '2rem', alignItems: 'flex-start',
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem', padding: '2rem',
                                    borderLeft: '4px solid #6366f1',
                                }}>
                                    <div style={{ textAlign: 'center', flexShrink: 0, width: '60px' }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{step.icon}</div>
                                        <span style={{ color: '#475569', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'monospace' }}>{step.step}</span>
                                    </div>
                                    <div>
                                        <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                                        <p style={{ color: '#64748b', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURES GRID */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', fontWeight: 800, fontFamily: 'var(--font-playfair)', marginBottom: '0.75rem' }}>
                                Everything You Need to Scale Telegram
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>12 integrated modules working together as one autonomous system.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                            {FEATURES.map((f, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.5rem',
                                    transition: 'border-color 0.2s',
                                }}>
                                    <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{f.title}</h3>
                                    <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RESULTS */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)', background: 'rgba(99,102,241,0.04)' }}>
                    <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', fontWeight: 800, fontFamily: 'var(--font-playfair)', marginBottom: '0.75rem' }}>
                            Our Own Results Using This System
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '3rem' }}>
                            We built this to get our own clients. These are real numbers from our Growth plan instance.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            {RESULTS.map((r, i) => (
                                <div key={i} style={{
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem', padding: '2rem',
                                }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#6366f1', marginBottom: '0.5rem' }}>{r.metric}</div>
                                    <div style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{r.label}</div>
                                    <div style={{ color: '#475569', fontSize: '0.8rem' }}>{r.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section id="pricing" style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', fontWeight: 800, fontFamily: 'var(--font-playfair)', marginBottom: '0.75rem' }}>
                                Simple, Transparent Pricing
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '1.05rem' }}>7-day free trial on all plans. Cancel anytime.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                            {PRICING.map((plan, i) => (
                                <div key={i} style={{
                                    background: plan.highlight
                                        ? 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))'
                                        : 'var(--bg-secondary)',
                                    border: `2px solid ${plan.highlight ? '#6366f1' : 'var(--glass-border)'}`,
                                    borderRadius: '1.5rem', padding: '2rem',
                                    position: 'relative',
                                }}>
                                    {plan.highlight && (
                                        <div style={{
                                            position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                                            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                                            color: '#fff', padding: '0.3rem 1rem', borderRadius: '9999px',
                                            fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap',
                                        }}>Most Popular</div>
                                    )}
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.25rem' }}>{plan.name}</h3>
                                        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1rem' }}>{plan.desc}</p>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                                            <span style={{ fontSize: '3rem', fontWeight: 900, color: plan.color }}>{plan.price}</span>
                                            <span style={{ color: '#475569' }}>{plan.period}</span>
                                        </div>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {plan.features.map((f, j) => (
                                            <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                                <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: 2 }} />
                                                <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" style={{
                                        display: 'flex', justifyContent: 'center',
                                        background: plan.highlight ? `linear-gradient(135deg, #6366f1, #8b5cf6)` : 'rgba(255,255,255,0.06)',
                                        border: `1px solid ${plan.highlight ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                                        color: '#fff', padding: '0.875rem', borderRadius: '0.875rem',
                                        fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
                                        boxShadow: plan.highlight ? '0 0 30px rgba(99,102,241,0.3)' : 'none',
                                    }}>
                                        {plan.cta}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', color: '#fff', fontWeight: 800, fontFamily: 'var(--font-playfair)', marginBottom: '2.5rem', textAlign: 'center' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {FAQS.map((faq, i) => (
                                <details key={i} style={{
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', padding: '1.5rem', cursor: 'pointer',
                                }}>
                                    <summary style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                                        {faq.q}
                                        <ChevronDown size={18} color="#64748b" style={{ flexShrink: 0 }} />
                                    </summary>
                                    <p style={{ color: '#64748b', lineHeight: 1.7, margin: '1rem 0 0', fontSize: '0.9rem' }}>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
                    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚀</div>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', fontWeight: 900, fontFamily: 'var(--font-playfair)', marginBottom: '1rem' }}>
                            Ready to Put Your Growth on Autopilot?
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                            Start your 7-day free trial today. No credit card required. Full access to all features.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                color: '#fff', padding: '1rem 2.5rem', borderRadius: '0.875rem',
                                fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none',
                                boxShadow: '0 0 40px rgba(99,102,241,0.35)',
                            }}>
                                Start Free Trial <ArrowRight size={18} />
                            </Link>
                            <Link href="/telegram-dashboard" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                                color: '#e2e8f0', padding: '1rem 2rem', borderRadius: '0.875rem',
                                fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none',
                            }}>
                                View Dashboard Demo →
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
