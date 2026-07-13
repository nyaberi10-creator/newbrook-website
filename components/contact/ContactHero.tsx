import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/10" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-28">

        <div className="max-w-4xl">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Contact Us
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight">
            Let's build your next
            growth system.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Whether you're looking for a high-converting website,
            paid advertising, Klaviyo lifecycle marketing,
            AI automation or complete growth strategy,
            we're ready to help.
          </p>

          <Link
            href="#contact-form"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700"
          >
            Start Your Project
            <ArrowRight size={18}/>
          </Link>

        </div>

      </div>

    </section>
  );
}