import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";

export type TocHeading = {
  id: string;
  text: string;
  level: number;
};

const HEADING_LINE = /^(#{2,3})\s+(.*)$/gm;
const INLINE_MARKDOWN = /[*_`~]/g;

/** Pulls h2/h3 headings straight from the raw markdown so the table of
 * contents can be built without re-walking the HTML AST. Slugs are produced
 * with the same github-slugger algorithm rehype-slug uses, so anchors match. */
function extractHeadings(markdown: string): TocHeading[] {
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];
  let match: RegExpExecArray | null;

  while ((match = HEADING_LINE.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(INLINE_MARKDOWN, "").trim();
    headings.push({ id: slugger.slug(text), text, level });
  }

  return headings;
}

export async function processMarkdown(markdown: string): Promise<{
  html: string;
  headings: TocHeading[];
}> {
  const headings = extractHeadings(markdown);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .process(markdown);

  return { html: String(file), headings };
}

const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
