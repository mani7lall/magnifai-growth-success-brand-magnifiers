'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';

const NAV = [
    {
        label: 'Solutions',
        key: 'solutions',
        columns: [
            {
                heading: 'Services',
                links: [
                    { label: 'Brand Strategy', href: '/services/brand-strategy' },
                    { label: 'Website Growth', href: '/services/development' },
                    { label: 'AI Automation', href: '/services/ai-automation' },
                    { label: 'Content & SEO', href: '/services/marketing' },
                    { label: 'Conversion Systems', href: '/services/creative' },
                ],
            },
            {
                heading: 'By Industry',
                links: [
                    { label: 'SaaS & Tech', href: '/industries' },
                    { label: 'Startups', href: '/industries' },
                    { label: 'E-commerce', href: '/industries' },
                    { label: 'Agencies', href: '/industries' },
                    { label: 'Professional Services', href: '/industries' },
                ],
            },
        ],
        cta: { label: 'Talk to our team →', href: '/contact' },
    },
    {
        label: 'Resources',
        key: 'resources',
        columns: [
            {
                heading: 'Learn',
                links: [
                    { label: 'Resource Hub', href: '/resources' },
                    { label: 'Growth Playbooks', href: '/playbooks' },
                    { label: 'Insights Blog', href: '/insights' },
                    { label: 'Glossary', href: '/glossary' },
                    { label: 'Newsletter', href: '/newsletter' },
                ],
            },
            {
                heading: 'Free Tools',
                links: [
                    { label: 'ROI Calculator', href: '/tools/roi' },
                    { label: 'AI Marketing Audit', href: '/free-audit' },
                    { label: 'Tool Comparisons', href: '/compare' },
                    { label: 'Lead Magnets', href: '/lead-magnets/website-audit-checklist' },
                    { label: 'AI Templates', href: '/ai-templates' },
                ],
            },
        ],
        cta: { label: 'Explore all resources →', href: '/resources' },
    },
    {
        label: 'Tools',
        key: 'tools',
        columns: [
            {
                heading: 'Growth Tools',
                links: [
                    { label: 'Growth Stack', href: '/growth-stack' },
                    { label: 'AI Directory', href: '/directory' },
                    { label: 'Prompts Library', href: '/prompts' },
                    { label: 'Token Estimator', href: '/tools/token' },
                    { label: 'WhatsApp Calculator', href: '/whatsapp-calculator' },
                ],
            },
            {
                heading: 'Agency',
                links: [
                    { label: 'About Agency', href: '/agency' },
                    { label: 'Industries', href: '/industries' },
                    { label: 'Contact', href: '/contact' },
                    { label: 'Submit a Tool', href: '/submit' },
                    { label: 'Free Audit', href: '/free-audit' },
                ],
            },
        ],
        cta: { label: 'View all tools →', href: '/directory' },
    },
];

