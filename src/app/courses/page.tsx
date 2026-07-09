import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/courses";
import { SITE_URL } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/blog/Breadcrumbs";

const TITLE = "Online Quran Courses — Noorani Qaida, Tajweed & Hifz";
const DESCRIPTION =
  "Browse every online Quran course we offer — Noorani Qaida, Quran reading with Tajweed, Hifz memorization & more. One-to-one classes with a qualified Hafiz.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/courses`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CoursesIndexPage() {
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Courses", url: `${SITE_URL}/courses` },
  ]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <JsonLd data={breadcrumbJsonLd} />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Courses" }]} />

      <div className="mx-auto mt-6 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
          Courses Offered
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
          A Course for Every Stage of Learning
        </h1>
        <p className="mt-4 text-navy-700/90">
          From the very first Arabic letters to full memorization of the
          Quran — one-to-one online lessons taught by a qualified Hafiz,
          tailored to the student&apos;s age and level.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-100">
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 w-fit rounded-full bg-gold-100/95 px-3 py-1 text-xs font-semibold text-gold-600 shadow-sm backdrop-blur-sm">
                {course.audience}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-serif text-xl font-semibold text-primary-800">
                {course.name}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/90">
                {course.cardDescription}
              </p>
              <span className="mt-4 text-sm font-semibold text-primary-700 group-hover:text-primary-600">
                Learn more &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
