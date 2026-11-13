import type { Metadata } from 'next';

export const siteUrl = new URL('https://zenshuii.com');
export const siteName = 'Zenshuii';
export const siteTagline = 'Digital tools for a more intentional life.';
export const siteDescription =
  'Zenshuii is an independent creative studio making thoughtful apps for personal growth, wellbeing, and everyday clarity.';
export const siteIconVersion = '5';

const socialIcon = {
  url: new URL(`/favicon-square.png?v=${siteIconVersion}`, siteUrl),
  alt: `${siteName} logo`,
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: path,
      siteName,
      title,
      description,
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [socialIcon],
    },
  };
}
