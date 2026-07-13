import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-blue-600 py-28 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-5xl font-black">
          Let's build your next growth system.
        </h2>

        <p className="mt-8 text-xl leading-9 text-blue-100">
          Whether you're scaling an ecommerce brand, growing a professional
          service firm, or launching a startup, Newbrook is ready to help you
          build a smarter marketing ecosystem.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-600 transition hover:scale-105"
        >
          Book a Strategy Session
          <ArrowRight size={20} />
        </Link>

      </div>
    </section>
  );
}