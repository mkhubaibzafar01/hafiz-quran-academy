import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TimezoneNote from "@/components/TimezoneNote";
import FAQ from "@/components/FAQ";
import FromOurBlog from "@/components/FromOurBlog";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { websiteSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <TimezoneNote />
      <FAQ />
      <FromOurBlog />
      <ContactCTA />
    </>
  );
}
