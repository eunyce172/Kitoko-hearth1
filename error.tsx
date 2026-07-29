'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Replace with real error reporting (e.g. Sentry) before launch.
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-24 bg-cream dark:bg-brown-deep">
      <div className="max-w-lg mx-auto px-6 text-center">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hearth-gradient mb-6">
          <AlertTriangle className="w-7 h-7 text-cream" aria-hidden="true" />
        </span>
        <h1 className="font-display font-bold text-3xl text-brown dark:text-cream mb-4">
          Something went wrong
        </h1>
        <p className="text-charcoal/70 dark:text-cream/70 mb-8 leading-relaxed">
          An unexpected error occurred while loading this page. You can try again, or head back home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset} size="lg">Try Again</Button>
          <Button href="/" variant="secondary" size="lg">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
