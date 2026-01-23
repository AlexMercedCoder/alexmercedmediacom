import styles from './page.module.css';
import VideoCard from '@/components/VideoCard';
import { fetchLatestYouTubeVideos, YouTubeVideo } from '@/lib/youtube';
import { MEDIA_DATA } from '@/lib/data';

export const revalidate = 3600;

async function getAllVideos(): Promise<YouTubeVideo[]> {
    const promises = MEDIA_DATA.videos.map(async (channel) => {
        if (channel.channelId) {
            return await fetchLatestYouTubeVideos(channel.channelId);
        }
        return [];
    });

    const results = await Promise.all(promises);
    const allVideos = results.flat();

    // Sort by date descending
    return allVideos.sort((a, b) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
}

export default async function VideosPage() {
    const videos = await getAllVideos();

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Latest Videos</h1>
                    <p className={styles.pageSubtitle}>
                        Tutorials, talks, and tech deep dives across my channels.
                    </p>
                </div>
            </header>

            <section className={styles.feed}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {videos.map((video) => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
