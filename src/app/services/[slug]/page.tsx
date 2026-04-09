import FooterPage from '@/components/FooterPage';

export function generateStaticParams() {
    return [
        { slug: 'agency' },
        { slug: 'consulting' },
        { slug: 'automation' },
        { slug: 'design' },
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <FooterPage slug={slug} />;
}
