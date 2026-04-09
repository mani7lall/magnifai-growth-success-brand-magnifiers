export interface ResourcePreview {
    id: string;
    type: 'Guide' | 'Calculator' | 'Template' | 'Comparison' | 'Checklist' | 'Library';
    title: string;
    description: string;
    href: string;
    icon: string;
}

export const resourcesPreview: ResourcePreview[] = [
    {
        id: 'roi-calculator',
        type: 'Calculator',
        title: 'AI Marketing ROI Calculator',
        description: 'Instantly see your annual savings from AI automation with our live slider calculator.',
        href: '/tools/roi',
        icon: '🧮',
    },
    {
        id: 'growth-quiz',
        type: 'Guide',
        title: 'Growth Readiness Quiz',
        description: 'Answer 5 questions and get a personalised growth score plus your top 3 priorities.',
        href: '/quiz/growth-readiness',
        icon: '📊',
    },
    {
        id: 'website-audit',
        type: 'Checklist',
        title: 'Website Growth Audit Checklist',
        description: '47-point checklist covering SEO, CRO, speed, and content — downloadable PDF.',
        href: '/resources',
        icon: '✅',
    },
    {
        id: 'tool-comparison',
        type: 'Comparison',
        title: 'Tool Comparison Guide',
        description: 'Side-by-side breakdowns of the most popular B2B tools across 6 categories.',
        href: '/compare',
        icon: '⚖️',
    },
    {
        id: 'ai-prompts',
        type: 'Library',
        title: 'AI Prompts Library',
        description: '100+ tested prompts for marketing, sales, content, and operations teams.',
        href: '/prompts',
        icon: '✨',
    },
    {
        id: 'growth-stack',
        type: 'Guide',
        title: 'Growth Stack Guide',
        description: 'The exact 24-tool stack we use across 40+ client accounts — with honest reviews.',
        href: '/growth-stack',
        icon: '⚡',
    },
];
