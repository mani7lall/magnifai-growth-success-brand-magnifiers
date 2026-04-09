import styles from './Footer.module.css';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <h3 className={styles.logo}>WeMagnifAI</h3>
                        <p className={styles.tagline}>Magnifying Growth, Success, and AI Innovation</p>
                        <div className={styles.social}>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="GitHub"><Github size={20} /></a>
                            <a href="#" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linkColumn}>
                            <h4>Free Tools</h4>
                            <Link href="/free-audit">AI Marketing Audit</Link>
                            <Link href="/whatsapp-calculator">WhatsApp ROI Calculator</Link>
                            <Link href="/ai-templates">AI Content Templates</Link>
                            <Link href="/automation-checklist">Automation Checklist</Link>
                            <Link href="/tools/roi">ROI Calculator</Link>
                            <Link href="/glossary">Glossary</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4>Product</h4>
                            <Link href="/directory">AI Directory</Link>
                            <Link href="/resources">Resources</Link>
                            <Link href="/tools">Tools</Link>
                            <Link href="/prompts">Prompts</Link>
                            <Link href="/growth-stack">Growth Stack</Link>
                            <Link href="/telegram-growth">Telegram Growth</Link>
                            <Link href="/compare">Comparisons</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4>Services</h4>
                            <Link href="/services/agency">Agency</Link>
                            <Link href="/services/consulting">Consulting</Link>
                            <Link href="/services/automation">Automation</Link>
                            <Link href="/services/design">Creative</Link>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4>Company</h4>
                            <Link href="/company/about">About</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/company/careers">Careers</Link>
                            <Link href="/company/contact">Contact</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>&copy; 2025 WeMagnifAI. All rights reserved.</p>
                    <p className={styles.built}>Built with ❤️ and AI in San Francisco</p>
                </div>
            </div>
        </footer>
    )
}
