import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";
import WhyUsIllustration from "./illustrations/WhyUsIllustration";

const POINTS = [
  {
    title: "Choose your own class time",
    description:
      "You pick the days and times that suit your schedule and timezone — mornings, evenings, weekends, whatever works for your family in the UK, USA, Canada, or Europe.",
    featured: true,
  },
  {
    title: "One-to-one personal attention",
    description:
      "Every lesson is one student and one teacher — no crowded group classes, so lessons move at your child's pace.",
  },
  {
    title: "Male and female students welcome",
    description:
      "Classes are open to boys, girls, men, and women of all ages, taught with respect and appropriate care throughout.",
  },
  {
    title: "Parents can observe lessons",
    description:
      "Parents are always welcome to sit in on lessons, especially for younger children, for full peace of mind.",
  },
  {
    title: "Patient, friendly teaching",
    description:
      "A calm, encouraging approach that helps students — especially children — feel comfortable and motivated to learn.",
  },
  {
    title: "Free trial lesson",
    description:
      "Try a class before committing, so you can see the teaching style and comfort level for yourself, at no cost.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy-900 py-24 text-cream-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:items-center lg:gap-10">
          <Reveal direction="right" className="lg:col-span-2 lg:order-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-400/20 via-primary-400/10 to-transparent blur-xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-cream-50/10 shadow-2xl shadow-primary-950/40">
                <WhyUsIllustration className="aspect-[4/5] w-full" />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3 lg:order-1">
            <Reveal direction="up">
              <span className="text-sm font-semibold uppercase tracking-wide text-gold-300">
                Why Families Choose Us
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
                Trust, Care &amp; Flexibility First
              </h2>
              <p className="mt-4 max-w-xl text-cream-100/80">
                We understand you&apos;re trusting us with your child&apos;s
                Quran education. Every class is built around comfort,
                safety, and a schedule that truly fits your life.
              </p>
            </Reveal>

            <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
              {POINTS.map((point) => (
                <StaggerItem
                  key={point.title}
                  className={`rounded-2xl p-6 transition-colors duration-300 ${
                    point.featured
                      ? "border border-gold-300/40 bg-gradient-to-br from-gold-400/15 to-cream-50/5 sm:col-span-2"
                      : "border border-cream-50/10 bg-cream-50/5 hover:bg-cream-50/[0.08]"
                  }`}
                >
                  <h3
                    className={`font-serif text-lg font-semibold ${
                      point.featured ? "text-gold-100" : "text-gold-200"
                    }`}
                  >
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/80">
                    {point.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
