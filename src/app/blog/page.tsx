import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import CategoryPills from "@/components/blog/CategoryPills";
import { SITE_URL } from "@/lib/site";

const TITLE = "Blog — Quran Learning Tips & Guides";
const DESCRIPTION =
  "Practical guides on Tajweed, Hifz, Noorani Qaida, and choosing the right online Quran teacher — for parents and students, from Quran Academy.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
          Quran Academy Blog
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
          Guides for Learning &amp; Teaching the Quran
        </h1>
        <p className="mt-4 text-navy-700/90">
          Practical, honest guides on Tajweed, Hifz, Noorani Qaida, and
          choosing the right teacher — written for parents and students.
        </p>
      </div>

      <div className="mt-10">
        <CategoryPills />
      </div>

      {posts.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} priority={index === 0} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-navy-700/70">
          No posts yet — check back soon.
        </p>
      )}
    </section>
  );
}
