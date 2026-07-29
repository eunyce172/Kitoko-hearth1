import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What students, parents, and alumni say about their experience with Kitoko Hearth programmes.',
};

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Testimonials" }]} />
      <PageHero
        eyebrow="Testimonials"
        title="Stories from our community"
        description="Illustrative placeholder stories today — real student and parent voices will replace these as they come in."
      />

      <section className="py-16 md:py-20 bg-cream dark:bg-brown-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-hearth-gradient">
        <div className="max-w-xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-cream mb-4">
              Ready to write your own story?
            </h2>
            <Button href="/join" size="lg" icon className="bg-none bg-cream text-brown-deep shadow-none hover:shadow-glow">
              Join Kitoko Hearth
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
