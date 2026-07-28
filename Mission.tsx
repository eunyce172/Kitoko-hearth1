import Reveal from '@/components/ui/Reveal';

export default function Mission() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-brown">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">
            Our Mission
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-brown dark:text-cream leading-tight text-balance">
            We believe a teenager with the right mentor and a real problem to
            solve can build something that matters &mdash; not someday, but now.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
