import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ProjectFilter from '@/components/projects/ProjectFilter';
import { studentProjects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Student Projects',
  description: 'A showcase of real projects built by Kitoko Hearth students across web, mobile, robotics, AI, and design programmes.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Student Projects"
        title="Built by teenagers, not toy examples"
        description="Every project below started as a student's idea and shipped as something real. Filter by programme to explore."
      />

      <section className="py-16 md:py-20 bg-cream dark:bg-brown-deep">
        <div className="max-w-6xl mx-auto px-6">
          <ProjectFilter projects={studentProjects} />
        </div>
      </section>
    </>
  );
}
