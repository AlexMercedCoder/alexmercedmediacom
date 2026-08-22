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
            { label: 'OpenDataLakehouse.com', url: 'https://opendatalakehouse.com' },
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

const COMMUNITY = [
    {
        title: 'Event Calendars',
        sites: [
            { label: 'Agentic Lakehouse Events', url: 'https://luma.com/agenticlakehouse' },
            { label: 'Data Lakehouse Hub Events', url: 'https://luma.com/DataLakehouseHub' },
        ],
    },
    {
        title: 'Communities',
        sites: [
            { label: 'Data Lakehouse Hub Slack', url: 'https://join.slack.com/t/thedatalakehousehub/shared_invite/zt-274yc8sza-mI2zhCW8LGkOh1uxuf8T5Q' },
            { label: 'Data Events Slack', url: 'https://join.slack.com/t/data-events/shared_invite/zt-38vgrooy9-U9ral_gr3NAz_Siih1QwmQ' },
            { label: 'Data & Tech Slack', url: 'https://join.slack.com/t/datatechcommunity/shared_invite/zt-12xrk4qmd-y~6jUFFd7kdaLhgLURKwoA' },
            { label: 'r/datalakehouseandai', url: 'https://www.reddit.com/r/datalakehouseandai/' },
            { label: 'Data Lakehouse Hub on LinkedIn', url: 'https://www.linkedin.com/company/data-lakehouse-hub/' },
        ],
    },
    {
        title: 'YouTube',
        sites: [
            { label: 'Alex Merced Tech', url: 'https://www.youtube.com/@AlexMercedCoder' },
            { label: 'Alex Merced Data & AI', url: 'https://www.youtube.com/@alexmerceddata' },
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
                <nav className={styles.run} aria-label="The Alex Merced Network">
                  <h2 className={styles.runTitle}>The Alex Merced Network</h2>
                  <ul className={styles.runList}>
                    {NETWORK.flatMap((g) => g.sites)
                      .filter((s) => s.url !== "https://alexmercedmedia.com")
                      .map((site) => (
                        <li key={site.url}>
                          <a href={site.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {site.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </nav>

                <nav className={styles.run} aria-label="Events and community">
                  <h2 className={styles.runTitle}>Events &amp; Community</h2>
                  <ul className={styles.runList}>
                    {COMMUNITY.flatMap((g) => g.sites)
                      .filter((s) => s.url !== "https://alexmercedmedia.com")
                      .map((site) => (
                        <li key={site.url}>
                          <a href={site.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {site.label}
                          </a>
                        </li>
                      ))}
                  </ul>
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
