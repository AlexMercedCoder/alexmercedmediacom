import styles from './BookCard.module.css';
import { BookConfig } from '@/lib/types';

interface BookCardProps {
    book: BookConfig;
}

export default function BookCard({ book }: BookCardProps) {
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
                <h3 className={styles.title}>{book.title}</h3>
                <div className={styles.publisher}>{book.publisher}</div>
                <div className={styles.year}>{book.year}</div>
                <a href={book.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Book
                </a>
            </div>
        </div>
    );
}
