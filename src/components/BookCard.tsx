import styles from './BookCard.module.css';
import { BookConfig } from '@/lib/types';

interface BookCardProps {
    book: BookConfig;
}

export default function BookCard({ book }: BookCardProps) {
    const categoryLabels: Record<string, string> = {
        tech: 'Tech',
        economics: 'Economics & Philosophy',
        fiction: 'Fiction'
    };

    const categoryLabel = book.category ? (categoryLabels[book.category] || book.category) : '';

    return (
        <div className={styles.card}>
            <div className={styles.coverContainer}>
                {book.coverImage ? (
                    <img src={book.coverImage} alt={book.title} className={styles.coverImage} />
                ) : (
                    <div className={styles.coverPlaceholder}>
                        <span>📖</span>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                {book.category && (
                    <span className={styles.badge} data-category={book.category}>
                        {categoryLabel}
                    </span>
                )}
                <h3 className={styles.title}>{book.title}</h3>
                <div className={styles.meta}>
                    <span className={styles.publisher}>{book.publisher}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.year}>{book.year}</span>
                </div>
                {book.description && (
                    <p className={styles.description}>{book.description}</p>
                )}
                <a href={book.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View on Amazon
                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
