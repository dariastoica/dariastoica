'use client';

import { ReactNode } from 'react';
import { Container, Eyebrow, Tag } from '@/components/ui';
import { useDictionary } from '@/lib/i18n/LocaleProvider';
import { Locale } from '@/lib/i18n/config';
import { PortfolioMeta } from '@/lib/portfolio';

export default function PortfolioDetailClient({
  metaByLocale,
  contentByLocale,
}: {
  metaByLocale: Record<Locale, PortfolioMeta>;
  contentByLocale: Record<Locale, ReactNode>;
}) {
  const { t, locale } = useDictionary();
  const meta = metaByLocale[locale];

  return (
    <Container className="py-20">
      <div className="max-w-prose mx-auto">
        <Eyebrow>{meta.category}</Eyebrow>
        <h1 className="font-display text-4xl font-semibold text-navy leading-tight">{meta.title}</h1>

        <div className="grid sm:grid-cols-2 gap-6 mt-8 mb-12 text-sm">
          <div className="rounded-xl border border-line p-5">
            <p className="font-body text-xs uppercase text-muted mb-1">{t.portfolioDetail.audienceLabel}</p>
            <p className="text-ink">{meta.audience}</p>
          </div>
          <div className="rounded-xl border border-line p-5">
            <p className="font-body text-xs uppercase text-muted mb-1">{t.portfolioDetail.objectiveLabel}</p>
            <p className="text-ink">{meta.objective}</p>
          </div>
        </div>

        <article className="prose prose-neutral max-w-none">{contentByLocale[locale]}</article>

        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-line">
          {meta.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </Container>
  );
}
