import styles from './page.module.css';
import VideoCard from '@/components/VideoCard';
import { fetchLatestYouTubeVideos, YouTubeVideo } from '@/lib/youtube';
import { MEDIA_DATA } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Videos | Alex Merced Media',
    description: "Watch the latest videos by Alex Merced: tutorials and talks on the data lakehouse, Apache Iceberg, Apache Polaris, query engines, and agentic analytics.",
    alternates: { canonical: '/videos' },
    openGraph: {
        title: 'Videos | Alex Merced Media',
        description: 'The latest videos by Alex Merced on the data lakehouse, Apache Iceberg, and agentic analytics.',
        url: 'https://alexmercedmedia.com/videos',
        type: 'website',
        images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'Alex Merced Media' }],
    },
};

export const revalidate = 3600;

async function getAllVideos(): Promise<YouTubeVideo[]> {
    const promises = MEDIA_DATA.videos.map(async (channel) => {
        if (channel.channelId) {
            return (await fetchLatestYouTubeVideos(channel.channelId)).map(video => ({ ...video, channelTitle: channel.channelName }));
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
    const techChannels = MEDIA_DATA.videos.filter(channel => channel.focus !== 'Music');
    const musicChannel = MEDIA_DATA.videos.find(channel => channel.focus === 'Music');
    const techVideos = videos.filter(video => techChannels.some(channel => channel.channelId && video.channelTitle.toLowerCase().includes(channel.channelName.split('(')[0].trim().toLowerCase().slice(0, 12))));
    const musicVideos = videos.filter(video => !techVideos.includes(video));

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: videos.map((video, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'VideoObject',
                name: video.title,
                url: video.link,
                thumbnailUrl: video.thumbnail,
                uploadDate: new Date(video.pubDate).toISOString(),
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
                    <h1 className={styles.pageTitle}>Latest Videos</h1>
                    <p className={styles.pageSubtitle}>
                        Choose between coding and data talks or music videos.
                    </p>
                </div>
            </header>

            <section className={styles.feed}>
                <div className={styles.container}>
                    <h2>Code, data, and tech</h2>
                    <p>Programming, lakehouse architecture, and developer education.</p>
                    <div className={styles.channelLinks}>{techChannels.map(channel => <a key={channel.channelUrl} href={channel.channelUrl}>{channel.channelName} →</a>)}</div>
                    {techVideos.length === 0 && <p>Recent uploads are available on the channels above.</p>}
                    <div className={styles.grid}>
                        {techVideos.map((video) => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                    <h2>Music</h2>
                    <p>Music releases and visual stories. <a href={musicChannel?.channelUrl}>Browse the music channel →</a></p>
                    <div className={styles.grid}>{musicVideos.map(video => <VideoCard key={video.id} video={video} />)}</div>
                </div>
            </section>
        </main>
    );
}