const dropdownBase: React.CSSProperties = {
    position: 'absolute',
    top: 'calc(100% + 12px)',
    left: '50%',
    background: 'rgba(10,10,20,0.97)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(139,92,246,0.25)',
    borderRadius: '12px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
    padding: '1.75rem',
    minWidth: '560px',
    maxWidth: '700px',
    zIndex: 200,
    transition: 'opacity 0.2s ease, transform 0.2s ease',
};

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const headerRef = useRef<HTMLElement>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveDropdown(null);
                setMobileMenuOpen(false);
            }
        };
        const handleClickOutside = (e: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const openDropdown = (key: string) => {
        clearTimeout(closeTimer.current);
        setActiveDropdown(key);
    };

    const scheduleClose = () => {
        closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
    };

    return (
        <header ref={headerRef} className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo — unchanged */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Image src="/images/logo-premium.png" alt="WeMagnifAI" fill style={{ objectFit: 'contain' }} sizes="48px" />
                    </div>
                    <div>
                        <span className={styles.logoText}>WeMagnifAI</span>
                        <span className={styles.logoTagline}>The AI Growth Engine</span>
                    </div>
                </Link>

                {/* Desktop Mega-Menu Nav */}
                <nav className={styles.nav}>
                    {NAV.map((item) => (
                        <div
                            key={item.key}
                            className={styles.navItem}
                            onMouseEnter={() => openDropdown(item.key)}
                            onMouseLeave={scheduleClose}
                        >
                            <button
                                className={styles.navTrigger}
                                aria-expanded={activeDropdown === item.key}
                            >
                                {item.label}
                                <ChevronDown
                                    size={14}
                                    style={{
                                        transition: 'transform 0.2s',
                                        transform: activeDropdown === item.key ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }}
                                />
                            </button>

                            {/* Dropdown panel */}
                            <div
                                style={{
                                    ...dropdownBase,
                                    opacity: activeDropdown === item.key ? 1 : 0,
                                    pointerEvents: activeDropdown === item.key ? 'auto' : 'none',
                                    transform: `translateX(-50%) translateY(${activeDropdown === item.key ? '0px' : '-8px'})`,
                                }}
                                onMouseEnter={() => openDropdown(item.key)}
                                onMouseLeave={scheduleClose}
                            >
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    {item.columns.map((col) => (
                                        <div key={col.heading}>
                                            <p style={{
                                                fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em',
                                                textTransform: 'uppercase', color: '#8B5CF6',
                                                marginBottom: '0.75rem', margin: '0 0 0.75rem',
                                            }}>
                                                {col.heading}
                                            </p>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                                {col.links.map((link) => (
                                                    <Link
                                                        key={link.label}
                                                        href={link.href}
                                                        onClick={() => setActiveDropdown(null)}
                                                        className={styles.dropdownLink}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{
                                    marginTop: '1.5rem', paddingTop: '1.25rem',
                                    borderTop: '1px solid rgba(139,92,246,0.2)',
                                }}>
                                    <Link
                                        href={item.cta.href}
                                        onClick={() => setActiveDropdown(null)}
                                        className={styles.dropdownCta}
                                    >
                                        {item.cta.label}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Link href="/free-audit" className={`${styles.link} ${styles.highlight}`}>Free Tools ✨</Link>
                </nav>

                {/* Actions — unchanged */}
                <div className={styles.actions}>
                    <ThemeToggle />
                    <Link href="/login" className={styles.loginBtn}>Login</Link>
                    <Link href="/submit" className={styles.submitBtn}>Submit Tool</Link>
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu — accordion */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {NAV.map((item) => (
                        <div key={item.key} className={styles.mobileNavSection}>
                            <button
                                className={styles.mobileNavParent}
                                onClick={() => setMobileExpanded(mobileExpanded === item.key ? null : item.key)}
                            >
                                {item.label}
                                <ChevronDown size={16} style={{
                                    transition: 'transform 0.2s',
                                    transform: mobileExpanded === item.key ? 'rotate(180deg)' : 'rotate(0deg)',
                                }} />
                            </button>
                            {mobileExpanded === item.key && (
                                <div className={styles.mobileAccordion}>
                                    {item.columns.map((col) => (
                                        <div key={col.heading} className={styles.mobileCol}>
                                            <p className={styles.mobileColHeading}>{col.heading}</p>
                                            {col.links.map((link) => (
                                                <Link
                                                    key={link.label}
                                                    href={link.href}
                                                    className={styles.mobileSubLink}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                    <Link
                                        href={item.cta.href}
                                        className={styles.mobileCta}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.cta.label}
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link href="/free-audit" className={styles.mobileHighlight} onClick={() => setMobileMenuOpen(false)}>Free Tools ✨</Link>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                    <Link href="/submit" onClick={() => setMobileMenuOpen(false)}>Submit Tool</Link>
                </div>
            )}
        </header>
    );
}
