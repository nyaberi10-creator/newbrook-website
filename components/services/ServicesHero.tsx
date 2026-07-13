import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/10" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-32">

        <div className="max-w-4xl">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Services
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Connected marketing systems
            <br />
            built for measurable growth.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Newbrook helps businesses grow through strategy, paid media,
            websites, email marketing, AI automation and analytics—
            connected into one measurable growth system.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Book Strategy Call
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/case-studies"
              className="rounded-full border border-slate-700 px-8 py-4 font-semibold hover:bg-slate-800"
            >
              View Projects
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}