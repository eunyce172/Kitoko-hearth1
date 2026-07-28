'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';
import SparkField from '@/components/ui/Spark';
import { Flame } from 'lucide-react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 overflow-hidden bg-cream dark:bg-brown-deep">
      <div className="hearth-glow-bg" aria-hidden="true" />
      <SparkField count={8} className="opacity-70" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass shadow-soft text-xs font-semibold uppercase tracking-wider text-brown dark:text-gold mb-8"
        >
          <Flame className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
          Project-based tech education for teens
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-brown dark:text-cream text-balance"
        >
          Every great builder
          <br />
          starts with <span className="text-gradient-gold">one spark.</span>
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto leading-relaxed"
        >
          Kitoko Hearth gives teenagers the mentors, tools, and real projects
          they need to turn curiosity about technology into things they've
          actually built.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/join" size="lg" icon>Join a Programme</Button>
          <Button href="/programmes" size="lg" variant="secondary">Explore Programmes</Button>
        </motion.div>
      </div>
    </section>
  );
}
