import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="bg-blue-600 py-28 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-black">
          Ready to build a smarter growth system?
        </h2>

        <p className="mt-8 text-xl leading-9 text-blue-100">
          Whether you need better advertising, a high-converting website,
          Klaviyo lifecycle marketing, AI automation or analytics,
          we'll help you connect every part of your customer journey.
        </p>

        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-blue-600 transition hover:scale-105"
        >
          Book Your Strategy Session
          <ArrowRight size={20} />
        </Link>

      </div>
    </section>
  );
}