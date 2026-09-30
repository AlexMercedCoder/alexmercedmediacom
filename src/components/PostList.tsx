import Link from 'next/link';
import styles from '@/app/blogs/page.module.css';
import BlogCard from './BlogCard';
import { BlogPost } from '@/lib/types';
import { shortSnippet, POSTS_PER_PAGE } from '@/lib/posts';
import { TOPICS } from '@/lib/topics';

interface PostListProps {
    posts: BlogPost[];
    page: number;
    totalPages: number;
    totalPosts: number;
}

const pageHref = (n: number) => (n === 1 ? '/blogs' : `/blogs/page/${n}`);

/** Shared body for /blogs and /blogs/page/[page]. */
export default function PostList({ posts, page, totalPages, totalPosts }: PostListProps) {
    const offset = (page - 1) * POSTS_PER_PAGE;
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: posts.map((post, index) => ({
            '@type': 'ListItem',
            position: offset + index + 1,
            item: {
                '@type': 'Article',
                headline: post.title,
                url: post.link,
                datePublished: new Date(post.pubDate).toISOString(),
                description: shortSnippet(post.contentSnippet),
                isPartOf: { '@type': 'Blog', name: post.source },
                author: { '@id': 'https://alexmerced.com/#alexmerced' },
            },
        })),
    };

    return (
        <main className={styles.main}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>
                        Latest Articles{page > 1 ? `: page ${page}` : ''}
                    </h1>
                    <p className={styles.pageSubtitle}>
                        {totalPosts} posts from Alex&apos;s blogs and newsletters, newest first. Thoughts on tech, data, policy, and philosophy.
                    </p>
                    <nav className={styles.topics} aria-label="Browse by topic">
                        <span className={styles.topicsLabel}>Browse by topic:</span>
                        {TOPICS.map(t => (
                            <Link key={t.slug} href={`/topics/${t.slug}`} className={styles.topicChip}>
                                {t.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            <section className={styles.feed}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {posts.map(post => (
                            <BlogCard key={post.link} post={post} />
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <nav className={styles.pagination} aria-label="Article pages">
                            {page > 1 ? (
                                <Link href={pageHref(page - 1)} rel="prev" className={styles.pageLink}>Newer posts</Link>
                            ) : <span />}
                            <span className={styles.pageStatus}>Page {page} of {totalPages}</span>
                            {page < totalPages ? (
                                <Link href={pageHref(page + 1)} rel="next" className={styles.pageLink}>Older posts</Link>
                            ) : <span />}
                        </nav>
                    )}
                </div>
            </section>
        </main>
    );
}
