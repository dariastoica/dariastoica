'use client';

import Link from 'next/link';
import { site } from '@/lib/site-config';
import { useDictionary } from '@/lib/i18n/LocaleProvider';
import Logo from './Logo';

export default function Footer() {
  const { t } = useDictionary();

  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-content mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Logo />
          <p className="text-sm text-muted mt-2">{t.role}</p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
          <a href={`mailto:${site.email}`} className="hover:text-navy transition-colors">
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
            LinkedIn
          </a>
          <Link href="/cv" className="hover:text-navy transition-colors">
            {t.footer.cv}
          </Link>
        </div>
      </div>
      <div className="max-w-content mx-auto px-6 md:px-10 pb-8">
        <p className="text-xs text-ink font-medium">
          © {new Date().getFullYear()} {site.name}. {t.footer.rightsReserved}
        </p>
        <p className="text-xs text-muted font-body mt-1">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
