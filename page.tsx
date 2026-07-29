import type { Metadata } from 'next';
import { Suspense } from 'react';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import JoinForm from '@/components/join/JoinForm';
import Accordion from '@/components/ui/Accordion';
import Reveal from '@/components/ui/Reveal';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Join Kitoko Hearth',
  description: 'Apply to a Kitoko Hearth programme — tell us about yourself and the programme you\u2019re interested in.',
};

export default function JoinPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Join Kitoko Hearth" }]} />
      <PageHero
        eyebrow="Join Kitoko Hearth"
        title="Tell us where your curiosity points."
        description="Fill out the form below and a mentor from our team will follow up within 3–5 business days."
      />

      <section className="py-16 md:py-20 bg-cream dark:bg-brown-deep">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-brown shadow-soft">
              <Suspense fallback={<div className="h-64" aria-hidden="true" />}>
                <JoinForm />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-brown">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal className="text-center mb-10">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-3">FAQ</p>
            <h2 className="font-display font-bold text-3xl text-brown dark:text-cream">
              Questions before you apply
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
