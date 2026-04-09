export type CaseStudy = {
    slug: string;
    client: string;
    industry: string;
    tagline: string;
    challenge: string;
    solution: string;
    results: { metric: string; value: string; label: string }[];
    deliverables: string[];
    testimonial: { quote: string; author: string; role: string };
    accentColor: string;
    emoji: string;
    timeline: string;
};

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: 'nexflow-ai-lead-gen',
        client: 'NexFlow',
        industry: 'B2B SaaS',
        tagline: 'From 12 leads/month to 340% pipeline growth with AI-native outreach',
        challenge: 'NexFlow was spending £18k/month on paid ads with a 1.2% conversion rate. Their SDR team was burning out on manual outreach. Founder told us: "We had all the traffic but none of it was converting into qualified demos."',
        solution: 'We built an AI-powered lead qualification and nurture system. Integrated HubSpot with a custom GPT-4 scoring layer, built a 7-step email sequence with dynamic content blocks, and created a GEO-optimised content architecture that ranked for 14 high-intent terms within 90 days.',
        results: [
            { metric: '340%', value: '340%', label: 'Pipeline growth in 90 days' },
            { metric: '4.8x', value: '4.8x', label: 'Demo-to-close rate improvement' },
            { metric: '£2.1M', value: '£2.1M', label: 'New ARR attributed' },
            { metric: '61%', value: '61%', label: 'CAC reduction vs. paid ads' },
        ],
        deliverables: ['AI lead scoring model', 'HubSpot automation sequences', 'GEO content architecture', '14-page content cluster', 'Monthly reporting dashboard'],
        testimonial: {
            quote: 'WeMagnifAI didn\'t just fix our funnel — they rebuilt it from first principles. We went from dreading our pipeline review to looking forward to it.',
            author: 'Jamie Okonkwo',
            role: 'CEO, NexFlow',
        },
        accentColor: '#6366f1',
        emoji: '🚀',
        timeline: '90 days',
    },
    {
        slug: 'lumora-ecommerce-cro',
        client: 'Lumora Beauty',
        industry: 'D2C E-commerce',
        tagline: 'Conversion rate from 1.4% to 4.1% — £340k additional revenue per quarter',
        challenge: 'Lumora had great products and strong social media followings but a website that was haemorrhaging potential customers. Checkout abandonment was at 81%, and their mobile experience was causing significant drop-off.',
        solution: 'Full CRO audit using Hotjar session recordings and heatmaps. Redesigned the product page architecture, simplified checkout to 2 steps, implemented social proof systems, and built a post-purchase upsell sequence using Make.com automations.',
        results: [
            { metric: '+194%', value: '+194%', label: 'Conversion rate improvement' },
            { metric: '£340k', value: '£340k', label: 'Additional quarterly revenue' },
            { metric: '43%', value: '43%', label: 'Checkout abandonment reduction' },
            { metric: '2.8x', value: '2.8x', label: 'Average order value increase' },
        ],
        deliverables: ['Full CRO audit & roadmap', 'Product page redesign', '2-step checkout rebuild', 'Upsell email sequences', 'A/B testing framework'],
        testimonial: {
            quote: 'We knew our site was broken but didn\'t know where. The audit was eye-opening. Within 6 weeks we were seeing numbers we\'d never hit before.',
            author: 'Priya Sharma',
            role: 'Founder, Lumora Beauty',
        },
        accentColor: '#ec4899',
        emoji: '💄',
        timeline: '6 weeks',
    },
    {
        slug: 'vertex-agency-seo',
        client: 'Vertex Partners',
        industry: 'B2B Agency',
        tagline: '180% organic traffic growth and 3 first-page rankings for competitive terms',
        challenge: 'Vertex were invisible online despite 12 years in business. Their website ranked for only their exact brand name. Competitors were taking inbound leads they should have been receiving, and their content was scattered with no strategic architecture.',
        solution: 'Built a full content architecture around their core service areas. Published 24 long-form articles in 90 days using an AI-assisted production system. Created a GEO-optimised FAQ layer for each service page. Secured 18 high-authority backlinks through a strategic digital PR campaign.',
        results: [
            { metric: '180%', value: '180%', label: 'Organic traffic growth' },
            { metric: '3', value: '3', label: 'First-page rankings on high-intent terms' },
            { metric: '£890k', value: '£890k', label: 'Attributed inbound pipeline' },
            { metric: '24', value: '24', label: 'Long-form articles published in 90 days' },
        ],
        deliverables: ['Full SEO audit', 'Content architecture strategy', '24 long-form articles', 'GEO optimisation layer', 'Link building campaign', 'Monthly SEO reporting'],
        testimonial: {
            quote: 'We\'ve gone from invisible to the agency clients find when they search for what we actually do. The ROI has been extraordinary.',
            author: 'David Asante',
            role: 'Managing Director, Vertex Partners',
        },
        accentColor: '#22D3EE',
        emoji: '📈',
        timeline: '6 months',
    },
    {
        slug: 'medix-brand-strategy',
        client: 'MediX Health',
        industry: 'HealthTech SaaS',
        tagline: 'Raised £2.1M at Series A — 6 months after brand strategy overhaul',
        challenge: 'MediX was a technically excellent product with a brand that looked like a university project. Investors weren\'t taking them seriously. Their messaging was feature-focused rather than outcome-focused, and their visual identity was inconsistent across touchpoints.',
        solution: 'Complete brand strategy from positioning to visual identity. Conducted 12 stakeholder interviews to surface the true value proposition. Developed the "Clinical Intelligence, Human Outcomes" positioning framework. Rebuilt all brand collateral and redesigned the investor deck.',
        results: [
            { metric: '£2.1M', value: '£2.1M', label: 'Series A raised post-rebrand' },
            { metric: '11x', value: '11x', label: 'Investor meeting-to-term-sheet conversion' },
            { metric: '4 months', value: '4 months', label: 'Time from brief to full brand launch' },
            { metric: '94%', value: '94%', label: 'Team alignment score on brand values' },
        ],
        deliverables: ['Brand positioning strategy', 'Visual identity system', 'Messaging framework', 'Investor deck redesign', 'Brand guidelines document', 'Website redesign'],
        testimonial: {
            quote: 'The rebranding changed how investors saw us. We went from "interesting idea" to "must-back." Worth every penny.',
            author: 'Dr. Amara Nwosu',
            role: 'CEO, MediX Health',
        },
        accentColor: '#8B5CF6',
        emoji: '🏥',
        timeline: '4 months',
    },
    {
        slug: 'scale-fintech-automation',
        client: 'Scale Finance',
        industry: 'Fintech',
        tagline: '40 hours/week saved with AI automation — team refocused on growth',
        challenge: 'Scale Finance\'s operations team was drowning in manual reporting, client onboarding, and compliance documentation. They were spending 40+ hours per week on tasks that should have been automated — at a cost of over £8k/month in analyst time.',
        solution: 'Mapped every manual process over 4 days. Built a Make.com automation stack that handled client onboarding, report generation, and compliance documentation. Integrated with their existing Salesforce, DocuSign, and accounting stack. Trained the team with SOPs.',
        results: [
            { metric: '40hrs', value: '40hrs', label: 'Saved per week by the operations team' },
            { metric: '£96k', value: '£96k', label: 'Annual cost savings from automation' },
            { metric: '98%', value: '98%', label: 'Accuracy rate on automated reports' },
            { metric: '6 days → 4hrs', value: '6 days → 4hrs', label: 'Client onboarding time reduction' },
        ],
        deliverables: ['Process mapping & audit', '14 Make.com automation flows', 'Salesforce integration', 'Client portal automation', 'Team training & SOPs'],
        testimonial: {
            quote: 'We used to joke that we needed a 6th analyst. After the automation project, we didn\'t need one — and our existing team finally had time to think.',
            author: 'Marcus Flynn',
            role: 'COO, Scale Finance',
        },
        accentColor: '#10b981',
        emoji: '⚙️',
        timeline: '8 weeks',
    },
    {
        slug: 'elevate-consulting-growth',
        client: 'Elevate Consulting',
        industry: 'Professional Services',
        tagline: '67% increase in qualified inbound leads without increasing the ad budget',
        challenge: 'Elevate was getting website traffic but zero enquiries from it. Their site read like a brochure — no clear journey, no social proof, no conversion points. Inbound leads were almost entirely referral-based, making growth unpredictable.',
        solution: 'Full website growth system rebuild. Redesigned the site around buyer journey stages. Created service-specific landing pages with case study proof. Built a lead magnet download flow and nurture sequence. Implemented a calendar booking system with automated qualification.',
        results: [
            { metric: '+67%', value: '+67%', label: 'Qualified inbound leads per month' },
            { metric: '3.1x', value: '3.1x', label: 'Website conversion rate improvement' },
            { metric: '£1.4M', value: '£1.4M', label: 'New revenue from inbound in Year 1' },
            { metric: '11 days', value: '11 days', label: 'Average sales cycle reduction' },
        ],
        deliverables: ['Website growth audit', 'Full site redesign', 'Service landing pages', 'Lead magnet creation', 'CRM & booking integration', 'Monthly performance review'],
        testimonial: {
            quote: 'For the first time in 8 years, we have a predictable, scalable way to bring in new clients. The website actually works now.',
            author: 'Sophie Hartmann',
            role: 'Founding Partner, Elevate Consulting',
        },
        accentColor: '#f59e0b',
        emoji: '🎯',
        timeline: '12 weeks',
    },
];
