import { notFound, permanentRedirect } from 'next/navigation';
import PostList from '@/components/PostList';
import { getAllPosts, pageCount, POSTS_PER_PAGE } from '@/lib/posts';
import type { Metadata } from 'next';

export const revalidate = 3600;
export const dynamicParams = true;

type Props = { params: Promise<{ page: string }> };

export async function generateStaticParams() {
    const total = pageCount((await getAllPosts()).length);
    return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { page } = await params;
    const title = `Articles & Blog Posts, Page ${page} | Alex Merced Media`;
    const description = `Page ${page} of the articles and blog posts by Alex Merced on data engineering, Apache Iceberg, the data lakehouse and agentic analytics.`;
    return {
        title,
        description,
        alternates: { canonical: `/blogs/page/${page}` },
        openGraph: {
            title,
            description,
            url: `https://alexmercedmedia.com/blogs/page/${page}`,
            type: 'website',
            images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'Alex Merced Media' }],
        },
    };
}

export default async function BlogsPageN({ params }: Props) {
    const { page: raw } = await params;
    if (!/^\d+$/.test(raw)) notFound();
    const page = Number(raw);
    if (page === 1) permanentRedirect('/blogs');
    const posts = await getAllPosts();
    const totalPages = pageCount(posts.length);
    if (page < 1 || page > totalPages) notFound();
    const start = (page - 1) * POSTS_PER_PAGE;
    return (
        <PostList
            posts={posts.slice(start, start + POSTS_PER_PAGE)}
            page={page}
            totalPages={totalPages}
            totalPosts={posts.length}
        />
    );
}
