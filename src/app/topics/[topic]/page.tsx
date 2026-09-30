import { notFound } from 'next/navigation';
import styles from '@/app/blogs/page.module.css';
import BlogCard from '@/components/BlogCard';
import VideoCard from '@/components/VideoCard';
import PodcastCard from '@/components/PodcastCard';
import { getAllPosts, getAllVideos, getAllEpisodes, shortSnippet } from '@/lib/posts';
import { TOPICS, getTopic, matchesTopic } from '@/lib/topics';
import booksData from '@/data/books.json';
import type { Metadata } from 'next';
import { network } from '@/lib/network';

export const revalidate = 3600;
export const dynamicParams = false;

const MAX_POSTS = 48;

type Props = { params: Promise<{ topic: string }> };

export function generateStaticParams() {
    return TOPICS.map(t => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const topic = getTopic((await params).topic);
    if (!topic) return {};
    const url = `https://alexmercedmedia.com/topics/${topic.slug}`;
    return {
        title: topic.title,
        description: topic.description,
        alternates: { canonical: `/topics/${topic.slug}` },
        openGraph: {
            title: topic.title,
            description: topic.description,
            url,
            type: 'website',
            images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'Alex Merced Media' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: topic.title,
            description: topic.description,
            images: ['/hero.png'],
            site: network.twitterSite,
            creator: network.twitterSite,
        },
    };
}

interface BookEntry {
    title: string;
    slug: string;
    topics: string[];
    flagship?: boolean;
    canonicalPage: string;
    amazon?: string;
}

export default async function TopicPage({ params }: Props) {
    const topic = getTopic((await params).topic);
    if (!topic) notFound();

    const [posts, videos, episodes] = await Promise.all([getAllPosts(), getAllVideos(), getAllEpisodes()]);
    const topicPosts = posts.filter(p => matchesTopic(topic, p)).slice(0, MAX_POSTS);
    const topicVideos = videos.filter(v => matchesTopic(topic, v));
    const topicEpisodes = episodes.filter(e => matchesTopic(topic, e));
    const books = (booksData.books as BookEntry[])
        .filter(b => b.topics.includes(topic.bookTopic))
        .sort((a, b) => Number(!!b.flagship) - Number(!!a.flagship))
        .slice(0, 4);

    const url = `https://alexmercedmedia.com/topics/${topic.slug}`;
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: topic.title,
        description: topic.description,
        url,
        author: { '@id': 'https://alexmerced.com/#alexmerced' },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: topicPosts.map((post, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: {
                    '@type': 'Article',
                    headline: post.title,
                    url: post.link,
                    datePublished: new Date(post.pubDate).toISOString(),
                    description: shortSnippet(post.contentSnippet),
                    author: { '@id': 'https://alexmerced.com/#alexmerced' },
                },
            })),
        },
    };

    return (
        <main className={styles.main}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>{topic.name}</h1>
                    {topic.intro.map(p => (
                        <p key={p} className={styles.intro}>{p}</p>
                    ))}
                    <nav className={styles.topics} aria-label="Other topics">
                        <span className={styles.topicsLabel}>Other topics:</span>
                        {TOPICS.filter(t => t.slug !== topic.slug).map(t => (
                            <a key={t.slug} href={`/topics/${t.slug}`} className={styles.topicChip}>{t.name}</a>
                        ))}
                        <a href="/blogs" className={styles.topicChip}>All articles</a>
                        <a href={topic.deeper.url} className={styles.topicChip}>{topic.deeper.label}</a>
                    </nav>
                </div>
            </header>

            <section className={styles.feed}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Articles</h2>
                    {topicPosts.length > 0 ? (
                        <div className={styles.grid}>
                            {topicPosts.map(post => <BlogCard key={post.link} post={post} />)}
                        </div>
                    ) : (
                        <p className={styles.empty}>No matching articles in the feeds right now. See <a href="/blogs">all articles</a>.</p>
                    )}

                    {topicVideos.length > 0 && (
                        <>
                            <h2 className={styles.sectionTitle}>Videos</h2>
                            <div className={styles.grid}>
                                {topicVideos.map(video => <VideoCard key={video.id} video={video} />)}
                            </div>
                        </>
                    )}

                    {topicEpisodes.length > 0 && (
                        <>
                            <h2 className={styles.sectionTitle}>Podcast episodes</h2>
                            <div className={styles.grid}>
                                {topicEpisodes.map((ep, i) => (
                                    <PodcastCard key={`${ep.link}-${i}`} episode={ep} showName={ep.showName} coverImage={ep.coverImage} />
                                ))}
                            </div>
                        </>
                    )}

                    {books.length > 0 && (
                        <>
                            <h2 className={styles.sectionTitle}>Books</h2>
                            <ul className={styles.bookList}>
                                {books.map(b => (
                                    <li key={b.slug}>
                                        <a href={b.canonicalPage}>{b.title}</a>
                                        {b.amazon && (
                                            <> <span aria-hidden="true">·</span> <a href={b.amazon} rel="noopener noreferrer">Buy on Amazon</a></>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}
