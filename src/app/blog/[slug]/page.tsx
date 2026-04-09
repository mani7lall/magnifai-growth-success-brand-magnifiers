
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './BlogPost.module.css';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.main}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                    <div className={styles.heroContent}>
                        <div className={styles.container}>
                            <Link href="/blog" className={styles.backLink}>
                                <ArrowLeft size={16} /> Back to Blog
                            </Link>
                            <div className={styles.categoryTag}>
                                <Tag size={12} /> {post.category}
                            </div>
                            <h1 className={styles.title}>{post.title}</h1>
                            <div className={styles.meta}>
                                <div className={styles.metaItem}>
                                    <User size={16} /> {post.author}
                                </div>
                                <div className={styles.metaItem}>
                                    <Calendar size={16} /> {post.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.excerpt}>
                        {post.excerpt}
                    </div>
                    <div
                        className={styles.prose}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className={styles.divider} />

                    <div className={styles.cta}>
                        <h3>Want to implement this?</h3>
                        <p>We build these systems for clients every day.</p>
                        <Link href="/company/contact" className={styles.ctaButton}>
                            Book a Strategy Call
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
