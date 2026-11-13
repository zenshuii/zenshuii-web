import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { siteDescription, siteName, siteUrl } from '@/utils/metadata';

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
  metadataBase: siteUrl,
  title: {
    default: 'Zenshuii – Digital tools for a more intentional life.',
    template: '%s | Zenshuii',
  },
  description: siteDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName,
    title: 'Zenshuii – Digital tools for a more intentional life.',
    description: siteDescription,
  },
  twitter: {
    card: 'summary',
    title: 'Zenshuii – Digital tools for a more intentional life.',
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  icons: {
    // Keep every favicon opaque so Safari doesn't add a backing to transparent corners.
    icon: [
      {
        url: '/favicon.ico?v=2',
        type: 'image/x-icon',
        sizes: '16x16 32x32 48x48',
      },
      {
        url: '/favicon.svg?v=2',
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
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
