import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Locale } from './i18n/config';

const ARTICLES_ROOT = path.join(process.cwd(), 'src/content/articles');

export type ArticleFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO string, e.g. '2026-06-01'
  category: string;
  tags: string[];
  author: string;
  section?: string; // portfolio hub grouping, e.g. 'articles'
  featured?: boolean;
  coverImage?: string;
  references?: { label: string; url?: string }[];
};

export type ArticleMeta = ArticleFrontmatter & {
  slug: string;
  readingMinutes: number;
};

function dirFor(locale: Locale) {
  return path.join(ARTICLES_ROOT, locale);
}

export function getAllArticleSlugs(locale: Locale): string[] {
  const dir = dirFor(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getArticleBySlug(locale: Locale, slug: string): { meta: ArticleMeta; content: string } {
  const fullPath = path.join(dirFor(locale), `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    meta: {
      ...(data as ArticleFrontmatter),
      slug,
      readingMinutes: stats.minutes,
    },
    content,
  };
}

export function getAllArticles(locale: Locale): ArticleMeta[] {
  return getAllArticleSlugs(locale)
    .map((slug) => getArticleBySlug(locale, slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRelatedArticles(locale: Locale, current: ArticleMeta, limit = 2): ArticleMeta[] {
  return getAllArticles(locale)
    .filter((a) => a.slug !== current.slug)
    .filter((a) => a.category === current.category || a.tags.some((t) => current.tags.includes(t)))
    .slice(0, limit);
}

// A slug is only considered a valid page if it exists in every language,
// so switching languages on an article page never lands on a 404.
export function getAllSharedArticleSlugs(): string[] {
  const [en, ro, es] = (['en', 'ro', 'es'] as Locale[]).map(getAllArticleSlugs);
  return en.filter((slug) => ro.includes(slug) && es.includes(slug));
}
