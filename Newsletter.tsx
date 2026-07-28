'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-24 bg-hearth-gradient relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-cream mb-4">
            Stay close to the fire
          </h2>
          <p className="text-cream/75 mb-8 max-w-xl mx-auto">
            One email a month: new programme cohorts, student showcases, and ways to get involved.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream/15 text-cream font-medium">
              <CheckCircle2 className="w-5 h-5 text-gold-light" aria-hidden="true" />
              You&rsquo;re subscribed &mdash; welcome to the hearth.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Newsletter signup">
              <label htmlFor="home-newsletter-email" className="sr-only">Email address</label>
              <input
                id="home-newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full bg-cream/10 border border-cream/20 px-5 py-3.5 text-cream placeholder:text-cream/40 focus-visible:outline-2 focus-visible:outline-gold-light"
              />
              <button
                type="submit"
                className="rounded-full bg-cream text-brown-deep font-display font-semibold px-6 py-3.5 hover:bg-gold-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
