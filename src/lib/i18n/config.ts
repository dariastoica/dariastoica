export type Locale = 'en' | 'ro' | 'es';

export const locales: Locale[] = ['en', 'ro', 'es'];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ro: 'RO',
  es: 'ES',
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ro: 'Română',
  es: 'Español',
};
