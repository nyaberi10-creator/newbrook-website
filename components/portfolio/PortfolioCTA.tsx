import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-black">
          Ready to become our next success story?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Whether you need a new website, Meta Ads, Google Ads, Klaviyo email
          marketing, AI automation, or a complete digital growth strategy, we're
          ready to help you achieve measurable results.
        </p>

        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
        >
          Book Your Free Strategy Session
          <ArrowRight size={20} />
        </Link>

      </div>
    </section>
  );
}