import Link from 'next/link';
import { ArrowRight, Code2 } from 'lucide-react';
import { programmes } from '@/lib/data';
import { iconMap } from '@/lib/icon-map';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function Programmes() {
  const featured = programmes.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-cream dark:bg-brown-deep">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl mb-14">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-3">Programmes</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brown dark:text-cream mb-4">
            Seven paths into technology
          </h2>
          <p className="text-charcoal/70 dark:text-cream/70 leading-relaxed">
            Each programme pairs a skill with a mentor and a real project to build &mdash; no lectures without hands on the keyboard.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((programme, i) => {
            const Icon = iconMap[programme.icon] ?? Code2;
            return (
              <Reveal key={programme.slug} delay={i * 0.06}>
                <Link
                  href="/programmes"
                  className="group block h-full p-7 rounded-2xl bg-white dark:bg-brown border border-brown/5 dark:border-cream/5 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-gradient mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-[22px] h-[22px] text-brown-deep" aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-semibold text-lg text-brown dark:text-cream mb-2">
                    {programme.title}
                  </h3>
                  <p className="text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed mb-4">
                    {programme.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/programmes" variant="secondary" icon>View All Programmes</Button>
        </div>
      </div>
    </section>
  );
}
