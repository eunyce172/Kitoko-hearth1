import { Quote } from 'lucide-react';
import { Testimonial } from '@/types';
import Reveal from '@/components/ui/Reveal';

export default function TestimonialCard({ testimonial, delay = 0 }: { testimonial: Testimonial; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <figure className="p-7 rounded-2xl bg-white dark:bg-brown shadow-soft h-full flex flex-col">
        <Quote className="w-7 h-7 text-gold/40 mb-4" aria-hidden="true" />
        <blockquote className="text-base text-brown dark:text-cream leading-relaxed flex-1">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-5 pt-5 border-t border-brown/10 dark:border-cream/10 text-sm">
          <span className="font-display font-semibold text-brown dark:text-gold">{testimonial.name}</span>
          <span className="block text-charcoal/55 dark:text-cream/55 mt-0.5">
            {testimonial.role} &middot; {testimonial.programme}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
