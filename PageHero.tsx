import SparkField from '@/components/ui/Spark';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-cream dark:bg-brown-deep">
      <div className="hearth-glow-bg" aria-hidden="true" />
      <SparkField count={4} className="opacity-50" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brown dark:text-cream leading-tight text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
