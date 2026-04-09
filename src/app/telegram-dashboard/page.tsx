'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const MOCK_STATS = {
    groups_joined: 47,
    posts_published: 183,
    leads_scraped: 1284,
    dms_sent: 612,
    replies_received: 89,
    est_pipeline: 142000,
};

const MOCK_GROUPS = [
    { name: 'AI Founders Club', members: 14200, posts: 12, leads: 87, score: 94, status: 'active' },
    { name: 'B2B Growth Hackers', members: 8700, posts: 9, leads: 64, score: 88, status: 'active' },
    { name: 'SaaS Operators', members: 6400, posts: 11, leads: 51, score: 85, status: 'active' },
    { name: 'Digital Marketing UK', members: 21000, posts: 7, leads: 112, score: 81, status: 'active' },
    { name: 'Startup Founders Network', members: 9800, posts: 8, leads: 73, score: 79, status: 'active' },
    { name: 'Automation Agency Owners', members: 3200, posts: 14, leads: 96, score: 91, status: 'active' },
    { name: 'Content Marketing Pros', members: 11500, posts: 6, leads: 44, score: 74, status: 'cooldown' },
    { name: 'Growth Marketing Slack Alt', members: 5100, posts: 5, leads: 38, score: 71, status: 'active' },
    { name: 'AI Tools Daily', members: 18900, posts: 4, leads: 122, score: 77, status: 'active' },
    { name: 'Agency Owners Circle', members: 2800, posts: 16, leads: 89, score: 90, status: 'active' },
];

const MOCK_LEADS = [
    { username: '@james_marketing_ceo', score: 9, status: 'In Sequence', step: '2/3', last: '3h ago', bio: 'CEO at GrowthLabs | SaaS Marketing' },
    { username: '@priya_saas_founder', score: 9, status: 'Replied', step: '3/3', last: '1h ago', bio: 'Founder @ Priya.ai | B2B SaaS' },
    { username: '@tom_automation', score: 8, status: 'In Sequence', step: '1/3', last: '18h ago', bio: 'Head of Ops | Automation Agency' },
    { username: '@sarah_b2b_growth', score: 8, status: 'Converted', step: 'Done', last: '2d ago', bio: 'Growth Director @ ScaleStack' },
    { username: '@mike_startup_vp', score: 7, status: 'In Sequence', step: '1/3', last: '6h ago', bio: 'VP Marketing | Startup Enthusiast' },
    { username: '@elena_content_lead', score: 7, status: 'New', step: '0/3', last: 'Today', bio: 'Content Strategy Lead @ TechCo' },
    { username: '@raj_agency_owner', score: 8, status: 'Replied', step: '2/3', last: '5h ago', bio: 'Agency Owner | Digital Marketing' },
    { username: '@lisa_ecom_scale', score: 7, status: 'In Sequence', step: '1/3', last: '12h ago', bio: 'eCommerce Founder | 7-figure brand' },
    { username: '@dan_consulting', score: 6, status: 'New', step: '0/3', last: 'Today', bio: 'Strategy Consultant | B2B' },
    { username: '@amy_marketing_dir', score: 8, status: 'Replied', step: '3/3', last: '2h ago', bio: 'Marketing Director @ SaaS startup' },
    { username: '@carlos_growth', score: 7, status: 'In Sequence', step: '2/3', last: '9h ago', bio: 'Growth Hacker | Paid + Organic' },
    { username: '@nina_brand_cmo', score: 9, status: 'Converted', step: 'Done', last: '5d ago', bio: 'CMO @ BrandMatrix | AI early adopter' },
];

