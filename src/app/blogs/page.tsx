import styles from './page.module.css';
import BlogCard from '@/components/BlogCard';
import { fetchRSS } from '@/lib/rss';
import { MEDIA_DATA } from '@/lib/data';
import { BlogPost } from '@/lib/types';
import Link from 'next/link';

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

    return (
        <main className={styles.main}>
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
