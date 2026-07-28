import Link from 'next/link';
import { Flame, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/projects', label: 'Student Projects' },
  { href: '/team', label: 'Our Team' },
  { href: '/join', label: 'Join Kitoko Hearth' },
  { href: '/contact', label: 'Contact' },
];

const socials = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://x.com', label: 'X (Twitter)', icon: Twitter },
  { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  { href: 'https://facebook.com', label: 'Facebook', icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-brown-deep text-cream/90">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-lg text-cream">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold-gradient">
              <Flame className="w-4.5 h-4.5 text-brown-deep" aria-hidden="true" />
            </span>
            Kitoko Hearth
          </Link>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed max-w-xs">
            Empowering teenagers to discover, design, and build technology solutions through hands-on, project-based learning.
          </p>
          <ul className="flex items-center gap-3 mt-6">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-cream/75 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-4">Contact</h2>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
              <a href="mailto:hello@kitokohearth.org" className="hover:text-gold transition-colors">hello@kitokohearth.org</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
              <a href="tel:+10000000000" className="hover:text-gold transition-colors">+1 (000) 000-0000</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
              <span>123 Innovation Way, Your City</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-4">Stay Updated</h2>
          <p className="text-sm text-cream/70 mb-4">Get programme launches and student stories in your inbox.</p>
          <form className="flex gap-2" aria-label="Newsletter signup">
            <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
            <input
              id="footer-newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 min-w-0 rounded-full bg-cream/10 border border-cream/15 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus-visible:outline-2 focus-visible:outline-gold"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-gold-gradient text-brown-deep font-display font-semibold text-sm px-5 py-2.5 hover:shadow-glow transition-shadow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-cream/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} Kitoko Hearth. All rights reserved.</p>
          <p>Built with purpose, for the next generation of builders.</p>
        </div>
      </div>
    </footer>
  );
}
