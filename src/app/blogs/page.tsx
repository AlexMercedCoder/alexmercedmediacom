import styles from './page.module.css';
import BlogCard from '@/components/BlogCard';
import { fetchRSS } from '@/lib/rss';
import { MEDIA_DATA } from '@/lib/data';
import { BlogPost } from '@/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Articles & Blog Posts | Alex Merced Media',
    description: "The latest articles and blog posts by Alex Merced on data engineering, Apache Iceberg, the data lakehouse, and agentic analytics — aggregated from every publication.",
    alternates: { canonical: '/blogs' },
    openGraph: {
        title: 'Articles & Blog Posts | Alex Merced Media',
        description: 'The latest articles and blog posts by Alex Merced on data engineering, Apache Iceberg, and the data lakehouse.',
        url: 'https://alexmercedmedia.com/blogs',
        type: 'website',
        images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'Alex Merced Media' }],
    },
};

export const revalidate = 3600; // Revalidate every hour

async function getBlogPosts(): Promise<BlogPost[]> {
    const promises = MEDIA_DATA.blogs.map(blog => fetchRSS(blog.rssFeed, blog.name));
    const results = await Promise.all(promises);
    const allPosts = results.flat();

    // Sort by date descending
    return allPosts.sort((a, b) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
}

export default async function BlogsPage() {
    const posts = await getBlogPosts();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: posts.map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Article',
                headline: post.title,
                url: post.link,
                datePublished: new Date(post.pubDate).toISOString(),
                description: post.contentSnippet,
                isPartOf: { '@type': 'Blog', name: post.source },
                author: { '@id': 'https://alexmerced.com/#alexmerced' }
            }
        }))
    };

    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Latest Articles</h1>
                    <p className={styles.pageSubtitle}>
                        Thoughts on tech, data, policy, and philosophy.
                    </p>
                </div>
            </header>

            <section className={styles.feed}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {posts.map((post) => (
                            <BlogCard key={post.link} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
