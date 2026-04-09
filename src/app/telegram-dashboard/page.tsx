'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type TabId = 'overview' | 'leads' | 'groups' | 'content' | 'settings';

const TABS: { id: TabId; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'leads', label: 'Leads', icon: '👤' },
    { id: 'groups', label: 'Groups', icon: '💬' },
    { id: 'content', label: 'Content', icon: '✏️' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
];

const MOCK_LEADS = [
    { id: 1, name: 'Arjun Mehta', handle: '@arjunm_biz', group: 'AI Founders India', score: 94, status: 'replied', dm_step: 3, bio: 'SaaS founder | B2B growth | ex-Flipkart' },
    { id: 2, name: 'Sarah T.', handle: '@saraht_growth', group: 'Growth Hackers UK', score: 88, status: 'dm_sent', dm_step: 2, bio: 'Head of Growth @ Series-A SaaS | PLG obsessed' },
    { id: 3, name: 'Rahul K.', handle: '@rahulk_martech', group: 'MarTech India', score: 82, status: 'dm_sent', dm_step: 1, bio: 'MarTech consultant · helping brands automate CX' },
    { id: 4, name: 'Marcus F.', handle: '@marcusf_agency', group: 'Agency Owners EU', score: 76, status: 'queued', dm_step: 0, bio: 'Digital agency owner | SEO + Paid | 40+ clients' },
    { id: 5, name: 'Priya S.', handle: '@priyas_startup', group: 'Startup Ecosystem IN', score: 71, status: 'queued', dm_step: 0, bio: 'Co-founder, SaaS startup | female founder' },
    { id: 6, name: 'James O.', handle: '@jameso_bdb', group: 'B2B SaaS Founders', score: 65, status: 'scraped', dm_step: 0, bio: 'B2B sales & business dev · building in public' },
    { id: 7, name: 'Anika R.', handle: '@anikar_ai', group: 'AI Tools Community', score: 58, status: 'scraped', dm_step: 0, bio: 'Product manager | AI tools enthusiast | investor' },
    { id: 8, name: 'Tom C.', handle: '@tomc_founder', group: 'Founder Network Global', score: 52, status: 'scraped', dm_step: 0, bio: 'First-time founder | B2C -> B2B pivot journey' },
];

const MOCK_GROUPS = [
    { id: 1, name: 'AI Founders India', members: 12400, posts_today: 3, leads_scraped: 284, status: 'active', last_post: '2h ago' },
    { id: 2, name: 'Growth Hackers UK', members: 8700, posts_today: 2, leads_scraped: 197, status: 'active', last_post: '4h ago' },
    { id: 3, name: 'MarTech India', members: 6200, posts_today: 2, leads_scraped: 143, status: 'active', last_post: '3h ago' },
    { id: 4, name: 'B2B SaaS Founders', members: 21000, posts_today: 1, leads_scraped: 312, status: 'active', last_post: '6h ago' },
    { id: 5, name: 'Agency Owners EU', members: 4500, posts_today: 1, leads_scraped: 98, status: 'active', last_post: '5h ago' },
    { id: 6, name: 'Startup Ecosystem IN', members: 9800, posts_today: 2, leads_scraped: 167, status: 'active', last_post: '1h ago' },
    { id: 7, name: 'Founder Network Global', members: 35000, posts_today: 1, leads_scraped: 83, status: 'paused', last_post: '18h ago' },
];

const MOCK_CONTENT = [
    { id: 1, group: 'AI Founders India', content: '🤖 Most AI agencies are selling services. The smartest ones are building systems that sell for them. Here\'s the 3-step AI growth stack we\'re deploying for 6-figure B2B brands right now...', status: 'published', engagements: 47, posted_at: '2h ago' },
    { id: 2, group: 'Growth Hackers UK', content: '📊 Unpopular truth: your funnel isn\'t broken. Your targeting is. We analysed 89 B2B funnels this quarter. The #1 problem wasn\'t the offer — it was going after the wrong Telegram groups entirely.', status: 'published', engagements: 34, posted_at: '4h ago' },
    { id: 3, group: 'MarTech India', content: '🎯 The MarTech stack that\'s printing pipeline for Indian B2B brands: → Telegram scraper for warm leads → GPT-4o for personalised DMs → WhatsApp for follow-up → HubSpot for CRM.', status: 'published', engagements: 28, posted_at: '3h ago' },
    { id: 4, group: 'B2B SaaS Founders', content: '💡 Stop paying ₹50K+/month for cold email lists. Here\'s how we\'re getting 900+ qualified Telegram leads/week — organically — with an AI system that runs while we sleep...', status: 'scheduled', engagements: 0, posted_at: 'In 45 min' },
    { id: 5, group: 'Agency Owners EU', content: '⚡ Agency owners: are you still doing manual outreach in 2025? Our clients are running fully automated Telegram lead gen with GPT-4o. Ask me how. (First DM is free)', status: 'scheduled', engagements: 0, posted_at: 'In 2h' },
];

