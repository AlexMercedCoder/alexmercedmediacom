import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { network, getNetworkHeadScripts } from "@/lib/network";

const inter = Inter({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // wide range for headings/body
  display: "swap",
});

const SITE_TITLE = "Alex Merced Media: Videos, Podcasts and Articles";
const SITE_DESCRIPTION = "Videos, podcasts, articles and books by Alex Merced, Head of Developer Relations at Dremio, on Apache Iceberg, the data lakehouse, agentic analytics and data engineering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexmercedmedia.com"),
  alternates: {
    canonical: "/",
  },
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/hero.png"],
    site: network.twitterSite,
    creator: network.twitterSite,
  },
  icons: {
    icon: "/favicon.png",
  },
};

// The Person entity comes from network/network-head.html; reference it by @id only.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Alex Merced Media",
  "url": "https://alexmercedmedia.com",
  "description": SITE_DESCRIPTION,
  "author": { "@id": "https://alexmerced.com/#alexmerced" },
  "publisher": { "@id": "https://alexmerced.com/#alexmerced" }
};

const headScripts = getNetworkHeadScripts();

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaStrip from '@/components/CtaStrip';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
        {/* Network head (GA4, event listener, Person JSON-LD) from network/network-head.html */}
        {headScripts.map(({ attrs, content }, i) =>
          attrs.src ? (
            <script key={i} {...attrs} />
          ) : (
            <script key={i} {...attrs} dangerouslySetInnerHTML={{ __html: content }} />
          )
        )}
      </head>
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <CtaStrip />
        <Footer />
        {/* WebMCP: read-only tools for browser AI agents. Progressive
            enhancement; config lives in public/webmcp/init.js */}
        <script src="/webmcp/alex-merced-webmcp.js" defer />
        <script src="/webmcp/init.js" defer />
      </body>
    </html>
  );
}
