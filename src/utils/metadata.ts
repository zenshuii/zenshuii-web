import type { Metadata } from 'next';

export const siteUrl = new URL('https://zenshuii.com');
export const siteName = 'Zenshuii';
export const siteTagline = 'Digital tools for a more intentional life';
export const siteDescription =
  'Zenshuii is an independent creative studio making thoughtful apps for personal growth, wellbeing, and everyday clarity.';
export const siteIconVersion = '6';

const socialImage = {
  url: new URL('/social-thumbnail-v1.png', siteUrl),
  width: 256,
  height: 256,
  type: 'image/png',
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
  const socialTitle =
    path === '/' ? `${siteName} – ${title}` : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: path,
      siteName,
      title: socialTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: 'summary',
      title: socialTitle,
      description,
      images: [{ url: socialImage.url, alt: socialImage.alt }],
    },
  };
}
