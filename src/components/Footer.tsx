import { WHATSAPP_DISPLAY, getWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 py-10 text-cream-100/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6">
        <p className="font-serif text-lg font-semibold text-cream-50">
          Quran Academy
        </p>
        <p className="max-w-md text-sm">
          Online, one-to-one Quran classes for children and adults, taught by
          a Hafiz-e-Quran — available worldwide.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gold-300 hover:text-gold-200"
        >
          WhatsApp: {WHATSAPP_DISPLAY}
        </a>
        <p className="mt-4 text-xs text-cream-100/50">
          &copy; {year} Quran Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
