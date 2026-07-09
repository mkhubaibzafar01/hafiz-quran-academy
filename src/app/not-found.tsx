import type { Metadata } from "next";
import Link from "next/link";
import { COURSES } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  alternates: {},
  openGraph: {},
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
      <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
        404
      </span>
      <h1 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
        We Couldn&apos;t Find That Page
      </h1>
      <p className="mt-4 text-navy-700/90">
        The page you were looking for may have been moved or no longer
        exists. Here are a few places to pick back up:
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-cream-50 shadow-lg shadow-primary-900/20 transition-colors hover:bg-primary-700"
        >
          Back to Homepage
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center justify-center rounded-full border-2 border-primary-600 px-6 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
        >
          Visit the Blog
        </Link>
      </div>

      <div className="mt-10 w-full border-t border-primary-100 pt-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
          Our Courses
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {COURSES.map((course) => (
            <li key={course.slug}>
              <Link
                href={`/courses/${course.slug}`}
                className="text-navy-700/80 transition-colors hover:text-primary-600"
              >
                {course.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
