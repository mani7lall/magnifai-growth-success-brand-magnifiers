34
    export interface GrowthTool {
    id: string;
    name: string;
    category: string;
    emoji: string;
    bestFor: string;
    whyWeUseIt: string;
    affiliateLink: string;
    logoColor: string;
    pricing: string;
    rating: number;
}

export const growthStackTools: GrowthTool[] = [
    {
        id: 'hubspot',
        name: 'HubSpot CRM',
        category: 'CRM',
        emoji: '🟠',
        bestFor: 'Growing teams that want CRM + marketing + sales in one platform',
        whyWeUseIt: 'We have deployed HubSpot across 40+ client accounts. The free tier is genuinely powerful and the native integrations save weeks of setup time.',
        affiliateLink: 'https://www.hubspot.com/products/crm',
        logoColor: '#FF7A59',
        pricing: 'Free → $800/mo',
        rating: 4.8,
    },
    {
        id: 'mailchimp',
        name: 'Mailchimp',
        category: 'Email Marketing',
        emoji: '🐵',
        bestFor: 'Small teams needing simple email automation without complexity',
        whyWeUseIt: 'The drag-and-drop editor and pre-built automations let clients send their first campaign in under an hour. Scales cleanly to 100k+ lists.',
        affiliateLink: 'https://mailchimp.com/pricing/',
        logoColor: '#FFE01B',
        pricing: 'Free → $350/mo',
        rating: 4.4,
    },
    {
        id: 'ahrefs',
        name: 'Ahrefs',
        category: 'SEO',
        emoji: '🔍',
        bestFor: 'Content teams that want deep keyword research and competitor analysis',
        whyWeUseIt: "Ahrefs' Site Explorer gives us the clearest picture of a client's organic opportunity. We use it to build every content strategy from day one.",
        affiliateLink: 'https://ahrefs.com/pricing',
        logoColor: '#FF5733',
        pricing: '$99 → $999/mo',
        rating: 4.9,
    },
    {
        id: 'google-analytics',
        name: 'Google Analytics 4',
        category: 'Analytics',
        emoji: '📊',
        bestFor: 'Any business that wants to understand what drives conversions',
        whyWeUseIt: 'GA4 is non-negotiable in every stack we build. The event-based model and BigQuery export give us data that informs every campaign decision.',
        affiliateLink: 'https://analytics.google.com/',
        logoColor: '#E8710A',
        pricing: 'Free',
        rating: 4.5,
    },
    {
        id: 'make',
        name: 'Make.com',
        category: 'Automation',
        emoji: '⚙️',
        bestFor: 'Teams that want Zapier-level automation at a fraction of the cost',
        whyWeUseIt: "Make's visual canvas makes complex multi-step automations easy to build and debug. We use it for lead routing, CRM sync, and content pipelines.",
        affiliateLink: 'https://www.make.com/en/register?pc=comet',
        logoColor: '#6D00CC',
        pricing: 'Free → $299/mo',
        rating: 4.7,
    },
    {
        id: 'calendly',
        name: 'Calendly',
        category: 'Scheduling',
        emoji: '📅',
        bestFor: 'Sales teams and consultants who need frictionless meeting booking',
        whyWeUseIt: 'Calendly eliminates the back-and-forth that kills conversion. Embedded on proposal pages, it typically increases booking rates by 30–40%.',
        affiliateLink: 'https://calendly.com/',
        logoColor: '#006BFF',
        pricing: 'Free → $16/mo',
        rating: 4.6,
    },
    {
        id: 'notion',
        name: 'Notion',
        category: 'Productivity',
        emoji: '⬜',
        bestFor: 'Teams that want a single source of truth for docs, wikis, and projects',
        whyWeUseIt: 'We run our entire agency on Notion — client portals, SOPs, content calendars, and project tracking. The AI features now make it even more powerful.',
        affiliateLink: 'https://www.notion.so/product',
        logoColor: '#000000',
        pricing: 'Free → $16/mo',
        rating: 4.7,
    },
    {
        id: 'hotjar',
        name: 'Hotjar',
        category: 'Analytics',
        emoji: '🔥',
        bestFor: 'CRO teams that want to see exactly where users drop off',
        whyWeUseIt: "Hotjar's heatmaps and session recordings surface UX problems that analytics can't show. It's the first tool we install on every new client website.",
        affiliateLink: 'https://www.hotjar.com/pricing/',
        logoColor: '#FD3A5C',
        pricing: 'Free → $80/mo',
        rating: 4.5,
    },
];

export const starterStack = ['HubSpot CRM (Free)', 'Mailchimp (Free)', 'Google Analytics 4 (Free)', 'Calendly (Free)'];
export const proStack = ['HubSpot Pro', 'Klaviyo', 'Ahrefs', 'GA4 + BigQuery', 'Make.com', 'Hotjar', 'Notion', 'Calendly Pro'];
