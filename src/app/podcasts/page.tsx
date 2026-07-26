import styles from './page.module.css';
import PodcastCard from '@/components/PodcastCard';
import { fetchRSS } from '@/lib/rss';
import { MEDIA_DATA } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Podcasts | Alex Merced Media',
    description: "Listen to the latest podcast episodes by Alex Merced on data engineering, the data lakehouse, Apache Iceberg, and the future of analytics and AI.",
    alternates: { canonical: '/podcasts' },
    openGraph: {
        title: 'Podcasts | Alex Merced Media',
        description: 'The latest podcast episodes by Alex Merced on data engineering and the data lakehouse.',
        url: 'https://alexmercedmedia.com/podcasts',
        type: 'website',
        images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'Alex Merced Media' }],
    },
};

export const revalidate = 3600;

async function getAllPodcasts() {
    const promises = MEDIA_DATA.podcasts.map(async (show) => {
        const episodes = await fetchRSS(show.rssFeed, show.name);
        // Attach show name to each episode for display
        return episodes.map(ep => ({
            ...ep,
            showName: show.name,
            coverImage: show.coverImage
        }));
    });

    const results = await Promise.all(promises);
    const allEpisodes = results.flat();

    // Sort by date descending
    return allEpisodes.sort((a, b) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
}

export default async function PodcastsPage() {
    const episodes = await getAllPodcasts();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': MEDIA_DATA.podcasts.map(show => ({
            '@type': 'PodcastSeries',
            name: show.name,
            description: show.focus,
            url: show.mainUrl,
            webFeed: show.rssFeed,
            image: show.coverImage ? `https://alexmercedmedia.com${show.coverImage}` : undefined,
            author: { '@id': 'https://alexmerced.com/#alexmerced' }
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
                    <h1 className={styles.pageTitle}>Podcasts</h1>
                    <p className={styles.pageSubtitle}>
                        Conversations on data, tech careers, and libertarian philosophy.
                    </p>
                </div>
            </header>

            <section className={styles.feed}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {episodes.map((episode, index) => (
                            <PodcastCard
                                key={`${episode.link}-${index}`}
                                episode={episode}
                                showName={episode.showName || 'Podcast'}
                                coverImage={episode.coverImage}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