const ACTIVITY_FEED_ITEMS = [
    { type: 'post', text: 'Posted "5 AI tools replacing entire marketing teams in 2026" to AI Founders Club', time: '2 min ago', icon: '📝' },
    { type: 'lead', text: 'New lead scraped: @priya_saas_founder (score 9/10) from SaaS Operators', time: '7 min ago', icon: '🎯' },
    { type: 'dm', text: 'Sent DM step 2/3 to @james_marketing_ceo', time: '12 min ago', icon: '💬' },
    { type: 'join', text: 'Joined group: Agency Owners Circle (2,800 members, score 90)', time: '1h ago', icon: '🔗' },
    { type: 'reply', text: 'Reply received from @raj_agency_owner — moving to next sequence step', time: '1h 15m ago', icon: '✉️' },
    { type: 'comment', text: 'Commented on "What\'s your current CAC?" in B2B Growth Hackers', time: '2h ago', icon: '💡' },
    { type: 'post', text: 'Posted mini case study to Digital Marketing UK (21k members)', time: '2h 30m ago', icon: '📝' },
    { type: 'lead', text: '14 new leads scraped from AI Tools Daily group', time: '3h ago', icon: '🎯' },
    { type: 'dm', text: 'DM sequence complete for @nina_brand_cmo — booked discovery call', time: '4h ago', icon: '🏆' },
    { type: 'join', text: 'Joined group: Content Marketing Pros (11,500 members, score 74)', time: '5h ago', icon: '🔗' },
    { type: 'post', text: 'Posted value tip to Startup Founders Network', time: '6h ago', icon: '📝' },
    { type: 'comment', text: 'Replied to "How do you scale content without a team?" in AI Founders Club', time: '7h ago', icon: '💡' },
    { type: 'lead', text: 'New high-value lead: @mike_startup_vp (VP Marketing, score 7/10)', time: '8h ago', icon: '🎯' },
    { type: 'dm', text: 'Sent DM step 1/3 to 8 new leads from morning scrape', time: '9h ago', icon: '💬' },
];

const DAILY_CHART_DATA = [
    { day: 'Mon', leads: 42, dms: 18, posts: 6 },
    { day: 'Tue', leads: 67, dms: 24, posts: 8 },
    { day: 'Wed', leads: 89, dms: 31, posts: 7 },
    { day: 'Thu', leads: 54, dms: 22, posts: 9 },
    { day: 'Fri', leads: 112, dms: 38, posts: 11 },
    { day: 'Sat', leads: 78, dms: 28, posts: 6 },
    { day: 'Sun', leads: 93, dms: 33, posts: 8 },
];

type TabKey = 'feed' | 'groups' | 'leads' | 'analytics' | 'settings';
type CampaignStatus = 'active' | 'paused' | 'stopped';

