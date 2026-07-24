export type Heading = { text: string; slug: string; depth: number };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

/** Extracts H2/H3 headings from raw markdown for a simple table of contents. */
export function extractHeadings(markdown: string): Heading[] {
  const lines = markdown.split('\n');
  const headings: Heading[] = [];

  for (const line of lines) {
    const match = /^(##{1,2})\s+(.*)$/.exec(line.trim());
    if (match) {
      const depth = match[1].length;
      const text = match[2].replace(/[*_`]/g, '').trim();
      headings.push({ text, slug: slugify(text), depth });
    }
  }

  return headings;
}
