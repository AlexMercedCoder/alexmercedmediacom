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
            url: "https://loveatarian.substack.com",
            rssFeed: "https://loveatarian.substack.com/feed"
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
            url: "https://www.amazon.com/dp/1098148622",
            coverImage: "/covers/cover-apache-iceberg-tdg.jpg",
            category: "tech",
            description: "Guide to Apache Iceberg and modern lakehouse architecture."
        },
        {
            title: "Architecting an Apache Iceberg Lakehouse",
            publisher: "Manning Publications",
            year: "2026",
            url: "https://www.amazon.com/dp/1633435105",
            coverImage: "/covers/cover-architecting-an-apache-iceberg-lakehouse.jpg",
            category: "tech",
            description: "Architecture patterns for building Iceberg-based data platforms."
        },
        {
            title: "Apache Polaris: The Definitive Guide",
            publisher: "O’Reilly Media",
            year: "2025",
            url: "https://www.amazon.com/dp/B0FBRJ7J1Y",
            coverImage: "/covers/cover-apache-polaris-tdg.jpg",
            category: "tech",
            description: "Guide to open catalogs for Iceberg lakehouses."
        },
        {
            title: "The Book on Using Apache Iceberg with Python",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GNZ454FF",
            coverImage: "/covers/cover-iceberg-python.jpg",
            category: "tech",
            description: "Hands-on guide using Iceberg with Python tools."
        },
        {
            title: "The Book on Agentic Analytics",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQN4Q41Y",
            coverImage: "/covers/cover-agentic-analytics.jpg",
            category: "tech",
            description: "Foundations of agentic data architecture."
        },
        {
            title: "The 2026 Guide to Lakehouses, Apache Iceberg and Agentic AI",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQNY21TD",
            coverImage: "https://images.amazon.com/images/P/B0GQNY21TD.01._SCLZZZZZZZ_.jpg",
            category: "tech",
            description: "Comprehensive guide to lakehouse architecture and AI."
        },
        {
            title: "Enabling Agentic Analytics with Apache Iceberg and Dremio",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQXT6W3N",
            coverImage: "https://images.amazon.com/images/P/B0GQXT6W3N.01._SCLZZZZZZZ_.jpg",
            category: "tech",
            description: "Building AI-ready lakehouse systems."
        },
        {
            title: "Using AI Agents for Data Engineering and Data Analysis",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GR6PYJT9",
            coverImage: "https://images.amazon.com/images/P/B0GR6PYJT9.01._SCLZZZZZZZ_.jpg",
            category: "tech",
            description: "Practical guide to AI-driven workflows."
        },
        {
            title: "The AI Engineering Handbook",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GSS4R9FK",
            coverImage: "https://images.amazon.com/images/P/B0GSS4R9FK.01._SCLZZZZZZZ_.jpg",
            category: "tech",
            description: "Full-stack reference for AI systems."
        },
        {
            title: "AI-Ready Data",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/AI-Ready-Data-Designing-Platforms-Agents/dp/B0GSN7GLH2/ref=sr_1_3",
            coverImage: "https://m.media-amazon.com/images/I/61ILD2jjU9L._SY522_.jpg",
            category: "tech",
            description: "Designing Data Platforms for LLMs, Agents, and RAG"
        },
        {
            title: "The 2026 Guide to AI-Assisted Development",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQW7CTML",
            coverImage: "https://images.amazon.com/images/P/B0GQW7CTML.01._SCLZZZZZZZ_.jpg",
            category: "tech",
            description: "Prompt engineering and agent workflows."
        },
        {
            title: "Apache Iceberg for Agentic AI: Connecting Structured Enterprise",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Apache-Iceberg-Agentic-Connecting-Structured-ebook/dp/B0DYTX2WZY/ref=sr_1_8",
            coverImage: "https://m.media-amazon.com/images/I/8108U1UJbsL._SY522_.jpg",
            category: "tech",
            description: "Enabling Agentic AI on an Iceberg Lakehouse."
        },
        {
            title: "The Agentic Enterprise: Deploying AI Agents Across the Modern Organization",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Agentic-Enterprise-Deploying-Agents-Organization/dp/B0GSN3NNS5/ref=sr_1_16",
            coverImage: "https://m.media-amazon.com/images/I/712lLVxVrcL._SY522_.jpg",
            category: "tech",
            description: "Prompt engineering and agent workflows."
        },
        {
            title: "Constructing Context and Semantics for AI Agents",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Constructing-Context-Semantics-Agents-Embeddings/dp/B0GSHRZNZ5/ref=sr_1_21",
            coverImage: "https://m.media-amazon.com/images/I/71gkfSn8lSL._SL1430_.jpg",
            category: "tech",
            description: "A Practical Guide to Embeddings, Knowledge Graphs, Memory, RAG, Evaluation, and Production Agent Systems"
        },
        {
            title: "The Open Source Lakehouse: Architecting the Decoupled Analytical Foundation",
            publisher: "Alex Merced Books",
            year: "2024",
            url: "https://www.amazon.com/Open-Source-Lakehouse-Architecting-Analytical-ebook/dp/B0D46P3VB7/ref=sr_1_17",
            coverImage: "https://m.media-amazon.com/images/I/81q8SELxiKL._SL1500_.jpg",
            category: "tech",
            description: "Building a Lakehouse using Open Source"
        },
        {
            title: "Evaluating AI Systems: Testing LLMs, RAG, and Agents",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Evaluating-AI-Systems-Testing-Agents/dp/B0GSVPQ667/ref=sr_1_19",
            coverImage: "https://m.media-amazon.com/images/I/71i0+pwD0NL._SL1499_.jpg",
            category: "tech",
            description: "How to properly test and evaluate AI systems"
        },
        {
            title: "The Economics of Labor in the AI Era",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Economics-Labor-Era-Disruption-Adaptation/dp/B0GSQSL344/ref=sr_1_20",
            coverImage: "https://m.media-amazon.com/images/I/71yanjbGdEL._SL1499_.jpg",
            category: "tech",
            description: "Disruption, Adaptation, and the Future of Work"
        },
        {
            title: "Governing AI Systems",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Governing-AI-Systems/dp/B0GSMVQ1TH/ref=sr_1_21",
            coverImage: "https://m.media-amazon.com/images/I/715f6abCEqL._SL1499_.jpg",
            category: "tech",
            description: "How to best govern AI systems"
        },
        {
            title: "Shipping AI: From Prototype to Production Systems",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Shipping-AI-Prototype-Production-Systems/dp/B0GSR2GRZX/ref=sr_1_22",
            coverImage: "https://m.media-amazon.com/images/I/71V2oEyfaCL._SL1499_.jpg",
            category: "tech",
            description: "How to deploy AI systems that scale"
        },
        {
            title: "Building Knowledge Systems for AI: Graphs, RAG, Memory, and Context",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Building-Knowledge-Systems-AI-Context/dp/B0GSWFSSRC/ref=sr_1_27",
            coverImage: "https://m.media-amazon.com/images/I/71AY0UlebPL._SL1499_.jpg",
            category: "tech",
            description: "Building Robust AI Systems"
        },
        {
            title: "The AI Lakehouse: Architecting Data Platforms for AI",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/AI-Lakehouse-Architecting-Data-Platforms/dp/B0GSMQ6M2J/ref=sr_1_29",
            coverImage: "https://m.media-amazon.com/images/I/61ybHcw6c2L._SL1499_.jpg",
            category: "tech",
            description: "Building AI Systems on a Data Lakehouse"
        },
        {
            title: "AI Application Architecture: Patterns for Building Intelligent Systems",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/AI-Application-Architecture-Patterns-Intelligent/dp/B0GSVFT3H4/ref=sr_1_35",
            coverImage: "https://m.media-amazon.com/images/I/71Y2EL6xo1L._SL1499_.jpg",
            category: "tech",
            description: "The Architecture of an AI Application"
        },
        {
            title: "The Economics of AI: Cost, Latency, and Infrastructure Tradeoffs",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/Economics-AI-Latency-Infrastructure-Tradeoffs/dp/B0GSPGSKXC/ref=sr_1_36",
            coverImage: "https://m.media-amazon.com/images/I/61X6ZAmfUoL._SL1499_.jpg",
            category: "tech",
            description: "Understanding the Costs of AI and how to Optimize them"
        },
        {
            title: "Alex Merced's Field Guide to Developer Relations",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0H15CJLNG",
            coverImage: "https://images.amazon.com/images/P/B0H15CJLNG.01._SCLZZZZZZZ_.jpg",
            category: "tech",
            description: "A practical guide to developer relations, community building, and technical evangelism."
        },
        {
            title: "Economic Ideas: From Beginning to Early 2026",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQQ68F63",
            coverImage: "https://images.amazon.com/images/P/B0GQQ68F63.01._SCLZZZZZZZ_.jpg",
            category: "economics",
            description: "History of economic thought through the AI era."
        },
        {
            title: "The Field Guide to Libertarianism",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQV4CK5B",
            coverImage: "https://images.amazon.com/images/P/B0GQV4CK5B.01._SCLZZZZZZZ_.jpg",
            category: "economics",
            description: "Understanding libertarian ideas and debates."
        },
        {
            title: "The Field Guide to Political Thought and Debates in the United States",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GTV6ZWHX",
            coverImage: "https://m.media-amazon.com/images/I/71xELzuacqL._SL1499_.jpg",
            category: "economics",
            description: "Maps the terrain of American political thought — conservative, progressive, and libertarian — so you can understand why people across the table believe what they believe."
        },
        {
            title: "The Libertarian Heart",
            publisher: "Lulu Press",
            year: "2019",
            url: "https://www.lulu.com/shop/alex-merced/the-libertarian-heart/paperback/product-1e9k7v7.html",
            coverImage: "/covers/cover-libertarian-heart.png",
            category: "economics",
            description: "A philosophical exploration of consent, individual peace, and the moral foundations of a free society."
        },
        {
            title: "Profits are Generosity, Entrepreneurship is Philanthropy",
            publisher: "Lulu Press",
            year: "2018",
            url: "https://www.amazon.com/Profits-are-Generosity-Entrepreneurship-Philanthropy/dp/1387798421",
            coverImage: "/covers/cover-profits-are-generosity.png",
            category: "economics",
            description: "An economic philosophy book arguing that voluntary exchange and entrepreneurship are the most generous forms of social contribution."
        },
        {
            title: "The Semantic Rebellion",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GPMNX78W",
            coverImage: "https://images.amazon.com/images/P/B0GPMNX78W.01._SCLZZZZZZZ_.jpg",
            category: "fiction",
            description: "A sci-fi novel following a data engineer's journey through a rapidly changing world shaped by AI and shifting power dynamics."
        },
        {
            title: "The Emperors of A.I. Valley",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQHKF4ZT",
            coverImage: "https://images.amazon.com/images/P/B0GQHKF4ZT.01._SCLZZZZZZZ_.jpg",
            category: "fiction",
            description: "A near-future thriller exploring power struggles, corporate intrigue, and moral dilemmas in an AI-dominated Silicon Valley."
        },
        {
            title: "The Federation of Tides",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GPRBTV6W",
            coverImage: "https://images.amazon.com/images/P/B0GPRBTV6W.01._SCLZZZZZZZ_.jpg",
            category: "fiction",
            description: "An epic fantasy adventure following a narwhal on a journey seeking knowledge across oceanic civilizations."
        },
        {
            title: "Plastic Punk",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQGRFW2H",
            coverImage: "https://images.amazon.com/images/P/B0GQGRFW2H.01._SCLZZZZZZZ_.jpg",
            category: "fiction",
            description: "A genre-bending novel exploring economic systems, societal structures, and individual agency in a stylized world."
        },
        {
            title: "Embers of Claim",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQGW7VCY",
            coverImage: "https://images.amazon.com/images/P/B0GQGW7VCY.01._SCLZZZZZZZ_.jpg",
            category: "fiction",
            description: "The first book in an epic fantasy trilogy, introducing a world of competing kingdoms, ancient magic, and rising conflict."
        },
        {
            title: "Crowns and Wings",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQGHYL79",
            coverImage: "https://images.amazon.com/images/P/B0GQGHYL79.01._SCLZZZZZZZ_.jpg",
            category: "fiction",
            description: "The second book in the epic fantasy trilogy, deepening the political intrigue and expanding the world's mythology."
        },
        {
            title: "Thrones of Ash and Sky",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQCHRYHV",
            coverImage: "https://images.amazon.com/images/P/B0GQCHRYHV.01._SCLZZZZZZZ_.jpg",
            category: "fiction",
            description: "The concluding volume of the trilogy, bringing the saga of kingdoms, magic, and destiny to its climax."
        },
        {
            title: "Tales of Fur and Sky: Echoes of the Ages",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0GQGRGH93",
            coverImage: "https://images.amazon.com/images/P/B0GQGRGH93.01._SCLZZZZZZZ_.jpg",
            category: "fiction",
            description: "A companion volume to the fantasy trilogy, expanding the lore with standalone tales set in the same world."
        },
        {
            title: "AI and Agents for Normal People",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0H59GBTMW",
            coverImage: "https://m.media-amazon.com/images/I/71oCOTieqYL._SY522_.jpg",
            category: "tech",
            description: "A practical guide to using AI tools for everyday tasks, covering Gemini, NotebookLM, ChatGPT, Claude, and local agent workflows without technical jargon."
        },
        {
            title: "The No Lock-in Apache Iceberg Lakehouse with Agentic Analytics",
            publisher: "Alex Merced Books",
            year: "2026",
            url: "https://www.amazon.com/dp/B0H49TDNX3",
            coverImage: "https://m.media-amazon.com/images/I/71bHiNYCPyL._SY522_.jpg",
            category: "tech",
            description: "A practical guide to building a portable Apache Iceberg lakehouse with open catalogs, agentic analytics, and AI-ready data platforms while avoiding vendor lock-in."
        }
    ]
};
