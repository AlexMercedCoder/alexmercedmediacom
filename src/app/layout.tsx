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
  title: "AlexMercedMedia",
  description: "A centralized media hub for content by Alex Merced.",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
