'use client';

import { useState } from 'react';
import Link from 'next/link';

const QUESTIONS = [
    {
        id: 1,
        question: 'What is your primary growth bottleneck right now?',
        options: ['Traffic — not enough visitors', 'Conversions — visitors don\'t buy', 'Retention — customers churn too fast', 'All of the above'],
        scores: [25, 20, 15, 10],
    },
    {
        id: 2,
        question: 'What is your current monthly website traffic?',
        options: ['Under 1,000 visits', '1,000 – 10,000 visits', '10,000 – 50,000 visits', '50,000+ visits'],
        scores: [10, 20, 30, 40],
    },
    {
        id: 3,
        question: 'Which CRM does your team currently use?',
        options: ['HubSpot', 'Salesforce', 'Zoho', 'None / Spreadsheets'],
        scores: [25, 25, 20, 5],
    },
    {
        id: 4,
        question: 'How large is your marketing team?',
        options: ['Solo / Just me', '2–5 people', '6–15 people', '15+ people'],
        scores: [10, 20, 30, 35],
    },
    {
        id: 5,
        question: 'What is your primary acquisition channel?',
        options: ['SEO / Content', 'Paid Ads', 'Social Media', 'Referral / Word of mouth'],
        scores: [30, 25, 20, 25],
    },
];

const TOOL_CARDS = [
    { name: 'HubSpot CRM', desc: 'Free CRM for organising leads and automating follow-ups', link: '#', color: '#FF7A59' },
    { name: 'Ahrefs', desc: 'Keyword research and content gap analysis for more organic traffic', link: '#', color: '#FF5733' },
    { name: 'Make.com', desc: 'Automate repetitive marketing tasks without writing code', link: '#', color: '#6D00CC' },
];

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 'email' | 'results';

