import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export default function RelatedPosts({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="related-posts-heading" className="border-t border-primary-100 pt-10">
      <h2 id="related-posts-heading" className="font-serif text-2xl font-bold text-primary-800">
        Related Posts
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-xl border border-primary-100 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-100">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-medium text-primary-600">{formatDate(post.date)}</p>
              <h3 className="mt-1 font-serif text-base font-semibold text-primary-800 group-hover:text-primary-600">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