const OVERVIEW_METRICS = [
    { label: 'Total Leads', value: '1,284', delta: '+312 this week', color: '#6366f1', icon: '👤' },
    { label: 'Groups Active', value: '47', delta: '+3 new', color: '#22d3ee', icon: '💬' },
    { label: 'DMs Sent', value: '612', delta: '+89 today', color: '#a78bfa', icon: '📨' },
    { label: 'Pipeline Value', value: '£142k', delta: '+£28k this week', color: '#10b981', icon: '💰' },
    { label: 'Replies Received', value: '74', delta: '12.1% reply rate', color: '#f59e0b', icon: '💬' },
    { label: 'Posts Published', value: '231', delta: '+15 today', color: '#ec4899', icon: '✏️' },
];

function StatusBadge({ status }: { status: string }) {
    const map: Record<string, { bg: string; color: string; label: string }> = {
        replied: { bg: 'rgba(16,185,129,0.12)', color: '#10b981', label: 'Replied' },
        dm_sent: { bg: 'rgba(99,102,241,0.12)', color: '#818cf8', label: 'DM Sent' },
        queued: { bg: 'rgba(245,158,11,0.12)', color: '#fbbf24', label: 'Queued' },
        scraped: { bg: 'rgba(100,116,139,0.12)', color: '#94a3b8', label: 'Scraped' },
        active: { bg: 'rgba(16,185,129,0.12)', color: '#10b981', label: 'Active' },
        paused: { bg: 'rgba(245,158,11,0.12)', color: '#fbbf24', label: 'Paused' },
        published: { bg: 'rgba(16,185,129,0.12)', color: '#10b981', label: 'Published' },
        scheduled: { bg: 'rgba(99,102,241,0.12)', color: '#818cf8', label: 'Scheduled' },
    };
    const s = map[status] ?? { bg: 'rgba(100,116,139,0.12)', color: '#94a3b8', label: status };
    return (
        <span style={{
            background: s.bg, color: s.color,
            padding: '0.2rem 0.6rem', borderRadius: '0.5rem',
            fontSize: '0.75rem', fontWeight: 700, whiteSpace: 'nowrap',
        }}>
            {s.label}
        </span>
    );
}

function ScoreBadge({ score }: { score: number }) {
    const color = score >= 80 ? '#10b981' : score >= 65 ? '#f59e0b' : '#64748b';
    return (
        <span style={{
            color, fontWeight: 900, fontSize: '0.9rem',
            display: 'inline-flex', alignItems: 'center', gap: '0.2rem',
        }}>
            {score}
        </span>
    );
}

