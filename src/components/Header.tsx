'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDictionary } from '@/lib/i18n/LocaleProvider';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useDictionary();

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="Daria Stoica — home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {t.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-bold transition-colors ${
                  active ? 'text-navy' : 'text-muted hover:text-navy'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block shrink-0">
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? t.menu.close : t.menu.open}
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-[1.5px] bg-ink transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[1.5px] bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[1.5px] bg-ink transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4">
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-bold text-ink"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
