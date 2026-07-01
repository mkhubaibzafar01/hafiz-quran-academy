import { getWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const FLOATING_MESSAGE = "Assalamu Alaikum, I'd like to know about Quran classes";

/**
 * Exactly one floating WhatsApp button, fixed bottom-right on every page.
 * Do not add another fixed/floating WhatsApp element anywhere else.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink(FLOATING_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-primary-900/30 ring-4 ring-cream-50/40 transition-transform duration-200 hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
