'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/about', label: 'About' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/projects', label: 'Student Projects' },
  { href: '/team', label: 'Our Team' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-soft py-3' : 'bg-transparent py-5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-lg text-brown dark:text-cream">
          <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-hearth-gradient">
            <Flame className="w-4.5 h-4.5 text-cream" aria-hidden="true" />
          </span>
          Kitoko Hearth
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gold',
                  pathname === link.href ? 'text-gold' : 'text-brown dark:text-cream'
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button href="/join" size="md">Join Kitoko Hearth</Button>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-brown/15 dark:border-cream/15"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden glass border-t border-brown/10 dark:border-cream/10"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block py-3 text-base font-medium',
                      pathname === link.href ? 'text-gold' : 'text-brown dark:text-cream'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button href="/join" className="w-full">Join Kitoko Hearth</Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
