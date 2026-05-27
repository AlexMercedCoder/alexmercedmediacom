import styles from './BlogCard.module.css';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <a href={post.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.content}>
                <span className={styles.source}>{post.source}</span>
                <h3 className={styles.title}>{post.title}</h3>
                {post.contentSnippet && (
                    <p className={styles.excerpt}>{post.contentSnippet.substring(0, 150)}...</p>
                )}
                <div className={styles.footer}>
                    <time className={styles.date}>{formattedDate}</time>
                    <span className={styles.readMore}>Read Article</span>
                </div>
            </div>
        </a>
    );
}
