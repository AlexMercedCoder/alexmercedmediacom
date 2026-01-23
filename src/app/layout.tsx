import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // wide range for headings/body
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Merced | Developer Relations & Data Engineering",
  description: "The central hub for Alex Merced's work in Developer Relations, Data Engineering, Apache Iceberg, and Libertarian philosophy.",
  openGraph: {
    title: "Alex Merced | Developer Relations & Data Engineering",
    description: "Bridging the gap between Data and People. Explore blogs, videos, podcasts, and books by Alex Merced.",
    url: "https://alexmercedmedia.com",
    siteName: "Alex Merced Media",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Alex Merced",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Merced | Developer Relations & Data Engineering",
    description: "Bridging the gap between Data and People.",
    images: ["/hero.png"],
    creator: "@AlexMercedCoder",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alex Merced",
  "url": "https://alexmercedmedia.com",
  "sameAs": [
    "https://twitter.com/alexmercedcoder",
    "https://www.linkedin.com/in/alexmerced",
    "https://github.com/alexmercedcoder",
    "https://www.youtube.com/@AlexMercedCoder"
  ],
  "jobTitle": "Developer Advocate",
  "worksFor": {
    "@type": "Organization",
    "name": "Dremio"
  },
  "description": "Instructional advocate helping developers master the Data Lakehouse ecosystem."
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" data-theme="light">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
