import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
          Ready to Grow?
        </span>

        <h2 className="mt-8 text-5xl font-black">
          Let's build something exceptional together.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Whether you need a high-performing website, Meta and Google Ads,
          Klaviyo email marketing, AI automation, or a complete digital growth
          strategy, Newbrook is ready to help your business move forward.
        </p>

        <Link
          href="/services"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
        >
          Explore Our Services
          <ArrowRight size={20} />
        </Link>

      </div>
    </section>
  );
}