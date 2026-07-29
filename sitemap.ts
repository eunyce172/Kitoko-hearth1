import type { MetadataRoute } from 'next';
import { programmes } from '@/lib/data';

const baseUrl = 'https://kitokohearth.org';

const routes = [
  '',
  '/about',
  '/programmes',
  '/projects',
  '/team',
  '/testimonials',
  '/join',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));

  const programmeRoutes: MetadataRoute.Sitemap = programmes.map((p) => ({
    url: `${baseUrl}/programmes/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...programmeRoutes];
}
