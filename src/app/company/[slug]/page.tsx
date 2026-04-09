import FooterPage from '@/components/FooterPage';

export function generateStaticParams() {
    return [
        { slug: 'about' },
        { slug: 'careers' },
        { slug: 'contact' },
    ];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <FooterPage slug={slug} />;
}
