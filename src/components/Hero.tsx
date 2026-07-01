import GeometricPattern from "./GeometricPattern";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary-800 text-cream-50"
    >
      <GeometricPattern className="absolute inset-0 h-full w-full text-cream-50/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-primary-800/80 to-primary-800" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28">
        <span className="rounded-full border border-gold-300/40 bg-gold-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gold-200">
          One-to-One Online Quran Classes
        </span>

        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-tight sm:text-5xl">
          Learn the Holy Quran Online with a Qualified Hafiz
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-cream-100/90">
          Personal, one-to-one Quran lessons for children and adults —
          taught live online from anywhere in the world. Reading, Tajweed,
          and Hifz (memorization), guided with patience and care.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <WhatsAppButton
            variant="cream"
            className="px-8 py-4 text-lg"
            message="Assalamu Alaikum, I'd like to start a free trial Quran class."
          >
            Start Free Trial on WhatsApp
          </WhatsAppButton>
        </div>

        <p className="mt-6 text-sm text-cream-100/70">
          Trusted by Muslim families across the UK, USA &amp; Europe &middot;
          Flexible timing for every timezone
        </p>
      </div>
    </section>
  );
}
