import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { allSiteMeta } from 'contentlayer/generated';

import env from '@/environment';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { basicMeta, opengraph } = allSiteMeta[0]
export const metadata: Metadata = {
  metadataBase: new URL(env.DEPLOY_URL),
  alternates: {
    canonical: new URL(env.SITE_URL),
  },
  title: basicMeta.title,
  description: basicMeta.description,
  keywords: basicMeta.keywords,
  referrer: basicMeta.referrer,
  other: basicMeta.extraMeta?.reduce((metas, { content, name }) => ({ ...metas, [name]: content }), {}),
  openGraph: {
    title: opengraph.title,
    description: opengraph.description,
    type: opengraph.type,
    images: opengraph.image,
    url: new URL(env.SITE_URL),
    siteName: opengraph.siteName,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
