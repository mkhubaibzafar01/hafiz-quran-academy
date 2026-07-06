import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "./blog/BlogCard";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";

export default function FromOurBlog() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-primary-50/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            From Our Blog
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
            Guides for Learning &amp; Teaching the Quran
          </h2>
          <p className="mt-4 text-navy-700/90">
            Practical, honest guides on Tajweed, Hifz, Noorani Qaida, and
            choosing the right teacher — written for parents and students.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} priority={index === 0} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-base font-semibold text-cream-50 shadow-lg shadow-primary-900/20 transition-colors duration-200 hover:bg-primary-700"
          >
            View All Articles
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
