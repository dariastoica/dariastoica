'use client';

import { Container, Eyebrow, Button } from '@/components/ui';
import { site } from '@/lib/site-config';
import { useDictionary } from '@/lib/i18n/LocaleProvider';

export default function ContactClient() {
  const { t } = useDictionary();

  return (
    <Container className="py-20">
      <Eyebrow>{t.contact.eyebrow}</Eyebrow>
      <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy max-w-xl">
        {t.contact.headline}
      </h1>
      <p className="text-muted mt-4 max-w-prose">{t.contact.intro}</p>

      <div className="grid md:grid-cols-2 gap-14 mt-14">
        <div>
          <h2 className="font-display text-xl font-semibold text-navy mb-4">{t.contact.directContactHeading}</h2>
          <ul className="space-y-4 text-ink">
            <li>
              <span className="font-body text-xs uppercase text-muted block mb-1">{t.contact.emailLabel}</span>
              <a href={`mailto:${site.email}`} className="underline decoration-teal underline-offset-4">
                {site.email}
              </a>
            </li>
            <li>
              <span className="font-body text-xs uppercase text-muted block mb-1">{t.contact.linkedinLabel}</span>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="underline decoration-teal underline-offset-4">
                {t.contact.linkedinLinkText}
              </a>
            </li>
            <li>
              <span className="font-body text-xs uppercase text-muted block mb-1">{t.contact.locationLabel}</span>
              {site.location}
            </li>
          </ul>
          <div className="mt-8">
            <Button href="/cv">{t.contact.downloadCvButton}</Button>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mkodrzvg"
          method="POST"
          className="flex flex-col gap-5"
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium text-ink block mb-2">
              {t.contact.formNameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-teal outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-ink block mb-2">
              {t.contact.formEmailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-teal outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink block mb-2">
              {t.contact.formMessageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink focus:border-teal outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold bg-navy text-paper hover:bg-teal transition-colors w-fit"
          >
            {t.contact.formSubmitButton}
          </button>
        </form>
      </div>
    </Container>
  );
}
