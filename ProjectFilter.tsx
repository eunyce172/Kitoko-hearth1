'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StudentProject } from '@/types';
import ProjectCard from './ProjectCard';

export default function ProjectFilter({ projects }: { projects: StudentProject[] }) {
  const programmeOptions = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.programme)))],
    [projects]
  );
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.programme === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter projects by programme">
        {programmeOptions.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setActive(option)}
              aria-pressed={isActive}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-hearth-gradient text-cream shadow-soft'
                  : 'bg-white dark:bg-brown text-brown/70 dark:text-cream/70 border border-brown/10 dark:border-cream/10 hover:border-gold hover:text-gold'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} delay={i * 0.03} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-charcoal/60 dark:text-cream/60 py-16">
          No projects yet for this programme &mdash; check back soon.
        </p>
      )}
    </div>
  );
}
