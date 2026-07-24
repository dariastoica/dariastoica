'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Locale, defaultLocale, locales } from './config';
import { getDictionary } from './dictionaries';

const STORAGE_KEY = 'daria-portfolio-locale';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // On first load: prefer a saved choice, otherwise guess from the browser language.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && locales.includes(saved)) {
        setLocaleState(saved);
        return;
      }
      const browserLang = window.navigator.language.slice(0, 2).toLowerCase();
      if (locales.includes(browserLang as Locale)) {
        setLocaleState(browserLang as Locale);
      }
    } catch {
      // localStorage unavailable (e.g. privacy mode) — silently keep the default locale.
    }
  }, []);

  // Keep the <html lang="..."> attribute in sync for accessibility & SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write failures
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useDictionary() {
  const { locale, setLocale } = useContext(LocaleContext);
  return { locale, setLocale, t: getDictionary(locale) };
}
