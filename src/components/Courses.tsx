import WhatsAppButton from "./WhatsAppButton";

const COURSES = [
  {
    title: "Noorani Qaida",
    audience: "Beginners & kids",
    description:
      "The essential first step — learning Arabic letters, correct pronunciation, and basic reading rules before moving into the Quran itself.",
  },
  {
    title: "Quran Reading (Nazra) with Tajweed",
    audience: "Kids & adults",
    description:
      "Learn to read the Quran fluently with correct Tajweed (pronunciation rules), building accuracy and confidence page by page.",
  },
  {
    title: "Quran Memorization (Hifz)",
    audience: "Kids & adults",
    description:
      "Structured, one-to-one memorization classes with regular revision plans to help students memorize the Quran at a steady, sustainable pace.",
  },
  {
    title: "Tajweed Rules",
    audience: "All levels",
    description:
      "A focused course on the rules of Tajweed for students who already read Quran but want to refine and perfect their recitation.",
  },
  {
    title: "Quran for Adults & Reverts",
    audience: "Adults & new Muslims",
    description:
      "A patient, judgment-free course designed for adults and reverts starting from scratch — at your own pace, with no prior knowledge assumed.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-primary-50/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Courses Offered
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
            A Course for Every Stage of Learning
          </h2>
          <p className="mt-4 text-navy-700/90">
            From the very first letters to full memorization of the Quran —
            lessons tailored to the student&apos;s age and level.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-2xl border border-primary-100 bg-cream-50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-600">
                {course.audience}
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-primary-800">
                {course.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/90">
                {course.description}
              </p>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary-200 bg-primary-50/60 p-6 text-center">
            <p className="font-serif text-lg font-semibold text-primary-800">
              Not sure which course fits?
            </p>
            <p className="mt-2 text-sm text-navy-700/90">
              Message us on WhatsApp and we&apos;ll recommend the right
              starting point for you or your child.
            </p>
            <WhatsAppButton
              className="mt-4"
              message="Assalamu Alaikum, I'm not sure which Quran course is right for me/my child. Can you help?"
            >
              Ask on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
