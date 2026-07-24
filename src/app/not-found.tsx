'use client';

import { Container, Button } from '@/components/ui';
import { useDictionary } from '@/lib/i18n/LocaleProvider';

export default function NotFound() {
  const { t } = useDictionary();

  return (
    <Container className="py-32 text-center">
      <p className="font-body text-teal text-sm uppercase tracking-widest mb-4">{t.notFound.eyebrow}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy">
        {t.notFound.headline}
      </h1>
      <p className="text-muted mt-4">{t.notFound.body}</p>
      <div className="mt-8">
        <Button href="/">{t.notFound.button}</Button>
      </div>
    </Container>
  );
}
