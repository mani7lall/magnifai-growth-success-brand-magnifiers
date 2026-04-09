import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Telegram Growth Engine — Autonomous Lead Gen on Autopilot | WeMagnifAI',
    description: 'Autonomous Telegram organic marketing system. Discover groups, post AI content, scrape qualified leads, and send personalised DMs — all on a set-and-forget schedule.',
};

const FAQS = [
    { q: 'Is this against Telegram\'s terms of service?', a: 'The engine uses Telegram\'s official MTProto API — the same API that powers many legitimate marketing tools. All actions have configurable human-like delays and daily limits well below Telegram\'s thresholds. We recommend using an account dedicated to outreach, not your personal account.' },
    { q: 'Will my account get banned?', a: 'The safety system is specifically designed to prevent this. It enforces daily action limits, randomises delay timings, varies message lengths, handles flood waits automatically, and supports account rotation.' },
    { q: 'Do I need a server to run it?', a: 'Yes — the bot engine runs as a Node.js process on a server. Any £5/month VPS is sufficient. We also have a step-by-step setup guide.', link: '/telegram-setup' },
    { q: 'How long does it take to get first leads?', a: 'Most users see their first scraped leads within 2 hours of setup. The bot begins discovering and joining groups immediately, then starts scraping member lists and scoring leads using the GPT-4o engine.' },
    { q: 'What is the typical weekly output?', a: 'In standard configuration: 800–1,400 new leads scored per week, 150–300 DMs sent, and 60–120 group posts published. All numbers scale linearly with the number of accounts in rotation.' },
    { q: 'Can I customise the DM sequences?', a: 'Yes, fully. The 3-step sequence templates are JSON files you edit directly. Personalisation tokens include {{first_name}}, {{group_name}}, {{industry}}, and anything else your lead scorer captures.' },
    { q: 'What does GPT-4o actually do?', a: 'It generates group-specific post content, scores each lead 0–100 based on their bio/messages/group membership, rewrites DM messages to avoid repetition, and summarises lead intent for your CRM export.' },
];

const FEATURES = [
    { icon: '🔍', title: 'AI Group Discovery', desc: 'GPT-4o scans 10,000+ Telegram groups to find your exact ICP — filtered by niche, size, activity, and engagement quality.' },
    { icon: '📝', title: 'Content Engine', desc: 'Generates and posts value-first group content on a cron schedule. Each post is unique, niche-aware, and contains a soft CTA.' },
    { icon: '👤', title: 'Lead Scraper', desc: 'Extracts member profiles from target groups, enriches with bio analysis, and exports to CSV or pipes direct to your CRM.' },
    { icon: '⭐', title: 'Lead Scoring', desc: 'GPT-4o assigns each lead a 0–100 score using 14 signals including bio keywords, group membership, and message history.' },
    { icon: '💬', title: '3-Step DM Sequences', desc: 'Personalised outreach with day-0, day-3, day-7 follow-ups. Each step adapts tone based on the lead\'s score and response.' },
    { icon: '🛡️', title: 'Anti-Ban Safety', desc: 'Human-like delays, flood-wait handling, daily action caps, randomised timing windows, and multi-account rotation built-in.' },
    { icon: '📊', title: 'Live Dashboard', desc: 'Real-time metrics: groups joined, leads scraped, DMs sent, replies received, pipeline value. All in one view.' },
    { icon: '⚙️', title: 'Zero Maintenance', desc: 'Set your niche, keywords, and CTA once. The engine runs 24/7 on a £5/mo VPS — no manual work required after setup.' },
];

const TESTIMONIALS = [
    { name: 'Arjun Mehta', role: 'Founder, SaaS Growth Agency', location: 'Mumbai', quote: 'We went from 0 to 340 qualified Telegram leads in the first week. The lead scoring is eerily accurate — our first meeting booked was a ₹6L deal.' },
    { name: 'Sarah T.', role: 'Head of Growth, B2B SaaS', location: 'London', quote: 'The anti-ban system actually works. 3 months in, zero account flags. We\'ve sent 4,200+ DMs without a single warning.' },
    { name: 'Rahul Kapoor', role: 'Founder, MarTech Consultancy', location: 'Bengaluru', quote: 'Setup took 45 minutes including VPS provisioning. The cron jobs run silently in the background while I sleep. Absolute game changer for organic outreach.' },
    { name: 'Marcus K.', role: 'Agency Owner', location: 'Berlin', quote: 'I was skeptical of another "growth automation" tool. But the GPT-4o content is genuinely good — group members actually engage with the posts before our DMs land.' },
];

