'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Clock, BarChart3, Code2 } from 'lucide-react';
import { Programme } from '@/types';
import { iconMap } from '@/lib/icon-map';
import Reveal from '@/components/ui/Reveal';

export default function ProgrammeCard({ programme, delay = 0 }: { programme: Programme; delay?: number }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[programme.icon] ?? Code2;
  const panelId = `programme-panel-${programme.slug}`;

  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl bg-white dark:bg-brown border border-brown/5 dark:border-cream/5 shadow-soft hover:shadow-lift transition-shadow duration-300 overflow-hidden">
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-gradient shrink-0">
              <Icon className="w-[22px] h-[22px] text-brown-deep" aria-hidden="true" />
            </span>
            <div className="flex flex-col items-end gap-1 text-xs text-charcoal/50 dark:text-cream/50 shrink-0">
              <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" aria-hidden="true" />{programme.duration}</span>
              <span className="inline-flex items-center gap-1"><BarChart3 className="w-3.5 h-3.5" aria-hidden="true" />{programme.level}</span>
            </div>
          </div>

          <h2 className="font-display font-semibold text-xl text-brown dark:text-cream mt-5 mb-2">
            {programme.title}
          </h2>
          <p className="text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed">
            {programme.description}
          </p>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
          >
            {open ? 'Hide skills covered' : 'What you\u2019ll learn'}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="flex flex-wrap gap-2 mt-4">
                  {programme.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-cream dark:bg-brown-deep text-brown dark:text-cream border border-brown/10 dark:border-cream/10"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}
