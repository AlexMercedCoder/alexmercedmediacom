import styles from './VideoCard.module.css';
import { YouTubeVideo } from '@/lib/youtube';

interface VideoCardProps {
    video: YouTubeVideo;
}

export default function VideoCard({ video }: VideoCardProps) {
    const formattedDate = new Date(video.pubDate).toLocaleDateString();

    return (
        <div className={styles.card}>
            <div className={styles.embedContainer}>
                <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
            <div className={styles.meta}>
                <h3 className={styles.title}>{video.title}</h3>
                <div>
                    <span className={styles.channel}>{video.channelTitle}</span>
                    <span className={styles.date}>• {formattedDate}</span>
                </div>
            </div>
        </div>
    );
}
