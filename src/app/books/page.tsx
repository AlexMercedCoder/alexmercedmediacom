import styles from './page.module.css';
import BookCard from '@/components/BookCard';
import { MEDIA_DATA } from '@/lib/data';

export default function BooksPage() {
    // Sort books by year descending (assuming year is string like "2024")
    const books = [...MEDIA_DATA.books].sort((a, b) =>
        parseInt(b.year) - parseInt(a.year)
    );

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.pageTitle}>Books</h1>
                    <p className={styles.pageSubtitle}>
                        My published works on technology, economics, and data.
                    </p>
                </div>
            </header>

            <section className={styles.feed}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {books.map((book) => (
                            <BookCard key={book.title} book={book} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
