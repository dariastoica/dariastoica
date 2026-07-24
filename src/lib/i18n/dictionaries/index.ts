import { Locale } from '../config';
import { Dictionary } from '../types';
import { en } from './en';
import { ro } from './ro';
import { es } from './es';

export const dictionaries: Record<Locale, Dictionary> = { en, ro, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
