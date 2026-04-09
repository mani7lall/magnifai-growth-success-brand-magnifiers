import styles from './ValueProp.module.css';
import { Target, TrendingUp, Users, Zap, Shield, BookOpen } from 'lucide-react';

const cards = [
    { Icon: Target, title: 'Curated Precision', desc: "We don't list everything. We only list what works. Every tool is manually verified." },
    { Icon: TrendingUp, title: 'ROI Focused', desc: 'Our frameworks are designed to save you money and generate leads, not just look cool.' },
    { Icon: Users, title: 'Agency Grade', desc: 'Use the same workflows we use to scale 8-figure brands.' },
    { Icon: Zap, title: 'Battle-Tested', desc: 'Every prompt, tool, and automation has been stress-tested in real client campaigns.' },
    { Icon: Shield, title: 'Zero Fluff Guarantee', desc: 'No filler content. No generic advice. Only actionable strategies that move the needle.' },
    { Icon: BookOpen, title: 'Always Updated', desc: 'We stay ahead of AI trends. Tools are updated weekly to reflect the latest innovations.' },
];

export default function ValueProp() {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Why WeMagnifAI?</h2>
            <div className={styles.grid}>
                {cards.map(({ Icon, title, desc }) => (
                    <div key={title} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Icon size={24} />
                        </div>
                        <h3 className={styles.cardTitle}>{title}</h3>
                        <p className={styles.cardDesc}>{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
