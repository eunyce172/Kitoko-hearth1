import { stats } from '@/lib/data';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Reveal from '@/components/ui/Reveal';

export default function Stats() {
  return (
    <section className="py-20 bg-hearth-gradient">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <p className="font-display font-extrabold text-4xl md:text-5xl text-cream">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm md:text-base text-cream/75 font-medium">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