export default function TelegramDashboard() {
    const [tab, setTab] = useState<TabKey>('feed');
    const [status, setStatus] = useState<CampaignStatus>('active');
    const [showConfirm, setShowConfirm] = useState<string | null>(null);
    const [feedItems, setFeedItems] = useState(ACTIVITY_FEED_ITEMS.slice(0, 6));
    const feedRef = useRef<HTMLDivElement>(null);

    const [settings, setSettings] = useState({
        niche: 'AI Growth Agency',
        keywords: 'AI agency, digital marketing, automation, SaaS founders',
        daily_dms: 25,
        daily_posts: 15,
        cta: 'We build AI growth systems for B2B brands → wemagnifai.com',
    });

    useEffect(() => {
        // Simulate live feed updates every 12 seconds
        const interval = setInterval(() => {
            setFeedItems(prev => {
                const randomItem = ACTIVITY_FEED_ITEMS[Math.floor(Math.random() * ACTIVITY_FEED_ITEMS.length)];
                const newItem = { ...randomItem, time: 'just now' };
                return [newItem, ...prev.slice(0, 13)];
            });
        }, 12000);
        return () => clearInterval(interval);
    }, []);

    const handleCampaignAction = (action: string) => {
        setShowConfirm(action);
    };

    const confirmAction = () => {
        if (showConfirm === 'start') setStatus('active');
        else if (showConfirm === 'pause') setStatus('paused');
        else if (showConfirm === 'stop') setStatus('stopped');
        setShowConfirm(null);
    };

    const statusColor = status === 'active' ? '#10b981' : status === 'paused' ? '#f59e0b' : '#ef4444';
    const statusLabel = status === 'active' ? 'ACTIVE' : status === 'paused' ? 'PAUSED' : 'STOPPED';

    const maxLeads = Math.max(...DAILY_CHART_DATA.map(d => d.leads));

    return (
        <>
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', paddingTop: '80px' }}>

                {/* HERO BAR */}
                <div style={{
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'radial-gradient(circle at 30% 0%, rgba(99,102,241,0.12) 0%, transparent 55%)',
                    padding: '2rem 2rem 1.5rem',
                }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>🚀</span>
                                    <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', margin: 0 }}>
                                        Telegram Growth Engine
                                    </h1>
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                                        padding: '0.3rem 0.75rem', borderRadius: '9999px',
                                        background: `${statusColor}18`, border: `1px solid ${statusColor}40`,
                                    }}>
                                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: statusColor, animation: status === 'active' ? 'pulse 2s infinite' : 'none' }} />
                                        <span style={{ color: statusColor, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>{statusLabel}</span>
                                    </div>
                                </div>
                                <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
                                    Autonomous lead generation running 24/7 — last action <strong style={{ color: '#94a3b8' }}>2 min ago</strong>
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                {status !== 'active' && (
                                    <button onClick={() => handleCampaignAction('start')} style={btnStyle('#10b981')}>▶ Start</button>
                                )}
                                {status === 'active' && (
                                    <button onClick={() => handleCampaignAction('pause')} style={btnStyle('#f59e0b')}>⏸ Pause</button>
                                )}
                                <button onClick={() => handleCampaignAction('stop')} style={btnStyle('#ef4444', true)}>■ Stop</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem' }}>

                    {/* STATS ROW */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        {[
                            { label: 'Groups Joined', value: MOCK_STATS.groups_joined, icon: '🔗', color: '#6366f1' },
                            { label: 'Posts Published', value: MOCK_STATS.posts_published, icon: '📝', color: '#8b5cf6' },
                            { label: 'Leads Scraped', value: MOCK_STATS.leads_scraped.toLocaleString(), icon: '🎯', color: '#22d3ee' },
                            { label: 'DMs Sent', value: MOCK_STATS.dms_sent, icon: '💬', color: '#10b981' },
                            { label: 'Replies', value: MOCK_STATS.replies_received, icon: '✉️', color: '#f59e0b' },
                            { label: 'Est. Pipeline', value: `£${(MOCK_STATS.est_pipeline / 1000).toFixed(0)}k`, icon: '💰', color: '#ec4899' },
                        ].map(stat => (
                            <div key={stat.label} style={{
                                background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                borderRadius: '1rem', padding: '1.25rem',
                            }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: stat.color, marginBottom: '0.25rem' }}>
                                    {stat.value}
                                </div>
                                <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* TABS */}
                    <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0' }}>
                        {([
                            { key: 'feed', label: '📡 Live Feed' },
                            { key: 'groups', label: '🔗 Groups' },
                            { key: 'leads', label: '🎯 Leads' },
                            { key: 'analytics', label: '📊 Analytics' },
                            { key: 'settings', label: '⚙️ Settings' },
                        ] as { key: TabKey; label: string }[]).map(t => (
                            <button
                                key={t.key}
                                onClick={() => setTab(t.key)}
                                style={{
                                    padding: '0.75rem 1.25rem',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: tab === t.key ? '2px solid #6366f1' : '2px solid transparent',
                                    color: tab === t.key ? '#6366f1' : '#64748b',
                                    fontWeight: tab === t.key ? 700 : 400,
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.15s',
                                    marginBottom: '-1px',
                                }}
                            >{t.label}</button>
                        ))}
                    </div>

                    {/* TAB: LIVE FEED */}
                    {tab === 'feed' && (
                        <div ref={feedRef} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {feedItems.map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'flex-start', gap: '1rem',
                                    background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)',
                                    borderRadius: '0.875rem', padding: '1rem 1.25rem',
                                    animation: i === 0 ? 'fadeIn 0.4s ease' : 'none',
                                    borderLeft: i === 0 ? '3px solid #6366f1' : '1px solid var(--glass-border)',
                                }}>
                                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ color: '#e2e8f0', fontSize: '0.9rem', margin: '0 0 0.25rem', lineHeight: 1.5 }}>{item.text}</p>
                                        <span style={{ color: '#475569', fontSize: '0.75rem' }}>{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* TAB: GROUPS */}
                    {tab === 'groups' && (
                        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1.25rem', overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                                        {['Group Name', 'Members', 'Posts Sent', 'Leads Found', 'Score', 'Status'].map(h => (
                                            <th key={h} style={{ padding: '1rem 1.25rem', textAlign: 'left', color: '#475569', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--glass-border)' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {MOCK_GROUPS.map((g, i) => (
                                        <tr key={i} style={{ borderBottom: i < MOCK_GROUPS.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
                                            <td style={{ padding: '1rem 1.25rem', color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem' }}>{g.name}</td>
                                            <td style={{ padding: '1rem 1.25rem', color: '#94a3b8', fontSize: '0.875rem' }}>{g.members.toLocaleString()}</td>
                                            <td style={{ padding: '1rem 1.25rem', color: '#94a3b8', fontSize: '0.875rem' }}>{g.posts}</td>
                                            <td style={{ padding: '1rem 1.25rem', color: '#22d3ee', fontWeight: 700, fontSize: '0.875rem' }}>{g.leads}</td>
                                            <td style={{ padding: '1rem 1.25rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <div style={{ width: 40, height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                                                        <div style={{ width: `${g.score}%`, height: '100%', background: g.score >= 85 ? '#10b981' : g.score >= 70 ? '#f59e0b' : '#ef4444', borderRadius: 3 }} />
                                                    </div>
                                                    <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{g.score}</span>
                                                </div>
                                            </td>
                                            <td style={{ padding: '1rem 1.25rem' }}>
                                                <span style={{
                                                    padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600,
                                                    background: g.status === 'active' ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.12)',
                                                    color: g.status === 'active' ? '#10b981' : '#f59e0b',
                                                }}>
                                                    {g.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* TAB: LEADS */}
                    {tab === 'leads' && (
                        <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1.25rem', overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                                        {['Username', 'Bio', 'Score', 'Status', 'Sequence', 'Last Action'].map(h => (
                                            <th key={h} style={{ padding: '1rem 1.25rem', textAlign: 'left', color: '#475569', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--glass-border)' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {MOCK_LEADS.map((l, i) => {
                                        const scoreColor = l.score >= 9 ? '#10b981' : l.score >= 7 ? '#6366f1' : '#f59e0b';
                                        const statusBg: Record<string, string> = {
                                            'Converted': 'rgba(16,185,129,0.12)',
                                            'Replied': 'rgba(99,102,241,0.12)',
                                            'In Sequence': 'rgba(34,211,238,0.1)',
                                            'New': 'rgba(255,255,255,0.05)',
                                        };
                                        const statusFg: Record<string, string> = {
                                            'Converted': '#10b981',
                                            'Replied': '#818cf8',
                                            'In Sequence': '#22d3ee',
                                            'New': '#94a3b8',
                                        };
                                        return (
                                            <tr key={i} style={{ borderBottom: i < MOCK_LEADS.length - 1 ? '1px solid var(--glass-border)' : 'none' }}>
                                                <td style={{ padding: '0.875rem 1.25rem', color: '#818cf8', fontWeight: 600, fontSize: '0.875rem', fontFamily: 'monospace' }}>{l.username}</td>
                                                <td style={{ padding: '0.875rem 1.25rem', color: '#64748b', fontSize: '0.8rem', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.bio}</td>
                                                <td style={{ padding: '0.875rem 1.25rem' }}>
                                                    <span style={{ color: scoreColor, fontWeight: 800, fontSize: '1rem' }}>{l.score}</span>
                                                    <span style={{ color: '#475569', fontSize: '0.75rem' }}>/10</span>
                                                </td>
                                                <td style={{ padding: '0.875rem 1.25rem' }}>
                                                    <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, background: statusBg[l.status] || 'rgba(255,255,255,0.05)', color: statusFg[l.status] || '#94a3b8' }}>
                                                        {l.status}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '0.875rem 1.25rem', color: '#94a3b8', fontSize: '0.8rem', fontFamily: 'monospace' }}>{l.step}</td>
                                                <td style={{ padding: '0.875rem 1.25rem', color: '#475569', fontSize: '0.8rem' }}>{l.last}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* TAB: ANALYTICS */}
                    {tab === 'analytics' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Chart: Daily Activity */}
                            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1.25rem', padding: '1.75rem' }}>
                                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Daily Activity — Last 7 Days</h3>
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '160px' }}>
                                    {DAILY_CHART_DATA.map((d, i) => (
                                        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', height: '100%' }}>
                                            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '3px', width: '100%' }}>
                                                <div style={{ flex: 1, background: '#6366f1', borderRadius: '4px 4px 0 0', height: `${(d.leads / maxLeads) * 100}%`, opacity: 0.9 }} title={`${d.leads} leads`} />
                                                <div style={{ flex: 1, background: '#22d3ee', borderRadius: '4px 4px 0 0', height: `${(d.dms / maxLeads) * 100}%`, opacity: 0.9 }} title={`${d.dms} DMs`} />
                                                <div style={{ flex: 1, background: '#10b981', borderRadius: '4px 4px 0 0', height: `${(d.posts / maxLeads) * 100}%`, opacity: 0.9 }} title={`${d.posts} posts`} />
                                            </div>
                                            <span style={{ color: '#475569', fontSize: '0.75rem' }}>{d.day}</span>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                                    {[['#6366f1', 'Leads'], ['#22d3ee', 'DMs Sent'], ['#10b981', 'Posts']].map(([color, label]) => (
                                        <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <div style={{ width: 12, height: 12, borderRadius: 2, background: color as string }} />
                                            <span style={{ color: '#64748b', fontSize: '0.8rem' }}>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Lead Score Distribution */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                {[
                                    { label: 'High Quality (8–10)', count: 287, color: '#10b981', pct: 22 },
                                    { label: 'Mid Quality (5–7)', count: 741, color: '#6366f1', pct: 58 },
                                    { label: 'Low Quality (1–4)', count: 256, color: '#475569', pct: 20 },
                                    { label: 'Converted', count: 23, color: '#ec4899', pct: 1.8 },
                                ].map(item => (
                                    <div key={item.label} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '1.25rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                            <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>{item.label}</span>
                                            <span style={{ color: item.color, fontWeight: 800 }}>{item.count}</span>
                                        </div>
                                        <div style={{ height: 6, background: 'rgba(255,255,255,0.05)', borderRadius: 3 }}>
                                            <div style={{ width: `${item.pct}%`, height: '100%', background: item.color, borderRadius: 3 }} />
                                        </div>
                                        <span style={{ color: '#475569', fontSize: '0.75rem' }}>{item.pct}% of total</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* TAB: SETTINGS */}
                    {tab === 'settings' && (
                        <div style={{ maxWidth: '640px' }}>
                            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <h3 style={{ color: '#fff', fontWeight: 700, margin: 0 }}>Campaign Settings</h3>

                                {[
                                    { label: 'Niche / Industry', key: 'niche', type: 'text' },
                                    { label: 'Target Keywords (comma-separated)', key: 'keywords', type: 'textarea' },
                                    { label: 'Daily DM Limit', key: 'daily_dms', type: 'number' },
                                    { label: 'Daily Post Limit', key: 'daily_posts', type: 'number' },
                                    { label: 'CTA Message', key: 'cta', type: 'textarea' },
                                ].map(field => (
                                    <div key={field.key}>
                                        <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                                            {field.label}
                                        </label>
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                value={settings[field.key as keyof typeof settings] as string}
                                                onChange={e => setSettings(s => ({ ...s, [field.key]: e.target.value }))}
                                                rows={3}
                                                style={inputStyle}
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                value={settings[field.key as keyof typeof settings]}
                                                onChange={e => setSettings(s => ({ ...s, [field.key]: field.type === 'number' ? parseInt(e.target.value) : e.target.value }))}
                                                style={inputStyle}
                                            />
                                        )}
                                    </div>
                                ))}

                                <button style={{ ...btnStyle('#6366f1'), alignSelf: 'flex-start' }}>Save Settings</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* CONFIRM MODAL */}
                {showConfirm && (
                    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                        <div style={{ background: '#0f172a', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '1.25rem', padding: '2rem', maxWidth: '400px', width: '90%' }}>
                            <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>
                                Confirm: {showConfirm.charAt(0).toUpperCase() + showConfirm.slice(1)} Campaign
                            </h3>
                            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                                {showConfirm === 'stop'
                                    ? 'This will halt all bot activity immediately. Are you sure?'
                                    : showConfirm === 'pause'
                                    ? 'The engine will finish its current action then pause.'
                                    : 'Resume all scheduled tasks immediately?'}
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <button onClick={confirmAction} style={btnStyle(showConfirm === 'stop' ? '#ef4444' : '#6366f1')}>Confirm</button>
                                <button onClick={() => setShowConfirm(null)} style={{ ...btnStyle('#475569', true), color: '#94a3b8' }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}

            </main>
            <Footer />

            <style>{`
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </>
    );
}

function btnStyle(color: string, ghost = false): React.CSSProperties {
    return {
        padding: '0.6rem 1.25rem',
        background: ghost ? 'transparent' : color,
        border: `1px solid ${color}`,
        borderRadius: '0.625rem',
        color: ghost ? color : '#fff',
        fontWeight: 700,
        fontSize: '0.875rem',
        cursor: 'pointer',
        transition: 'all 0.15s',
    };
}

const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--glass-border)',
    borderRadius: '0.625rem',
    padding: '0.75rem 1rem',
    color: '#e2e8f0',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'vertical' as const,
    boxSizing: 'border-box',
};
