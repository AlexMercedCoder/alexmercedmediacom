"use client";

import { useState } from 'react';
import styles from './page.module.css';
import BookCard from '@/components/BookCard';
import { MEDIA_DATA } from '@/lib/data';

export default function BooksPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<'all' | 'tech' | 'economics' | 'fiction'>('all');

    // Sort books by year descending
    const books = [...MEDIA_DATA.books].sort((a, b) =>
        parseInt(b.year) - parseInt(a.year)
    );

    const filteredBooks = books.filter(book => {
        const matchesCategory = activeCategory === 'all' || book.category === activeCategory;
        const matchesSearch = !searchQuery ||
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (book.description && book.description.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Books</h1>
                    <p className={styles.pageSubtitle}>
                        Explore my published works on technology, economics, philosophy, and fiction.
                    </p>
                </div>
            </header>

            <section className={styles.filtersSection}>
                <div className={styles.container}>
                    <div className={styles.filterBar}>
                        <div className={styles.tabs} role="tablist" aria-label="Filter books by category">
                            <button
                                className={`${styles.tab} ${activeCategory === 'all' ? styles.activeTab : ''}`}
                                onClick={() => setActiveCategory('all')}
                                role="tab"
                                aria-selected={activeCategory === 'all'}
                            >
                                All ({books.length})
                            </button>
                            <button
                                className={`${styles.tab} ${activeCategory === 'tech' ? styles.activeTab : ''}`}
                                onClick={() => setActiveCategory('tech')}
                                role="tab"
                                aria-selected={activeCategory === 'tech'}
                            >
                                Tech ({books.filter(b => b.category === 'tech').length})
                            </button>
                            <button
                                className={`${styles.tab} ${activeCategory === 'economics' ? styles.activeTab : ''}`}
                                onClick={() => setActiveCategory('economics')}
                                role="tab"
                                aria-selected={activeCategory === 'economics'}
                            >
                                Economics & Philosophy ({books.filter(b => b.category === 'economics').length})
                            </button>
                            <button
                                className={`${styles.tab} ${activeCategory === 'fiction' ? styles.activeTab : ''}`}
                                onClick={() => setActiveCategory('fiction')}
                                role="tab"
                                aria-selected={activeCategory === 'fiction'}
                            >
                                Fiction ({books.filter(b => b.category === 'fiction').length})
                            </button>
                        </div>
                        <div className={styles.searchWrapper}>
                            <input
                                type="search"
                                className={styles.searchInput}
                                placeholder="Search books by title or description..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search books"
                            />
                            {searchQuery && (
                                <button
                                    className={styles.searchClear}
                                    onClick={() => setSearchQuery('')}
                                    aria-label="Clear search"
                                >
                                    &times;
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.feed}>
                <div className={styles.container}>
                    {filteredBooks.length > 0 ? (
                        <div className={styles.grid}>
                            {filteredBooks.map((book) => (
                                <BookCard key={book.title} book={book} />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <svg className={styles.emptyIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                            <h3>No books found</h3>
                            <p>Try adjusting your search query or switching categories.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
