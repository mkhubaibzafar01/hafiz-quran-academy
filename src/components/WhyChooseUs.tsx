const POINTS = [
  {
    title: "One-to-one personal attention",
    description:
      "Every lesson is one student and one teacher — no crowded group classes, so lessons move at your child's pace.",
  },
  {
    title: "Flexible timings, any timezone",
    description:
      "Schedules are arranged around your local time, whether you're in London, New York, Toronto, or anywhere in Europe.",
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
    <section id="why-us" className="bg-navy-900 py-20 text-cream-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-300">
            Why Families Choose Us
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
            Trust, Care &amp; Safety First
          </h2>
          <p className="mt-4 text-cream-100/80">
            We understand you&apos;re trusting us with your child&apos;s
            Quran education. Every class is built around comfort, safety,
            and genuine progress.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-cream-50/10 bg-cream-50/5 p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-gold-200">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-100/80">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
