import GeometricPattern from "./GeometricPattern";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./motion/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary-900 text-cream-50"
    >
      {/* Subtle Islamic geometric pattern, lightweight SVG (no WebGL) */}
      <GeometricPattern className="absolute inset-0 h-full w-full text-cream-50/[0.06]" />

      {/* One tasteful animated hero accent: soft floating gradient orbs, CSS-only */}
      <div
        aria-hidden="true"
        className="hero-orb absolute -left-32 top-10 h-80 w-80 rounded-full bg-gold-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-orb-slow absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-900/85 to-primary-900" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:gap-10 lg:py-36">
        <Reveal direction="up" className="flex flex-col items-start text-left">
          <span className="rounded-full border border-gold-300/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-200 backdrop-blur-sm">
            One-to-One Online Quran Classes
          </span>

          <h1 className="mt-6 max-w-xl font-serif text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Learn the Holy Quran Online with a Qualified Hafiz
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-100/85">
            Personal, one-to-one Quran lessons for children and adults,
            taught live online from anywhere in the world. Reading, Tajweed,
            and Hifz (memorization), guided with patience and care —{" "}
            <span className="font-semibold text-gold-200">
              you choose the class time that suits your schedule
            </span>
            , in your own timezone.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton
              variant="cream"
              className="px-8 py-4 text-lg"
              message="Assalamu Alaikum, I'd like to start a free trial Quran class."
            >
              Start Free Trial on WhatsApp
            </WhatsAppButton>
          </div>

          <p className="mt-8 text-sm text-cream-100/70">
            Trusted by Muslim families across the UK, USA &amp; Europe
            &middot; Flexible timing for every timezone
          </p>
        </Reveal>

        <Reveal direction="left" delay={0.15} className="relative">
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-300/30 via-primary-400/10 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-cream-50/15 bg-primary-800/40 p-2 shadow-2xl shadow-primary-950/50 backdrop-blur-sm">
              {/*
                Replace with a real, high-quality photo:
                a warm, natural image of children learning the Quran
                online on a phone, tablet, or laptop (e.g. a child
                reading Quran on a tablet during a video call).
                Recommended: 1200x1400px or larger, JPG/WebP.
                Drop the file at /public/hero-children-learning.jpg
              */}
              <img
                src="/hero-children-learning.jpg"
                alt="Children learning the Quran online on tablet and laptop"
                className="aspect-[4/5] w-full rounded-[1.35rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-cream-50/15 bg-primary-950/80 px-5 py-4 shadow-xl backdrop-blur-md sm:block">
              <p className="font-serif text-2xl font-bold text-gold-200">
                1,050+
              </p>
              <p className="text-xs text-cream-100/80">Students taught</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
