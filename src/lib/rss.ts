import Parser from 'rss-parser';
import { BlogPost } from './types';

const parser = new Parser();

export async function fetchRSS(feedUrl: string, sourceName: string): Promise<BlogPost[]> {
    try {
        const feed = await parser.parseURL(feedUrl);
        return feed.items.map(item => ({
            title: item.title || 'Untitled',
            link: item.link || '',
            pubDate: item.pubDate || new Date().toISOString(),
            contentSnippet: item.contentSnippet || item.content,
            source: sourceName,
            tags: item.categories
        }));
    } catch (error) {
        console.error(`Error fetching RSS feed for ${sourceName} (${feedUrl}):`, error);
        return [];
    }
}