function OverviewTab() {
    return (
        <div>
            {/* Metrics Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem', marginBottom: '2rem',
            }}>
                {OVERVIEW_METRICS.map(m => (
                    <div key={m.label} style={{
                        background: 'var(--bg-tertiary)',
                        border: `1px solid ${m.color}20`,
                        borderRadius: '1rem', padding: '1.5rem',
                    }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{m.icon}</div>
                        <div style={{ color: m.color, fontSize: '1.75rem', fontWeight: 900 }}>{m.value}</div>
                        <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 700, margin: '0.25rem 0 0.25rem' }}>{m.label}</div>
                        <div style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 700 }}>{m.delta}</div>
                    </div>
                ))}
            </div>

            {/* Activity Feed */}
            <div style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1rem', padding: '1.5rem',
            }}>
                <h3 style={{ color: '#fff', fontWeight: 800, margin: '0 0 1.25rem', fontSize: '1rem' }}>
                    Live Activity Feed
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {[
                        { time: '2m ago', event: '✅ DM replied by @arjunm_biz — score 94 — hot lead flagged', type: 'reply' },
                        { time: '8m ago', event: '📨 Step-2 DM sent to @saraht_growth', type: 'dm' },
                        { time: '12m ago', event: '✏️ Post published in AI Founders India (47 views)', type: 'post' },
                        { time: '18m ago', event: '👤 312 new leads scraped from B2B SaaS Founders group', type: 'scrape' },
                        { time: '31m ago', event: '🔍 3 new groups discovered: "Fintech Founders IN", "PLG Community", "Indie Hackers Asia"', type: 'discovery' },
                        { time: '45m ago', event: '📨 Step-1 DM sent to 14 leads (score ≥ 70)', type: 'dm' },
                        { time: '1h ago', event: '✏️ Post published in Growth Hackers UK (34 engagements)', type: 'post' },
                    ].map((item, i) => (
                        <div key={i} style={{
                            display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                            padding: '0.6rem 0',
                            borderBottom: '1px solid rgba(255,255,255,0.04)',
                        }}>
                            <span style={{ color: '#475569', fontSize: '0.75rem', flexShrink: 0, paddingTop: '0.1rem', minWidth: '50px' }}>{item.time}</span>
                            <span style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.5 }}>{item.event}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function LeadsTab() {
    const [filter, setFilter] = useState<string>('all');
    const statuses = ['all', 'replied', 'dm_sent', 'queued', 'scraped'];

    const filtered = filter === 'all' ? MOCK_LEADS : MOCK_LEADS.filter(l => l.status === filter);

    return (
        <div>
            {/* Filter Bar */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                {statuses.map(s => (
                    <button
                        key={s}
                        onClick={() => setFilter(s)}
                        style={{
                            padding: '0.4rem 0.9rem',
                            background: filter === s ? '#6366f1' : 'rgba(255,255,255,0.04)',
                            border: `1px solid ${filter === s ? '#6366f1' : 'var(--glass-border)'}`,
                            borderRadius: '0.6rem', color: '#fff', fontWeight: 700,
                            fontSize: '0.8rem', cursor: 'pointer', textTransform: 'capitalize',
                        }}
                    >
                        {s}
                    </button>
                ))}
                <div style={{ marginLeft: 'auto', color: '#64748b', fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                    {filtered.length} leads
                </div>
            </div>

            {/* Leads Table */}
            <div style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1rem', overflow: 'hidden',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1.2fr 0.8fr 0.8fr 0.6fr',
                    padding: '0.85rem 1.25rem',
                    borderBottom: '1px solid var(--glass-border)',
                    gap: '1rem',
                }}>
                    {['Lead', 'Group', 'Score', 'Status', 'DM Step'].map(h => (
                        <span key={h} style={{ color: '#475569', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</span>
                    ))}
                </div>
                {filtered.map(lead => (
                    <div key={lead.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1.2fr 0.8fr 0.8fr 0.6fr',
                        padding: '0.85rem 1.25rem', gap: '1rem',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        alignItems: 'center',
                    }}>
                        <div>
                            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem' }}>{lead.name}</div>
                            <div style={{ color: '#475569', fontSize: '0.75rem' }}>{lead.handle}</div>
                            <div style={{ color: '#64748b', fontSize: '0.72rem', marginTop: '0.2rem', lineHeight: 1.4, maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{lead.bio}</div>
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{lead.group}</div>
                        <div><ScoreBadge score={lead.score} /></div>
                        <div><StatusBadge status={lead.status} /></div>
                        <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 700 }}>{lead.dm_step}/3</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function GroupsTab() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>6 active</span> · 1 paused · 47 total across all time
                </div>
                <button style={{
                    padding: '0.55rem 1rem',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    border: 'none', borderRadius: '0.65rem', color: '#fff',
                    fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer',
                }}>
                    + Discover Groups
                </button>
            </div>

            <div style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1rem', overflow: 'hidden',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 0.8fr 1fr 0.8fr 0.8fr',
                    padding: '0.85rem 1.25rem',
                    borderBottom: '1px solid var(--glass-border)',
                    gap: '1rem',
                }}>
                    {['Group', 'Members', 'Posts Today', 'Leads Scraped', 'Status', 'Last Post'].map(h => (
                        <span key={h} style={{ color: '#475569', fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</span>
                    ))}
                </div>
                {MOCK_GROUPS.map(g => (
                    <div key={g.id} style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 0.8fr 1fr 0.8fr 0.8fr',
                        padding: '0.85rem 1.25rem', gap: '1rem',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        alignItems: 'center',
                    }}>
                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem' }}>{g.name}</div>
                        <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{g.members.toLocaleString()}</div>
                        <div style={{ color: '#6366f1', fontSize: '0.875rem', fontWeight: 800 }}>{g.posts_today}</div>
                        <div style={{ color: '#22d3ee', fontSize: '0.875rem', fontWeight: 800 }}>{g.leads_scraped}</div>
                        <div><StatusBadge status={g.status} /></div>
                        <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{g.last_post}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ContentTab() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>3 published</span> · <span style={{ color: '#818cf8', fontWeight: 800 }}>2 scheduled</span> today
                </div>
                <button style={{
                    padding: '0.55rem 1rem',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    border: 'none', borderRadius: '0.65rem', color: '#fff',
                    fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer',
                }}>
                    + Generate Post
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {MOCK_CONTENT.map(c => (
                    <div key={c.id} style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '1rem', padding: '1.25rem',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>{c.group}</div>
                                <div style={{ color: '#475569', fontSize: '0.75rem', marginTop: '0.2rem' }}>{c.posted_at}</div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                {c.status === 'published' && (
                                    <span style={{ color: '#64748b', fontSize: '0.8rem' }}>👍 {c.engagements} reactions</span>
                                )}
                                <StatusBadge status={c.status} />
                            </div>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{c.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SettingsTab() {
    const [settings, setSettings] = useState({
        niche: 'AI Growth Agency',
        keywords: 'AI agency, digital marketing, automation, SaaS founders',
        daily_dms: 25,
        daily_posts: 15,
        cta: 'We build AI growth systems for B2B brands → wemagnifai.com',
        min_score: 70,
        message_delay_min: 45,
        message_delay_max: 180,
    });
    const [toast, setToast] = useState<string | null>(null);

    const saveSettings = () => {
        setToast('Settings saved successfully');
        setTimeout(() => setToast(null), 2200);
    };

    return (
        <div style={{
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--glass-border)',
            borderRadius: '1.25rem', padding: '2rem',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem',
        }}>
            {/* Column 1 */}
            <div>
                <h3 style={{ color: '#fff', margin: '0 0 1.25rem', fontSize: '0.95rem', fontWeight: 800 }}>Targeting</h3>
                <label style={labelStyle}>
                    Niche
                    <input value={settings.niche} onChange={e => setSettings(s => ({ ...s, niche: e.target.value }))} style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Keywords (comma-separated)
                    <textarea value={settings.keywords} onChange={e => setSettings(s => ({ ...s, keywords: e.target.value }))} style={{ ...inputStyle, minHeight: '72px', resize: 'vertical' }} />
                </label>
                <label style={labelStyle}>
                    Min Lead Score to DM
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.4rem' }}>
                        <input type="range" min={40} max={95} step={5} value={settings.min_score} onChange={e => setSettings(s => ({ ...s, min_score: Number(e.target.value) }))} style={{ flex: 1, accentColor: '#6366f1' }} />
                        <span style={{ color: '#6366f1', fontWeight: 900, minWidth: '2.5rem', textAlign: 'right' }}>{settings.min_score}</span>
                    </div>
                </label>
            </div>

            {/* Column 2 */}
            <div>
                <h3 style={{ color: '#fff', margin: '0 0 1.25rem', fontSize: '0.95rem', fontWeight: 800 }}>Activity Limits</h3>
                <label style={labelStyle}>
                    Daily DMs
                    <input type="number" value={settings.daily_dms} min={5} max={50} onChange={e => setSettings(s => ({ ...s, daily_dms: Number(e.target.value) }))} style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Daily Posts
                    <input type="number" value={settings.daily_posts} min={3} max={30} onChange={e => setSettings(s => ({ ...s, daily_posts: Number(e.target.value) }))} style={inputStyle} />
                </label>
                <label style={labelStyle}>
                    Message Delay (seconds)
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
                        <input type="number" placeholder="Min" value={settings.message_delay_min} onChange={e => setSettings(s => ({ ...s, message_delay_min: Number(e.target.value) }))} style={{ ...inputStyle, marginTop: 0, flex: 1 }} />
                        <input type="number" placeholder="Max" value={settings.message_delay_max} onChange={e => setSettings(s => ({ ...s, message_delay_max: Number(e.target.value) }))} style={{ ...inputStyle, marginTop: 0, flex: 1 }} />
                    </div>
                </label>
                <label style={labelStyle}>
                    CTA in posts
                    <textarea value={settings.cta} onChange={e => setSettings(s => ({ ...s, cta: e.target.value }))} style={{ ...inputStyle, minHeight: '72px', resize: 'vertical' }} />
                </label>
                <button onClick={saveSettings} style={{
                    padding: '0.85rem 1.5rem',
                    border: 'none', borderRadius: '0.75rem',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    color: '#fff', fontWeight: 800, cursor: 'pointer',
                    marginTop: '0.5rem', width: '100%',
                }}>
                    Save Settings
                </button>
            </div>

            {toast && (
                <div style={{
                    position: 'fixed', right: '1.25rem', bottom: '1.25rem',
                    background: '#10b981', color: '#fff', padding: '0.9rem 1.2rem',
                    borderRadius: '0.8rem', fontWeight: 800,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.35)', zIndex: 100,
                }}>
                    {toast}
                </div>
            )}
        </div>
    );
}

const labelStyle: React.CSSProperties = {
    display: 'block', color: '#94a3b8',
    marginBottom: '1rem', fontWeight: 700, fontSize: '0.85rem',
};
const inputStyle: React.CSSProperties = {
    width: '100%', marginTop: '0.4rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--glass-border)',
    borderRadius: '0.7rem', padding: '0.75rem 1rem',
    color: '#fff', boxSizing: 'border-box', fontSize: '0.875rem',
};

export default function TelegramDashboard() {
    const [activeTab, setActiveTab] = useState<TabId>('overview');
    const [status, setStatus] = useState<'active' | 'paused'>('active');

    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '80px' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' }}>

                    {/* Page Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                <h1 style={{ color: '#fff', margin: 0, fontSize: '1.4rem', fontWeight: 900 }}>Telegram Growth Engine</h1>
                                <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                                    background: status === 'active' ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.12)',
                                    border: `1px solid ${status === 'active' ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)'}`,
                                    color: status === 'active' ? '#10b981' : '#fbbf24',
                                    padding: '0.2rem 0.7rem', borderRadius: '2rem',
                                    fontSize: '0.75rem', fontWeight: 800,
                                }}>
                                    <span style={{
                                        width: '6px', height: '6px', borderRadius: '50%',
                                        background: status === 'active' ? '#10b981' : '#fbbf24',
                                    }} />
                                    {status === 'active' ? 'Running' : 'Paused'}
                                </span>
                            </div>
                            <p style={{ color: '#64748b', margin: 0, fontSize: '0.875rem' }}>
                                Last synced 2 minutes ago · 47 groups monitored
                            </p>
                        </div>
                        <button
                            onClick={() => setStatus(s => s === 'active' ? 'paused' : 'active')}
                            style={{
                                padding: '0.6rem 1.25rem',
                                background: status === 'active' ? 'rgba(245,158,11,0.1)' : 'rgba(16,185,129,0.1)',
                                border: `1px solid ${status === 'active' ? 'rgba(245,158,11,0.3)' : 'rgba(16,185,129,0.3)'}`,
                                color: status === 'active' ? '#fbbf24' : '#10b981',
                                borderRadius: '0.75rem', fontWeight: 800, cursor: 'pointer',
                                fontSize: '0.875rem',
                            }}
                        >
                            {status === 'active' ? '⏸ Pause Engine' : '▶ Resume Engine'}
                        </button>
                    </div>

                    {/* Tab Navigation */}
                    <div style={{
                        display: 'flex', gap: '0.25rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '0.875rem', padding: '0.35rem',
                        marginBottom: '1.75rem', overflowX: 'auto',
                    }}>
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                                    padding: '0.55rem 1.1rem',
                                    background: activeTab === tab.id ? '#6366f1' : 'transparent',
                                    border: 'none', borderRadius: '0.65rem',
                                    color: activeTab === tab.id ? '#fff' : '#64748b',
                                    fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer',
                                    whiteSpace: 'nowrap', transition: 'all 0.15s',
                                }}
                            >
                                <span>{tab.icon}</span>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'overview' && <OverviewTab />}
                    {activeTab === 'leads' && <LeadsTab />}
                    {activeTab === 'groups' && <GroupsTab />}
                    {activeTab === 'content' && <ContentTab />}
                    {activeTab === 'settings' && <SettingsTab />}

                </div>
            </main>
            <Footer />
        </>
    );
}
