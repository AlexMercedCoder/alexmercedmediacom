import styles from './CtaStrip.module.css';
import { network } from '@/lib/network';

/** One primary next step above the footer, from network/network.json `cta`. */
export default function CtaStrip() {
    const cta = network.cta;
    if (!cta) return null;
    return (
        <aside className={styles.cta} aria-label={cta.heading}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{cta.heading}</h2>
                <ul className={styles.links}>
                    {cta.links.map((link, i) => (
                        <li key={link.url}>
                            <a
                                href={link.url}
                                data-network-event={link.event}
                                className={i === 0 ? styles.primary : styles.secondary}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
