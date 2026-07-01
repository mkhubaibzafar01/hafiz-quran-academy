import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";

/**
 * SAMPLE testimonials for design purposes only.
 * Replace every entry below with real feedback from actual families
 * and students before launch — names, locations, and quotes here are
 * illustrative placeholders, not real reviews.
 */
const SAMPLE_TESTIMONIALS = [
  {
    quote:
      "My son looks forward to his lessons every week. His Tajweed has improved so much in just a few months, and the teacher is endlessly patient with him.",
    name: "Aisha R.",
    location: "London, United Kingdom",
    rating: 5,
  },
  {
    quote:
      "We tried a few online academies before this one and the difference in structure and consistency is night and day. My daughter's Hifz revision is finally on track.",
    name: "David K.",
    location: "Toronto, Canada",
    rating: 5,
  },
  {
    quote:
      "As an adult starting from scratch, I was nervous about learning to read Quran for the first time. There was no judgment at all, just genuine encouragement.",
    name: "Yusuf A.",
    location: "Birmingham, United Kingdom",
    rating: 5,
  },
  {
    quote:
      "Scheduling around a New York timezone was never an issue — we found a slot that worked for our evenings within the first week. Communication on WhatsApp is quick and friendly.",
    name: "Amina S.",
    location: "New York, United States",
    rating: 5,
  },
  {
    quote:
      "Being able to sit in on my daughter's early lessons gave me real peace of mind. The teaching style is calm and clearly built for children.",
    name: "Khadija B.",
    location: "Rotterdam, Netherlands",
    rating: 5,
  },
  {
    quote:
      "The free trial lesson made the decision easy. Two of my children are now enrolled and both have made noticeable progress in reading fluency.",
    name: "Omar F.",
    location: "Berlin, Germany",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "text-gold-500" : "text-primary-100"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.72 5.51 6.08.88-4.4 4.29 1.04 6.06L10 15.4l-5.44 2.84 1.04-6.06-4.4-4.29 6.08-.88L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary-50/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Testimonials
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
            What Families Say
          </h2>
          <p className="mt-4 text-navy-700/90">
            Feedback from parents and students learning with us from around
            the world.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_TESTIMONIALS.map((testimonial) => (
            <StaggerItem
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-primary-100 bg-cream-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-900/5"
            >
              <figure className="flex h-full flex-col">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-700/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 font-serif text-sm font-semibold text-cream-50"
                  >
                    {initials(testimonial.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-primary-800">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-navy-700/70">
                      {testimonial.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
