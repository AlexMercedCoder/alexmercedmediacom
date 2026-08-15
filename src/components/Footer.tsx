import styles from './Footer.module.css';

const NETWORK = [
    {
        title: 'Alex Merced',
        sites: [
            { label: 'AlexMerced.com', url: 'https://alexmerced.com' },
            { label: 'WhoIsAlexMerced.com', url: 'https://whoisalexmerced.com' },
            { label: 'Books', url: 'https://books.alexmerced.com' },
            { label: 'AlexMercedCoder.dev', url: 'https://alexmercedcoder.dev' },
            { label: 'AlexMercedData.com', url: 'https://alexmerceddata.com' },
        ],
    },
    {
        title: 'Lakehouse & Data',
        sites: [
            { label: 'DataLakehouseHub.com', url: 'https://datalakehousehub.com' },
            { label: 'IcebergLakehouse.com', url: 'https://iceberglakehouse.com' },
            { label: 'AgenticLakehouse.com', url: 'https://agenticlakehouse.com' },
            { label: 'SemanticLakehouse.com', url: 'https://semanticlakehouse.com' },
            { label: 'DataEngnr.com', url: 'https://dataengnr.com' },
        ],
    },
    {
        title: 'Blogs',
        sites: [
            { label: 'AlexMerced.blog', url: 'https://alexmerced.blog' },
            { label: 'GrokOverflow.com', url: 'https://grokoverflow.com' },
            { label: 'IngestThis.com', url: 'https://ingestthis.com' },
        ],
    },
];

const SOCIAL = [
    { label: 'Twitter', url: 'https://twitter.com/alexmercedcoder' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/alexmerced' },
    { label: 'GitHub', url: 'https://github.com/alexmercedcoder' },
];

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.network} aria-label="The Alex Merced Network">
                    <h2 className={styles.networkTitle}>The Alex Merced Network</h2>
                    <div className={styles.networkGrid}>
                        {NETWORK.map((group) => (
                            <div key={group.title}>
                                <h3 className={styles.groupTitle}>{group.title}</h3>
                                <ul className={styles.groupList}>
                                    {group.sites.map((site) => (
                                        <li key={site.url}>
                                            <a
                                                href={site.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.link}
                                            >
                                                {site.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </nav>

                <div className={styles.bottom}>
                    <div>&copy; {year} Alex Merced. All rights reserved.</div>
                    <div className={styles.links}>
                        {SOCIAL.map((s) => (
                            <a
                                key={s.url}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
