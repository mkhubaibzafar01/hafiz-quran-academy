import WhatsAppButton from "@/components/WhatsAppButton";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function BlogCTA() {
  return (
    <section className="rounded-2xl bg-primary-800 px-6 py-10 text-center text-cream-50 sm:px-10">
      <h2 className="font-serif text-2xl font-bold sm:text-3xl">
        Ready to Begin Your Quran Journey?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-cream-100/90">
        Every new student gets a free trial class with a qualified Hafiz — at
        a time that fits your timezone.
      </p>
      <WhatsAppButton
        variant="cream"
        className="mt-6 px-8 py-3.5"
        message="Assalamu Alaikum, I read your blog and I'm interested in a free trial Quran class."
      >
        Message Us on WhatsApp
      </WhatsAppButton>
      <p className="mt-4 text-sm text-cream-100/80">
        Or reach us directly at{" "}
        <span className="font-semibold text-gold-200">{WHATSAPP_DISPLAY}</span>
      </p>
    </section>
  );
}
