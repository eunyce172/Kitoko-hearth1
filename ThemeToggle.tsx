'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" aria-hidden="true" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-10 h-10 flex items-center justify-center rounded-full border border-brown/15 dark:border-cream/15 hover:border-gold transition-colors duration-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-gold" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5 text-brown" aria-hidden="true" />
      )}
    </button>
  );
}
