import { enUS, ro, es } from 'date-fns/locale';
import { Locale } from './config';

export const dateFnsLocales: Record<Locale, typeof enUS> = { en: enUS, ro, es };
