import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/format";

export default function BlogCard({
  post,
  priority = false,
}: {
  post: BlogPostMeta;
  priority?: boolean;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10">
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-primary-100"
      >
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <span className="absolute left-4 top-4 w-fit rounded-full bg-gold-100/95 px-3 py-1 text-xs font-semibold text-gold-600 shadow-sm backdrop-blur-sm">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-medium text-primary-600">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h3 className="mt-2 font-serif text-xl font-semibold text-primary-800">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary-600">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/90">
          {post.description}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-primary-700 hover:text-primary-600"
        >
          Read more &rarr;
        </Link>
      </div>
    </article>
  );
}
