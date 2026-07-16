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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
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
              and recommend practical next steps—with absolutely no obligation.
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

            {/* CTA BUTTON */}
            <div className="mt-12">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Book Your Free Strategy Session

                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="rounded-[36px] bg-white p-10 text-slate-900 shadow-2xl">

            <div className="flex items-center gap-3">
              <Calendar className="h-7 w-7 text-blue-600" />

              <h3 className="text-3xl font-black">
                What We'll Cover
              </h3>
            </div>

            <div className="mt-8 space-y-8">

              <div>
                <h4 className="font-bold text-lg">
                  Business Goals
                </h4>

                <p className="mt-2 text-slate-600">
                  Understand where your business is today and where you want it
                  to be over the next 6–12 months.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">
                  Marketing Review
                </h4>

                <p className="mt-2 text-slate-600">
                  We'll review your website, SEO, paid ads, email marketing,
                  automation, and customer journey.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">
                  Growth Roadmap
                </h4>

                <p className="mt-2 text-slate-600">
                  You'll leave with a practical roadmap outlining the highest
                  impact opportunities for growing your business.
                </p>
              </div>

            </div>

            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-slate-100 p-5">
              <Clock className="h-6 w-6 text-blue-600" />

              <span className="font-semibold">
                30–45 Minute Strategy Session
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}