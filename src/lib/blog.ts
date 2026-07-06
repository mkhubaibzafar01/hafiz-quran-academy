import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { estimateReadingTime, processMarkdown, type TocHeading } from "./markdown";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "blog");

export const CATEGORIES = [
  "Tajweed",
  "Hifz",
  "Kids Learning",
  "Parent Guides",
] as const;

export type Category = (typeof CATEGORIES)[number];

export function categorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function categoryFromSlug(slug: string): Category | undefined {
  return CATEGORIES.find((category) => categorySlug(category) === slug);
}

export type BlogFrontmatter = {
  title: string;
  description: string;
  slug: string;
  date: string;
  lastModified: string;
  author: string;
  category: Category;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  readingTime: number;
};

export type BlogPost = BlogPostMeta & {
  html: string;
  headings: TocHeading[];
};

function postFilenames(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) return [];
  return fs.readdirSync(POSTS_DIRECTORY).filter((file) => file.endsWith(".md"));
}

export function getPostSlugs(): string[] {
  return postFilenames().map((file) => file.replace(/\.md$/, ""));
}

function readPostFile(slug: string): { frontmatter: BlogFrontmatter; content: string } {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as BlogFrontmatter, content };
}

function sortByDateDesc(posts: BlogPostMeta[]): BlogPostMeta[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPosts(): BlogPostMeta[] {
  const posts = getPostSlugs().map((slug) => {
    const { frontmatter, content } = readPostFile(slug);
    return {
      ...frontmatter,
      readingTime: estimateReadingTime(content),
    };
  });

  return sortByDateDesc(posts);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { frontmatter, content } = readPostFile(slug);
  const { html, headings } = await processMarkdown(content);

  return {
    ...frontmatter,
    readingTime: estimateReadingTime(content),
    html,
    headings,
  };
}

export function getPostsByCategory(category: Category): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getRelatedPosts(
  currentSlug: string,
  category: Category,
  limit = 3
): BlogPostMeta[] {
  return getAllPosts()
    .filter((post) => post.category === category && post.slug !== currentSlug)
    .slice(0, limit);
}

export function getCategoriesWithPosts(): Category[] {
  const present = new Set(getAllPosts().map((post) => post.category));
  return CATEGORIES.filter((category) => present.has(category));
}
