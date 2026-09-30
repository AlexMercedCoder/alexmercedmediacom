import styles from './page.module.css';
import BookCard from '@/components/BookCard';
import booksData from '@/data/books.json';
import { BookConfig } from '@/lib/types';

interface BookEntry {
    title: string;
    slug: string;
    description?: string;
    categorySlug?: string;
    publisher?: string;
    flagship?: boolean;
    cover?: string;
    canonicalPage: string;
    amazon?: string;
}

const CATEGORIES = ['tech', 'economics', 'fiction', 'tabletop'] as const;

// Flagship titles only; src/data/books.json is generated from the entity layer.
const flagship: BookConfig[] = (booksData.books as BookEntry[])
    .filter(b => b.flagship)
    .map(b => ({
        title: b.title,
        publisher: b.publisher || '',
        url: b.amazon || b.canonicalPage,
        detailsUrl: b.canonicalPage,
        coverImage: b.cover,
        category: (CATEGORIES as readonly string[]).includes(b.categorySlug || '')
            ? (b.categorySlug as BookConfig['category'])
            : undefined,
        description: b.description,
    }));

export default function BooksPage() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Books</h1>
                    <p className={styles.pageSubtitle}>
                        Alex has written {booksData.totalInCatalog} books on data and AI, economics and philosophy, fiction, and tabletop roleplaying. These are the flagship titles. The full catalog, with every book&apos;s details, is on{' '}
                        <a href={booksData.catalog}>books.alexmerced.com</a>.
                    </p>
                </div>
            </header>

            <section className={styles.feed}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {flagship.map(book => (
                            <BookCard key={book.title} book={book} />
                        ))}
                    </div>
                    <p className={styles.catalogLink}>
                        <a href={booksData.catalog}>See all {booksData.totalInCatalog} books on books.alexmerced.com</a>
                    </p>
                </div>
            </section>
        </main>
    );
}
