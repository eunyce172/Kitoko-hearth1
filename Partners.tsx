import Reveal from '@/components/ui/Reveal';

// Placeholder partner names until real partner logos/agreements are provided.
const partners = ['Partner Org 1', 'Partner Org 2', 'Partner Org 3', 'Partner Org 4', 'Partner Org 5'];

export default function Partners() {
  return (
    <section className="py-16 bg-cream-soft dark:bg-brown-deep border-y border-brown/5 dark:border-cream/5">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-charcoal/50 dark:text-cream/50 mb-8">
            In partnership with organisations who share our vision
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name) => (
            <span
              key={name}
              className="font-display font-semibold text-lg text-brown/30 dark:text-cream/30 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
