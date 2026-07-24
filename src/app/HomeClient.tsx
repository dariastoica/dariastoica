'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Eyebrow, Button } from '@/components/ui';
import PulseLine from '@/components/PulseLine';
import ArticleCard from '@/components/ArticleCard';
import PortfolioCard from '@/components/PortfolioCard';
import { site } from '@/lib/site-config';
import { useDictionary } from '@/lib/i18n/LocaleProvider';
import { Locale } from '@/lib/i18n/config';
import { ArticleMeta } from '@/lib/articles';
import { PortfolioMeta } from '@/lib/portfolio';

export default function HomeClient({
  articlesByLocale,
  portfolioByLocale,
}: {
  articlesByLocale: Record<Locale, ArticleMeta[]>;
  portfolioByLocale: Record<Locale, PortfolioMeta[]>;
}) {
  const { t, locale } = useDictionary();
  const articles = articlesByLocale[locale].slice(0, 3);
  const portfolio = portfolioByLocale[locale].slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="pt-16 md:pt-24 pb-20">
        <Container>
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
            <div>
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-navy leading-[1.1] tracking-tight">
                {t.hero.headline}
              </h1>
              <p className="text-lg text-muted mt-6 max-w-xl leading-relaxed">
                {t.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4 mt-9">
                <Button href="/portfolio">{t.hero.buttons.portfolio}</Button>
                <Button href="/cv" variant="secondary">{t.hero.buttons.cv}</Button>
                <Button href="/contact" variant="secondary">{t.hero.buttons.contact}</Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-panel border border-line">
                <Image
                  src={site.photo}
                  alt={`Portrait of ${site.name}`}
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <PulseLine />
      </Container>

      {/* AREAS OF EXPERTISE */}
      <section className="py-20">
        <Container>
          <Eyebrow>{t.home.expertiseEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy max-w-2xl">
            {t.home.expertiseHeadline}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {t.skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-line bg-panel/50 p-6 flex items-center justify-center text-center min-h-[120px]"
              >
                <p className="font-display text-lg font-bold text-navy">{skill}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED PORTFOLIO */}
      {portfolio.length > 0 && (
        <section className="py-20 bg-panel/40">
          <Container>
            <div className="flex items-end justify-between mb-10">
              <div>
                <Eyebrow>{t.home.featuredEyebrow}</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy">
                  {t.home.featuredHeadline}
                </h2>
              </div>
              <Link href="/portfolio" className="text-sm text-navy underline decoration-teal underline-offset-4 hidden sm:block">
                {t.home.viewAll}
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolio.map((item) => (
                <PortfolioCard key={item.slug} item={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* EDUCATION */}
      <section className="py-20">
        <Container>
          <Eyebrow>{t.home.educationEyebrow}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy max-w-2xl mb-10">
            {t.home.educationHeadline}
          </h2>
          <div className="space-y-0">
            {t.education.map((ed, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 border-b border-line">
                <span className="font-body text-xs text-muted w-32 shrink-0">{ed.period}</span>
                <div>
                  <p className="font-display font-semibold text-navy">{ed.institution}</p>
                  <p className="text-muted text-sm">{ed.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* LATEST ARTICLES */}
      {articles.length > 0 && (
        <section className="py-20 bg-panel/40">
          <Container>
            <div className="flex items-end justify-between mb-6">
              <div>
                <Eyebrow>{t.home.blogEyebrow}</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy">{t.home.blogHeadline}</h2>
              </div>
              <Link href="/portfolio" className="text-sm text-navy underline decoration-teal underline-offset-4 hidden sm:block">
                {t.home.viewAll}
              </Link>
            </div>
            <div>
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div className="rounded-3xl bg-navy text-paper px-8 md:px-16 py-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              {t.home.ctaHeadline}
            </h2>
            <p className="text-paper/80 mt-4 max-w-xl mx-auto">
              {t.home.ctaBody}
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button href="/contact">{t.home.ctaButton1}</Button>
              <Button href="/cv" variant="onDark">
                {t.home.ctaButton2}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
