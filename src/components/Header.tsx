"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    AlexMerced<span style={{ color: 'var(--color-primary)' }}>Media</span>
                </Link>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
                    <Link href="/blogs" className={styles.navLink} onClick={closeMenu}>Blogs</Link>
                    <Link href="/videos" className={styles.navLink} onClick={closeMenu}>Videos</Link>
                    <Link href="/podcasts" className={styles.navLink} onClick={closeMenu}>Podcasts</Link>
                    <Link href="/books" className={styles.navLink} onClick={closeMenu}>Books</Link>
                    <a href="https://whoisalexmerced.com" target="_blank" rel="noopener noreferrer" className={styles.navLink} onClick={closeMenu}>WhoIsAlexMerced.com</a>
                    <a href="https://alexmerced.com" target="_blank" rel="noopener noreferrer" className={styles.navLink} onClick={closeMenu}>AlexMerced.com</a>
                </nav>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ThemeToggle />
                    <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Menu" aria-expanded={isMenuOpen}>
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>
        </header>
    );
}
