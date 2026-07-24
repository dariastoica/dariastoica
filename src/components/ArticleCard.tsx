'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { ArticleMeta } from '@/lib/articles';
import { Tag } from './ui';
import { useDictionary } from '@/lib/i18n/LocaleProvider';
import { dateFnsLocales } from '@/lib/i18n/dateLocale';

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  const { t, locale } = useDictionary();

  return (
    <Link href={`/articles/${article.slug}`} className="group block py-8 border-b border-line">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
        <span className="font-body text-xs uppercase tracking-wide text-teal">{article.category}</span>
        <span className="font-body text-xs text-muted">
          {format(new Date(article.date), 'MMMM d, yyyy', { locale: dateFnsLocales[locale] })} ·{' '}
          {t.readingTime(article.readingMinutes)}
        </span>
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-semibold text-navy group-hover:text-teal transition-colors">
        {article.title}
      </h3>
      <p className="text-muted mt-2 max-w-prose">{article.description}</p>
      <div className="flex gap-2 mt-4">
        {article.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
