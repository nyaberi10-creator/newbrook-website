"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-40 pb-32">

      {/* Background Effects */}

      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl opacity-40"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <FadeIn>

            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              🚀 Websites • Meta Ads • Klaviyo • AI Automation
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl">

              Helping Businesses Grow Through

              <span className="text-blue-600">
                {" "}Smart Websites, Marketing &
                Automation
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">

              We create modern websites, manage advertising campaigns,
              build email marketing systems with Klaviyo,
              and automate business processes using AI-powered tools.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Book Strategy Call
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-slate-300 px-8 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
              >
                Explore Services
              </Link>

            </div>

            {/* OUR EXPERTISE */}

            <div className="mt-16 grid gap-6 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="font-bold text-xl">
                  Website Development
                </h3>

                <p className="mt-3 text-slate-600">
                  Fast, responsive websites built for performance and growth.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="font-bold text-xl">
                  Meta Ads
                </h3>

                <p className="mt-3 text-slate-600">
                  Facebook & Instagram advertising focused on generating quality leads.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="font-bold text-xl">
                  Klaviyo Email Marketing
                </h3>

                <p className="mt-3 text-slate-600">
                  Automated email flows that keep customers engaged.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="font-bold text-xl">
                  AI Automation
                </h3>

                <p className="mt-3 text-slate-600">
                  Smart workflows that save time and improve efficiency.
                </p>

              </div>

            </div>

          </FadeIn>

          {/* RIGHT */}

          <FadeIn delay={0.3}>

            <div className="rounded-3xl bg-white p-10 shadow-2xl">

              <h2 className="text-3xl font-black text-slate-900">
                Why Choose Newbrook Digital?
              </h2>

              <p className="mt-6 leading-8 text-slate-600">

                We partner with businesses to build digital solutions that
                support sustainable growth. Every project is tailored to your
                goals and designed with long-term success in mind.

              </p>

              <div className="mt-10 space-y-5">

                <div className="rounded-2xl bg-slate-50 p-5">

                  <h3 className="font-bold">
                    ✔ Strategy-Driven
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Every project begins with understanding your business and
                    your customers.
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <h3 className="font-bold">
                    ✔ Built for Growth
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Websites and marketing systems designed to scale as your
                    business grows.
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <h3 className="font-bold">
                    ✔ Modern Technology
                  </h3>

                  <p className="mt-2 text-slate-600">
                    We use Next.js, Klaviyo, Meta Ads, TikTok Ads and AI tools
                    to create reliable digital solutions.
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">

                  <h3 className="font-bold">
                    ✔ Transparent Partnership
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Clear communication, honest recommendations and ongoing
                    support throughout your project.
                  </p>

                </div>

              </div>

            </div>

          </FadeIn>

        </div>

      </div>

    </section>
  );
}