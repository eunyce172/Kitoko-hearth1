import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProgrammeCard from '@/components/programmes/ProgrammeCard';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import { programmes } from '@/lib/data';

export const metadata: Metadata = {
  alternates: { canonical: '/programmes' },
  title: 'Programmes',
  description: 'Seven hands-on technology programmes for teenagers: Web Development, Mobile App Development, UI/UX Design, Robotics, AI & Machine Learning, Digital Entrepreneurship, and Leadership Development.',
};

export default function ProgrammesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Programmes" }]} />
      <PageHero
        eyebrow="Programmes"
        title="Seven paths into technology"
        description="Each programme pairs a skill with a mentor and a real project — pick where your curiosity already points, or start broad."
      />

      <section className="py-16 md:py-20 bg-cream dark:bg-brown-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((programme, i) => (
              <ProgrammeCard key={programme.slug} programme={programme} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-hearth-gradient">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-cream mb-4">
              Not sure which programme fits?
            </h2>
            <p className="text-cream/75 mb-8">
              Tell us a little about yourself when you apply, and we&rsquo;ll help you find the right starting point.
            </p>
            <Button href="/join" variant="primary" size="lg" icon className="bg-none bg-cream text-brown-deep shadow-none hover:shadow-glow">
              Apply Now
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
