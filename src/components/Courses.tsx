import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";

const COURSES = [
  {
    title: "Noorani Qaida",
    audience: "Beginners & kids",
    image: "/course-noorani-qaida.jpg",
    description:
      "The essential first step — learning Arabic letters, correct pronunciation, and basic reading rules before moving into the Quran itself.",
  },
  {
    title: "Quran Reading (Nazra) with Tajweed",
    audience: "Kids & adults",
    image: "/course-quran-reading.jpg",
    description:
      "Learn to read the Quran fluently with correct Tajweed (pronunciation rules), building accuracy and confidence page by page.",
  },
  {
    title: "Quran Memorization (Hifz)",
    audience: "Kids & adults",
    image: "/course-hifz-memorization.jpg",
    description:
      "Structured, one-to-one memorization classes with regular revision plans to help students memorize the Quran at a steady, sustainable pace.",
  },
  {
    title: "Tajweed Rules",
    audience: "All levels",
    image: "/course-tajweed.jpg",
    description:
      "A focused course on the rules of Tajweed for students who already read Quran but want to refine and perfect their recitation.",
  },
  {
    title: "Quran for Adults & Reverts",
    audience: "Adults & new Muslims",
    image: "/course-adults-reverts.jpg",
    description:
      "A patient, judgment-free course designed for adults and reverts starting from scratch — at your own pace, with no prior knowledge assumed.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-primary-50/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Courses Offered
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
            A Course for Every Stage of Learning
          </h2>
          <p className="mt-4 text-navy-700/90">
            From the very first letters to full memorization of the Quran —
            lessons tailored to the student&apos;s age and level, on a
            schedule that fits your timezone.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <StaggerItem
              key={course.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-100">
                {/*
                  Course image placeholder — replace with a real,
                  free-to-use stock photo relevant to this course.
                  Drop the file at /public{course.image}
                */}
                <img
                  src={course.image}
                  alt={`${course.title} course illustration`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 w-fit rounded-full bg-gold-100/95 px-3 py-1 text-xs font-semibold text-gold-600 shadow-sm backdrop-blur-sm">
                  {course.audience}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-primary-800">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/90">
                  {course.description}
                </p>
              </div>
            </StaggerItem>
          ))}

          <StaggerItem className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary-200 bg-primary-50/60 p-6 text-center">
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
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
