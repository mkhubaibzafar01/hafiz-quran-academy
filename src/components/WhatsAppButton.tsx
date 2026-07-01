import { getWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

type Props = {
  message?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "cream";
  className?: string;
};

const variants = {
  solid:
    "bg-primary-600 text-cream-50 hover:bg-primary-700 shadow-lg shadow-primary-900/20",
  outline:
    "border-2 border-primary-600 text-primary-700 hover:bg-primary-50 bg-transparent",
  cream:
    "bg-cream-50 text-primary-700 hover:bg-gold-50 shadow-lg shadow-primary-900/20",
};

export default function WhatsAppButton({
  message,
  children,
  variant = "solid",
  className = "",
}: Props) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </a>
  );
}
