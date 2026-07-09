import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./motion/Reveal";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary-800 py-24 text-cream-50">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/posters/cta-quran.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/cta-quran.mp4" type="video/mp4" />
      </video>

      {/* Strong dark overlay so text stays readable over the video on every screen size */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-950/65 to-primary-950/80"
      />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">
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
