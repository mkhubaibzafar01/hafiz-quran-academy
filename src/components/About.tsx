import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";
import AnimatedCounter from "./motion/AnimatedCounter";

const STATS = [
  { value: 1050, suffix: "+", label: "Students taught worldwide" },
  { value: 40, suffix: "+", label: "Countries served" },
];

const FEATURES = [
  {
    title: "Certified Quran Teachers",
    description: "Every teacher has memorized the entire Holy Quran.",
  },
  {
    title: "One-to-one live lessons",
    description: "Focused, individual attention — never a crowded class.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-5 lg:items-center lg:gap-12">
        <Reveal direction="right" className="lg:col-span-2">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-200/60 via-gold-100/40 to-transparent blur-xl"
            />
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-primary-100 bg-primary-700 shadow-xl shadow-primary-900/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/hero-quran.mp4" type="video/mp4" />
              </video>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary-950/30 via-transparent to-transparent"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-3">
          <Reveal direction="up">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              About the Academy
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
              Expert Quran Teaching You Can Trust
            </h2>
            <p className="mt-5 leading-relaxed text-navy-700/90">
              Our academy is dedicated to teaching the Quran online to
              students of all ages, taught by a qualified Hafiz-e-Quran who
              has memorized the entire Holy Quran. Every lesson is
              one-to-one, giving each student focused, individual attention
              rather than a crowded classroom setting.
            </p>
            <p className="mt-4 leading-relaxed text-navy-700/90">
              With a calm and patient teaching style, we&apos;ve helped
              students across the UK, USA, Europe, and beyond build
              confidence in reading the Quran, correct their Tajweed, and
              work steadily toward memorizing the Quran — all from the
              comfort of their own home, at a time that suits them.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="rounded-2xl border border-primary-100 bg-primary-50/60 px-4 py-5 text-center shadow-sm"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-2xl font-bold text-primary-800 sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-600">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}

            {FEATURES.map((feature) => (
              <StaggerItem
                key={feature.title}
                className="rounded-2xl border border-primary-100 bg-primary-50/60 px-4 py-5 text-center shadow-sm"
              >
                <p className="font-serif text-sm font-semibold leading-snug text-primary-800">
                  {feature.title}
                </p>
                <p className="mt-1 text-xs leading-snug text-navy-700/70">
                  {feature.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
