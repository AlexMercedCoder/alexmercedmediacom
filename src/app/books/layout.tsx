import type { Metadata } from 'next';
import { MEDIA_DATA } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Books | Alex Merced Media',
    description: "Explore 65 books by Alex Merced across technology, economics, philosophy, fiction, and tabletop RPGs, including Apache Iceberg: The Definitive Guide.",
    alternates: { canonical: '/books' },
    openGraph: {
        title: 'Books | Alex Merced Media',
        description: 'Books by Alex Merced across technology, economics, philosophy, and fiction.',
        url: 'https://alexmercedmedia.com/books',
        type: 'website',
        images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'Alex Merced Media' }],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Books by Alex Merced',
    itemListElement: MEDIA_DATA.books.map((book, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@type': 'Book',
            name: book.title,
            author: { '@id': 'https://alexmerced.com/#alexmerced' },
        },
    })),
};

export default function BooksLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
