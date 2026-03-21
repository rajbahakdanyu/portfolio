import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danyu Rajbahak — Full-Stack Developer",
  description:
    "Full-stack developer specialising in React, Next.js and TypeScript. Explore my projects, skills and get in touch.",
  metadataBase: new URL("https://rajbahakdanyu.github.io"),
  openGraph: {
    title: "Danyu Rajbahak — Full-Stack Developer",
    description:
      "Full-stack developer specialising in React, Next.js and TypeScript.",
    url: "/portfolio",
    siteName: "Danyu Rajbahak",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danyu Rajbahak — Full-Stack Developer",
    description:
      "Full-stack developer specialising in React, Next.js and TypeScript.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Danyu Rajbahak",
  url: "https://rajbahakdanyu.github.io/portfolio",
  jobTitle: "Full-Stack Developer",
  sameAs: [
    "https://github.com/rajbahakdanyu",
    "https://linkedin.com/in/danyu-rajbahak",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
