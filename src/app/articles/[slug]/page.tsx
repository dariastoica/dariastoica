import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import ArticleDetailClient from './ArticleDetailClient';
import { getAllSharedArticleSlugs, getArticleBySlug, getRelatedArticles, ArticleMeta } from '@/lib/articles';
import { extractHeadings, Heading } from '@/lib/toc';
import { locales, Locale } from '@/lib/i18n/config';
import { dateFnsLocales } from '@/lib/i18n/dateLocale';

export function generateStaticParams() {
  return getAllSharedArticleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  try {
    const { meta } = getArticleBySlug('en', params.slug);
    return {
      title: meta.title,
      description: meta.description,
      openGraph: { title: meta.title, description: meta.description, type: 'article' },
    };
  } catch {
    return {};
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const metaByLocale = {} as Record<Locale, ArticleMeta>;
  const contentByLocale = {} as Record<Locale, React.ReactNode>;
  const relatedByLocale = {} as Record<Locale, ArticleMeta[]>;
  const headingsByLocale = {} as Record<Locale, Heading[]>;
  const formattedDateByLocale = {} as Record<Locale, string>;

  for (const locale of locales) {
    let meta, content;
    try {
      ({ meta, content } = getArticleBySlug(locale, slug));
    } catch {
      notFound();
    }

    metaByLocale[locale] = meta;
    headingsByLocale[locale] = extractHeadings(content);
    relatedByLocale[locale] = getRelatedArticles(locale, meta);
    formattedDateByLocale[locale] = format(new Date(meta.date), 'MMMM d, yyyy', {
      locale: dateFnsLocales[locale],
    });
    contentByLocale[locale] = (
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
          },
        }}
      />
    );
  }

  return (
    <ArticleDetailClient
      metaByLocale={metaByLocale}
      contentByLocale={contentByLocale}
      relatedByLocale={relatedByLocale}
      headingsByLocale={headingsByLocale}
      formattedDateByLocale={formattedDateByLocale}
    />
  );
}
