'use client';

import { ReactNode } from 'react';
import { Container, Eyebrow, Tag } from '@/components/ui';
import ArticleCard from '@/components/ArticleCard';
import ShareButtons from '@/components/ShareButtons';
import TableOfContents from '@/components/TableOfContents';
import { useDictionary } from '@/lib/i18n/LocaleProvider';
import { Locale } from '@/lib/i18n/config';
import { ArticleMeta } from '@/lib/articles';
import { Heading } from '@/lib/toc';

export default function ArticleDetailClient({
  metaByLocale,
  contentByLocale,
  relatedByLocale,
  headingsByLocale,
  formattedDateByLocale,
}: {
  metaByLocale: Record<Locale, ArticleMeta>;
  contentByLocale: Record<Locale, ReactNode>;
  relatedByLocale: Record<Locale, ArticleMeta[]>;
  headingsByLocale: Record<Locale, Heading[]>;
  formattedDateByLocale: Record<Locale, string>;
}) {
  const { t, locale } = useDictionary();
  const meta = metaByLocale[locale];
  const related = relatedByLocale[locale];
  const headings = headingsByLocale[locale];

  return (
    <Container className="py-20">
      <div className="max-w-prose mx-auto lg:mx-0">
        <Eyebrow>{meta.category}</Eyebrow>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
          {meta.title}
        </h1>
        <p className="text-muted text-lg mt-4">{meta.description}</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 font-body text-xs text-muted uppercase tracking-wide">
          <span>{meta.author}</span>
          <span>·</span>
          <span>{formattedDateByLocale[locale]}</span>
          <span>·</span>
          <span>{t.readingTime(meta.readingMinutes)}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {meta.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_240px] gap-12 mt-16 max-w-content">
        <article className="prose prose-neutral max-w-prose mx-auto lg:mx-0">
          {contentByLocale[locale]}

          {meta.references && meta.references.length > 0 && (
            <div className="mt-16 pt-8 border-t border-line not-prose">
              <h2 className="font-display text-xl font-semibold text-navy mb-4">{t.articleDetail.referencesHeading}</h2>
              <ol className="space-y-2 text-sm text-muted list-decimal list-inside">
                {meta.references.map((ref, i) => (
                  <li key={i}>
                    {ref.url ? (
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline decoration-teal underline-offset-4 hover:text-navy">
                        {ref.label}
                      </a>
                    ) : (
                      ref.label
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-line not-prose">
            <p className="font-body text-xs uppercase tracking-wide text-muted mb-3">{t.articleDetail.shareHeading}</p>
            <ShareButtons title={meta.title} slug={meta.slug} />
          </div>
        </article>

        <aside className="hidden lg:block">
          <TableOfContents headings={headings} />
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-20 pt-12 border-t border-line max-w-content">
          <h2 className="font-display text-2xl font-semibold text-navy mb-6">{t.articleDetail.relatedHeading}</h2>
          <div className="grid md:grid-cols-2 gap-x-8">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
