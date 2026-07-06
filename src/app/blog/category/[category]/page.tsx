import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CATEGORIES,
  categoryFromSlug,
  categorySlug,
  getPostsByCategory,
} from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import CategoryPills from "@/components/blog/CategoryPills";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: categorySlug(category) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlugParam } = await params;
  const category = categoryFromSlug(categorySlugParam);
  if (!category) return {};

  const title = `${category} Articles — Quran Academy Blog`;
  const description = `Guides and articles about ${category} for Quran students and parents, from Quran Academy.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/category/${categorySlugParam}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/category/${categorySlugParam}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlugParam } = await params;
  const category = categoryFromSlug(categorySlugParam);
  if (!category) notFound();

  const posts = getPostsByCategory(category);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: category },
        ]}
      />

      <div className="mx-auto mt-6 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
          Category
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
          {category}
        </h1>
      </div>

      <div className="mt-10">
        <CategoryPills active={categorySlugParam} />
      </div>

      {posts.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} priority={index === 0} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-navy-700/70">
          No posts in this category yet — check back soon.
        </p>
      )}
    </section>
  );
}
