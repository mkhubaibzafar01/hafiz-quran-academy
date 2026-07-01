import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TimezoneNote from "@/components/TimezoneNote";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <TimezoneNote />
      <ContactCTA />
    </>
  );
}
