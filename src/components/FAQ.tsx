import JsonLd from "./JsonLd";
import { faqPageSchema } from "@/lib/schema";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/StaggerGroup";

const FAQS = [
  {
    question: "What age should my child start online Quran classes?",
    answer:
      "Most children are ready to start between ages 4 and 7, but readiness depends more on attention span and interest than a fixed age. We assess this honestly during the free trial class rather than guessing from age alone.",
  },
  {
    question: "How much do Quran classes cost?",
    answer:
      "Pricing depends on the course and how many weekly lessons you choose, so we don't quote a single fixed number here. Message us on WhatsApp with your child's age (or your own level, if you're an adult learner) and we'll give you a straightforward quote — no obligation, and every new student starts with a free trial class first.",
  },
  {
    question: "How long is each class?",
    answer:
      "Session length is matched to the student. Younger children usually start with shorter 15–20 minute sessions, extending to 30–45 minutes as attention span grows. Adult sessions are typically 30–45 minutes.",
  },
  {
    question: "Is the trial class really free?",
    answer:
      "Yes. Every new student — child or adult — gets one free trial lesson with a qualified Hafiz before committing to a weekly schedule. It's the best way to see the teaching style and check the pace feels right.",
  },
  {
    question: "Do you teach adults, or only children?",
    answer:
      "Both. We have dedicated one-to-one courses for children, adults, and reverts starting from scratch — see our Quran for Adults & Reverts course for details on how those lessons are taught differently from children's classes.",
  },
  {
    question: "We're in the UK/USA — can you work with our timezone?",
    answer:
      "Yes. We teach families across the UK, USA, Canada, and Europe, and you choose the days and times that fit your own schedule, including evenings and weekends.",
  },
  {
    question: "Are your teachers actually qualified?",
    answer:
      "Every teacher is a certified Hafiz-e-Quran who has memorized the entire Holy Quran. All lessons are one-to-one, not group classes, so your child gets the teacher's full attention every session.",
  },
  {
    question: "What platform do classes take place on?",
    answer:
      "Live one-to-one lessons run over Zoom, Google Meet, or Skype — whichever you're most comfortable with. Parents are always welcome to sit in on lessons, especially for younger children.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream-50 py-24">
      <JsonLd data={faqPageSchema(FAQS)} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-primary-800 sm:text-4xl">
            Common Questions From Parents &amp; Students
          </h2>
        </Reveal>

        <StaggerGroup className="mt-12 space-y-4">
          {FAQS.map((faq) => (
            <StaggerItem
              key={faq.question}
              className="rounded-2xl border border-primary-100 bg-primary-50/40 p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-primary-800">
                {faq.question}
              </h3>
              <p className="mt-2 leading-relaxed text-navy-700/90">{faq.answer}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
