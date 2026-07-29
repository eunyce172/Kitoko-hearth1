import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import SparkField from '@/components/ui/Spark';
import { Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-cream dark:bg-brown-deep pt-24">
      <div className="hearth-glow-bg" aria-hidden="true" />
      <SparkField count={5} className="opacity-50" />
      <div className="relative max-w-lg mx-auto px-6 text-center">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hearth-gradient mb-6">
          <Flame className="w-7 h-7 text-cream" aria-hidden="true" />
        </span>
        <p className="font-display font-extrabold text-gold text-sm uppercase tracking-wider mb-3">404</p>
        <h1 className="font-display font-bold text-3xl md:text-4xl text-brown dark:text-cream mb-4">
          This spark went out.
        </h1>
        <p className="text-charcoal/70 dark:text-cream/70 mb-8 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <Button href="/" size="lg" icon>Back to Home</Button>
      </div>
    </section>
  );
}
