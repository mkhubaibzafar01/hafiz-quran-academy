import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./site";
import { WHATSAPP_DISPLAY } from "./whatsapp";
import type { Course, CourseFaq } from "./courses";
import type { BlogPost } from "./blog";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: SITE_DESCRIPTION,
    areaServed: ["GB", "US", "CA", "Worldwide"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: WHATSAPP_DISPLAY,
      availableLanguage: ["English", "Arabic", "Urdu"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
    },
  };
}

export function courseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.metaDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "P1W",
      instructor: {
        "@type": "Person",
        name: "Qualified Hafiz-e-Quran Teacher",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: course.audience,
    },
  };
}

export function faqPageSchema(faqs: CourseFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost, url: string) {
  return {
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
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.lastModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export type BreadcrumbEntry = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
