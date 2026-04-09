import FooterPage from '@/components/FooterPage';

export function generateStaticParams() {
    return [
        { slug: 'privacy' },
        { slug: 'terms' },
        { slug: 'cookies' },
        { slug: 'security' },
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <FooterPage slug={slug} />;
}
