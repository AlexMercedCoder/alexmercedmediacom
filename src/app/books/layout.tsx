import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Books | Alex Merced Media',
    description: 'The flagship books by Alex Merced, including Apache Iceberg: The Definitive Guide and Architecting an Apache Iceberg Lakehouse. The full catalog lives at books.alexmerced.com.',
    alternates: { canonical: '/books' },
    openGraph: {
        title: 'Books | Alex Merced Media',
        description: 'The flagship books by Alex Merced. The full catalog lives at books.alexmerced.com.',
        url: 'https://alexmercedmedia.com/books',
        type: 'website',
        images: [{ url: '/hero.png', width: 1200, height: 630, alt: 'Alex Merced Media' }],
    },
};

// Book schema lives on books.alexmerced.com; this page only summarizes.
export default function BooksLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
