import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  categorySlug,
} from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { COURSES } from "@/lib/courses";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import BlogCTA from "@/components/blog/BlogCTA";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const relatedCourse = COURSES.find((course) => course.relatedCategory === post.category);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = articleSchema(post, url);

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.category, url: `${SITE_URL}/blog/category/${categorySlug(post.category)}` },
    { name: post.title, url },
  ]);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category, href: `/blog/category/${categorySlug(post.category)}` },
          { label: post.title },
        ]}
      />

      <header className="mt-6">
        <span className="rounded-full bg-gold-100/95 px-3 py-1 text-xs font-semibold text-gold-600">
          {post.category}
        </span>
        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary-800 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-navy-700/80">
          <span>By {post.author}</span>
          <span aria-hidden="true">&middot;</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime} min read</span>
        </div>
      </header>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-primary-100">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-10">
        <TableOfContents headings={post.headings} />
      </div>

      <div
        className="prose prose-lg mt-10 max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary-800 prose-p:leading-relaxed prose-p:text-navy-700/90 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 hover:prose-a:underline prose-strong:text-primary-800 prose-blockquote:border-gold-400 prose-blockquote:text-navy-700/80 prose-li:text-navy-700/90"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      {relatedCourse && (
        <div className="mt-14 rounded-2xl border border-primary-100 bg-primary-50/50 p-6">
          <p className="font-serif text-lg font-semibold text-primary-800">
            Ready to put this into practice?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy-700/90">
            Explore our{" "}
            <Link
              href={`/courses/${relatedCourse.slug}`}
              className="font-semibold text-primary-700 underline hover:text-primary-600"
            >
              {relatedCourse.name} course
            </Link>{" "}
            — one-to-one online lessons with a qualified Hafiz, and a free
            trial class for every new student.
          </p>
        </div>
      )}

      <div className="mt-14">
        <BlogCTA />
      </div>

      <div className="mt-14">
        <RelatedPosts posts={relatedPosts} />
      </div>
    </article>
  );
}
