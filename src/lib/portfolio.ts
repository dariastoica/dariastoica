import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Locale } from './i18n/config';

const PORTFOLIO_ROOT = path.join(process.cwd(), 'src/content/portfolio');

export type PortfolioFrontmatter = {
  title: string;
  category: string;
  audience: string;
  objective: string;
  skills: string[];
  section?: string; // portfolio hub grouping, e.g. 'case-studies', 'patient-education'
  featured?: boolean;
  coverImage?: string;
};

export type PortfolioMeta = PortfolioFrontmatter & { slug: string };

function dirFor(locale: Locale) {
  return path.join(PORTFOLIO_ROOT, locale);
}

export function getAllPortfolioSlugs(locale: Locale): string[] {
  const dir = dirFor(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPortfolioBySlug(locale: Locale, slug: string): { meta: PortfolioMeta; content: string } {
  const fullPath = path.join(dirFor(locale), `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);

  return {
    meta: { ...(data as PortfolioFrontmatter), slug },
    content,
  };
}

export function getAllPortfolio(locale: Locale): PortfolioMeta[] {
  return getAllPortfolioSlugs(locale).map((slug) => getPortfolioBySlug(locale, slug).meta);
}

// A slug is only considered a valid page if it exists in every language,
// so switching languages on a case-study page never lands on a 404.
export function getAllSharedPortfolioSlugs(): string[] {
  const [en, ro, es] = (['en', 'ro', 'es'] as Locale[]).map(getAllPortfolioSlugs);
  return en.filter((slug) => ro.includes(slug) && es.includes(slug));
}
