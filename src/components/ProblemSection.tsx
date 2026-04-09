'use client';

import Section from './Section';
import styles from './ProblemSection.module.css';

const problems = [
    {
        title: 'The "Headcount" Trap',
        body: 'Scaling revenue = Scaling payroll. Margins stay flat. Stress goes up.',
    },
    {
        title: 'The "Tool" Fatigue',
        body: 'Paying for Jasper, Zapier, ClickUp, and Notion but nothing talks to each other.',
    },
    {
        title: 'The "Quality" Dip',
        body: "As you scale, quality drops. Your junior staff can't replicate your genius.",
    },
];

export default function ProblemSection() {
    return (
        <Section theme="dark" className={styles.section}>
            <div className={styles.grid}>
                <div className={styles.left}>
                    <h2 className={styles.heading}>
                        The &quot;Agency&quot; Model is <span className={styles.strikethrough}>Broken</span>.
                    </h2>
                    <p className={styles.lead}>
                        You are drowning in OpEx. You are hiring more people to solve problems that software solved 5 years ago.
                    </p>
                </div>

                <div className={styles.right}>
                    {problems.map((p) => (
                        <div key={p.title} className={styles.card}>
                            <div className={styles.iconWrap}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="15" y1="9" x2="9" y2="15" />
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                            </div>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
