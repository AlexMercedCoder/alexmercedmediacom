import Link from 'next/link';
import styles from './page.module.css';
import BlogCard from '@/components/BlogCard';
import VideoCard from '@/components/VideoCard';
import PodcastCard from '@/components/PodcastCard';
import BookCard from '@/components/BookCard';
import { fetchRSS } from '@/lib/rss';
import { fetchLatestYouTubeVideos } from '@/lib/youtube';
import { MEDIA_DATA } from '@/lib/data';

export const revalidate = 3600;

async function getAggregatedData() {
  // 1. Blogs (Limit to 4)
  const blogPromises = MEDIA_DATA.blogs.map(blog => fetchRSS(blog.rssFeed, blog.name));
  const detailedBlogs = (await Promise.all(blogPromises)).flat()
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 4);

  // 2. Videos (Limit to 3)
  const videoPromises = MEDIA_DATA.videos.map(async (channel) => {
    if (channel.channelId) return await fetchLatestYouTubeVideos(channel.channelId);
    return [];
  });
  const recentVideos = (await Promise.all(videoPromises)).flat()
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 3);

  // 3. Podcasts (Limit to 3)
  const podcastPromises = MEDIA_DATA.podcasts.map(async (show) => {
    const episodes = await fetchRSS(show.rssFeed, show.name);
    return episodes.map(ep => ({
      ...ep,
      showName: show.name,
      coverImage: show.coverImage // Pass the show's cover image
    }));
  });
  const recentPodcasts = (await Promise.all(podcastPromises)).flat()
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 3);

  // 4. Books (Featured / Latest 2)
  const recentBooks = [...MEDIA_DATA.books]
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))
    .slice(0, 2);

  return { detailedBlogs, recentVideos, recentPodcasts, recentBooks };
}

export default async function Home() {
  const { detailedBlogs, recentVideos, recentPodcasts, recentBooks } = await getAggregatedData();

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Developer Relations & Data Engineering</span>
            <h1 className={styles.heroTitle}>
              Bridging the gap between <span className={styles.highlight}>Data</span> and <span className={styles.highlight}>People</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              Alex Merced is an instructional advocate helping developers master the Data Lakehouse ecosystem.
            </p>
            <div className={styles.heroButtons}>
              <a href="#latest" className={styles.primaryBtn}>Explore Content</a>
              <Link href="/books" className={styles.secondaryBtn}>My Books</Link>
            </div>
          </div>
          <div className={styles.heroImageWrapper}>
            <img src="/hero.png" alt="Alex Merced Speaking" className={styles.heroImageSaaS} />
            <div className={styles.heroBlob}></div>
          </div>
        </div>
      </section>

      <div id="latest" className={styles.container}>

        {/* Latest Videos */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Latest Videos</h2>
            <Link href="/videos" className={styles.viewMore}>View All Videos →</Link>
          </div>
          <div className={styles.videoGrid}>
            {recentVideos.map(video => <VideoCard key={video.id} video={video} />)}
          </div>
        </section>

        {/* Latest Blogs */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Articles</h2>
            <Link href="/blogs" className={styles.viewMore}>View All Posts →</Link>
          </div>
          <div className={styles.blogGrid}>
            {detailedBlogs.map(post => <BlogCard key={post.link} post={post} />)}
          </div>
        </section>

        {/* Latest Podcasts */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Podcast Episodes</h2>
            <Link href="/podcasts" className={styles.viewMore}>Listen to All →</Link>
          </div>
          <div className={styles.podcastGrid}>
            {recentPodcasts.map((ep, index) => (
              <PodcastCard
                key={`${ep.link}-${index}`}
                episode={ep}
                showName={ep.showName || ''}
                coverImage={(ep as any).coverImage}
              />
            ))}
          </div>
        </section>

        {/* Featured Books */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Books</h2>
            <Link href="/books" className={styles.viewMore}>View Library →</Link>
          </div>
          <div className={styles.bookGrid}>
            {recentBooks.map(book => <BookCard key={book.title} book={book} />)}
          </div>
        </section>

      </div>
    </main>
  );
}
