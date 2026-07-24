/**
 * Site logo: a small interlocking "DS" monogram mark, paired with a
 * letter-spaced "DARIA STOICA" wordmark — inspired by the monogram +
 * small-caps wordmark style you shared as a reference.
 *
 * Both pieces use only the site's two fonts (Playfair Display for the
 * monogram, Inter for the wordmark) and theme colors, so they'll always
 * match if you adjust colors in tailwind.config.js.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="58" height="58" viewBox="0 0 64 64" aria-hidden="true">
        <text
          x="2"
          y="46"
          fontFamily="var(--font-playfair), serif"
          fontSize="42"
          fontWeight="700"
          className="fill-navy"
        >
          D
        </text>
        <text
          x="28"
          y="44"
          fontFamily="var(--font-playfair), serif"
          fontSize="34"
          fontWeight="600"
          fontStyle="italic"
          className="fill-teal"
        >
          S
        </text>
      </svg>
      <span className="font-body font-medium tracking-[0.18em] uppercase text-navy text-base md:text-lg">
        Daria Stoica
      </span>
    </span>
  );
}
