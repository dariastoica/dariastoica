import type { Metadata } from 'next';
import { getPortfolioHub } from '@/lib/portfolioHub';
import { locales } from '@/lib/i18n/config';
import PortfolioHubClient from './PortfolioHubClient';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Writing samples and case studies in medical and health communication.',
};

export default function PortfolioPage() {
  const hubByLocale = Object.fromEntries(
    locales.map((l) => [l, getPortfolioHub(l)])
  ) as Record<(typeof locales)[number], ReturnType<typeof getPortfolioHub>>;

  return <PortfolioHubClient hubByLocale={hubByLocale} />;
}
