import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: 'Zero-Inbox Architecture for Founders | WeMagnifAI Insights',
    description: 'Stop checking email. Build an AI clearinghouse that categorises, drafts responses, and archives everything — so you only touch what actually needs you.',
};

export default function ZeroInboxPage() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
                {/* Article Header */}
                <section style={{
                    padding: '5rem 2rem 3rem',
                    background: 'linear-gradient(180deg, rgba(99,102,241,0.08) 0%, transparent 100%)',
                    borderBottom: '1px solid var(--glass-border)',
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link href="/insights" style={{
                            color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem',
                            display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2rem',
                        }}>← Back to Insights</Link>
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <span style={{
                                background: 'rgba(99,102,241,0.12)', color: '#818cf8',
                                border: '1px solid rgba(99,102,241,0.25)',
                                borderRadius: '999px', padding: '0.3rem 0.9rem',
                                fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
                            }}>Productivity</span>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                🕐 12 min read
                            </span>
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontFamily: 'var(--font-playfair)',
                            color: '#fff', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.5rem',
                        }}>
                            Zero-Inbox Architecture for Founders: An AI Clearinghouse That Actually Works
                        </h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.7 }}>
                            Stop checking email. Build an AI system that categorises, drafts, and archives everything — so you only touch what actually needs a human decision.
                        </p>
                        <div style={{
                            display: 'flex', gap: '1.5rem', marginTop: '2rem',
                            paddingTop: '2rem', borderTop: '1px solid var(--glass-border)',
                            color: 'var(--text-muted)', fontSize: '0.875rem',
                        }}>
                            <span>By Alex Chen</span>
                            <span>Jan 05, 2026</span>
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <article style={{ padding: '4rem 2rem' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid rgba(99,102,241,0.25)',
                            borderLeft: '4px solid #6366f1',
                            borderRadius: '0.75rem', padding: '1.5rem 2rem',
                            marginBottom: '3rem',
                        }}>
                            <p style={{ color: '#e2e8f0', fontStyle: 'italic', lineHeight: 1.7, margin: 0, fontSize: '1.05rem' }}>
                                "The average founder spends 4.1 hours per day on email. That's 1,025 hours per year — or 128 full working days — spent in an inbox that could be 90% automated."
                            </p>
                        </div>

                        {[
                            {
                                heading: 'The Problem with "Inbox Zero" Productivity Advice',
                                body: `Every few years, a new productivity guru rediscovers inbox zero and publishes a Medium post about the life-changing power of the Archive button. And every time, founders try it, feel great for two weeks, and then slide back into the same 847-unread-email paralysis.

The problem isn't behaviour — it's architecture. Traditional inbox zero advice treats email as a communication tool to be managed manually. It gives you folders, rules, and keyboard shortcuts. It doesn't change the fundamental dynamic: you are still the one reading, categorising, and responding to every single message.

What founders actually need is a system that reads email on their behalf, makes the 80% of decisions that don't require a human, drafts responses for the other 20%, and brings only the truly important items to their attention. This is what we call Zero-Inbox Architecture.`,
                            },
                            {
                                heading: 'What Zero-Inbox Architecture Looks Like',
                                body: `Zero-Inbox Architecture is a four-layer system:

Layer 1 — Intake & Categorisation: Every incoming email is immediately processed by an AI classifier. The classifier sorts emails into buckets: Client Communications, Leads & Prospects, Newsletters & Reading, Finance & Legal, Admin, and Delete.

Layer 2 — Priority Scoring: Within each bucket, a priority scorer assigns an urgency rating based on sender reputation, subject line analysis, and whether the email contains direct questions, action items, or time-sensitive language.

Layer 3 — Response Drafting: For emails in the Client and Leads buckets where a response is needed, a GPT-4-based drafting agent generates a contextually appropriate reply drawing on your personal writing style, your company's FAQ database, and previous email threads.

Layer 4 — Human Review Queue: The high-priority emails and drafted responses are surfaced in a clean Notion dashboard or Slack channel. You spend 30 minutes reviewing and approving, not 4 hours reading and responding.`,
                            },
                            {
                                heading: 'The Technology Stack',
                                body: `Building this system requires four tools working together:

Gmail + Google Apps Script (or Microsoft Graph API for Outlook): For email intake and initial routing. Google Apps Script runs on a trigger every 10 minutes to process incoming mail.

Make.com: The orchestration layer that connects Gmail to your AI and output systems. Make.com scenarios handle the flow logic without code.

OpenAI API (GPT-4 Turbo): The classification and drafting engine. You'll need two separate prompts: one for categorisation/priority scoring, and one for response drafting.

Notion or Airtable: The review dashboard. A database view showing unread high-priority items, AI-drafted replies awaiting approval, and a log of all processed emails.

The entire build takes approximately 12–16 hours if you're comfortable with Make.com, or can be delivered as a service through our AI Automation team.`,
                            },
                            {
                                heading: 'Building the Classifier: Prompt Engineering That Actually Works',
                                body: `The quality of your Zero-Inbox system lives or dies on the classifier prompt. The most common mistake founders make is being too vague. "Sort this email" produces mediocre results. Precision produces excellence.

Here's the structure that works: Start with role definition ("You are an email classifier for a B2B SaaS company"). Then provide explicit category definitions with examples of each. Then specify the output format (JSON with category, priority 1–5, requires_response boolean, summary, and suggested_action).

Critically, include negative examples: "A newsletter from HubSpot should be categorised as Newsletter, not Client Communication, even if it addresses the reader by name." The AI needs guardrails as much as instructions.

For the drafting prompt, inject context from your CRM: the sender's company size, their relationship history, any open deals, and previous email threads. The difference between a generic draft and a genuinely useful one is context.`,
                            },
                            {
                                heading: 'Measuring Success: What "Working" Looks Like',
                                body: `After running this system for 90 days across eight founder accounts, here's what we consistently see:

Time saved: 2.8–3.6 hours per day in the first 30 days. As the system learns and edge cases are handled, this stabilises around 3.2 hours.

Response time: Average first response time drops from 6.2 hours to 47 minutes — because AI-drafted replies are reviewed and sent in batches rather than in real-time.

Missed items: The most common concern is "what if I miss something important?" In practice, we see fewer missed important emails with the system than without it, because the AI review queue forces a structured review rather than an inbox scan that gets interrupted.

Mental clarity: This is harder to measure but consistently reported. When email isn't a constant attention tax, deep work sessions extend by 40–60%.

The system isn't perfect. It misclassifies roughly 3–5% of emails in the first month. You'll spend some time correcting edge cases and improving the prompts. But by month two, it's running well enough that most founders forget they have it.

Start with the classifier. Get that working before building the drafter. The architecture compounds — each layer you add multiplies the value of the previous one.`,
                            },
                        ].map((section, i) => (
                            <div key={i} style={{ marginBottom: '3.5rem' }}>
                                <h2 style={{
                                    fontSize: '1.6rem', fontFamily: 'var(--font-playfair)',
                                    color: '#fff', fontWeight: 700, lineHeight: 1.3,
                                    marginBottom: '1.25rem',
                                }}>
                                    {section.heading}
                                </h2>
                                {section.body.split('\n\n').map((para, j) => (
                                    <p key={j} style={{
                                        color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.85,
                                        marginBottom: '1.25rem',
                                    }}>
                                        {para}
                                    </p>
                                ))}
                            </div>
                        ))}

                        {/* CTA */}
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))',
                            border: '1px solid rgba(99,102,241,0.25)',
                            borderRadius: '1.25rem', padding: '2.5rem',
                            textAlign: 'center', marginTop: '4rem',
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', color: '#fff', marginBottom: '0.75rem' }}>
                                Want us to build this for you?
                            </h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                                Our AI Automation team can have a Zero-Inbox system running in your Gmail or Outlook within 2 weeks.
                            </p>
                            <Link href="/services/ai-automation" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'linear-gradient(135deg, #6366f1, #8B5CF6)',
                                color: '#fff', fontWeight: 700, textDecoration: 'none',
                                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                                boxShadow: '0 8px 32px rgba(99,102,241,0.35)',
                            }}>
                                Explore AI Automation →
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