const PRICING = [
    {
        name: 'Starter', price: '₹4,999', period: '/mo', color: '#6366f1',
        features: ['1 Telegram account', 'Up to 500 leads/week', '3-step DM sequences', 'GPT-4o lead scoring', 'Basic dashboard', 'Email support'],
        cta: 'Get Started',
    },
    {
        name: 'Pro', price: '₹12,999', period: '/mo', color: '#22d3ee', popular: true,
        features: ['3 Telegram accounts (rotation)', 'Up to 1,800 leads/week', 'Custom DM templates', 'CRM export (CSV + webhook)', 'Full live dashboard', 'Priority Slack support', 'Monthly strategy call'],
        cta: 'Start Pro Trial',
    },
    {
        name: 'Agency', price: 'Custom', period: '', color: '#a78bfa',
        features: ['Unlimited accounts', 'White-label dashboard', 'Dedicated VPS setup', 'Custom AI persona training', 'Multi-client management', 'SLA guarantee', 'Dedicated account manager'],
        cta: 'Book a Call',
    },
];

const STATS = [
    { value: '1,284', label: 'Leads scraped this week' },
    { value: '47', label: 'Groups monitored' },
    { value: '612', label: 'DMs sent this week' },
    { value: '£142k', label: 'Pipeline created' },
];

