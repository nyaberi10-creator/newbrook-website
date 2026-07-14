import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function StrategySession() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-28 text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-semibold text-blue-300">
              Free Strategy Session
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight">
              Let's build a marketing system that actually grows your business.
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-300">
              Every business is different. During your free strategy session,
              we'll review your current marketing, identify growth opportunities,
              and recommend practical next steps—without any obligation.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span>Review your current marketing strategy</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span>Identify your biggest growth opportunities</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span>Receive actionable recommendations</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
                <span>No pressure. No obligation.</span>
              </div>

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
              >
                Book Free Strategy Session

                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>

            </div>

          </div>

          <div className="rounded-[36px] bg-white p-10 text-slate-900 shadow-2xl">

            <div className="flex items-center gap-3">

              <Calendar className="h-7 w-7 text-blue-600" />

              <h3 className="text-3xl font-black">
                What we'll cover
              </h3>

            </div>

            <div className="mt-8 space-y-8">

              <div>

                <h4 className="font-bold">
                  Business Goals
                </h4>

                <p className="mt-2 text-slate-600">
                  Understand where your business is today and where you want it
                  to be.
                </p>

              </div>

              <div>

                <h4 className="font-bold">
                  Marketing Review
                </h4>

                <p className="mt-2 text-slate-600">
                  We'll review your website, advertising, SEO, email marketing,
                  and customer journey.
                </p>

              </div>

              <div>

                <h4 className="font-bold">
                  Growth Roadmap
                </h4>

                <p className="mt-2 text-slate-600">
                  Leave with a clear roadmap outlining practical actions to
                  improve your marketing performance.
                </p>

              </div>

            </div>

            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-slate-100 p-5">

              <Clock className="h-6 w-6 text-blue-600" />

              <span className="font-semibold">
                Approximately 30–45 Minutes
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}