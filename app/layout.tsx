import type React from "react";
import type { Metadata } from "next";
import './globals.css';

import { Inter } from 'next/font/google';
import Head from 'next/head';

import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harun Al Rosyid | Developer Portfolio",
  description: "This is a Web Development showcase built by Harun Al Rosyid.",
  openGraph: {
    title: "Harun Al Rosyid | Developer Portfolio",
    description:
      "This is a Web Development showcase built by Harun Al Rosyid.",
    url: "https://elepantio.com",
    siteName: "Elepantio",
    images: [
      {
        url: "https://elepantio.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Elepantio App Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harun Al Rosyid | Developer Portfolio",
    description:
      "This is a Web Development showcase built by Harun Al Rosyid.",
    images: ["https://elepantio.com/images/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}