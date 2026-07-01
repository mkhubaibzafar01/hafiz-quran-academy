import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";
import HowItWorksIllustration from "./illustrations/HowItWorksIllustration";

const STEPS = [
  {
    step: "1",
    title: "Message us on WhatsApp",
    description:
      "Send us a message to introduce yourself and share what you or your child would like to learn.",
  },
  {
    step: "2",
    title: "Book a free trial lesson",
    description:
      "We'll arrange a free trial class so you can experience the teaching style with no commitment.",
  },
  {
    step: "3",
    title: "Choose your own class time",
    description:
      "Pick a regular weekly schedule that fits your timezone and daily routine — mornings, evenings, or weekends.",
  },
  {
    step: "4",
    title: "Start learning",
    description:
      "Join your live one-to-one lessons over Zoom, Google Meet, or Skype — whichever you prefer.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            How It Works
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
            Getting Started Is Simple
          </h2>
        </Reveal>

        <StaggerGroup className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent lg:block"
          />
          {STEPS.map((item) => (
            <StaggerItem key={item.step} className="relative text-center">
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 font-serif text-xl font-bold text-cream-50 shadow-lg shadow-primary-600/30">
                {item.step}
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-primary-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/90">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal direction="up" delay={0.1} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-primary-100 shadow-lg shadow-primary-900/10">
            <HowItWorksIllustration className="aspect-[16/7] w-full" />
          </div>
        </Reveal>

        <div className="mt-16 flex justify-center">
          <WhatsAppButton
            className="px-8 py-4 text-lg"
            message="Assalamu Alaikum, I'd like to get started with Quran classes."
          >
            Get Started on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
