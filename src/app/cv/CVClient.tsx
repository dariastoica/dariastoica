'use client';

import { Container, Eyebrow, Button } from '@/components/ui';
import { site } from '@/lib/site-config';
import { useDictionary } from '@/lib/i18n/LocaleProvider';

export default function CVClient() {
  const { t } = useDictionary();

  return (
    <Container className="py-20">
      <Eyebrow>{t.cv.eyebrow}</Eyebrow>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy">
          {site.name}
        </h1>
        <Button href={site.cvFile} external>
          {t.cv.downloadButton}
        </Button>
      </div>

      <div className="mt-10 rounded-2xl border border-line overflow-hidden bg-panel/40" style={{ height: '80vh' }}>
        <object
          data={site.cvFile}
          type="application/pdf"
          width="100%"
          height="100%"
          aria-label={`${site.name} CV`}
        >
          <div className="p-10 text-center text-muted">
            <p>
              {t.cv.fallbackText}{' '}
              <a href={site.cvFile} className="underline decoration-teal underline-offset-4 text-navy">
                {t.cv.fallbackLink}
              </a>
              .
            </p>
          </div>
        </object>
      </div>
    </Container>
  );
}
