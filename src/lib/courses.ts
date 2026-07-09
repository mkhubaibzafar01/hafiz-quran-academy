import type { Category } from "./blog";

export type CourseFaq = {
  question: string;
  answer: string;
};

export type Course = {
  slug: string;
  name: string;
  shortName: string;
  audience: string;
  image: string;
  imageAlt: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroDescription: string;
  overview: string[];
  whoItsFor: string[];
  whatYoullLearn: string[];
  faqs: CourseFaq[];
  relatedCategory: Category;
  whatsappMessage: string;
};

export const COURSES: Course[] = [
  {
    slug: "noorani-qaida",
    name: "Noorani Qaida",
    shortName: "Noorani Qaida",
    audience: "Beginners & kids",
    image: "/courses/noorani-qaida.jpg",
    imageAlt: "Child learning Arabic letters from the Noorani Qaida with an online Quran teacher",
    cardDescription:
      "The essential first step — learning Arabic letters, correct pronunciation, and basic reading rules before moving into the Quran itself.",
    metaTitle: "Noorani Qaida Classes for Kids & Beginners",
    metaDescription:
      "Learn Noorani Qaida online with a qualified Hafiz — Arabic letters, pronunciation & joining rules for kids and beginners. Free trial, flexible timing.",
    heroKicker: "For beginners & kids",
    heroDescription:
      "The essential first step before reading the Quran — one-to-one online lessons in Arabic letters, correct pronunciation, and basic reading rules, taught with patience at your child's own pace.",
    overview: [
      "Noorani Qaida is the traditional starting point for anyone learning to read the Quran, and it's where almost every one of our students begins. Rather than jumping straight into Quranic text, the Qaida breaks Arabic reading down into small, manageable steps: recognizing the individual letters, learning how they sound in isolation, and then gradually building up to joined letters, short vowels, and basic Tajweed rules like stretching (madd) and stopping (waqf).",
      "Our online Noorani Qaida course is taught one-to-one by a qualified Hafiz-e-Quran, live over video call, so your child gets the teacher's full attention for the entire lesson — something that's hard to get in a crowded weekend class at a local mosque. Lessons move at the pace your child actually needs, not a fixed classroom schedule, which matters most in these first few months because a shaky foundation in Qaida tends to show up later as hesitant, inaccurate Quran reading.",
      "Most children complete the Qaida in a few months of consistent, short lessons, though the honest answer is that it depends entirely on the child — attention span, prior exposure to Arabic letters, and how often they revise between lessons all matter more than age. We assess where your child is starting from during the free trial lesson, and build a realistic pace from there rather than promising a fixed timeline upfront.",
      "Adults who are new to Arabic reading, including reverts and parents who want to learn alongside their children, are just as welcome in this course. The teaching style doesn't assume any prior knowledge, and there's no judgment about starting from the very beginning — many of our adult students tell us this was the part they were most nervous about, and it turns out to be the most straightforward.",
    ],
    whoItsFor: [
      "Children roughly aged 4–8 who are starting Arabic reading for the first time",
      "Older kids or teens who haven't yet built solid letter recognition and pronunciation",
      "Adults and reverts learning to read Arabic script from scratch, with no prior knowledge assumed",
      "Any student who has struggled with a rushed or inconsistent start elsewhere and wants to rebuild the basics properly",
    ],
    whatYoullLearn: [
      "All 29 Arabic letters, their shapes in different positions (start, middle, end, isolated), and correct pronunciation (makhraj)",
      "Short vowels (fatha, kasra, damma) and how they change a letter's sound",
      "Joining letters together to read simple words and phrases",
      "Tanween, sukoon, and basic stretching (madd) rules",
      "Correct stopping (waqf) so reading doesn't run on incorrectly",
      "A confident, accurate foundation that makes the transition into full Quran reading far smoother",
    ],
    faqs: [
      {
        question: "How long does it take to complete Noorani Qaida?",
        answer:
          "It varies by student, but most children who attend consistent weekly lessons and revise a little between classes finish the Qaida within a few months. Adults often move a little faster. We won't promise a fixed number of weeks upfront — the free trial lesson lets the teacher see where your child is starting from and give you a realistic estimate.",
      },
      {
        question: "My child doesn't know any Arabic letters yet — is that a problem?",
        answer:
          "Not at all. Noorani Qaida is specifically designed for complete beginners and starts from the very first letter. Most of our Qaida students begin with zero prior knowledge of Arabic script.",
      },
      {
        question: "Can adults join this course, or is it only for children?",
        answer:
          "Adults are very welcome, including reverts and parents learning alongside their kids. The pace and teaching style adjust to the student — there's no assumption that you should already know this.",
      },
      {
        question: "What happens after we finish the Qaida?",
        answer:
          "Most students move directly into our Quran Reading (Nazra) with Tajweed course, applying what they learned in the Qaida to real Quranic text with the same teacher, so there's no disruption in continuity.",
      },
    ],
    relatedCategory: "Kids Learning",
    whatsappMessage:
      "Assalamu Alaikum, I'd like to know more about the Noorani Qaida course and book a free trial class.",
  },
  {
    slug: "quran-with-tajweed",
    name: "Quran Reading (Nazra) with Tajweed",
    shortName: "Quran with Tajweed",
    audience: "Kids & adults",
    image: "/courses/quran-reading.jpg",
    imageAlt: "Student reading the Quran with Tajweed rules during a live online lesson",
    cardDescription:
      "Learn to read the Quran fluently with correct Tajweed (pronunciation rules), building accuracy and confidence page by page.",
    metaTitle: "Online Quran Reading Classes with Tajweed",
    metaDescription:
      "Learn to read the Quran fluently with live, one-to-one Tajweed classes online. For kids & adults, taught by a qualified Hafiz. Free trial available.",
    heroKicker: "For kids & adults",
    heroDescription:
      "Read the Quran fluently and correctly, page by page, with a qualified Hafiz correcting your Tajweed in real time — live, one-to-one, online.",
    overview: [
      "Once a student can recognize and join Arabic letters — either from completing Noorani Qaida or from prior schooling — this course moves them into reading directly from the Quran (often called Nazra, 'reading by looking'), with proper Tajweed applied from the very first page rather than corrected later as a bad habit.",
      "Tajweed is the set of rules governing how Quranic Arabic should actually be pronounced: where to lengthen a sound, where letters should be pronounced from deep in the throat versus the front of the mouth, how letters change when they sit next to each other, and dozens of smaller rules that most self-taught readers never fully pick up. Reading without Tajweed isn't 'wrong' in a casual sense, but it does change how the Quran is meant to sound, which is why getting a live teacher's correction — not an app, not a recording — matters so much here.",
      "Because every lesson is one-to-one, the teacher listens to your child (or you) read aloud in real time and corrects mistakes as they happen, the same way a private tutor would for any subject that depends on getting pronunciation exactly right. That immediate feedback loop is genuinely difficult to replicate in a group class of ten or fifteen students, where a teacher might hear each child read for only a minute or two per session.",
      "Students typically work through the Quran juz' by juz' (there are 30 in total), revisiting earlier sections periodically so reading fluency keeps building rather than resetting each time. Some students take this course as a standalone goal — being able to read the entire Quran confidently and correctly — while for others it's the direct stepping stone into our Hifz (memorization) programme once their reading is solid.",
    ],
    whoItsFor: [
      "Children and teens who know their Arabic letters and are ready to read directly from the Quran",
      "Adults who can read some Arabic but want to correct long-standing pronunciation habits",
      "Students preparing to start Hifz, who need accurate, fluent reading first",
      "Anyone who was taught to read as a child but never had their Tajweed properly corrected",
    ],
    whatYoullLearn: [
      "Correct articulation points (makharij) for every Arabic letter",
      "Core Tajweed rules: rules of noon sakinah and tanween, rules of meem sakinah, madd (elongation) types and lengths",
      "Qalqalah, ghunnah, and the rules of ra' (heavy vs. light pronunciation)",
      "Smooth, fluent page-by-page reading with correct stops and pauses",
      "Confidence reading aloud, including in front of family or during prayer",
    ],
    faqs: [
      {
        question: "Do I need to finish Noorani Qaida before starting this course?",
        answer:
          "Not necessarily — if you or your child can already recognize and join Arabic letters (from school, a mosque class, or self-study), you can start directly here. If reading is shaky, we'll usually recommend a short refresher in Qaida first so the Tajweed foundation is solid.",
      },
      {
        question: "What's the difference between this and just 'reading Quran' without Tajweed?",
        answer:
          "Tajweed governs how the Quran is meant to be pronounced — elongations, articulation points, and letter interactions. Reading without it usually still 'works' in a loose sense, but changes the sound and rhythm of the recitation. This course builds correct pronunciation in from day one rather than leaving it to be fixed later.",
      },
      {
        question: "How is progress measured?",
        answer:
          "Your teacher tracks which pages and rules have been covered and revisited, and will let you know directly how reading is progressing — there's no rigid grading system, just honest, ongoing feedback since it's a one-to-one class.",
      },
      {
        question: "Can this lead into Hifz (memorization) later?",
        answer:
          "Yes — this is exactly the course most of our Hifz students complete first. Fluent, Tajweed-correct reading makes memorization far more reliable, since students aren't memorizing mistakes along with the text.",
      },
    ],
    relatedCategory: "Tajweed",
    whatsappMessage:
      "Assalamu Alaikum, I'd like to know more about the Quran Reading with Tajweed course and book a free trial class.",
  },
  {
    slug: "hifz-program",
    name: "Quran Memorization (Hifz)",
    shortName: "Hifz Program",
    audience: "Kids & adults",
    image: "/courses/hifz.webp",
    imageAlt: "Young student memorizing the Quran with a Hafiz teacher during an online Hifz class",
    cardDescription:
      "Structured, one-to-one memorization classes with regular revision plans to help students memorize the Quran at a steady, sustainable pace.",
    metaTitle: "Hifz Classes — Quran Memorization Program",
    metaDescription:
      "Structured, one-to-one online Hifz classes with a qualified Hafiz. Steady memorization pace, regular revision plans, for kids & adults. Book a free trial.",
    heroKicker: "For kids & adults",
    heroDescription:
      "Structured, one-to-one Hifz classes with a built-in revision plan — memorize the Quran at a steady, sustainable pace with a qualified Hafiz-e-Quran guiding every step.",
    overview: [
      "Hifz — memorizing the Quran in full — is a long-term undertaking, and the biggest risk to it isn't ability, it's inconsistency: new memorization (hifz) that isn't revised regularly fades, and revision (dawr/sabaqi) that gets skipped compounds into a growing backlog that eventually overwhelms the student. Our Hifz program is built around solving that problem specifically, not just teaching new pages.",
      "Every Hifz lesson is one-to-one with a qualified Hafiz-e-Quran, who has memorized the entire Quran themselves and understands the specific difficulties of the process — the pages that are easy to confuse with similar ones elsewhere in the Quran, the point around a third of the way through where motivation commonly dips, and the discipline required from both student and parent to keep daily revision happening outside of lesson time.",
      "A typical structure includes new memorization (sabaq), recent revision of the last few days' or weeks' pages (sabaqi), and periodic revision of everything memorized so far (dawr), rotated across the week so nothing is neglected. The exact pace — how many lines or pages per week — is set individually based on the student's age, memory retention, and how much daily revision time is realistic for their schedule, not a generic target applied to everyone.",
      "We're deliberately cautious about promising timelines. You'll sometimes see academies advertise 'complete the Quran in 2 years' — in our experience that kind of fixed promise usually comes at the cost of retention, with students who can recite quickly in a lesson but can't reliably recall the same pages months later. We'd rather set a pace that's actually sustainable for your child (or you) and adjust it over time than lock in a number that sounds impressive but doesn't hold up.",
      "Parents are welcome to sit in on lessons, and we're happy to talk honestly in the free trial about what a realistic starting pace looks like for your specific situation — including if the answer is starting slower than you expected.",
    ],
    whoItsFor: [
      "Children who read the Quran fluently with correct Tajweed and are ready to begin memorizing",
      "Adults who want to memorize the Quran in full, or memorize specific surahs and juz'",
      "Existing Huffaz who need a structured revision plan to maintain what they've already memorized",
      "Students who started Hifz elsewhere but lost consistency and need to rebuild a sustainable routine",
    ],
    whatYoullLearn: [
      "New memorization (sabaq) at a pace matched to the individual student",
      "Structured recent revision (sabaqi) so newly memorized pages don't fade",
      "Periodic full revision (dawr) of everything memorized so far",
      "Techniques for spotting and fixing similar-verse confusion, a common source of memorization mistakes",
      "A sustainable daily revision routine the student can keep up outside of lessons",
    ],
    faqs: [
      {
        question: "How long does it take to memorize the whole Quran?",
        answer:
          "It genuinely depends on the student's age, consistency, and how much daily revision time is realistic — anywhere from around 2 to 5+ years for children with steady weekly progress, sometimes longer for adults balancing work or study alongside Hifz. We're wary of fixed-timeline promises because they tend to come at the cost of proper revision. We'll give you an honest, personalized estimate after the trial lesson.",
      },
      {
        question: "Does my child need to finish reading the whole Quran with Tajweed first?",
        answer:
          "Fluent, Tajweed-correct reading first is strongly recommended, since memorizing mistakes along with the text is much harder to undo later. If reading isn't fully solid yet, we can run reading and early Hifz alongside each other depending on the student.",
      },
      {
        question: "How much daily revision is expected outside of lessons?",
        answer:
          "This is discussed honestly during the trial and adjusted to your family's schedule — consistent short daily revision (even 15–20 minutes) matters far more than long, infrequent sessions. Your teacher will set a realistic routine, not an idealized one.",
      },
      {
        question: "Can adults realistically start Hifz, or is it only practical for children?",
        answer:
          "Adults absolutely memorize the Quran successfully, including those starting later in life. It usually takes a more deliberate, structured revision system since adult schedules are busier, which is exactly what this program is built around.",
      },
    ],
    relatedCategory: "Hifz",
    whatsappMessage:
      "Assalamu Alaikum, I'd like to know more about the Hifz (Quran memorization) program and book a free trial class.",
  },
  {
    slug: "tajweed-rules",
    name: "Tajweed Rules",
    shortName: "Tajweed Rules",
    audience: "All levels",
    image: "/courses/tajweed.webp",
    imageAlt: "Student reviewing Tajweed rules and Arabic pronunciation during an online lesson",
    cardDescription:
      "A focused course on the rules of Tajweed for students who already read Quran but want to refine and perfect their recitation.",
    metaTitle: "Tajweed Rules — Perfect Your Recitation",
    metaDescription:
      "Already read Quran but want to perfect your Tajweed? Focused, one-to-one online Tajweed classes covering every rule, taught by a qualified Hafiz. Free trial.",
    heroKicker: "For all levels",
    heroDescription:
      "Already read the Quran but want to refine your recitation? This focused course covers the full rulebook of Tajweed in depth, one rule at a time, with a qualified Hafiz correcting you live.",
    overview: [
      "This course is different from our general Quran Reading with Tajweed classes in one specific way: it's aimed at students who can already read the Quran reasonably well but want to go deeper into the rules themselves — understanding not just how to apply Tajweed but why each rule exists, and refining recitation that's picked up small inaccuracies over the years.",
      "Many students, especially adults who learned to read as children, read fluently but have accumulated habits that were never fully corrected — a rule of madd applied inconsistently, a letter pronounced from slightly the wrong articulation point, or ghunnah (nasal sound) that's too short or too long. None of these are usually caught in casual reading, but they compound over years of recitation and prayer. This course is built to find and fix exactly those gaps.",
      "Lessons work through the Tajweed rulebook systematically — articulation points (makharij) for every letter, characteristics of letters (sifaat), the rules of noon sakinah, meem sakinah, and laam, the different categories and lengths of madd, qalqalah, and the rules specific to stopping and starting (waqf and ibtida). Rather than treating this as abstract theory, every rule is applied immediately to real Quranic verses so the student hears and corrects it in context, not just memorizes a definition.",
      "This course suits a wide range of students: those preparing to lead prayer (imamah) and wanting recitation that sounds correct and confident, Hifz students who want a dedicated space to polish Tajweed alongside their memorization, and simply anyone who reads the Quran regularly and wants to know they're doing it right rather than assuming so.",
    ],
    whoItsFor: [
      "Students who can already read the Quran but have never had formal Tajweed instruction",
      "Adults revisiting Quran reading who want to correct long-held pronunciation habits",
      "Students preparing to lead prayer (imamah) or recite publicly",
      "Hifz students who want dedicated, focused Tajweed refinement alongside memorization",
    ],
    whatYoullLearn: [
      "Precise articulation points (makharij) and characteristics (sifaat) of every Arabic letter",
      "Full rules of noon sakinah and tanween, meem sakinah, and laam sakinah",
      "All categories and lengths of madd (elongation)",
      "Qalqalah, the rules of ra', and lam of Allah's name",
      "Correct waqf (stopping) and ibtida (starting) points in recitation",
    ],
    faqs: [
      {
        question: "How is this different from the Quran Reading with Tajweed course?",
        answer:
          "The reading course is for students learning to read the Quran page by page for the first time, with Tajweed built in from the start. This course is for students who already read the Quran and want a focused, deep dive into the rules themselves to refine recitation that's already fluent.",
      },
      {
        question: "I've read Quran my whole life — will I actually learn something new?",
        answer:
          "Very often, yes. Most lifelong readers picked up their recitation informally rather than through formal Tajweed instruction, so small inconsistencies go unnoticed for years. This course is specifically designed to surface and correct exactly that.",
      },
      {
        question: "Is this suitable for someone preparing to lead prayer (imamah)?",
        answer:
          "Yes, this is one of the most common reasons students take this course — refining recitation to a standard they feel confident reciting publicly and leading others in prayer.",
      },
      {
        question: "How long does the course take?",
        answer:
          "It's flexible — some students complete a focused review of the core rules in a few months, others prefer an ongoing weekly slot to keep refining recitation over the long term. We'll discuss what fits your goals in the free trial lesson.",
      },
    ],
    relatedCategory: "Tajweed",
    whatsappMessage:
      "Assalamu Alaikum, I'd like to know more about the Tajweed Rules course and book a free trial class.",
  },
  {
    slug: "quran-for-adults-and-reverts",
    name: "Quran for Adults & Reverts",
    shortName: "Adults & Reverts",
    audience: "Adults & new Muslims",
    image: "/courses/adults-reverts.webp",
    imageAlt: "Adult student learning to read the Quran for the first time in a patient online class",
    cardDescription:
      "A patient, judgment-free course designed for adults and reverts starting from scratch — at your own pace, with no prior knowledge assumed.",
    metaTitle: "Online Quran Classes for Adults & Reverts",
    metaDescription:
      "Patient, judgment-free online Quran classes for adults and new Muslims starting from scratch. One-to-one, flexible timing, qualified Hafiz teacher. Free trial.",
    heroKicker: "For adults & new Muslims",
    heroDescription:
      "A patient, judgment-free course built specifically for adults and reverts starting from zero — learn to read the Quran at your own pace, with no prior knowledge assumed.",
    overview: [
      "Starting to learn the Quran as an adult feels different from starting as a child, and we don't think it should be taught the same way. Many adult beginners — whether reverts to Islam or Muslims who never had the chance to learn growing up — carry some nervousness about 'starting late' or being taught alongside young children. This course exists specifically so that doesn't happen: it's adults teaching adults, at an adult pace, with no assumptions and no judgment.",
      "Classes start from wherever you actually are. If you don't yet recognize the Arabic alphabet, lessons begin there, using the same Noorani Qaida method used with our younger students but paced and explained in a way that respects that you're an adult learner, not a child. If you already know some letters or grew up hearing Quran but never learned to read it yourself, your teacher will assess that in the trial lesson and start from the right point rather than the beginning by default.",
      "Because every class is one-to-one, there's no group of strangers to feel self-conscious in front of — just you and your teacher, live over video call, at a time that fits around work, family, or study. Many of our adult students tell us this privacy is what actually made starting possible; a classroom setting felt intimidating, but a private lesson with a patient teacher didn't.",
      "For reverts specifically, we understand this is often tied to a much bigger, ongoing journey of learning about the faith, not just an isolated reading skill. Teachers are patient with questions that go beyond the immediate lesson, and there's genuinely no such thing as a question that's 'too basic' to ask. The goal in these early lessons is simply steady, confident progress — reading a little more accurately and comfortably each week — not perfection from day one.",
    ],
    whoItsFor: [
      "Adults who have never learned to read Arabic script",
      "Reverts to Islam beginning their Quran learning journey",
      "Adults who learned some Quran as children but lost the skill and want to restart properly",
      "Anyone who has felt too self-conscious to learn in a group class and wants a private, patient setting",
    ],
    whatYoullLearn: [
      "Arabic letters, pronunciation, and joining rules from the ground up if needed",
      "Fluent, correct Quran reading with foundational Tajweed",
      "A comfortable, confident reading pace for personal recitation and prayer",
      "Answers to genuine questions about the Quran and the reading process, at your own pace",
      "A realistic, judgment-free path forward — whatever stage you're starting from",
    ],
    faqs: [
      {
        question: "I'm a complete beginner and feel embarrassed about it — is that normal?",
        answer:
          "Extremely normal, and honestly the most common feeling adult students describe before their first lesson. It almost always disappears within the first class once it's clear the teacher is genuinely patient and there's no group of other students watching.",
      },
      {
        question: "Will I be taught the same way as a child would be?",
        answer:
          "The reading method (starting with Noorani Qaida if needed) is similar because it's simply the clearest way to learn Arabic reading, but the pace, explanations, and tone are adjusted for an adult learner — this course is taught by teachers experienced specifically with adult and revert students.",
      },
      {
        question: "How quickly can I expect to progress as an adult learner?",
        answer:
          "Many adults progress through the early stages faster than children do, since focus and consistency are usually easier to sustain. That said, pace still depends on how much time you can commit outside lessons — your teacher will set realistic expectations in the trial class.",
      },
      {
        question: "Can I ask questions about Islam more broadly during lessons, not just about reading?",
        answer:
          "Yes — especially for revert students, questions that come up naturally during learning are always welcome. Teachers are patient with this and see it as part of the same journey, not a distraction from the lesson.",
      },
    ],
    relatedCategory: "Parent Guides",
    whatsappMessage:
      "Assalamu Alaikum, I'm an adult beginner (or revert) interested in Quran classes. I'd like to book a free trial class.",
  },
];

export function getCourseSlugs(): string[] {
  return COURSES.map((course) => course.slug);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((course) => course.slug === slug);
}
