import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES, getCourseBySlug, getCourseSlugs } from "@/lib/courses";
import { getPostsByCategory } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { SITE_URL } from "@/lib/site";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import WhatsAppButton from "@/components/WhatsAppButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCourseSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  const url = `${SITE_URL}/courses/${course.slug}`;

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: course.metaTitle,
      description: course.metaDescription,
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const url = `${SITE_URL}/courses/${course.slug}`;
  const relatedPosts = getPostsByCategory(course.relatedCategory).slice(0, 3);
  const otherCourses = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Courses", url: `${SITE_URL}/courses` },
    { name: course.name, url },
  ]);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <JsonLd data={courseSchema(course)} />
      <JsonLd data={faqPageSchema(course.faqs)} />
      <JsonLd data={breadcrumbJsonLd} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.name },
        ]}
      />

      <header className="mt-6">
        <span className="rounded-full bg-gold-100/95 px-3 py-1 text-xs font-semibold text-gold-600">
          {course.heroKicker}
        </span>
        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-primary-800 sm:text-4xl">
          {course.name} — Online Classes
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-navy-700/90">
          {course.heroDescription}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <WhatsAppButton message={course.whatsappMessage}>
            Start Free Trial on WhatsApp
          </WhatsAppButton>
        </div>
      </header>

      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-primary-100">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="prose prose-lg mt-10 max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary-800 prose-p:leading-relaxed prose-p:text-navy-700/90 prose-li:text-navy-700/90">
        {course.overview.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h2>Who This Course Is For</h2>
        <ul>
          {course.whoItsFor.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h2>What You&apos;ll Learn</h2>
        <ul>
          {course.whatYoullLearn.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <section aria-labelledby="faq-heading" className="mt-14 border-t border-primary-100 pt-10">
        <h2 id="faq-heading" className="font-serif text-2xl font-bold text-primary-800">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-6">
          {course.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-serif text-lg font-semibold text-primary-800">
                {faq.question}
              </h3>
              <p className="mt-2 leading-relaxed text-navy-700/90">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-primary-800 px-6 py-10 text-center text-cream-50 sm:px-10">
        <h2 className="font-serif text-2xl font-bold sm:text-3xl">
          Ready to Start {course.shortName}?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-cream-100/90">
          Every new student gets a free trial class with a qualified Hafiz —
          at a time that fits your timezone.
        </p>
        <WhatsAppButton variant="cream" className="mt-6 px-8 py-3.5" message={course.whatsappMessage}>
          Message Us on WhatsApp
        </WhatsAppButton>
      </section>

      {relatedPosts.length > 0 && (
        <section aria-labelledby="related-articles-heading" className="mt-14 border-t border-primary-100 pt-10">
          <h2 id="related-articles-heading" className="font-serif text-2xl font-bold text-primary-800">
            Related Articles
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedPosts.map((post) => (
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
      )}

      <section aria-labelledby="other-courses-heading" className="mt-14 border-t border-primary-100 pt-10">
        <h2 id="other-courses-heading" className="font-serif text-2xl font-bold text-primary-800">
          Other Courses
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {otherCourses.map((other) => (
            <Link
              key={other.slug}
              href={`/courses/${other.slug}`}
              className="rounded-xl border border-primary-100 bg-primary-50/50 p-5 transition-colors hover:bg-primary-50"
            >
              <h3 className="font-serif text-base font-semibold text-primary-800">
                {other.name}
              </h3>
              <p className="mt-1 text-sm text-navy-700/80">{other.cardDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
