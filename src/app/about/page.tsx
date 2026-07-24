import type { Metadata } from 'next';
import { en } from '@/lib/i18n/dictionaries/en';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description: en.about.short,
};

export default function AboutPage() {
  return <AboutClient />;
}
