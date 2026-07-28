import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  icon?: boolean;
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  icon = false,
  disabled = false,
}: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-hearth-gradient text-cream shadow-soft hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-transparent text-brown dark:text-cream border-2 border-brown/20 dark:border-cream/20 hover:border-gold hover:text-gold',
    ghost: 'bg-transparent text-brown dark:text-cream hover:text-gold',
  };

  const sizes = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
