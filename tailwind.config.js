/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FDFBF6',      // near-white light ivory background
        panel: '#F1E4D2',      // warm light beige panel
        ink: '#220707',        // deep near-black wine (body text)
        navy: '#531C22',       // deep burgundy (headings, dark sections)
        teal: '#AC9185',       // muted mauve accent
        line: '#E6D6C1',       // hairline borders
        muted: '#8A6F63',      // secondary text
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
        prose: '42rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink'),
            maxWidth: 'none',
            a: {
              color: theme('colors.navy'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.teal'),
              textUnderlineOffset: '3px',
              '&:hover': { color: theme('colors.teal') },
            },
            h1: { fontFamily: 'var(--font-playfair)', color: theme('colors.navy') },
            h2: { fontFamily: 'var(--font-playfair)', color: theme('colors.navy') },
            h3: { fontFamily: 'var(--font-playfair)', color: theme('colors.navy') },
            blockquote: {
              borderLeftColor: theme('colors.teal'),
              fontStyle: 'normal',
              color: theme('colors.navy'),
            },
            code: { color: theme('colors.navy') },
          },
        },
      }),
      keyframes: {
        'pulse-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'pulse-line': 'pulse-line 1.8s ease-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
