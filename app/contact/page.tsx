import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import StrategySession from "@/components/contact/StrategySession";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Contact NewBrook Digital",

  description:
    "Book a strategy session or contact NewBrook Digital to discuss your website, SEO, advertising or automation project.",

  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />

    <main>
      <ContactHero />
      <StrategySession />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
      <ContactCTA />
    </main>

      <Footer />
    </>
  );
}