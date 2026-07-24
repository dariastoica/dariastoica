import { MetadataRoute } from 'next';
import { site } from '@/lib/site-config';
import { getAllSharedArticleSlugs } from '@/lib/articles';
import { getAllSharedPortfolioSlugs } from '@/lib/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.seoUrl;

  const staticRoutes = ['', '/about', '/portfolio', '/services', '/cv', '/contact'].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const articleRoutes = getAllSharedArticleSlugs().map((slug) => ({
    url: `${base}/articles/${slug}`,
    lastModified: new Date(),
  }));

  const portfolioRoutes = getAllSharedPortfolioSlugs().map((slug) => ({
    url: `${base}/portfolio/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...articleRoutes, ...portfolioRoutes];
}
