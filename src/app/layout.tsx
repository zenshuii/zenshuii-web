import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import {
  createPageMetadata,
  siteDescription,
  siteIconVersion,
  siteName,
  siteTagline,
  siteUrl,
} from '@/utils/metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteTagline,
    description: siteDescription,
    path: '/',
  }),
  metadataBase: siteUrl,
  title: {
    default: `${siteName} – ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  robots: { index: true, follow: true },
  icons: {
    // Use matching rounded-square artwork across every favicon format.
    icon: [
      {
        url: `/favicon.ico?v=${siteIconVersion}`,
        type: 'image/x-icon',
        sizes: '16x16 32x32 48x48',
      },
      {
        url: `/favicon.svg?v=${siteIconVersion}`,
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
    apple: {
      url: `/apple-touch-icon.png?v=${siteIconVersion}`,
      type: 'image/png',
      sizes: '180x180',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} flex min-h-screen flex-col antialiased`}>
        <Navbar />
        <main className="flex flex-1 flex-col justify-center">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
