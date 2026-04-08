export interface FeatureComparison {
    feature: string;
    toolA: string | boolean;
    toolB: string | boolean;
    winner?: 'A' | 'B' | 'tie';
}

export interface ComparisonTool {
    name: string;
    tagline: string;
    description: string;
    logo: string;
    accentColor: string;
    pros: string[];
    cons: string[];
    bestFor: string;
    pricing: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Comparison {
    slug: string;
    title: string;
    metaDescription: string;
    summary: string;
    verdict: string;
    verdictWinner: 'A' | 'B' | 'tie';
    toolA: ComparisonTool;
    toolB: ComparisonTool;
    features: FeatureComparison[];
    faqs: FAQ[];
    relatedComparisons: string[];
}

export const comparisons: Comparison[] = [
    {
        slug: 'hubspot-vs-pipedrive',
        title: 'HubSpot vs Pipedrive: Which CRM Is Right for Your Business?',
        metaDescription: 'HubSpot vs Pipedrive — an in-depth comparison of features, pricing, and use cases to help B2B teams choose the right CRM in 2026.',
        summary: 'HubSpot and Pipedrive are two of the most popular CRMs for B2B businesses, but they serve different needs. HubSpot is a full marketing and sales platform; Pipedrive is a focused, sales-first pipeline tool. This comparison breaks down exactly which is right for your business.',
        verdict: 'HubSpot wins for teams that need marketing and sales in one platform with room to scale. Pipedrive wins for sales-focused teams who want simplicity, visual pipelines, and lower cost. If your team is primarily selling — not marketing — Pipedrive delivers more value at a lower price. If you need CRM, email marketing, and automation unified, HubSpot is worth the investment.',
        verdictWinner: 'tie',
        toolA: {
            name: 'HubSpot',
            tagline: 'The all-in-one growth platform',
            description: 'HubSpot is a comprehensive CRM platform that combines sales, marketing, customer service, and operations tools. Its free tier is genuinely powerful, and the platform scales with enterprise-level capabilities.',
            logo: '🟠',
            accentColor: '#FF7A59',
            pros: [
                'Genuinely useful free tier with real CRM features',
                'Native marketing automation and email tools',
                'Excellent reporting and deal forecasting',
                'Huge ecosystem of integrations and apps',
                'Built-in landing pages, forms, and live chat',
            ],
            cons: [
                'Paid tiers become expensive quickly',
                'Can be overwhelming for sales-only teams',
                'Marketing Hub required for advanced automation',
                'Contract lock-in for annual plans',
            ],
            bestFor: 'Growing teams who need marketing and sales unified in one platform',
            pricing: 'Free tier available. Paid plans from £41/month. Enterprise from £1,100/month.',
        },
        toolB: {
            name: 'Pipedrive',
            tagline: 'CRM built by salespeople, for salespeople',
            description: 'Pipedrive is a visual, activity-based CRM focused entirely on helping sales teams close deals. Its pipeline view, activity reminders, and email integration are designed for sales workflow efficiency.',
            logo: '🟢',
            accentColor: '#00C85C',
            pros: [
                'Clean, visual pipeline that sales reps actually use',
                'Activity-based selling keeps deals moving',
                'More affordable than HubSpot for sales teams',
                'Excellent mobile app',
                'Fast to set up and onboard',
            ],
            cons: [
                'Limited marketing automation capabilities',
                'Reporting less robust than HubSpot',
                'No built-in email marketing',
                'Less ecosystem depth',
            ],
            bestFor: 'Sales-focused SMBs who want clarity and simplicity over platform breadth',
            pricing: 'From £12.50/seat/month. Advanced from £24.90/seat/month.',
        },
        features: [
            { feature: 'Free CRM tier', toolA: true, toolB: false, winner: 'A' },
            { feature: 'Visual pipeline view', toolA: 'Yes', toolB: 'Excellent', winner: 'B' },
            { feature: 'Built-in email marketing', toolA: 'Yes', toolB: 'Add-on only', winner: 'A' },
            { feature: 'Marketing automation', toolA: 'Full', toolB: 'Basic', winner: 'A' },
            { feature: 'Deal forecasting', toolA: 'Advanced', toolB: 'Standard', winner: 'A' },
            { feature: 'Ease of use for sales reps', toolA: 'Good', toolB: 'Excellent', winner: 'B' },
            { feature: 'Mobile app quality', toolA: 'Good', toolB: 'Excellent', winner: 'B' },
            { feature: 'Value for sales-only teams', toolA: 'Moderate', toolB: 'High', winner: 'B' },
        ],
        faqs: [
            {
                question: 'Can I migrate from HubSpot to Pipedrive (or vice versa)?',
                answer: 'Yes — both platforms support CSV imports and have dedicated migration tools. Most contact and deal data migrates cleanly. Custom properties and email sequences may need manual recreation. Allow 1-2 days for a clean migration.',
            },
            {
                question: 'Which CRM has better reporting?',
                answer: 'HubSpot has more advanced native reporting, including revenue attribution, deal forecasting, and multi-touch pipeline reports. Pipedrive\'s reporting is solid for pipeline and activity tracking but less deep for marketing attribution.',
            },
            {
                question: 'Is HubSpot worth the cost if you only need basic CRM?',
                answer: 'For basic CRM only — contacts, deals, and email logging — HubSpot\'s free tier is excellent. The paid tiers are only worth it once you need marketing automation, advanced sequences, or deeper reporting.',
            },
            {
                question: 'Which is easier to onboard a new sales team to?',
                answer: 'Pipedrive. Its visual pipeline, simple activity logging, and focused feature set mean sales reps are productive within days. HubSpot has a steeper learning curve due to its breadth of features.',
            },
        ],
        relatedComparisons: ['notion-vs-airtable', 'webflow-vs-wordpress'],
    },
    {
        slug: 'notion-vs-airtable',
        title: 'Notion vs Airtable for Marketing Teams: Which Is Right for Your Business?',
        metaDescription: 'Notion vs Airtable compared for marketing teams — content calendars, campaign management, and team wikis. Find out which tool wins for your workflow.',
        summary: 'Notion and Airtable are both beloved by marketing teams, but they solve different problems. Notion is a flexible workspace and knowledge base; Airtable is a structured database with powerful views and automations. The right choice depends on whether your team needs documentation or data management.',
        verdict: 'Notion wins for teams that need a central knowledge base, documentation hub, and lightweight project management. Airtable wins for teams managing structured data — content calendars, campaign tracking, asset libraries — where database power and views matter. Many high-performing marketing teams use both: Notion for strategy and docs, Airtable for execution and tracking.',
        verdictWinner: 'tie',
        toolA: {
            name: 'Notion',
            tagline: 'The connected workspace for docs and wikis',
            description: 'Notion combines notes, docs, databases, wikis, and project management in one flexible workspace. It\'s infinitely customisable but requires setup investment to unlock its full power.',
            logo: '📓',
            accentColor: '#000000',
            pros: [
                'Excellent for long-form docs and team wikis',
                'Flexible pages that combine text, databases, and embeds',
                'AI features built into the editor',
                'Good for cross-functional project management',
                'Generous free tier',
            ],
            cons: [
                'Database views less powerful than Airtable',
                'Can become disorganised without governance',
                'Automations less sophisticated',
                'Performance slows with very large databases',
            ],
            bestFor: 'Teams who need documentation, strategy docs, and a shared knowledge base',
            pricing: 'Free tier available. Plus from £7.50/user/month. Business from £13.50/user/month.',
        },
        toolB: {
            name: 'Airtable',
            tagline: 'Structured databases with powerful views',
            description: 'Airtable is a spreadsheet-database hybrid that lets teams manage structured data with powerful views (grid, calendar, kanban, gallery, gantt) and robust automations.',
            logo: '🗃️',
            accentColor: '#FCB400',
            pros: [
                'Powerful database views — grid, calendar, gallery, kanban',
                'Excellent for content calendars and asset management',
                'Robust automations and workflow triggers',
                'Strong integration ecosystem',
                'Linked records enable relational data structures',
            ],
            cons: [
                'Less suited for long-form writing and docs',
                'Learning curve for non-technical users',
                'Pricing scales steeply for larger teams',
                'Limited wiki/knowledge base functionality',
            ],
            bestFor: 'Marketing teams managing structured data like content calendars and campaign tracking',
            pricing: 'Free tier available. Team from £18/user/month. Business from £36/user/month.',
        },
        features: [
            { feature: 'Long-form document editing', toolA: 'Excellent', toolB: 'Basic', winner: 'A' },
            { feature: 'Structured database views', toolA: 'Basic', toolB: 'Excellent', winner: 'B' },
            { feature: 'Content calendar management', toolA: 'Good', toolB: 'Excellent', winner: 'B' },
            { feature: 'Team wiki / knowledge base', toolA: 'Excellent', toolB: 'Limited', winner: 'A' },
            { feature: 'Automations', toolA: 'Good', toolB: 'Excellent', winner: 'B' },
            { feature: 'Ease of adoption for non-technical users', toolA: 'Good', toolB: 'Moderate', winner: 'A' },
            { feature: 'Relational data structures', toolA: 'Basic', toolB: 'Excellent', winner: 'B' },
            { feature: 'Built-in AI features', toolA: 'Yes', toolB: 'Limited', winner: 'A' },
        ],
        faqs: [
            {
                question: 'Can Notion replace Airtable for content calendar management?',
                answer: 'Partially. Notion\'s database views (table, calendar, kanban) can handle basic content calendar management, but Airtable\'s linked records, gallery view, and powerful filtering make it more robust for high-volume content operations.',
            },
            {
                question: 'Is Airtable good for storing brand assets and creative files?',
                answer: 'Yes — Airtable\'s gallery view and attachment fields make it an excellent lightweight DAM (digital asset manager). You can attach files, filter by status, and link assets to campaigns or projects.',
            },
            {
                question: 'Which integrates better with marketing tools like HubSpot and Mailchimp?',
                answer: 'Both have good integration ecosystems, but Airtable\'s native automations and Zapier integrations make it slightly stronger for connecting with CRM and email platforms for data sync.',
            },
            {
                question: 'Should my marketing team use both Notion and Airtable?',
                answer: 'Many teams do — and it works well. Use Notion for strategy documents, meeting notes, and the team wiki. Use Airtable for your content calendar, campaign tracker, and any structured data that needs relational linking.',
            },
        ],
        relatedComparisons: ['hubspot-vs-pipedrive', 'webflow-vs-wordpress'],
    },
    {
        slug: 'webflow-vs-wordpress',
        title: 'Webflow vs WordPress for Agencies: Which Is Right for Your Business?',
        metaDescription: 'Webflow vs WordPress compared for agencies — build quality, CMS, client handoff, cost, and scalability. The definitive guide for 2026.',
        summary: 'Webflow and WordPress are the two most debated website platforms in the agency world. WordPress powers 43% of the web; Webflow is the choice of modern design-forward agencies. This comparison covers everything from build quality to client handoff to long-term cost.',
        verdict: 'Webflow wins for agencies that prioritise design quality, security, and clean client handoffs. The no-plugin architecture and visual CMS reduce long-term maintenance headaches significantly. WordPress wins for agencies that need maximum content flexibility, complex custom functionality, or clients with existing WordPress investments. For new builds in 2026, we default to Webflow for most B2B sites.',
        verdictWinner: 'A',
        toolA: {
            name: 'Webflow',
            tagline: 'Visual design meets clean, production-ready code',
            description: 'Webflow is a no-code/low-code visual website builder that generates clean, semantic HTML/CSS. It includes a built-in CMS, eCommerce, and hosting — all maintained without plugins.',
            logo: '🌊',
            accentColor: '#146EF5',
            pros: [
                'Pixel-perfect design control with clean output code',
                'Built-in CMS with structured content collections',
                'No plugins — fewer security vulnerabilities',
                'Automatic SSL, CDN, and fast hosting included',
                'Clean client handoff via the Editor interface',
            ],
            cons: [
                'Higher learning curve than WordPress page builders',
                'More expensive hosting than basic WordPress',
                'Limited plugin/extension ecosystem',
                'eCommerce less powerful than WooCommerce',
            ],
            bestFor: 'Design-forward agencies building premium B2B websites with clean client handoffs',
            pricing: 'Site plans from £14/month. CMS plan from £23/month. Business from £39/month.',
        },
        toolB: {
            name: 'WordPress',
            tagline: 'The world\'s most flexible CMS platform',
            description: 'WordPress is the world\'s most widely used CMS, powering 43% of all websites. With 50,000+ plugins, it can be extended for virtually any use case — from blogs to complex web applications.',
            logo: '🔵',
            accentColor: '#21759B',
            pros: [
                'Massive plugin ecosystem for any functionality',
                'Largest community and talent pool globally',
                'Lower hosting costs with self-managed setups',
                'Maximum content flexibility and custom post types',
                'WooCommerce for complex eCommerce needs',
            ],
            cons: [
                'Plugin dependencies create security risks',
                'Regular maintenance required (updates, security)',
                'Performance requires active optimisation',
                'Design quality depends heavily on theme/builder choice',
            ],
            bestFor: 'Agencies needing maximum flexibility or managing complex content architecture',
            pricing: 'Open source (free). Hosting from £5-40/month. Premium themes/plugins add cost.',
        },
        features: [
            { feature: 'Design flexibility and precision', toolA: 'Excellent', toolB: 'Good (builder-dependent)', winner: 'A' },
            { feature: 'CMS and content management', toolA: 'Good', toolB: 'Excellent', winner: 'B' },
            { feature: 'Security (default)', toolA: 'Excellent', toolB: 'Moderate', winner: 'A' },
            { feature: 'Plugin/extension ecosystem', toolA: 'Limited', toolB: 'Extensive', winner: 'B' },
            { feature: 'Page load performance (default)', toolA: 'Excellent', toolB: 'Good', winner: 'A' },
            { feature: 'Client editor experience', toolA: 'Excellent', toolB: 'Moderate', winner: 'A' },
            { feature: 'Total cost of ownership', toolA: 'Moderate', toolB: 'Variable', winner: 'tie' },
            { feature: 'eCommerce capability', toolA: 'Basic', toolB: 'Excellent (WooCommerce)', winner: 'B' },
        ],
        faqs: [
            {
                question: 'Can I migrate an existing WordPress site to Webflow?',
                answer: 'Yes, though it requires a rebuild rather than a direct migration. Content can be exported from WordPress and imported via Webflow\'s CSV import. Most migrations take 2-4 weeks depending on site complexity. The result is typically a significantly faster, more secure site.',
            },
            {
                question: 'Is Webflow better for SEO than WordPress?',
                answer: 'Both are equally capable for SEO when properly configured. Webflow\'s cleaner code output and faster default performance give it a slight edge on Core Web Vitals. WordPress with the right SEO plugin (Yoast or RankMath) and performance stack is equally competitive.',
            },
            {
                question: 'Which platform is better for a blog or content-heavy site?',
                answer: 'WordPress still leads for content-heavy sites that require complex taxonomies, custom post types, and editorial workflows. Webflow\'s CMS is excellent for structured content collections but has limits on item counts and complex content architecture.',
            },
            {
                question: 'Which platform do agencies find easier to hand off to clients?',
                answer: 'Webflow wins for client handoffs. The Webflow Editor provides a clean, safe editing interface that prevents clients from breaking the design. WordPress gives clients more power — but also more ways to accidentally break things.',
            },
        ],
        relatedComparisons: ['hubspot-vs-pipedrive', 'notion-vs-airtable'],
    },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
    return comparisons.find(c => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
    return comparisons.map(c => c.slug);
}
