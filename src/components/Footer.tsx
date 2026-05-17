import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    &copy; {year} Alex Merced. All rights reserved.
                </div>
                <div className={styles.links}>
                    <a href="https://twitter.com/alexmercedcoder" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a>
                    <a href="https://linkedin.com/in/alexmerced" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                    <a href="https://github.com/alexmercedcoder" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
                    <a href="https://alexmerced.com" target="_blank" rel="noopener noreferrer" className={styles.link}>AlexMerced.com</a>
                    <a href="https://alexmerceddata.com" target="_blank" rel="noopener noreferrer" className={styles.link}>AlexMercedData.com</a>
                    <a href="https://books.alexmerced.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Books</a>
                    <a href="https://whoisalexmerced.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Who Is Alex Merced</a>
                </div>
            </div>
        </footer>
    );
}
