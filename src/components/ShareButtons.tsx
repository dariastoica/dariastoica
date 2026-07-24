'use client';

import { useDictionary } from '@/lib/i18n/LocaleProvider';

export default function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const { t } = useDictionary();
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { label: t.shareButtons.linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { label: t.shareButtons.twitter, href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}` },
    { label: t.shareButtons.email, href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}` },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-body uppercase tracking-wide border border-line rounded-full px-4 py-2 hover:border-navy transition-colors"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
