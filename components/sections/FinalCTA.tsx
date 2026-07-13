import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-blue-600 py-28 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-black">
          Ready to build a smarter growth system?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-blue-100">
          Whether you're launching, scaling or improving performance,
          Newbrook helps connect strategy, marketing and technology into one
          measurable system.
        </p>

        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
        >
          Book Your Strategy Call
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}