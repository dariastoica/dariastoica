import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Medical writing, patient education, and healthcare communication services.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
