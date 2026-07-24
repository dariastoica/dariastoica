import type { Metadata } from 'next';
import { site } from '@/lib/site-config';
import CVClient from './CVClient';

export const metadata: Metadata = {
  title: 'CV',
  description: `Download the CV of ${site.name}, medical graduate and medical writer.`,
};

export default function CVPage() {
  return <CVClient />;
}
