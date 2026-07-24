import { getAllArticles } from '@/lib/articles';
import { getAllPortfolio } from '@/lib/portfolio';
import { locales } from '@/lib/i18n/config';
import HomeClient from './HomeClient';

export default function HomePage() {
  const articlesByLocale = Object.fromEntries(
    locales.map((l) => [l, getAllArticles(l)])
  ) as Record<(typeof locales)[number], ReturnType<typeof getAllArticles>>;

  const portfolioByLocale = Object.fromEntries(
    locales.map((l) => [l, getAllPortfolio(l)])
  ) as Record<(typeof locales)[number], ReturnType<typeof getAllPortfolio>>;

  return <HomeClient articlesByLocale={articlesByLocale} portfolioByLocale={portfolioByLocale} />;
}
