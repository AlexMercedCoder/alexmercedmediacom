import Parser from 'rss-parser';

export interface YouTubeVideo {
    id: string;
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    channelTitle: string;
}

const parser = new Parser({
    customFields: {
        item: [
            ['yt:videoId', 'videoId'],
            ['yt:channelId', 'channelId'],
            ['media:group', 'mediaGroup']
        ]
    }
});

export async function fetchLatestYouTubeVideos(channelId: string): Promise<YouTubeVideo[]> {
    try {
        const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const feed = await parser.parseURL(feedUrl);

        return feed.items.map(item => {
            const mediaGroup = item['mediaGroup'] as any;
            const thumbnail = mediaGroup && mediaGroup['media:thumbnail'] ? mediaGroup['media:thumbnail'][0].$.url : '';

            return {
                id: item['videoId'],
                title: item.title || 'Untitled Video',
                link: item.link || '',
                pubDate: item.pubDate || new Date().toISOString(),
                thumbnail: thumbnail,
                channelTitle: feed.title || ''
            };
        });
    } catch (error) {
        console.error(`Error fetching YouTube RSS for channel ${channelId}:`, error);
        return [];
    }
}
