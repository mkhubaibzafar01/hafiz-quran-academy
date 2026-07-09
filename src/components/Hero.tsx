import GeometricPattern from "./GeometricPattern";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./motion/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary-900 text-cream-50"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/posters/about-academy.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/about-academy.mp4" type="video/mp4" />
      </video>

      {/* Strong dark overlay so text stays readable over the video on every screen size */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/65 to-primary-950/85"
      />

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

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        <Reveal direction="up" className="flex flex-col items-center">
          <span className="rounded-full border border-gold-300/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-200 backdrop-blur-sm">
            One-to-One Online Quran Classes
          </span>

          <h1 className="mt-6 max-w-2xl font-serif text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Master the Holy Quran with Expert One-to-One Guidance
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

          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <WhatsAppButton
              variant="cream"
              className="px-8 py-4 text-lg"
              message="Assalamu Alaikum, I'd like to start a free trial Quran class."
            >
              Start Free Trial on WhatsApp
            </WhatsAppButton>

            <div className="rounded-2xl border border-cream-50/15 bg-primary-950/70 px-5 py-4 text-center shadow-xl backdrop-blur-md">
              <p className="font-serif text-2xl font-bold text-gold-200">
                1,050+
              </p>
              <p className="text-xs text-cream-100/80">Students taught</p>
            </div>
          </div>

          <p className="mt-8 text-sm text-cream-100/70">
            Trusted by Muslim families across the UK, USA &amp; Europe
            &middot; Flexible timing for every timezone
          </p>
        </Reveal>
      </div>
    </section>
  );
}
