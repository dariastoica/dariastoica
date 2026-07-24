import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site-config';
import { en } from '@/lib/i18n/dictionaries/en';
import { LocaleProvider } from '@/lib/i18n/LocaleProvider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Note: the language switcher swaps content instantly on the client side
// without changing the URL, so search engines will index this page in
// English (the default). That's a deliberate trade-off for simplicity —
// see the README section on i18n for details.
export const metadata: Metadata = {
  metadataBase: new URL(site.seoUrl),
  title: {
    default: en.seo.title,
    template: `%s — ${site.name}`,
  },
  description: en.seo.description,
  openGraph: {
    title: en.seo.title,
    description: en.seo.description,
    url: site.seoUrl,
    siteName: site.name,
    images: ['/images/daria-portrait.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: en.seo.title,
    description: en.seo.description,
    images: ['/images/daria-portrait.jpg'],
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: `${site.name} — Articles` }],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: en.role,
    email: site.email,
    url: site.seoUrl,
    sameAs: [site.linkedin],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <LocaleProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
