import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kitoko Hearth',
    short_name: 'Kitoko Hearth',
    description: 'Empowering teenagers to discover, design, and build technology through project-based learning.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F5F0',
    theme_color: '#4A2412',
    icons: [
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
