export const WHATSAPP_NUMBER = "923456891988";
export const WHATSAPP_DISPLAY = "+92 345 6891988";
export const DEFAULT_WHATSAPP_MESSAGE =
  "Assalamu Alaikum, I'm interested in Quran classes";

export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
