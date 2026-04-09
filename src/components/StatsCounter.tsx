import styles from './StatsCounter.module.css';

interface StatItem {
    value: string;
    label: string;
}

interface StatsCounterProps {
    items?: StatItem[];
}

export default function StatsCounter({ items }: StatsCounterProps) {
    const defaultItems = [
        { value: "4x", label: "Faster Execution" },
        { value: "98%", label: "Open Rates" },
        { value: "24/7", label: "AI Operation" },
        { value: "< 7 Days", label: "To Launch" }
    ];

    const displayItems = items || defaultItems;

    return (
        <div className={styles.metricsStrip}>
            {displayItems.map((item, index) => (
                <div key={index} className={styles.metricItem}>
                    <span className={styles.metricValue}>{item.value}</span>
                    <span className={styles.metricLabel}>{item.label}</span>
                </div>
            ))}
        </div>
    );
}
