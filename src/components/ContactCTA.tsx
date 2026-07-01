import GeometricPattern from "./GeometricPattern";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./motion/Reveal";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";
import CTAIllustration from "./illustrations/CTAIllustration";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary-800 py-24 text-cream-50">
      <GeometricPattern className="absolute inset-0 h-full w-full text-cream-50/[0.06]" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-400/15 blur-3xl"
      />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <CTAIllustration className="h-32 w-auto sm:h-40" />
        <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
          Ready to Begin Your Quran Journey?
        </h2>
        <p className="mt-4 max-w-xl text-cream-100/90">
          Lessons are available worldwide, with a free trial class for every
          new student, and class times built around your schedule. Message
          us directly on WhatsApp to get started.
        </p>

        <WhatsAppButton
          variant="cream"
          className="mt-8 px-8 py-4 text-lg"
          message="Assalamu Alaikum, I'm interested in Quran classes."
        >
          Message Us on WhatsApp
        </WhatsAppButton>

        <p className="mt-6 text-sm text-cream-100/80">
          Or reach us directly at{" "}
          <span className="font-semibold text-gold-200">{WHATSAPP_DISPLAY}</span>
        </p>
      </Reveal>
    </section>
  );
}
