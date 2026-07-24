'use client';

import { Container, Eyebrow } from '@/components/ui';
import PulseLine from '@/components/PulseLine';
import { useDictionary } from '@/lib/i18n/LocaleProvider';

export default function AboutClient() {
  const { t } = useDictionary();

  return (
    <Container className="py-20">
      <Eyebrow>{t.about.eyebrow}</Eyebrow>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy max-w-2xl leading-tight">
        {t.about.headline}
      </h1>
      <p className="text-lg text-muted mt-6 max-w-prose leading-relaxed">{t.about.short}</p>

      <div className="mt-14 max-w-prose space-y-6">
        {t.about.paragraphs.map((p, i) => (
          <p key={i} className="text-ink leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="my-16">
        <PulseLine />
      </div>

      {/* VALUES */}
      <div className="grid sm:grid-cols-2 gap-6">
        {t.about.values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-line bg-panel/50 p-6">
            <h3 className="font-display font-semibold text-navy">{v.title}</h3>
            <p className="text-muted text-sm mt-2">{v.body}</p>
          </div>
        ))}
      </div>

      {/* TIMELINE - EDUCATION */}
      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold text-navy mb-8">{t.about.educationHeading}</h2>
        <div>
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
      </section>

      {/* CLINICAL EXPERIENCE */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-navy mb-8">{t.about.clinicalHeading}</h2>
        <div>
          {t.clinicalExperience.map((exp, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 border-b border-line">
              <span className="font-body text-xs text-muted w-32 shrink-0">{exp.period}</span>
              <div>
                <p className="font-display font-semibold text-navy">{exp.place}</p>
                <p className="text-muted text-sm">{exp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-navy mb-8">{t.about.researchHeading}</h2>
        <div>
          {t.research.map((r, i) => (
            <div key={i} className="py-5 border-b border-line">
              <p className="font-display font-semibold text-navy">{r.title}</p>
              <p className="text-muted text-sm mt-1">{r.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGES + CERTS */}
      <div className="grid sm:grid-cols-2 gap-10 mt-16">
        <section>
          <h2 className="font-display text-2xl font-semibold text-navy mb-6">{t.about.languagesHeading}</h2>
          <ul className="space-y-3">
            {t.languages.map((l) => (
              <li key={l.name} className="flex justify-between border-b border-line pb-3">
                <span className="text-ink">{l.name}</span>
                <span className="font-body text-xs text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl font-semibold text-navy mb-6">{t.about.certificatesHeading}</h2>
          <ul className="space-y-3">
            {t.certificates.map((c) => (
              <li key={c} className="border-b border-line pb-3 text-ink text-sm">
                {c}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}
