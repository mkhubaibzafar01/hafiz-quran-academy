import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";

const REGIONS = [
  { label: "United Kingdom", note: "Evening & weekend slots available" },
  { label: "United States & Canada", note: "Morning, evening & weekend slots" },
  { label: "Europe", note: "Flexible slots across all time zones" },
];

export default function TimezoneNote() {
  return (
    <section className="bg-cream-50 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Availability
          </span>
          <h2 className="mt-2 font-serif text-2xl font-bold text-primary-800 sm:text-3xl">
            Wherever You Are, You Choose the Time That Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-700/90">
            Families across the UK, USA, and Europe learn with us every
            week. You choose the lesson times that fit your local
            schedule — including evenings, weekends, and school holidays.
          </p>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-3">
          {REGIONS.map((region) => (
            <StaggerItem
              key={region.label}
              className="rounded-xl border border-primary-100 bg-primary-50/60 px-4 py-5 shadow-sm"
            >
              <p className="font-serif font-semibold text-primary-800">
                {region.label}
              </p>
              <p className="mt-1 text-sm text-navy-700/80">{region.note}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
