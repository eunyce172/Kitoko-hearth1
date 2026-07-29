import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import ScrollToTop from '@/components/layout/ScrollToTop';
import PageLoader from '@/components/ui/PageLoader';

const heading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const siteUrl = 'https://kitokohearth.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kitoko Hearth — Where Teens Build Tomorrow\'s Technology',
    template: '%s | Kitoko Hearth',
  },
  description:
    'Kitoko Hearth empowers teenagers to discover, design, and build real technology through hands-on, project-based learning in web development, AI, robotics, design, and more.',
  keywords: [
    'Kitoko Hearth',
    'teen technology education',
    'project-based learning',
    'youth coding programme',
    'robotics for teens',
    'AI education for youth',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Kitoko Hearth — Where Teens Build Tomorrow\'s Technology',
    description:
      'Hands-on technology education for teenagers — web, mobile, AI, robotics, design, and entrepreneurship.',
    siteName: 'Kitoko Hearth',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitoko Hearth — Where Teens Build Tomorrow\'s Technology',
    description: 'Hands-on technology education for teenagers, powered by mentors and real projects.',
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F5F0' },
    { media: '(prefers-color-scheme: dark)', color: '#2E1509' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Kitoko Hearth',
  url: siteUrl,
  description:
    'Kitoko Hearth empowers teenagers to discover, design, and build real technology through hands-on, project-based learning.',
  sameAs: [
    'https://linkedin.com',
    'https://x.com',
    'https://instagram.com',
    'https://facebook.com',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${heading.variable} ${body.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <PageLoader />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-brown-deep focus:px-4 focus:py-2 focus:rounded-xl focus:shadow-lift"
          >
            Skip to main content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
