import Link from "next/link";
import { WHATSAPP_DISPLAY, getWhatsAppLink } from "@/lib/whatsapp";
import { COURSES } from "@/lib/courses";
import Logo from "./Logo";

const FOOTER_LINKS = [
  { href: "/#about", label: "About the Academy" },
  { href: "/courses", label: "All Courses" },
  { href: "/#why-us", label: "Why Families Choose Us" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 py-14 text-cream-100/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-center sm:px-6">
        <div className="flex flex-col items-center gap-6">
          <Logo theme="dark" />
          <p className="max-w-md text-sm leading-relaxed">
            Online, one-to-one Quran classes for children and adults, taught
            by a qualified Hafiz-e-Quran — available worldwide, on a
            schedule that fits your timezone.
          </p>
        </div>

        <div className="grid w-full max-w-3xl gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-300">
              Site
            </p>
            <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:justify-start">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream-100/70 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-300">
              Courses
            </p>
            <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm sm:justify-start">
              {COURSES.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="text-cream-100/70 transition-colors hover:text-gold-300"
                >
                  {course.shortName}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
        >
          WhatsApp: {WHATSAPP_DISPLAY}
        </a>

        <div className="h-px w-full max-w-xs bg-cream-50/10" />

        <p className="text-xs text-cream-100/50">
          &copy; {year} Quran Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
