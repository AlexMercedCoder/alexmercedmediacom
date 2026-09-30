import PostList from '@/components/PostList';
import { getAllPosts, pageCount, POSTS_PER_PAGE } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Articles & Blog Posts | Alex Merced Media',
    description: 'The latest articles and blog posts by Alex Merced on data engineering, Apache Iceberg, the data lakehouse and agentic analytics, gathered from every publication he writes for.',
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

export default async function BlogsPage() {
    const posts = await getAllPosts();
    return (
        <PostList
            posts={posts.slice(0, POSTS_PER_PAGE)}
            page={1}
            totalPages={pageCount(posts.length)}
            totalPosts={posts.length}
        />
    );
}
