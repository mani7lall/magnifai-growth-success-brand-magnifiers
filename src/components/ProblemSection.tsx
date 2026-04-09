'use client';

import Section from './Section';
import styles from './ProblemSection.module.css';
import { XCircle } from 'lucide-react';

export default function ProblemSection() {
    return (
        <Section theme="light" className={styles.section}>
            <div className={styles.grid}>
                <div className={styles.left}>
                    <h2 className={styles.heading}>The &quot;Agency&quot; Model is <span className={styles.strikethrough}>Broken</span>.</h2>
                    <p className={styles.lead}>
                        You are drowning in OpEx. You are hiring more people to solve problems that software solved 5 years ago.
                    </p>
                </div>

                <div className={styles.right}>
                    <div className={styles.card}>
                        <XCircle size={32} color="#ef4444" />
                        <h3>The &quot;Headcount&quot; Trap</h3>
                        <p>Scaling revenue = Scaling payroll. Margins stay flat. Stress goes up.</p>
                    </div>
                    <div className={styles.card}>
                        <XCircle size={32} color="#ef4444" />
                        <h3>The &quot;Tool&quot; Fatigue</h3>
                        <p>Paying for Jasper, Zapier, ClickUp, and Notion but nothing talks to each other.</p>
                    </div>
                    <div className={styles.card}>
                        <XCircle size={32} color="#ef4444" />
                        <h3>The &quot;Quality&quot; Dip</h3>
                        <p>As you scale, quality drops. Your junior staff can&apos;t replicate your genius.</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
