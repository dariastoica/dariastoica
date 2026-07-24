export type Dictionary = {
  role: string;
  seo: {
    title: string;
    description: string;
  };
  nav: { label: string; href: string }[];

  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    buttons: {
      portfolio: string;
      articles: string;
      cv: string;
      contact: string;
    };
  };

  home: {
    expertiseEyebrow: string;
    expertiseHeadline: string;
    featuredEyebrow: string;
    featuredHeadline: string;
    viewAll: string;
    educationEyebrow: string;
    educationHeadline: string;
    blogEyebrow: string;
    blogHeadline: string;
    ctaHeadline: string;
    ctaBody: string;
    ctaButton1: string;
    ctaButton2: string;
  };

  about: {
    eyebrow: string;
    headline: string;
    short: string;
    paragraphs: string[];
    values: { title: string; body: string }[];
    educationHeading: string;
    clinicalHeading: string;
    researchHeading: string;
    languagesHeading: string;
    certificatesHeading: string;
  };

  education: { institution: string; degree: string; period: string }[];
  clinicalExperience: { place: string; detail: string; period: string }[];
  research: { title: string; role: string }[];
  languages: { name: string; level: string }[];
  certificates: string[];
  skills: string[];

  services: {
    eyebrow: string;
    headline: string;
    intro: string;
    items: { title: string; body: string }[];
    ctaHeadline: string;
    ctaBody: string;
    ctaButton: string;
  };

  cv: {
    eyebrow: string;
    downloadButton: string;
    fallbackText: string;
    fallbackLink: string;
  };

  contact: {
    eyebrow: string;
    headline: string;
    intro: string;
    directContactHeading: string;
    emailLabel: string;
    linkedinLabel: string;
    linkedinLinkText: string;
    locationLabel: string;
    downloadCvButton: string;
    formNameLabel: string;
    formEmailLabel: string;
    formMessageLabel: string;
    formSubmitButton: string;
  };

  articlesPage: {
    eyebrow: string;
    headline: string;
    intro: string;
    emptyState: string;
  };

  portfolioPage: {
    eyebrow: string;
    headline: string;
    intro: string;
    emptyState: string;
    featuredHeading: string;
    sections: {
      articles: string;
      'case-studies': string;
      'patient-education': string;
      'health-tech-pharma': string;
      'health-content': string;
    };
  };

  articleDetail: {
    referencesHeading: string;
    shareHeading: string;
    relatedHeading: string;
  };

  portfolioDetail: {
    audienceLabel: string;
    objectiveLabel: string;
  };

  shareButtons: {
    linkedin: string;
    twitter: string;
    email: string;
  };

  tableOfContents: {
    heading: string;
  };

  notFound: {
    eyebrow: string;
    headline: string;
    body: string;
    button: string;
  };

  footer: {
    tagline: string;
    rightsReserved: string;
    cv: string;
  };

  menu: {
    open: string;
    close: string;
  };

  readingTime: (minutes: number) => string;
};
