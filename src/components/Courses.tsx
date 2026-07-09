import Image from "next/image";
import Link from "next/link";
import { COURSES } from "@/lib/courses";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";

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
            <StaggerItem key={course.slug}>
              <Link
                href={`/courses/${course.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary-100 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-100">
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 w-fit rounded-full bg-gold-100/95 px-3 py-1 text-xs font-semibold text-gold-600 shadow-sm backdrop-blur-sm">
                    {course.audience}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold text-primary-800">
                    {course.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/90">
                    {course.cardDescription}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-primary-700 group-hover:text-primary-600">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
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
