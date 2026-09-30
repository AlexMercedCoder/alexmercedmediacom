import styles from './Footer.module.css';
import { network } from '@/lib/network';

const COMMUNITY = [
    {
        title: 'Newsletters',
        sites: [
            { label: 'AI newsletter, Thursdays', url: 'https://amdatalakehouse.substack.com' },
            { label: 'Apache lakehouse newsletter, Fridays', url: 'https://amdatalakehouse.substack.com' },
            { label: 'Subscribe on Substack', url: 'https://amdatalakehouse.substack.com' },
        ],
    },
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
                <nav className={styles.network} aria-label="The Alex Merced Network">
                  <h2 className={styles.networkTitle}>The Alex Merced Network</h2>
                  <div className={styles.networkGrid}>
                    {network.footer.groups.map((group) => (
                      <div key={group.title}>
                        <h3 className={styles.groupTitle}>{group.title}</h3>
                        <ul className={styles.groupList}>
                          {group.links.map((link) => (
                            <li key={link.url}>
                              <a href={link.url} className={styles.link}>{link.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className={styles.allSites}>
                    <a href={network.footer.allSitesUrl} className={styles.link}>{network.footer.allSitesLabel}</a>
                  </p>
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
