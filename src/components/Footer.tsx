import Link from "next/link";
import { WHATSAPP_DISPLAY, getWhatsAppLink } from "@/lib/whatsapp";
import Logo from "./Logo";

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#why-us", label: "Why Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 py-14 text-cream-100/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <Logo theme="dark" />

        <p className="max-w-md text-sm leading-relaxed">
          Online, one-to-one Quran classes for children and adults, taught by
          a qualified Hafiz-e-Quran — available worldwide, on a schedule
          that fits your timezone.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {FOOTER_LINKS.map((link) =>
            link.href.startsWith("#") ? (
              <a
                key={link.href}
                href={link.href}
                className="text-cream-100/70 transition-colors hover:text-gold-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream-100/70 transition-colors hover:text-gold-300"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

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
