import Link from 'next/link';
import { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-content mx-auto px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-display text-sm md:text-base font-semibold tracking-wide uppercase text-navy mb-3">{children}</p>
  );
}

export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'onDark';
  external?: boolean;
}) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold transition-all duration-200';
  const styles =
    variant === 'primary'
      ? `${base} bg-navy text-paper hover:bg-teal`
      : variant === 'onDark'
      ? `${base} border border-paper/40 text-paper hover:bg-paper hover:text-navy`
      : `${base} border border-line text-ink hover:border-navy`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-body text-[11px] tracking-wide uppercase text-muted border border-line rounded-full px-3 py-1">
      {children}
    </span>
  );
}
