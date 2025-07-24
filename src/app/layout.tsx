import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Najiullah Rao - Full-Stack Web & Mobile App Developer',
description:
  'Portfolio of Najiullah Rao, a passionate full-stack developer specializing in React.js, Next.js, Node.js, and React Native. Building scalable web apps and mobile solutions that matter.',
keywords:
  'Najiullah Rao, full-stack developer, web developer, mobile app developer, React.js, Next.js, Node.js, React Native, portfolio',
authors: [{ name: 'Najiullah Rao' }],
creator: 'Najiullah Rao',
openGraph: {
  type: 'website',
  locale: 'en_US',
  url: 'https://najiullah-portfolio.vercel.app',
  title: 'Najiullah Rao - Full-Stack Web & Mobile App Developer',
  description:
    'Portfolio of Najiullah Rao, a passionate full-stack developer specializing in React.js, Next.js, Node.js, and React Native. Building scalable web apps and mobile solutions that matter.',
  siteName: 'Najiullah Rao Portfolio',
},
twitter: {
  card: 'summary_large_image',
  title: 'Najiullah Rao - Full-Stack Web & Mobile App Developer',
  description:
    'Portfolio of Najiullah Rao, a passionate full-stack developer specializing in React.js, Next.js, Node.js, and React Native.',
  creator: '@RaoNaji11536',
},

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

