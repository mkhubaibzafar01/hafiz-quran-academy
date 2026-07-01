const PLACEHOLDER_TESTIMONIALS = [
  {
    quote:
      "[Placeholder testimonial — replace with a real quote from a parent, e.g. how their child progressed with reading or Tajweed.]",
    name: "[Parent name], [Country]",
  },
  {
    quote:
      "[Placeholder testimonial — replace with a real quote about the trial lesson experience or scheduling flexibility across timezones.]",
    name: "[Parent name], [Country]",
  },
  {
    quote:
      "[Placeholder testimonial — replace with a real quote from an adult student learning to read Quran or working on Hifz.]",
    name: "[Student name], [Country]",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primary-50/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Testimonials
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
            What Families Say
          </h2>
          <p className="mt-4 text-navy-700/90">
            These are placeholder testimonials to be replaced with real
            feedback from families and students.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_TESTIMONIALS.map((testimonial, index) => (
            <figure
              key={index}
              className="flex flex-col rounded-2xl border border-dashed border-primary-300 bg-cream-50 p-6"
            >
              <span className="mb-3 w-fit rounded-full bg-gold-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-600">
                Placeholder — to be replaced
              </span>
              <blockquote className="flex-1 text-sm italic leading-relaxed text-navy-700/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-primary-800">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
