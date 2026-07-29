import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Clock, BarChart3, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { programmes } from '@/lib/data';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const programme = programmes.find((p) => p.slug === params.slug);
  if (!programme) return {};
  return {
    title: programme.title,
    description: programme.description,
  };
}

export default function ProgrammeDetailPage({ params }: Props) {
  const programme = programmes.find((p) => p.slug === params.slug);
  if (!programme) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: programme.title,
    description: programme.description,
    provider: {
      '@type': 'Organization',
      name: 'Kitoko Hearth',
      sameAs: 'https://kitokohearth.org',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: 'Programmes', href: '/programmes' }, { label: programme.title }]} />
      <PageHero eyebrow={`${programme.duration} \u00b7 ${programme.level}`} title={programme.title} description={programme.overview} />

      <section className="py-16 md:py-20 bg-cream dark:bg-brown-deep">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="p-8 rounded-2xl bg-white dark:bg-brown shadow-soft h-full">
              <h2 className="font-display font-semibold text-xl text-brown dark:text-cream mb-5">
                What you&rsquo;ll walk away with
              </h2>
              <ul className="space-y-3">
                {programme.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="p-8 rounded-2xl bg-white dark:bg-brown shadow-soft h-full">
              <h2 className="font-display font-semibold text-xl text-brown dark:text-cream mb-5">At a glance</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2.5 text-charcoal/70 dark:text-cream/70">
                  <Clock className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                  <span><strong className="text-brown dark:text-cream">Duration:</strong> {programme.duration}</span>
                </li>
                <li className="flex items-center gap-2.5 text-charcoal/70 dark:text-cream/70">
                  <BarChart3 className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                  <span><strong className="text-brown dark:text-cream">Level:</strong> {programme.level}</span>
                </li>
              </ul>
              <h3 className="font-display font-semibold text-sm text-brown dark:text-cream mt-6 mb-3">Skills covered</h3>
              <ul className="flex flex-wrap gap-2">
                {programme.skills.map((skill) => (
                  <li key={skill} className="text-xs font-medium px-3 py-1.5 rounded-full bg-cream dark:bg-brown-deep text-brown dark:text-cream border border-brown/10 dark:border-cream/10">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-brown">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-3">Curriculum</p>
            <h2 className="font-display font-bold text-3xl text-brown dark:text-cream">How the programme unfolds</h2>
          </Reveal>

          <ol className="relative border-l-2 border-gold/30 ml-3">
            {programme.curriculum.map((module, i) => (
              <Reveal key={module.title} delay={i * 0.06} className="mb-9 last:mb-0">
                <li className="pl-8 relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold-gradient ring-4 ring-cream dark:ring-brown-deep" aria-hidden="true" />
                  <p className="font-display font-bold text-gold text-xs uppercase tracking-wider mb-1">Module {i + 1}</p>
                  <h3 className="font-display font-semibold text-lg text-brown dark:text-cream mb-1">{module.title}</h3>
                  <p className="text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed">{module.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-hearth-gradient">
        <div className="max-w-xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-cream mb-4">
              Ready to start {programme.title}?
            </h2>
            <Button
              href={`/join?programme=${encodeURIComponent(programme.title)}`}
              size="lg"
              icon
              className="bg-none bg-cream text-brown-deep shadow-none hover:shadow-glow"
            >
              Apply for This Programme
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
