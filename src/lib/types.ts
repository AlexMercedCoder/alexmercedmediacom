export interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet?: string;
    source: string;
    tags?: string[];
}

export interface VideoConfig {
    channelName: string;
    focus: string;
    channelUrl: string;
    keyPlaylists: string;
    channelId?: string;
}

export interface PodcastConfig {
    name: string;
    focus: string;
    mainUrl: string;
    rssFeed: string;
    activity: string;
    coverImage?: string;
}

export interface BlogConfig {
    name: string;
    type: string;
    url: string;
    rssFeed: string;
}

export interface BookConfig {
    title: string;
    publisher: string;
    year: string;
    url: string;
    coverImage?: string;
}

export interface MediaConfig {
    blogs: BlogConfig[];
    podcasts: PodcastConfig[];
    videos: VideoConfig[];
    books: BookConfig[];
}
