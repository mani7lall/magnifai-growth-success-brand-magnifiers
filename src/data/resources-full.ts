export interface FullResource {
    id: string;
    category: 'Guide' | 'Template' | 'Calculator' | 'Comparison' | 'Checklist' | 'Case Study';
    title: string;
    description: string;
    href: string;
    icon: string;
    badge?: string;
}

export const resourcesFull: FullResource[] = [
    // Guides
    { id: 'g1', category: 'Guide', title: 'AI Marketing Audit Guide', description: 'A 60-minute framework to find every growth leak in your funnel — from acquisition to retention.', href: '/free-audit', icon: '🔍', badge: 'Popular' },
    { id: 'g2', category: 'Guide', title: 'Growth Readiness Playbook', description: 'The 3-phase framework we use to take B2B companies from stagnant to scalable.', href: '/blog', icon: '📈' },
    { id: 'g3', category: 'Guide', title: 'WhatsApp Marketing Beginner Guide', description: 'Everything a founder needs to know to launch their first WhatsApp campaign in under a day.', href: '/whatsapp-calculator', icon: '💬' },

    // Templates
    { id: 't1', category: 'Template', title: 'Agency OS Notion Template', description: 'Our full agency operating system — client portals, SOPs, billing, and project tracking in one.', href: '/resources', icon: '⬜', badge: 'Free Download' },
    { id: 't2', category: 'Template', title: 'Monthly Marketing Report Template', description: 'A plug-and-play Notion/Slides template that turns your raw metrics into a board-ready narrative.', href: '/resources', icon: '📋' },
    { id: 't3', category: 'Template', title: 'Content Calendar (12 Weeks)', description: 'Pre-planned content calendar for social, email, and blog — just add your topics.', href: '/resources', icon: '📅' },

    // Calculators
    { id: 'c1', category: 'Calculator', title: 'AI Marketing ROI Calculator', description: 'Slide four inputs and see your annual savings, hours reclaimed, and efficiency gain in real time.', href: '/tools/roi', icon: '🧮', badge: 'Live Tool' },
    { id: 'c2', category: 'Calculator', title: 'WhatsApp Revenue Calculator', description: 'Calculate exactly how much additional revenue WhatsApp automation adds to your business.', href: '/whatsapp-calculator', icon: '💰', badge: 'Live Tool' },
    { id: 'c3', category: 'Calculator', title: 'Telegram Lead Gen Estimator', description: 'See how many leads you can generate per week based on your niche and group activity.', href: '/telegram-growth', icon: '✈️' },

    // Comparisons
    { id: 'cp1', category: 'Comparison', title: 'HubSpot vs Pipedrive', description: 'The definitive CRM comparison for sub-100-person B2B teams — feature table, pricing, verdict.', href: '/compare/hubspot-vs-pipedrive', icon: '⚖️' },
    { id: 'cp2', category: 'Comparison', title: 'Notion vs Airtable', description: 'Which productivity platform suits your team? A deep dive into 12 features that actually matter.', href: '/compare/notion-vs-airtable', icon: '⚖️' },
    { id: 'cp3', category: 'Comparison', title: 'Webflow vs WordPress', description: 'The great website builder debate — who wins for SEO, speed, and agency workflows in 2026?', href: '/compare/webflow-vs-wordpress', icon: '⚖️' },

    // Checklists
    { id: 'ch1', category: 'Checklist', title: 'Website Growth Audit Checklist (47 Points)', description: 'Print-ready checklist covering technical SEO, CRO, speed, accessibility, and content gaps.', href: '/resources', icon: '✅', badge: 'PDF' },
    { id: 'ch2', category: 'Checklist', title: 'AI Tool Launch Checklist', description: '18 steps to validate, test, and launch any AI tool without the common pitfalls.', href: '/resources', icon: '🚀' },
    { id: 'ch3', category: 'Checklist', title: 'Marketing Automation Readiness', description: 'Is your team ready to automate? This 12-point checklist reveals your readiness score.', href: '/resources', icon: '⚙️' },

    // Case Studies
    { id: 'cs1', category: 'Case Study', title: 'SaaS Startup: 3x Pipeline in 90 Days', description: 'How we rebuilt a stagnant outbound system for a Series A SaaS and grew pipeline by 312%.', href: '/case-studies', icon: '📁', badge: 'Real Results' },
    { id: 'cs2', category: 'Case Study', title: 'E-Commerce: 41% Conversion Lift via WhatsApp', description: 'A D2C brand replaced email campaigns with WhatsApp automation and saw 41% more conversions.', href: '/case-studies', icon: '📁' },
    { id: 'cs3', category: 'Case Study', title: 'Consultancy: Full Growth Stack in 14 Days', description: 'How we set up HubSpot, Make.com, GA4, and Ahrefs for a consultancy — fully live in two weeks.', href: '/case-studies', icon: '📁' },
];

export const resourceCategories = ['Guide', 'Template', 'Calculator', 'Comparison', 'Checklist', 'Case Study'] as const;
