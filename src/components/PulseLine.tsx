'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * The site's signature visual element: a single abstracted pulse line,
 * used as a section divider. It's the only literal "medical" reference
 * in the whole design — everything else stays quiet and editorial.
 */
export default function PulseLine({ className = '' }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <svg
      ref={ref}
      className={`w-full h-8 ${className}`}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 20 H480 L510 20 L525 4 L545 36 L565 20 H1200"
        stroke="#AC9185"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
    </svg>
  );
}
