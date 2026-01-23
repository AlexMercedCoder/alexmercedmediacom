import styles from './PodcastCard.module.css';
import { BlogPost } from '@/lib/types'; // reusing BlogPost type for now as RSS Parser output is similar

interface PodcastCardProps {
    episode: BlogPost & { enclosure?: { url: string } };
    showName: string;
    coverImage?: string;
}

export default function PodcastCard({ episode, showName, coverImage }: PodcastCardProps) {
    const formattedDate = new Date(episode.pubDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                {coverImage && <img src={coverImage} alt={showName} className={styles.showImage} />}
                <div>
                    <span className={styles.showName}>{showName}</span>
                    <h3 className={styles.title}>{episode.title}</h3>
                </div>
            </div>

            {episode.enclosure && episode.enclosure.url && (
                <audio controls className={styles.player} preload="none">
                    <source src={episode.enclosure.url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}

            <div className={styles.actions}>
                <time className={styles.date}>{formattedDate}</time>
                <a href={episode.link} target="_blank" rel="noopener noreferrer" className={styles.listenLink}>
                    Episode Details
                </a>
            </div>
        </div>
    );
}
