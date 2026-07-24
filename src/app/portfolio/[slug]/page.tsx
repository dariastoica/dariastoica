import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import PortfolioDetailClient from './PortfolioDetailClient';
import { getAllSharedPortfolioSlugs, getPortfolioBySlug, PortfolioMeta } from '@/lib/portfolio';
import { locales, Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return getAllSharedPortfolioSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  try {
    const { meta } = getPortfolioBySlug('en', params.slug);
    return { title: meta.title, description: meta.objective };
  } catch {
    return {};
  }
}

export default function PortfolioCasePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const metaByLocale = {} as Record<Locale, PortfolioMeta>;
  const contentByLocale = {} as Record<Locale, React.ReactNode>;

  for (const locale of locales) {
    let meta, content;
    try {
      ({ meta, content } = getPortfolioBySlug(locale, slug));
    } catch {
      notFound();
    }

    metaByLocale[locale] = meta;
    contentByLocale[locale] = <MDXRemote source={content} />;
  }

  return <PortfolioDetailClient metaByLocale={metaByLocale} contentByLocale={contentByLocale} />;
}
