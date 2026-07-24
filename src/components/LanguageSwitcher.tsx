'use client';

import { useLocale } from '@/lib/i18n/LocaleProvider';
import { locales, localeLabels, localeNames } from '@/lib/i18n/config';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 rounded-full border border-line p-1" role="group" aria-label="Language">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          aria-label={localeNames[l]}
          title={localeNames[l]}
          className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide transition-colors ${
            locale === l ? 'bg-navy text-paper' : 'text-muted hover:text-navy'
          }`}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
