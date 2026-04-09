export interface InsightPreview {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    href: string;
    readTime: string;
}

export const insightsPreview: InsightPreview[] = [
    {
        id: 'i1',
        category: 'AI Strategy',
        title: 'Why 90% of AI Pilots Fail (and How to Be in the 10%)',
        excerpt: 'Most companies run AI pilots that never reach production. Here are the five systemic reasons and the exact framework we use to avoid them.',
        href: '/blog',
        readTime: '6 min read',
    },
    {
        id: 'i2',
        category: 'Lead Generation',
        title: 'Organic Telegram Lead Gen: 1,284 Leads in One Week Without Ads',
        excerpt: 'A breakdown of how the Telegram Growth Engine discovers niche groups, scrapes qualified members, and converts them with a 3-step DM sequence.',
        href: '/blog',
        readTime: '8 min read',
    },
    {
        id: 'i3',
        category: 'Growth Stack',
        title: 'The 2026 B2B Tech Stack: What We Install on Every Client Account',
        excerpt: 'After 40+ implementations, we have a battle-tested default stack. Here is what it includes, why each tool earns its seat, and what we replaced.',
        href: '/blog',
        readTime: '5 min read',
    },
];
