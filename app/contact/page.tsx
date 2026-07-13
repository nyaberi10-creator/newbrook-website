import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import StrategySession from "@/components/contact/StrategySession";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

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