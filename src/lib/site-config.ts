/**
 * SITE CONFIG
 * ------------------------------------------------------------------
 * This file holds the things that DON'T change between languages:
 * your name, contact details, CV/photo file paths, and your site's
 * domain. Everything else (headline, bio, education text, services,
 * etc.) lives in src/lib/i18n/dictionaries/{en,ro,es}.ts — one file
 * per language — so translations stay easy to find and edit.
 * ------------------------------------------------------------------
 */

export const site = {
  name: 'Daria Stoica',
  location: 'Cristian, Brașov, Romania',
  email: 'dstoica26@gmail.com',
  phone: '+40 756 199 546',
  linkedin: 'https://www.linkedin.com/in/daria-stoica-a47779351/',
  cvFile: '/cv/Daria-Stoica-CV.pdf', // place your CV PDF at public/cv/
  photo: '/images/daria-portrait.jpg', // place your portrait at public/images/
  seoUrl: 'https://your-domain.com', // TODO: replace once you connect a domain
};
