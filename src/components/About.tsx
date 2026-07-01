const HIGHLIGHTS = [
  { label: "Teaching experience", value: "[X years teaching experience]" },
  { label: "Students taught internationally", value: "[countries taught]" },
  { label: "Lessons taught", value: "one-to-one, live" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl bg-primary-700 shadow-xl">
            <div className="absolute inset-4 rounded-xl border border-gold-300/40" />
            <svg
              viewBox="0 0 100 100"
              className="h-28 w-28 text-cream-50/90"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="50" cy="34" r="16" stroke="currentColor" strokeWidth="3" />
              <path
                d="M18 88c0-18 14-32 32-32s32 14 32 32"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span className="sr-only">Photo of the teacher placeholder</span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Meet Your Teacher
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
            M. Khubaib Zafar — Hafiz-e-Quran
          </h2>
          <p className="mt-5 text-navy-700/90 leading-relaxed">
            M. Khubaib Zafar is a Hafiz-e-Quran, having memorized the entire
            Holy Quran, and dedicates his time to teaching the Quran online
            to students of all ages. He teaches one-to-one, giving each
            student focused, individual attention rather than a crowded
            classroom setting.
          </p>
          <p className="mt-4 text-navy-700/90 leading-relaxed">
            With a calm and patient teaching style, he has helped students
            across the UK, USA, and Europe build confidence in reading the
            Quran, correct their Tajweed, and work steadily toward memorizing
            the Quran — all from the comfort of their own home.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-primary-100 bg-primary-50/60 px-4 py-3"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-primary-600">
                  {item.label}
                </dt>
                <dd className="mt-1 font-serif text-lg font-semibold text-primary-800">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
