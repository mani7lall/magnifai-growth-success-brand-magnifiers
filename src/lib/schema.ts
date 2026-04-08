export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'WeMagnifAI',
        url: 'https://wemagnifai.com',
        logo: 'https://wemagnifai.com/logo.png',
        description: 'AI-powered creative agency delivering growth, AI automation, digital marketing, and premium design services for SMBs and entrepreneurs.',
        sameAs: [
            'https://twitter.com/wemagnifai',
            'https://linkedin.com/company/wemagnifai',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: 'https://wemagnifai.com/contact',
        },
    };
}

export function generateArticleSchema(
    title: string,
    description: string,
    datePublished: string,
    dateModified: string,
    url?: string,
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        datePublished,
        dateModified,
        url: url || 'https://wemagnifai.com',
        publisher: {
            '@type': 'Organization',
            name: 'WeMagnifAI',
            logo: {
                '@type': 'ImageObject',
                url: 'https://wemagnifai.com/logo.png',
            },
        },
        author: {
            '@type': 'Organization',
            name: 'WeMagnifAI',
        },
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generateHowToSchema(
    title: string,
    steps: { name: string; text: string }[],
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: title,
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
        })),
    };
}
