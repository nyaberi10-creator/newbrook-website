import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import StrategySession from "@/components/sections/StrategySession";

export const metadata: Metadata = {
  title: "Book a Free Strategy Session",
  description: "Book a free strategy session with NewBrook Digital.",
};

export default function BookPage() {
  return (
    <main className="bg-slate-50">
      <ContactHero />

      <StrategySession />
    </main>
  );
}