import Parser from 'rss-parser';
import { BlogPost } from './types';

const parser = new Parser({
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
});

export async function fetchRSS(feedUrl: string, sourceName: string): Promise<BlogPost[]> {
    try {
        const feed = await parser.parseURL(feedUrl);
        return feed.items.map(item => ({
            title: item.title || 'Untitled',
            link: item.link || '',
            pubDate: item.pubDate || new Date().toISOString(),
            contentSnippet: item.contentSnippet || item.content,
            source: sourceName,
            tags: item.categories,
            enclosure: item.enclosure ? {
                url: item.enclosure.url,
                type: item.enclosure.type,
                length: item.enclosure.length
            } : undefined
        }));
    } catch (error) {
        console.error(`Error fetching RSS feed for ${sourceName} (${feedUrl}):`, error);
        return [];
    }
}
