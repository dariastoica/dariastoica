'use client';

import Link from 'next/link';
import { Container, Eyebrow, Tag } from '@/components/ui';
import { useDictionary } from '@/lib/i18n/LocaleProvider';
import { Locale } from '@/lib/i18n/config';
import { hubItemHref, HubItem, PORTFOLIO_SECTIONS, PortfolioHubData } from '@/lib/portfolioHubTypes';

type HubData = PortfolioHubData;

function HubCard({ item, sectionLabel }: { item: HubItem; sectionLabel: string }) {
  return (
    <Link
      href={hubItemHref(item)}
      className="group block rounded-2xl border border-line bg-panel/60 p-8 hover:border-teal transition-colors"
    >
      <span className="font-body text-xs uppercase tracking-wide text-teal">{sectionLabel}</span>
      <h3 className="font-display text-2xl font-semibold text-navy mt-2 group-hover:text-teal transition-colors">
        {item.title}
      </h3>
      <p className="text-muted mt-2 text-sm max-w-prose">{item.description}</p>
    </Link>
  );
}

export default function PortfolioHubClient({
  hubByLocale,
}: {
  hubByLocale: Record<Locale, HubData>;
}) {
  const { t, locale } = useDictionary();
  const { featured, bySection } = hubByLocale[locale];
  const isEmpty = featured.length === 0 && PORTFOLIO_SECTIONS.every((s) => bySection[s].length === 0);

  return (
    <Container className="py-20">
      <Eyebrow>{t.portfolioPage.eyebrow}</Eyebrow>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy max-w-2xl">
        {t.portfolioPage.headline}
      </h1>
      <p className="text-muted mt-4 max-w-prose">{t.portfolioPage.intro}</p>

      {isEmpty && <p className="text-muted mt-10 font-body text-sm">{t.portfolioPage.emptyState}</p>}

      {featured.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-sm uppercase tracking-wide text-teal font-semibold mb-6">
            ⭐ {t.portfolioPage.featuredHeading}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((item) => (
              <HubCard key={`${item.kind}-${item.slug}`} item={item} sectionLabel={t.portfolioPage.sections[item.section as keyof typeof t.portfolioPage.sections] || item.section} />
            ))}
          </div>
        </section>
      )}

      {PORTFOLIO_SECTIONS.map((section) => {
        const items = bySection[section];
        if (items.length === 0) return null;
        const label = t.portfolioPage.sections[section as keyof typeof t.portfolioPage.sections] || section;
        return (
          <section key={section} className="mt-16">
            <h2 className="font-display text-2xl font-semibold text-navy mb-6">{label}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item) => (
                <HubCard key={`${item.kind}-${item.slug}`} item={item} sectionLabel={label} />
              ))}
            </div>
          </section>
        );
      })}
    </Container>
  );
}
