import Link from 'next/link';
import { Zap } from 'lucide-react';
import TerminalDemo from './TerminalDemo';
import styles from './HomeHero.module.css';

interface HomeHeroProps {
    badgeText?: string;
    title?: string;
    description?: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

export default function HomeHero({
    badgeText = "v2.0.0 Now Live",
    title = "The Growth Engine For Scaling Agencies",
    description = "Stop relying on luck. We build automated AI pipelines that specifically target, nurture, and close your ideal clients. No fluff. Just code & revenue.",
    primaryCtaText = "Start Growth Engine",
    primaryCtaLink = "/book",
    secondaryCtaText = "View System Architecture",
    secondaryCtaLink = "/case-studies"
}: HomeHeroProps) {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.badge}>
                    <Zap size={14} />
                    <span>{badgeText}</span>
                </div>

                <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br/>') }} />

                <p className={styles.heroDescription}>
                    {description}
                </p>

                <div className={styles.ctaGroup}>
                    <Link href={primaryCtaLink} className={styles.primaryCta}>
                        {primaryCtaText}
                    </Link>
                    <Link href={secondaryCtaLink} className={styles.secondaryCta}>
                        {secondaryCtaText}
                    </Link>
                </div>

                <TerminalDemo />
            </div>
        </section>
    );
}
