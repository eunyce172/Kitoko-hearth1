import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContactForm from '@/components/contact/ContactForm';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact',
  description: 'Get in touch with Kitoko Hearth — email, phone, office location, and social channels.',
};

const socials = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://x.com', label: 'X (Twitter)', icon: Twitter },
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Questions about programmes, partnerships, or volunteering as a mentor — reach out any time."
      />

      <section className="py-16 md:py-20 bg-cream dark:bg-brown-deep">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-brown shadow-soft">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-brown shadow-soft space-y-5">
              <h2 className="font-display font-semibold text-lg text-brown dark:text-cream">Get in touch</h2>
              <a href="mailto:hello@kitokohearth.org" className="flex items-start gap-3 text-sm text-charcoal/75 dark:text-cream/75 hover:text-gold transition-colors">
                <Mail className="w-[18px] h-[18px] mt-0.5 shrink-0" aria-hidden="true" />
                hello@kitokohearth.org
              </a>
              <a href="tel:+10000000000" className="flex items-start gap-3 text-sm text-charcoal/75 dark:text-cream/75 hover:text-gold transition-colors">
                <Phone className="w-[18px] h-[18px] mt-0.5 shrink-0" aria-hidden="true" />
                +1 (000) 000-0000
              </a>
              <div className="flex items-start gap-3 text-sm text-charcoal/75 dark:text-cream/75">
                <MapPin className="w-[18px] h-[18px] mt-0.5 shrink-0" aria-hidden="true" />
                <span>123 Innovation Way, Your City<br />(placeholder — update with real office address)</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-brown/15 dark:border-cream/15 hover:border-gold hover:text-gold transition-colors"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft flex-1 min-h-[240px]">
              <iframe
                title="Kitoko Hearth office location (placeholder)"
                src="https://www.google.com/maps?q=Innovation+Way&output=embed"
                className="w-full h-full min-h-[240px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
