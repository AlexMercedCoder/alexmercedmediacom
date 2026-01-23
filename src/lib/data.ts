import { MediaConfig } from './types';

export const MEDIA_DATA: MediaConfig = {
    blogs: [
        {
            name: "Alex Merced's Blog",
            type: "Personal Tech Blog",
            url: "https://alexmerced.blog",
            rssFeed: "https://alexmerced.blog/feed.xml"
        },
        {
            name: "Open Data Lakehouses for Everyone",
            type: "Substack Newsletter (Tech)",
            url: "https://amdatalakehouse.substack.com",
            rssFeed: "https://amdatalakehouse.substack.com/feed"
        },
        {
            name: "The Lovatarian",
            type: "Substack Newsletter (Political / Philosophy)",
            url: "https://lovatarian.substack.com",
            rssFeed: "https://lovatarian.substack.com/feed"
        },
        {
            name: "Alex Merced on Medium",
            type: "Blog Platform",
            url: "https://medium.alexmerced.blog",
            rssFeed: "https://medium.alexmerced.blog/feed"
        }
    ],
    podcasts: [
        {
            name: "Alex Merced Tech Podcast",
            focus: "Data Engineering, Analytics, Lakehouse",
            mainUrl: "https://host.alexmercedpodcast.com/feed/podcast/amtech",
            rssFeed: "https://host.alexmercedpodcast.com/feed/podcast/amtech/",
            activity: "Active (2025–2026)",
            coverImage: "/podcasts/podcast-alex-merceds-tech-podcast.jpeg"
        },
        {
            name: "Thoughts and Opinions of Alex Merced",
            focus: "Politics, Economics, Libertarian Commentary",
            mainUrl: "https://host.alexmercedpodcast.com/feed/podcast/thoughts",
            rssFeed: "https://host.alexmercedpodcast.com/feed/podcast/thoughts/",
            activity: "Active (Jan 2026)",
            coverImage: "/podcasts/podcast-alex-merced-opinions.jpeg"
        },
        {
            name: "DevRel & Developer Advocacy",
            focus: "Developer Relations Careers",
            mainUrl: "https://host.alexmercedpodcast.com/feed/podcast/devadv",
            rssFeed: "https://host.alexmercedpodcast.com/feed/podcast/devadv/",
            activity: "Periodic",
            coverImage: "/podcasts/podcast-dev-rel-podcast.jpg"
        }
    ],
    videos: [
        {
            channelName: "Code, Data, and Tech with Alex Merced (@AlexMercedCoder)",
            focus: "Programming, Web Dev, DevRel, AI",
            channelUrl: "https://www.youtube.com/@AlexMercedCoder",
            keyPlaylists: "Web Dev 101, DevRel & Advocacy, AI Development, MCP",
            channelId: "UCoc4UCEetAt3htM3hV1dQgQ"
        },
        {
            channelName: "Understanding Data with Alex Merced (@AlexMercedData)",
            focus: "Data Engineering, Lakehouse, Iceberg",
            channelUrl: "https://www.youtube.com/@AlexMercedData",
            keyPlaylists: "Intro to Data, Data Concepts, Apache Iceberg Crash Courses",
            channelId: "UCmI91YGMVBvJlJB0oZV-M9g"
        },
        {
            channelName: "Alex Merced Music",
            focus: "Music",
            channelUrl: "https://www.youtube.com/@AlexMercedMusic",
            keyPlaylists: "",
            channelId: "UC2omhd1YJnWGhP7EbkEHyIQ"
        }
    ],
    books: [
        {
            title: "Apache Iceberg: The Definitive Guide",
            publisher: "O’Reilly Media",
            year: "2024",
            url: "https://www.oreilly.com/library/view/apache-iceberg-the/9781098148614",
            coverImage: "/covers/cover-apache-iceberg-tdg.jpg"
        },
        {
            title: "Apache Polaris: The Definitive Guide",
            publisher: "O’Reilly Media",
            year: "2025",
            url: "https://www.oreilly.com/library/view/apache-polaris-the/9781098175481",
            coverImage: "/covers/cover-apache-polaris-tdg.jpg"
        },
        {
            title: "Architecting an Apache Iceberg Lakehouse",
            publisher: "Manning Publications",
            year: "2026",
            url: "https://www.manning.com/books/architecting-an-apache-iceberg-lakehouse",
            coverImage: "/covers/cover-architecting-an-apache-iceberg-lakehouse.jpg"
        },
        {
            title: "The Libertarian Heart",
            publisher: "Lulu Press",
            year: "2019",
            url: "https://www.lulu.com/shop/alex-merced/the-libertarian-heart/paperback/product-1e9k7v7.html",
            coverImage: "/covers/cover-libertarian-heart.png"
        },
        {
            title: "Profits are Generosity, Entrepreneurship is Philanthropy",
            publisher: "Lulu Press",
            year: "2018",
            url: "https://www.amazon.com/Profits-are-Generosity-Entrepreneurship-Philanthropy/dp/1387798421",
            coverImage: "/covers/cover-profits-are-generosity.png"
        }
    ]
};
