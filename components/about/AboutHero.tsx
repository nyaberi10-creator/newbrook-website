import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/10" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-28">

        <div className="max-w-4xl">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            About Newbrook
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Building growth systems,
            not isolated marketing campaigns.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            We believe sustainable business growth comes from connecting
            strategy, technology, marketing, automation and analytics into one
            measurable system.
          </p>

          <div className="mt-12">

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700"
            >
              Let's Grow Together
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}