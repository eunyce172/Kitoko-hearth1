'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import Reveal from '@/components/ui/Reveal';

export default function SuccessStories() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-brown overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-3">Success Stories</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brown dark:text-cream mb-14">
            What our community says
          </h2>
        </Reveal>

        <div
          className="relative max-w-2xl mx-auto"
          role="region"
          aria-roledescription="carousel"
          aria-label="Student and parent testimonials"
        >
          <Quote className="w-10 h-10 text-gold/40 mx-auto mb-6" aria-hidden="true" />

          <div className="min-h-[180px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.figure
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="font-display text-xl md:text-2xl text-brown dark:text-cream leading-snug text-balance">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-charcoal/60 dark:text-cream/60">
                  <span className="font-semibold text-brown dark:text-gold">{current.name}</span>
                  {' '}&middot; {current.role} &middot; {current.programme}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-brown/15 dark:border-cream/15 hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? 'bg-gold' : 'bg-brown/20 dark:bg-cream/20'}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-brown/15 dark:border-cream/15 hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
