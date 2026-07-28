import Image from 'next/image';
import { StudentProject } from '@/types';
import Reveal from '@/components/ui/Reveal';

export default function ProjectCard({ project, delay = 0 }: { project: StudentProject; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group rounded-2xl bg-white dark:bg-brown border border-brown/5 dark:border-cream/5 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[3/2] overflow-hidden bg-cream-soft dark:bg-brown-deep">
          <Image
            src={`https://picsum.photos/seed/${project.imageSeed}/600/400`}
            alt={`Screenshot placeholder for ${project.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-2">{project.programme}</p>
          <h3 className="font-display font-semibold text-lg text-brown dark:text-cream mb-2">{project.title}</h3>
          <p className="text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-cream dark:bg-brown-deep text-brown/70 dark:text-cream/70 border border-brown/10 dark:border-cream/10"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}
