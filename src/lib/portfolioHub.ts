import { Locale } from './i18n/config';
import { getAllArticles, ArticleMeta } from './articles';
import { getAllPortfolio, PortfolioMeta } from './portfolio';
import { HubItem, PORTFOLIO_SECTIONS, PortfolioSection, PortfolioHubData } from './portfolioHubTypes';

export type { HubItem, PortfolioSection, PortfolioHubData } from './portfolioHubTypes';
export { PORTFOLIO_SECTIONS, hubItemHref } from './portfolioHubTypes';

function articleToHubItem(a: ArticleMeta): HubItem {
  return {
    kind: 'article',
    slug: a.slug,
    title: a.title,
    description: a.description,
    date: a.date,
    section: a.section || 'articles',
    featured: !!a.featured,
  };
}

function portfolioToHubItem(p: PortfolioMeta): HubItem {
  return {
    kind: 'case-study',
    slug: p.slug,
    title: p.title,
    description: p.objective,
    date: '', // portfolio pieces aren't dated; sorting falls back to declaration order
    section: p.section || 'case-studies',
    featured: !!p.featured,
  };
}

/** All portfolio-hub items (articles + case studies) for a locale, grouped by section. */
export function getPortfolioHub(locale: Locale): PortfolioHubData {
  const articleItems = getAllArticles(locale).map(articleToHubItem);
  const portfolioItems = getAllPortfolio(locale).map(portfolioToHubItem);
  const all = [...articleItems, ...portfolioItems];

  const bySection = Object.fromEntries(
    PORTFOLIO_SECTIONS.map((s) => [s, all.filter((item) => item.section === s)])
  ) as Record<PortfolioSection, HubItem[]>;

  const featured = all.filter((item) => item.featured);

  return { featured, bySection };
}
