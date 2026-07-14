import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.2),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <div className="inline-flex items-center rounded-full bg-blue-500/20 px-5 py-2 text-sm font-semibold text-blue-300">
            <TrendingUp className="mr-2 h-4 w-4" />
            Case Studies
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            Real Growth.
            <br />
            Real Strategy.
            <br />
            Real Results.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Every project is built around measurable business growth.
            Explore how strategic websites, advertising, SEO,
            automation and email marketing create predictable,
            scalable results.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Start Your Project
            </Link>

            <Link
              href="#case-studies"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              View Case Studies

              <ArrowRight className="ml-2 h-5 w-5" />

            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}