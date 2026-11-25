import type { MetadataRoute } from 'next';
import { siteUrl } from '@/utils/metadata';

const routes = [
  '/',
  '/about',
  '/apps',
  '/apps/stoic',
  '/contact',
  '/privacy',
  '/legal',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
  }));
}
