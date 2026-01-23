import styles from './page.module.css';
import PodcastCard from '@/components/PodcastCard';
import { fetchRSS } from '@/lib/rss';
import { MEDIA_DATA } from '@/lib/data';

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

    return (
        <main className={styles.main}>
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
                                coverImage={(episode as any).coverImage}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
