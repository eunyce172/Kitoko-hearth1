import { Linkedin, Twitter, Mail } from 'lucide-react';
import { TeamMember } from '@/types';
import Reveal from '@/components/ui/Reveal';

export default function TeamCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  const socials = [
    { href: member.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: member.x, label: 'X (Twitter)', icon: Twitter },
    { href: member.email ? `mailto:${member.email}` : undefined, label: 'Email', icon: Mail },
  ];

  return (
    <Reveal delay={delay}>
      <div className="text-center p-7 rounded-2xl bg-white dark:bg-brown shadow-soft hover:shadow-lift transition-shadow duration-300 h-full flex flex-col items-center">
        <img
          src={`https://api.dicebear.com/9.x/personas/svg?seed=${member.avatarSeed}&backgroundColor=f8f5f0,f2e3b4`}
          alt=""
          width={96}
          height={96}
          loading="lazy"
          className="w-24 h-24 rounded-full ring-4 ring-gold/20 object-cover mb-5"
        />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gold/80 bg-gold/10 px-2.5 py-1 rounded-full mb-3">
          Placeholder profile
        </span>
        <h3 className="font-display font-semibold text-lg text-brown dark:text-cream">{member.name}</h3>
        <p className="text-sm text-gold font-medium mb-3">{member.role}</p>
        <p className="text-sm text-charcoal/65 dark:text-cream/65 leading-relaxed mb-5">{member.bio}</p>

        <div className="flex items-center gap-2 mt-auto">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href ?? '#'}
              aria-disabled={!href}
              aria-label={href ? `${member.name} on ${label}` : `${label} not yet available`}
              tabIndex={href ? 0 : -1}
              target={href ? '_blank' : undefined}
              rel={href ? 'noopener noreferrer' : undefined}
              className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors ${
                href
                  ? 'border-brown/15 dark:border-cream/15 hover:border-gold hover:text-gold'
                  : 'border-brown/5 dark:border-cream/5 text-charcoal/25 dark:text-cream/25 cursor-not-allowed'
              }`}
            >
              <Icon className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
