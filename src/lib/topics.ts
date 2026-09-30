export interface Topic {
    slug: string;
    name: string;
    title: string;
    description: string;
    /** Two to four plain sentences shown above the list. */
    intro: string[];
    /** Matched against title, tags and the start of the feed text. */
    pattern: RegExp;
    /** Topic key in src/data/books.json. */
    bookTopic: string;
    deeper: { label: string; url: string };
}

export const TOPICS: Topic[] = [
    {
        slug: 'iceberg',
        name: 'Apache Iceberg',
        title: 'Apache Iceberg Articles, Videos and Podcasts | Alex Merced Media',
        description: 'Articles, videos and podcast episodes by Alex Merced on Apache Iceberg: table format internals, catalogs, and building an Iceberg lakehouse.',
        intro: [
            'Apache Iceberg is the open table format Alex writes about more than anything else.',
            'His books on it include Apache Iceberg: The Definitive Guide from O’Reilly and Architecting an Apache Iceberg Lakehouse from Manning.',
            'Below are his articles, videos and podcast episodes that cover Iceberg, newest first, pulled from his feeds.',
        ],
        pattern: /\biceberg\b/i,
        bookTopic: 'iceberg',
        deeper: { label: 'Alex Merced’s Lakehouse Blog', url: 'https://iceberglakehouse.com' },
    },
    {
        slug: 'agents',
        name: 'AI agents',
        title: 'AI Agents and Agentic Analytics | Alex Merced Media',
        description: 'Articles, videos and podcast episodes by Alex Merced on AI agents, agentic analytics and the Model Context Protocol (MCP).',
        intro: [
            'Alex covers AI agents that work with data: agentic analytics, the Model Context Protocol (MCP), and what an agent needs before it can query a lakehouse and return a correct answer.',
            'Below are his articles, videos and podcast episodes on those topics, newest first, pulled from his feeds.',
        ],
        pattern: /\b(agents?|agentic|mcp|model context protocol)\b/i,
        bookTopic: 'agentic',
        deeper: { label: 'Agentic Analytics Now', url: 'https://agenticanalyticsnow.com' },
    },
    {
        slug: 'semantic-layer',
        name: 'Semantic layer',
        title: 'Semantic Layer Articles, Videos and Podcasts | Alex Merced Media',
        description: 'Articles, videos and podcast episodes by Alex Merced on semantic layers: shared metric definitions for people, BI tools and AI agents on the lakehouse.',
        intro: [
            'A semantic layer gives each business metric one agreed definition, so people, BI tools and AI agents calculate it the same way.',
            'Alex writes about how a semantic layer sits on top of a lakehouse and why agents give better answers with one.',
            'Below are his articles, videos and podcast episodes that mention semantic layers, newest first, pulled from his feeds.',
        ],
        pattern: /\bsemantic\b/i,
        bookTopic: 'semantic',
        deeper: { label: 'Semantic Lakehouse', url: 'https://semanticlakehouse.com' },
    },
];

export function getTopic(slug: string): Topic | undefined {
    return TOPICS.find(t => t.slug === slug);
}

export function matchesTopic(
    topic: Topic,
    item: { title: string; tags?: unknown; contentSnippet?: string }
): boolean {
    const tags = Array.isArray(item.tags)
        ? item.tags.map(t => (typeof t === 'string' ? t : '')).join(' ')
        : '';
    const text = `${item.title} ${tags} ${(item.contentSnippet || '').slice(0, 400)}`;
    return topic.pattern.test(text);
}
