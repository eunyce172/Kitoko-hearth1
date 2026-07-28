import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import { coreValues, storyMilestones } from '@/lib/data';
import { iconMap } from '@/lib/icon-map';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The story, vision, mission, and values behind Kitoko Hearth — why we exist and who we serve.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Kitoko Hearth"
        title="A hearth is where things are built, together."
        description="We exist because too many teenagers with real technical curiosity never get a real project to point it at."
      />

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-white dark:bg-brown">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="p-8 rounded-2xl bg-cream dark:bg-brown-deep shadow-soft h-full">
              <h2 className="font-display font-bold text-2xl text-brown dark:text-cream mb-3">Our Vision</h2>
              <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
                A generation of young people who see themselves as builders of technology, not just users of it —
                equipped, mentored, and given the room to create.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="p-8 rounded-2xl bg-cream dark:bg-brown-deep shadow-soft h-full">
              <h2 className="font-display font-bold text-2xl text-brown dark:text-cream mb-3">Our Mission</h2>
              <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
                To give teenagers hands-on, project-based technology education — led by real mentors, measured by
                things actually shipped, not just lessons completed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why we exist */}
      <section className="py-20 md:py-28 bg-cream dark:bg-brown-deep">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Sparkles className="w-8 h-8 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brown dark:text-cream mb-5 text-balance">
              Why Kitoko Hearth exists
            </h2>
            <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed text-lg">
              Most teenagers who are curious about technology hit the same wall: tutorials with no mentor, ambition
              with no project, and talent with no path. Kitoko Hearth closes that gap — pairing every teen with a
              mentor and a real problem worth solving, so curiosity becomes a portfolio, not just a phase.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story timeline - sequential, so numbered/ordered markers are appropriate here */}
      <section className="py-20 md:py-28 bg-white dark:bg-brown">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-3">Our Story</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brown dark:text-cream">
              How the hearth was built
            </h2>
          </Reveal>

          <ol className="relative border-l-2 border-gold/30 ml-3">
            {storyMilestones.map((milestone, i) => (
              <Reveal key={milestone.year} delay={i * 0.06} className="mb-10 last:mb-0">
                <li className="pl-8 relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold-gradient ring-4 ring-white dark:ring-brown" aria-hidden="true" />
                  <p className="font-display font-bold text-gold text-sm mb-1">{milestone.year}</p>
                  <h3 className="font-display font-semibold text-lg text-brown dark:text-cream mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed">
                    {milestone.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 md:py-28 bg-cream dark:bg-brown-deep">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-3">Core Values</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brown dark:text-cream">
              What guides how we teach
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => {
              const Icon = iconMap[value.icon] ?? Sparkles;
              return (
                <Reveal key={value.title} delay={i * 0.06}>
                  <div className="p-7 rounded-2xl bg-white dark:bg-brown shadow-soft h-full">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gold-gradient mb-4">
                      <Icon className="w-5 h-5 text-brown-deep" aria-hidden="true" />
                    </span>
                    <h3 className="font-display font-semibold text-lg text-brown dark:text-cream mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
