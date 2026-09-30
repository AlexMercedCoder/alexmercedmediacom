import { fetchRSS } from './rss';
import { fetchLatestYouTubeVideos, YouTubeVideo } from './youtube';
import { MEDIA_DATA } from './data';
import { BlogPost } from './types';

export const POSTS_PER_PAGE = 24;

const byDateDesc = (a: { pubDate: string }, b: { pubDate: string }) =>
    new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();

/** Every post from every blog feed, newest first. */
export async function getAllPosts(): Promise<BlogPost[]> {
    const results = await Promise.all(
        MEDIA_DATA.blogs.map(blog => fetchRSS(blog.rssFeed, blog.name))
    );
    return results.flat().sort(byDateDesc);
}

export async function getAllVideos(): Promise<YouTubeVideo[]> {
    const results = await Promise.all(
        MEDIA_DATA.videos.map(channel =>
            channel.channelId ? fetchLatestYouTubeVideos(channel.channelId) : Promise.resolve([])
        )
    );
    return results.flat().sort(byDateDesc);
}

export type Episode = BlogPost & { showName: string; coverImage?: string };

export async function getAllEpisodes(): Promise<Episode[]> {
    const results = await Promise.all(
        MEDIA_DATA.podcasts.map(async show =>
            (await fetchRSS(show.rssFeed, show.name)).map(ep => ({
                ...ep,
                showName: show.name,
                coverImage: show.coverImage,
            }))
        )
    );
    return results.flat().sort(byDateDesc);
}

export function pageCount(total: number): number {
    return Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
}

/** Trim feed text for cards and JSON-LD so pages stay small. */
export function shortSnippet(text: string | undefined, max = 160): string | undefined {
    if (!text) return undefined;
    const clean = text.replace(/\s+/g, ' ').trim();
    return clean.length > max ? `${clean.slice(0, max).trimEnd()}...` : clean;
}