export default function TelegramGrowthPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>

                {/* HERO */}
                <section style={{
                    padding: 'clamp(6rem, 12vw, 10rem) 2rem clamp(4rem, 8vw, 7rem)',
                    position: 'relative', overflow: 'hidden',
                    borderBottom: '1px solid var(--glass-border)',
                }}>
                    <div style={{
                        position: 'absolute', inset: 0, zIndex: 0,
                        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 70%)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)',
                            borderRadius: '2rem', padding: '0.4rem 1rem', marginBottom: '2rem',
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                            <span style={{ color: '#22d3ee', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.05em' }}>LIVE · Autonomous · Set-and-forget</span>
                        </div>

                        <h1 style={{
                            color: '#fff',
                            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                            fontFamily: 'var(--font-playfair)',
                            fontWeight: 900,
                            lineHeight: 1.05,
                            margin: '0 0 1.5rem',
                        }}>
                            Telegram Growth Engine
                            <span style={{ display: 'block', color: '#22d3ee', marginTop: '0.15em' }}>
                                Put Lead Gen on Autopilot
                            </span>
                        </h1>

                        <p style={{
                            color: '#94a3b8', fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 2.5rem',
                        }}>
                            Discovers high-intent Telegram groups. Posts AI-written content. Scrapes and scores leads.
                            Sends personalised 3-step DM sequences. Runs 24/7 on a £5/mo VPS with zero manual work.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
                            <Link href="/telegram-setup" style={{
                                padding: '1rem 2rem',
                                background: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
                                color: '#000', fontWeight: 900, fontSize: '1rem',
                                borderRadius: '0.875rem', textDecoration: 'none',
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            }}>
                                Start Free Trial →
                            </Link>
                            <Link href="/telegram-dashboard" style={{
                                padding: '1rem 2rem',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: '#fff', fontWeight: 700, fontSize: '1rem',
                                borderRadius: '0.875rem', textDecoration: 'none',
                            }}>
                                View Live Dashboard
                            </Link>
                        </div>

                        {/* Live Stats Bar */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: '1rem',
                        }}>
                            {STATS.map(s => (
                                <div key={s.label} style={{
                                    background: 'rgba(34,211,238,0.05)',
                                    border: '1px solid rgba(34,211,238,0.15)',
                                    borderRadius: '1rem', padding: '1.25rem 1rem',
                                }}>
                                    <div style={{ color: '#22d3ee', fontSize: '1.75rem', fontWeight: 900 }}>{s.value}</div>
                                    <div style={{ color: '#64748b', fontSize: '0.78rem', fontWeight: 700, marginTop: '0.25rem' }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                            Fully automated pipeline
                        </p>
                        <h2 style={{
                            color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                            fontFamily: 'var(--font-playfair)', fontWeight: 900,
                            margin: '0 0 1rem',
                        }}>
                            5 Steps. Zero Daily Effort.
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '3.5rem' }}>
                            Set it up once. The engine handles everything else — permanently.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
                            {[
                                { step: '01', title: 'Group Discovery', desc: 'AI scans Telegram for groups matching your niche. You approve the target list once.' },
                                { step: '02', title: 'Content Publishing', desc: 'GPT-4o generates and schedules niche-specific posts. Builds trust before the outreach starts.' },
                                { step: '03', title: 'Lead Scraping & Scoring', desc: 'Members are scraped, enriched, and scored 0–100 for outreach priority.' },
                                { step: '04', title: 'DM Sequences', desc: 'Top-scored leads receive personalised 3-step DM sequences with human-like timing.' },
                                { step: '05', title: 'CRM Export', desc: 'Hot leads (score 70+) are exported to CSV or piped to your CRM via webhook.' },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'flex-start', gap: '1.5rem',
                                    padding: '1.75rem 2rem',
                                    background: i % 2 === 0 ? 'var(--bg-secondary)' : 'transparent',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem', marginBottom: '0.75rem',
                                    textAlign: 'left',
                                }}>
                                    <div style={{
                                        flexShrink: 0, width: '2.75rem', height: '2.75rem',
                                        background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                                        borderRadius: '0.75rem',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontWeight: 900, fontSize: '0.85rem', color: '#fff',
                                    }}>
                                        {item.step}
                                    </div>
                                    <div>
                                        <div style={{ color: '#fff', fontWeight: 800, marginBottom: '0.35rem', fontSize: '1.05rem' }}>{item.title}</div>
                                        <div style={{ color: '#64748b', lineHeight: 1.65, fontSize: '0.9rem' }}>{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURES GRID */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                                What&apos;s inside
                            </p>
                            <h2 style={{
                                color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontFamily: 'var(--font-playfair)', fontWeight: 900, margin: 0,
                            }}>
                                Every Feature You Need
                            </h2>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                            gap: '1.25rem',
                        }}>
                            {FEATURES.map(f => (
                                <div key={f.title} style={{
                                    background: 'var(--bg-secondary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem', padding: '1.75rem',
                                }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                                    <h3 style={{ color: '#fff', fontWeight: 800, margin: '0 0 0.6rem', fontSize: '1.05rem' }}>{f.title}</h3>
                                    <p style={{ color: '#64748b', lineHeight: 1.65, margin: 0, fontSize: '0.875rem' }}>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)', background: 'var(--bg-secondary)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                                Real results
                            </p>
                            <h2 style={{
                                color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontFamily: 'var(--font-playfair)', fontWeight: 900, margin: 0,
                            }}>
                                What Users Are Saying
                            </h2>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '1.25rem',
                        }}>
                            {TESTIMONIALS.map(t => (
                                <div key={t.name} style={{
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem', padding: '1.75rem',
                                    display: 'flex', flexDirection: 'column', gap: '1rem',
                                }}>
                                    <div style={{ color: '#fbbf24', fontSize: '1rem', letterSpacing: '0.05em' }}>★★★★★</div>
                                    <p style={{ color: '#cbd5e1', lineHeight: 1.7, margin: 0, fontSize: '0.9rem', fontStyle: 'italic' }}>
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--glass-border)' }}>
                                        <div style={{ color: '#fff', fontWeight: 800, fontSize: '0.9rem' }}>{t.name}</div>
                                        <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.role} · {t.location}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                                Simple pricing
                            </p>
                            <h2 style={{
                                color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontFamily: 'var(--font-playfair)', fontWeight: 900, margin: '0 0 0.75rem',
                            }}>
                                Plans That Scale With You
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>All plans include 14-day free trial. No credit card required.</p>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.5rem', alignItems: 'start',
                        }}>
                            {PRICING.map(plan => (
                                <div key={plan.name} style={{
                                    background: 'var(--bg-secondary)',
                                    border: `1px solid ${plan.popular ? plan.color : 'var(--glass-border)'}`,
                                    borderRadius: '1.5rem', padding: '2rem',
                                    position: 'relative',
                                    boxShadow: plan.popular ? `0 0 40px ${plan.color}18` : 'none',
                                }}>
                                    {plan.popular && (
                                        <div style={{
                                            position: 'absolute', top: '-0.75rem', left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: plan.color, color: '#000',
                                            padding: '0.25rem 1rem', borderRadius: '2rem',
                                            fontWeight: 900, fontSize: '0.75rem', whiteSpace: 'nowrap',
                                        }}>
                                            MOST POPULAR
                                        </div>
                                    )}
                                    <div style={{ color: plan.color, fontWeight: 800, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{plan.name}</div>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                                        <span style={{ color: '#fff', fontSize: '2.25rem', fontWeight: 900 }}>{plan.price}</span>
                                        <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{plan.period}</span>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                        {plan.features.map(f => (
                                            <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                                <span style={{ color: plan.color, fontWeight: 900, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                                                <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/telegram-setup" style={{
                                        display: 'block', textAlign: 'center',
                                        padding: '0.85rem 1.5rem',
                                        background: plan.popular ? `linear-gradient(135deg, ${plan.color}, #6366f1)` : 'rgba(255,255,255,0.06)',
                                        border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.12)',
                                        color: plan.popular ? '#000' : '#fff',
                                        fontWeight: 900, fontSize: '0.9rem', borderRadius: '0.875rem',
                                        textDecoration: 'none',
                                    }}>
                                        {plan.cta}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section style={{ padding: '5rem 2rem' }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                                Got questions
                            </p>
                            <h2 style={{
                                color: '#fff', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontFamily: 'var(--font-playfair)', fontWeight: 900, margin: 0,
                            }}>
                                Frequently Asked Questions
                            </h2>
                        </div>
                        {FAQS.map((faq, i) => (
                            <details key={i} style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '1rem', padding: '1.25rem',
                                marginBottom: '0.85rem',
                            }}>
                                <summary style={{
                                    color: '#fff', fontWeight: 700, cursor: 'pointer',
                                    listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                }}>
                                    {faq.q}
                                    <ChevronDown size={18} color="#64748b" />
                                </summary>
                                <p style={{ color: '#94a3b8', lineHeight: 1.7, marginTop: '0.9rem', marginBottom: 0 }}>
                                    {faq.a}{' '}
                                    {faq.link ? (
                                        <Link href={faq.link} style={{ color: '#22d3ee', fontWeight: 700, textDecoration: 'none' }}>
                                            Open the setup guide →
                                        </Link>
                                    ) : null}
                                </p>
                            </details>
                        ))}

                        {/* CTA Band */}
                        <div style={{
                            marginTop: '3rem',
                            background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(34,211,238,0.08))',
                            border: '1px solid rgba(34,211,238,0.2)',
                            borderRadius: '1.5rem', padding: '2.5rem',
                            textAlign: 'center',
                        }}>
                            <h3 style={{ color: '#fff', fontWeight: 900, fontSize: '1.4rem', margin: '0 0 0.75rem', fontFamily: 'var(--font-playfair)' }}>
                                Ready to run your first automated campaign?
                            </h3>
                            <p style={{ color: '#64748b', margin: '0 0 1.75rem', lineHeight: 1.65 }}>
                                14-day free trial · No credit card · Setup in under 45 minutes
                            </p>
                            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/telegram-setup" style={{
                                    padding: '0.85rem 1.75rem',
                                    background: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
                                    color: '#000', fontWeight: 900, borderRadius: '0.875rem',
                                    textDecoration: 'none', fontSize: '0.95rem',
                                }}>
                                    Start Free Trial →
                                </Link>
                                <Link href="/telegram-dashboard" style={{
                                    padding: '0.85rem 1.75rem',
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    color: '#fff', fontWeight: 700, borderRadius: '0.875rem',
                                    textDecoration: 'none', fontSize: '0.95rem',
                                }}>
                                    View Dashboard Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
