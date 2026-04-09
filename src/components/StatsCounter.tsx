import styles from './StatsCounter.module.css';

interface StatItem {
    value: string;
    label: string;
}

interface StatsCounterProps {
    items?: StatItem[];
}

const ACCENT_CLASSES = ['metricValue0', 'metricValue1', 'metricValue2', 'metricValue3'];

export default function StatsCounter({ items }: StatsCounterProps) {
    const defaultItems = [
        { value: "500+", label: "Happy Clients" },
        { value: "$2M+", label: "Revenue Generated" },
        { value: "50+", label: "AI Tools Built" },
        { value: "98%", label: "Client Retention" }
    ];

    const displayItems = items || defaultItems;

    return (
        <div className={styles.metricsStrip}>
            {displayItems.map((item, index) => (
                <div key={index} className={styles.metricItem}>
                    <span className={`${styles.metricValue} ${styles[ACCENT_CLASSES[index % 4]]}`}>
                        {item.value}
                    </span>
                    <span className={styles.metricLabel}>{item.label}</span>
                </div>
            ))}
        </div>
    );
}
