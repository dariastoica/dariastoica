export type HubItem =
  | { kind: 'article'; slug: string; title: string; description: string; date: string; section: string; featured: boolean }
  | { kind: 'case-study'; slug: string; title: string; description: string; date: string; section: string; featured: boolean };

export const PORTFOLIO_SECTIONS = [
  'articles',
  'case-studies',
  'patient-education',
  'health-tech-pharma',
  'health-content',
] as const;

export type PortfolioSection = (typeof PORTFOLIO_SECTIONS)[number];

export type PortfolioHubData = {
  featured: HubItem[];
  bySection: Record<PortfolioSection, HubItem[]>;
};

export function hubItemHref(item: HubItem): string {
  return item.kind === 'article' ? `/articles/${item.slug}` : `/portfolio/${item.slug}`;
}
