import type { Metadata } from 'next';
import { site } from '@/lib/site-config';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return <ContactClient />;
}
