import { site } from '@/lib/site-config';
import { getAllArticles } from '@/lib/articles';
import { en } from '@/lib/i18n/dictionaries/en';

export const dynamic = 'force-static';

// The RSS feed is always in English (the site's default language),
// regardless of which language a visitor has selected on the site itself.
export async function GET() {
  const articles = getAllArticles('en');
  const base = site.seoUrl;

  const items = articles
    .map(
      (a) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <description><![CDATA[${a.description}]]></description>
      <link>${base}/articles/${a.slug}</link>
      <guid>${base}/articles/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${site.name} — Articles</title>
    <link>${base}</link>
    <description>${en.seo.description}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
