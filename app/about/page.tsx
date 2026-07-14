import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Founder from "@/components/about/Founder";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutCTA from "@/components/about/AboutCTA";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About NewBrook Digital",

  description:
    "Learn about NewBrook Digital, our mission, approach and how we help businesses grow through strategy, websites and digital marketing.",

  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <CoreValues />
        <Founder />
        <WhyChooseUs />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}