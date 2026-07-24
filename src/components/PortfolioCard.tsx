'use client';

import Link from 'next/link';
import { PortfolioMeta } from '@/lib/portfolio';
import { Tag } from './ui';
import { useDictionary } from '@/lib/i18n/LocaleProvider';

export default function PortfolioCard({ item }: { item: PortfolioMeta }) {
  const { t } = useDictionary();

  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block rounded-2xl border border-line bg-panel/60 p-8 hover:border-teal transition-colors"
    >
      <span className="font-body text-xs uppercase tracking-wide text-teal">{item.category}</span>
      <h3 className="font-display text-2xl font-semibold text-navy mt-2 group-hover:text-teal transition-colors">
        {item.title}
      </h3>
      <p className="text-muted mt-2 text-sm">
        <span className="text-ink font-medium">{t.portfolioDetail.audienceLabel}:</span> {item.audience}
      </p>
      <p className="text-muted mt-1 text-sm">
        <span className="text-ink font-medium">{t.portfolioDetail.objectiveLabel}:</span> {item.objective}
      </p>
      <div className="flex flex-wrap gap-2 mt-5">
        {item.skills.slice(0, 4).map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </Link>
  );
}
