'use client';

import { Heading } from '@/lib/toc';
import { useDictionary } from '@/lib/i18n/LocaleProvider';

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const { t } = useDictionary();
  if (headings.length === 0) return null;

  return (
    <nav aria-label={t.tableOfContents.heading} className="rounded-2xl border border-line p-6 sticky top-24">
      <p className="font-body text-xs uppercase tracking-wide text-muted mb-4">{t.tableOfContents.heading}</p>
      <ul className="space-y-2.5 text-sm">
        {headings.map((h) => (
          <li key={h.slug} className={h.depth === 3 ? 'ml-4' : ''}>
            <a href={`#${h.slug}`} className="text-ink hover:text-teal transition-colors">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
