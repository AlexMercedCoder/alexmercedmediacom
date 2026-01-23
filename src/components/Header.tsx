import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    AlexMerced<span style={{ color: 'var(--color-primary)' }}>Media</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/blogs" className={styles.navLink}>Blogs</Link>
                    <Link href="/videos" className={styles.navLink}>Videos</Link>
                    <Link href="/podcasts" className={styles.navLink}>Podcasts</Link>
                    <Link href="/books" className={styles.navLink}>Books</Link>
                </nav>
                <button className={styles.mobileMenuBtn} aria-label="Menu">
                    ☰
                </button>
            </div>
        </header>
    );
}
