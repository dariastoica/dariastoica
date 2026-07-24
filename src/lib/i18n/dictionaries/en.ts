import { Dictionary } from '../types';

export const en: Dictionary = {
  role: 'Medical Writer & Healthcare Communicator',
  seo: {
    title: 'Daria Stoica — Medical Writer & Healthcare Communicator',
    description:
      'Medical graduate transitioning into medical writing. Evidence-based, patient-centered health content, clinical writing, and healthcare communications.',
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'CV', href: '/cv' },
    { label: 'Contact', href: '/contact' },
  ],

  hero: {
    eyebrow: 'Medical Graduate → Medical Writer',
    headline: 'Evidence-based medical content that people actually understand.',
    subheadline:
      'I translate complex clinical science into writing that patients, clinicians, and readers can trust — grounded in six years of medical training and hands-on clinical experience across three countries.',
    buttons: {
      portfolio: 'View Portfolio',
      articles: 'Read Articles',
      cv: 'Download CV',
      contact: 'Contact Me',
    },
  },

  home: {
    expertiseEyebrow: 'Areas of expertise',
    expertiseHeadline: 'Where clinical training meets clear writing',
    featuredEyebrow: 'Featured writing',
    featuredHeadline: 'Selected samples',
    viewAll: 'View all →',
    educationEyebrow: 'Education',
    educationHeadline: 'Six years of medical training, three countries',
    blogEyebrow: 'From the blog',
    blogHeadline: 'Latest articles',
    ctaHeadline: 'Looking for a medical writer who understands both the science and the reader?',
    ctaBody: "I'd welcome the chance to talk about how I can contribute to your team.",
    ctaButton1: 'Get in touch',
    ctaButton2: 'View CV',
  },

  about: {
    eyebrow: 'About',
    headline: 'From the bedside to the page',
    short:
      'Medical graduate (MD) transitioning into medical writing and AI-assisted health content, after six years of clinical training across multiple specialties. I combine clinical accuracy with clear, patient-friendly writing, and hands-on experience using AI tools to draft faster while rigorously fact-checking every claim. Empathetic, detail-oriented, and equally comfortable working independently or within a team, in Romanian, English, and Spanish.',
    paragraphs: [
      'I completed my medical degree at "Grigore T. Popa" University of Medicine and Pharmacy in Iași, with an Erasmus year in General Medicine at the University of Salamanca, Spain. Across six years of clinical rotations — including internal medicine, cardiology, neurology, neurosurgery, pneumology, nephrology, dermatology, obstetrics and neonatology, pediatrics, gastroenterology, urology, and emergency medicine, among others — I learned to read primary literature critically, communicate uncertainty honestly, and explain diagnoses and treatment plans to worried patients in language they could actually act on.',
      'Somewhere in that process, the part of the work I found myself gravitating toward was never just the diagnosis — it was the explanation. Making a discharge conversation land. Making a nervous patient understand their own lab results. Presenting a clinical case clearly enough that a room of physicians could follow the reasoning in real time, which I did at Congressis, where my case presentation on breast cancer during pregnancy scored 96.33/100.',
      'That instinct — for clarity, accuracy, and empathy over jargon — is what I now want to bring to medical writing and healthcare communications: patient education materials, clinical content, and health literacy work where getting it both right and readable is the entire job.',
      "This website itself is part of that practice: I built and maintain it in close collaboration with AI tools, applying the same discipline I bring to clinical content — checking every claim, catching mistranslations, and holding each piece of writing to a standard I'd stand behind. It's given me hands-on experience with exactly the kind of human-AI collaboration healthcare and health-tech teams increasingly rely on, and with the quality control that makes AI-assisted content trustworthy rather than just fast.",
    ],
    values: [
      {
        title: 'Evidence-based, always',
        body: "Six years of clinical training means I don't write claims I can't trace back to a source.",
      },
      {
        title: 'Clarity over jargon',
        body: "I've explained diagnoses to frightened patients in waiting rooms — that's the same skill as writing patient education content.",
      },
      {
        title: 'Cross-cultural fluency',
        body: 'Clinical training in Romania and Spain, volunteer work in Tanzania, and international summits have shaped how I communicate across audiences.',
      },
      {
        title: 'Continuous learner',
        body: 'Self-taught in new tools and subjects by habit — from SQL certification to piloting new clinical rotations abroad.',
      },
    ],
    educationHeading: 'Education',
    clinicalHeading: 'Clinical Experience',
    researchHeading: 'Research & Presentations',
    languagesHeading: 'Languages',
    certificatesHeading: 'Certificates',
  },

  education: [
    {
      institution: '"Grigore T. Popa" University of Medicine and Pharmacy, Iași',
      degree: 'Medical Graduate (MD)',
      period: '2020 – 2026',
    },
    {
      institution: 'University of Salamanca, Spain — Faculty of Medicine',
      degree: 'General Medicine (Erasmus Exchange Programme)',
      period: '2024 – 2025',
    },
    {
      institution: 'National College "Vasile Alecsandri", Galați',
      degree: 'Mathematics–Informatics profile, intensive Informatics',
      period: '2016 – 2020',
    },
  ],

  clinicalExperience: [
    { place: 'Salamanca University Hospital, Spain', detail: 'Neurology (summer internship)', period: '2025' },
    { place: 'Salamanca University Hospital, Spain', detail: 'Pneumology, Nephrology, Neurology, Neurosurgery', period: '2025' },
    { place: 'Emergency Military Hospital, Iași', detail: 'Internal Medicine, Cardiology', period: '2023 – 2024' },
    { place: 'Elias Emergency University Hospital, Bucharest', detail: 'Dermatology', period: '2023' },
    { place: 'Cuza Vodă Clinical Hospital, Iași', detail: 'Neonatology', period: '2022' },
    { place: 'Sf. Spiridon Emergency County Hospital, Iași', detail: 'Gastroenterology; Emergency Medicine', period: '2020 – 2022' },
    { place: 'Emergency Hospital for Children "Sfântul Ioan", Galați', detail: 'Pediatrics', period: '2021 – 2022' },
    { place: 'Uzima Mwandege Medical Clinic, Dar Es Salaam, Tanzania', detail: 'Laboratory work', period: '2022' },
    { place: 'Doctor C.I. Parhon Clinical Hospital, Iași', detail: 'Urology', period: '2021' },
  ],

  research: [
    {
      title: 'Modern Therapeutic Perspectives in the Care of Patients with Major Depression',
      role: "Author — Bachelor's Thesis",
    },
    {
      title: 'Who should be saved? A case of breast cancer during pregnancy',
      role: 'Author — Congressis, 19th edition (Abstract book & Clinical Case Presentation, 96.33/100)',
    },
    {
      title: 'Defeating obesity — Is Bariatric Surgery enough?',
      role: 'Co-author — Congressis, 19th edition (Abstract book)',
    },
    {
      title: 'Male breast cancer, evolution in an advanced stage of disease',
      role: 'Co-author — Congressis, 19th edition (Abstract book)',
    },
    {
      title: 'Optimizing Health Span: Living Well at Every Age',
      role: 'Participant — Stanford Challenge, Longevity Design (2023)',
    },
  ],

  languages: [
    { name: 'Romanian', level: 'Native (C2)' },
    { name: 'English', level: 'C1–C2' },
    { name: 'Spanish', level: 'B1' },
  ],

  certificates: [
    'Medical Degree Diploma — "Grigore T. Popa" University of Medicine and Pharmacy, Iași',
    'Oracle Academy — Database Design and Programming with SQL (2020)',
    'Cambridge English Certificate (B2, 2016)',
    'Spanish Language Certificate (B1)',
  ],

  skills: [
    'Medical & scientific writing',
    'Patient education content',
    'Clinical case presentation',
    'Evidence appraisal & sourcing',
    'Health literacy communication',
    'Cross-cultural communication (RO/EN/ES)',
    'Research & fact-checking',
    'AI-assisted content development with clinical quality control',
    'Attention to detail',
  ],

  services: {
    eyebrow: 'Services',
    headline: 'How I can help your team or your clients',
    intro:
      "While my primary goal is a full-time role in medical writing or healthcare communications, I'm also available for freelance and project-based work.",
    items: [
      {
        title: 'Medical & Health Articles',
        body: 'Well-researched, cited articles on clinical and health topics, written for clarity without losing accuracy.',
      },
      {
        title: 'Patient Education Materials',
        body: 'Discharge instructions, condition explainers, and treatment guides that patients can actually understand and act on.',
      },
      {
        title: 'Medical Copywriting',
        body: 'Website copy, service pages, and brochures for clinics, health-tech products, and medical communications agencies.',
      },
      {
        title: 'Medical Editing & Fact-Checking',
        body: 'Reviewing existing health content for clinical accuracy, clarity, and appropriate sourcing.',
      },
      {
        title: 'Healthcare Newsletters',
        body: 'Recurring, evidence-based content for clinics, health-tech teams, or patient communities.',
      },
      {
        title: 'Educational Brochures',
        body: 'Condition- or procedure-specific materials designed for health literacy, not just information density.',
      },
      {
        title: 'AI-Assisted Medical Content Development',
        body: 'Drafting health content faster with AI tools, then rewriting and fact-checking every claim against primary sources — speed without sacrificing clinical accuracy.',
      },
      {
        title: 'AI Content Quality Control',
        body: 'Reviewing AI-generated medical or health content for clinical errors, outdated claims, and confidently-wrong statements before it reaches patients or the public.',
      },
      {
        title: 'Medical Prompt Engineering',
        body: 'Designing prompts and content workflows that get AI tools to produce clinically sound first drafts, so human review time goes further.',
      },
      {
        title: 'Human-AI Workflow Consulting for Health Teams',
        body: "Helping clinics, health-tech teams, and content teams build a review process for AI-assisted content — where AI accelerates drafting, and a trained eye guards accuracy.",
      },
    ],
    ctaHeadline: 'Have a project in mind?',
    ctaBody: "Tell me about it and I'll get back to you as soon as possible.",
    ctaButton: 'Start a conversation',
  },

  cv: {
    eyebrow: 'Curriculum Vitae',
    downloadButton: 'Download PDF',
    fallbackText: "Your PDF viewer couldn't preview the file inline.",
    fallbackLink: 'Download the CV directly',
  },

  contact: {
    eyebrow: 'Contact',
    headline: "Let's get in touch!",
    intro:
      'Send me an email or leave a message in the form below.',
    directContactHeading: 'Direct contact',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    linkedinLinkText: 'View profile',
    locationLabel: 'Location',
    downloadCvButton: 'Download CV',
    formNameLabel: 'Name',
    formEmailLabel: 'Email',
    formMessageLabel: 'Message',
    formSubmitButton: 'Send message',
  },

  articlesPage: {
    eyebrow: 'Articles',
    headline: 'Writing on medicine & health communication',
    intro:
      'Long-form pieces on evidence-based medicine, patient education, and the craft of communicating clinical science clearly.',
    emptyState: 'No articles yet — add an .mdx file to src/content/articles/en/ to publish your first one.',
  },

  portfolioPage: {
    eyebrow: 'Portfolio',
    headline: 'Writing samples & case studies',
    intro:
      'A selection of writing pieces demonstrating how I approach medical and health content — from clinical case communication to patient-facing education.',
    emptyState: 'No case studies yet — add an .mdx file to src/content/portfolio/en/ to get started.',
    featuredHeading: 'Featured',
    sections: {
      articles: 'Articles',
      'case-studies': 'Case Studies',
      'patient-education': 'Patient Education',
      'health-tech-pharma': 'Health-Tech & Pharma',
      'health-content': 'Health Content & Newsletters',
    },
  },

  articleDetail: {
    referencesHeading: 'References',
    shareHeading: 'Share this article',
    relatedHeading: 'Related articles',
  },

  portfolioDetail: {
    audienceLabel: 'Audience',
    objectiveLabel: 'Objective',
  },

  shareButtons: {
    linkedin: 'LinkedIn',
    twitter: 'X / Twitter',
    email: 'Email',
  },

  tableOfContents: {
    heading: 'On this page',
  },

  notFound: {
    eyebrow: '404',
    headline: "This page doesn't exist — yet.",
    body: 'The page you\u2019re looking for may have moved, or the link may be outdated.',
    button: 'Back to home',
  },

  footer: {
    tagline: 'Built with care, evidence, and Next.js.',
    rightsReserved: 'All rights reserved. Reproduction of any content without written consent is prohibited.',
    cv: 'CV',
  },

  menu: {
    open: 'Open menu',
    close: 'Close menu',
  },

  readingTime: (minutes: number) => `${Math.max(1, Math.round(minutes))} min read`,
};
