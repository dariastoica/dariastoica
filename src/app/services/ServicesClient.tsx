'use client';

import { Container, Eyebrow, Button } from '@/components/ui';
import { useDictionary } from '@/lib/i18n/LocaleProvider';

export default function ServicesClient() {
  const { t } = useDictionary();

  return (
    <Container className="py-20">
      <Eyebrow>{t.services.eyebrow}</Eyebrow>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy max-w-2xl">
        {t.services.headline}
      </h1>
      <p className="text-muted mt-4 max-w-prose">{t.services.intro}</p>

      <div className="grid sm:grid-cols-2 gap-6 mt-14">
        {t.services.items.map((s) => (
          <div key={s.title} className="rounded-2xl border border-line bg-panel/50 p-7">
            <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
            <p className="text-muted text-sm mt-2 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-navy text-paper px-8 md:px-14 py-14 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-semibold">
          {t.services.ctaHeadline}
        </h2>
        <p className="text-paper/80 mt-3 max-w-lg mx-auto">{t.services.ctaBody}</p>
        <div className="mt-7">
          <Button href="/contact" variant="onDark">{t.services.ctaButton}</Button>
        </div>
      </div>
    </Container>
  );
}
