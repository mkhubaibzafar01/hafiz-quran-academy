import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  categorySlug,
} from "@/lib/blog";
import { formatDate } from "@/lib/format";
import TableOfContents from "@/components/blog/TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import BlogCTA from "@/components/blog/BlogCTA";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import JsonLd from "@/components/blog/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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
      images: [{ url: post.featuredImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [`${SITE_URL}${post.featuredImage}`],
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    datePublished: post.date,
    dateModified: post.lastModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `${SITE_URL}/blog/category/${categorySlug(post.category)}`,
      },
      { "@type": "ListItem", position: 4, name: post.title, item: url },
    ],
  };

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

      <div className="mt-14">
        <BlogCTA />
      </div>

      <div className="mt-14">
        <RelatedPosts posts={relatedPosts} />
      </div>
    </article>
  );
}