export default function GrowthReadinessQuiz() {
    const [step, setStep] = useState<Step>(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const score = answers.reduce((a, b) => a + b, 0);
    const maxScore = QUESTIONS.reduce((a, q) => a + Math.max(...q.scores), 0);
    const scaledScore = Math.round((score / maxScore) * 100);

    const currentQuestion = typeof step === 'number' && step >= 1 && step <= 5
        ? QUESTIONS[step - 1]
        : null;

    const selectOption = (optionScore: number) => {
        const newAnswers = [...answers, optionScore];
        setAnswers(newAnswers);
        const nextStep = (typeof step === 'number' ? step : 0) + 1;
        if (nextStep > 5) {
            setStep('email');
        } else {
            setStep(nextStep as Step);
        }
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmailSubmitted(true);
        setTimeout(() => setStep('results'), 800);
    };

    const priorities = scaledScore < 50
        ? ['Fix your traffic fundamentals first — SEO and content before paid ads', 'Install a free CRM (HubSpot) to stop losing leads in spreadsheets', 'Set up basic conversion tracking with GA4']
        : ['Optimise your highest-traffic pages for conversion first', 'Build an email nurture sequence for all new leads', 'Layer in marketing automation to remove manual bottlenecks'];

    if (step === 0) {
        return (
            <div style={splashWrap}>
                <div style={splashCard}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>📊</div>
                    <h1 style={splashH1}>Find Out Exactly Why Your Funnel Isn't Scaling</h1>
                    <p style={splashSub}>5 questions · 2 minutes · Personalised growth score + top 3 priorities</p>
                    <button onClick={() => setStep(1)} style={btnPrimary}>Start the Quiz →</button>
                    <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '1rem' }}>Free · No email required to start</p>
                </div>
            </div>
        );
    }

    if (typeof step === 'number' && step >= 1 && step <= 5 && currentQuestion) {
        const progress = ((step - 1) / 5) * 100;
        return (
            <div style={splashWrap}>
                <div style={{ ...splashCard, maxWidth: '640px' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>Question {step} of 5</span>
                            <span style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 700 }}>{Math.round(progress)}% complete</span>
                        </div>
                        <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '9999px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', borderRadius: '9999px', transition: 'width 0.4s ease' }} />
                        </div>
                    </div>
                    <h2 style={{ color: '#fff', fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', fontWeight: 800, lineHeight: 1.3, marginBottom: '2rem' }}>
                        {currentQuestion.question}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {currentQuestion.options.map((opt, i) => (
                            <button key={opt} onClick={() => selectOption(currentQuestion.scores[i])} style={optionBtn}>
                                <span style={optionLetter}>{String.fromCharCode(65 + i)}</span>
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (step === 'email') {
        return (
            <div style={splashWrap}>
                <div style={{ ...splashCard, maxWidth: '540px' }}>
                    {emailSubmitted ? (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
                            <p style={{ color: '#10b981', fontWeight: 800 }}>Calculating your score…</p>
                        </div>
                    ) : (
                        <>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>🎯</div>
                            <h2 style={{ ...splashH1, fontSize: '1.5rem', marginBottom: '0.75rem' }}>Where Should We Send Your Growth Report?</h2>
                            <p style={splashSub}>Your score, top 3 priorities, and recommended tools — in your inbox.</p>
                            <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    style={formInput}
                                />
                                <input
                                    type="email"
                                    placeholder="Work email address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    style={formInput}
                                />
                                <button type="submit" style={btnPrimary}>Get My Growth Report →</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        );
    }

    if (step === 'results') {
        const circumference = 2 * Math.PI * 52;
        const dash = (scaledScore / 100) * circumference;
        const scoreColor = scaledScore >= 70 ? '#10b981' : scaledScore >= 50 ? '#f59e0b' : '#ef4444';

        return (
            <div style={splashWrap}>
                <div style={{ ...splashCard, maxWidth: '700px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <h1 style={{ color: '#fff', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, marginBottom: '0.5rem' }}>
                            Your Growth Readiness Score
                        </h1>
                        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Based on your answers — personalised for {name || 'you'}</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
                        <div style={{ position: 'relative', width: 140, height: 140 }}>
                            <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                                <circle cx="70" cy="70" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
                                <circle
                                    cx="70" cy="70" r="52"
                                    fill="none"
                                    stroke={scoreColor}
                                    strokeWidth="12"
                                    strokeDasharray={`${dash} ${circumference}`}
                                    strokeLinecap="round"
                                    style={{ transition: 'stroke-dasharray 1s ease' }}
                                />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: scoreColor, fontSize: '2.25rem', fontWeight: 900, lineHeight: 1 }}>{scaledScore}</span>
                                <span style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600 }}>/ 100</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '1.25rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
                        <h3 style={{ color: '#fff', fontWeight: 800, marginBottom: '1rem', fontSize: '1rem' }}>Your Top 3 Priorities</h3>
                        <ol style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {priorities.map((p, i) => (
                                <li key={i} style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.95rem' }}>{p}</li>
                            ))}
                        </ol>
                    </div>

                    {scaledScore < 50 ? (
                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}>Recommended tools to close your gaps:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {TOOL_CARDS.map(t => (
                                    <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '0.875rem', padding: '1rem 1.25rem' }}>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.25rem', fontSize: '0.95rem' }}>{t.name}</p>
                                            <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}>{t.desc}</p>
                                        </div>
                                        <a href={t.link} style={{ padding: '0.5rem 0.9rem', background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}40`, borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                                            Try Free →
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))', border: '1px solid rgba(99,102,241,0.25)', borderRadius: '1.25rem', padding: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                            <p style={{ color: '#818cf8', fontWeight: 800, marginBottom: '0.5rem' }}>Your foundation is solid — time to accelerate</p>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.25rem' }}>Book a free 30-minute strategy call and we'll map out your next 90-day growth sprint.</p>
                            <Link href="/free-audit" style={{ ...btnPrimary, display: 'inline-flex' }}>Book a Strategy Call →</Link>
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => { setStep(0); setAnswers([]); }} style={{ padding: '0.7rem 1.25rem', background: 'transparent', border: '1px solid var(--glass-border)', borderRadius: '0.7rem', color: '#64748b', fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem' }}>
                            Retake Quiz
                        </button>
                        <Link href="/growth-stack" style={{ padding: '0.7rem 1.25rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '0.7rem', color: '#e2e8f0', fontWeight: 600, textDecoration: 'none', fontSize: '0.875rem' }}>
                            View Growth Stack
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

const splashWrap: React.CSSProperties = {
    minHeight: '100vh',
    background: 'var(--bg-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
};

const splashCard: React.CSSProperties = {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--glass-border)',
    borderRadius: '2rem',
    padding: 'clamp(2rem, 5vw, 3rem)',
    maxWidth: '560px',
    width: '100%',
    textAlign: 'center',
};

const splashH1: React.CSSProperties = {
    color: '#fff',
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    fontFamily: 'var(--font-playfair)',
    fontWeight: 900,
    lineHeight: 1.15,
    margin: '0 0 1rem',
};

const splashSub: React.CSSProperties = {
    color: '#94a3b8',
    fontSize: '1rem',
    lineHeight: 1.65,
    margin: '0 0 1.5rem',
};

const btnPrimary: React.CSSProperties = {
    display: 'block',
    width: '100%',
    padding: '0.95rem 2rem',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: '#fff',
    border: 'none',
    borderRadius: '0.875rem',
    fontWeight: 800,
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
};

const optionBtn: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
    padding: '1rem 1.25rem',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--glass-border)',
    borderRadius: '0.875rem',
    color: '#e2e8f0',
    fontWeight: 600,
    fontSize: '0.95rem',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'border-color 0.15s, background 0.15s',
};

const optionLetter: React.CSSProperties = {
    minWidth: '2rem',
    height: '2rem',
    borderRadius: '50%',
    background: 'rgba(99,102,241,0.15)',
    border: '1px solid rgba(99,102,241,0.3)',
    color: '#818cf8',
    fontWeight: 800,
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const formInput: React.CSSProperties = {
    padding: '0.85rem 1.25rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--glass-border)',
    borderRadius: '0.75rem',
    color: '#fff',
    fontSize: '0.95rem',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
};
