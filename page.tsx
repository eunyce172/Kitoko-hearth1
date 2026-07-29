import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import TeamCard from '@/components/team/TeamCard';
import { team } from '@/lib/data';
import { Info } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: '/team' },
  title: 'Meet Our Team',
  description: 'The mentors and staff behind Kitoko Hearth\u2019s technology programmes for teenagers.',
};

export default function TeamPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Meet Our Team" }]} />
      <PageHero
        eyebrow="Meet Our Team"
        title="The people behind the hearth"
        description="Mentors, staff, and volunteers who show up every week to teach, guide, and build alongside our students."
      />

      <section className="pb-4">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-3 text-sm text-charcoal/60 dark:text-cream/60 bg-gold/10 border border-gold/20 rounded-xl px-5 py-4">
            <Info className="w-[18px] h-[18px] text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              The profiles below are clearly labelled placeholders. Real team names, roles, photos, and bios will
              replace them once provided.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream dark:bg-brown-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
