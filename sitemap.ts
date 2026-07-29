import type { MetadataRoute } from 'next';

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
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
