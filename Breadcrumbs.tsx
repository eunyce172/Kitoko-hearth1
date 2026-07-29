import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

const baseUrl = 'https://kitokohearth.org';

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: 'Home', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: crumb.href ? `${baseUrl}${crumb.href === '/' ? '' : crumb.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="relative max-w-4xl mx-auto px-6 pt-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-charcoal/50 dark:text-cream/50">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-3 h-3" aria-hidden="true" />}
              {crumb.href && !isLast ? (
                <Link href={crumb.href} className="hover:text-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={isLast ? 'text-gold font-medium' : ''}>
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
