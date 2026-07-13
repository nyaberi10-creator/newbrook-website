"use client";

import FadeIn from "@/components/ui/FadeIn";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Honest & Transparent",
    description:
      "We believe in clear communication, realistic expectations, and solutions that genuinely benefit your business.",
  },
  {
    icon: Lightbulb,
    title: "Modern Technology",
    description:
      "From Next.js and AI automation to Klaviyo, Meta Ads, and TikTok Ads, we use modern tools that help businesses grow.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description:
      "You're not just another client. We work alongside you to understand your goals and create solutions that fit your business.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    description:
      "Every website, campaign, and automation is designed with long-term growth and scalability in mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Why Choose Newbrook Digital
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              A Digital Partner Focused
              <br />
              On Your Business Growth
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We combine strategy, design, advertising, automation, and
              technology to help businesses build a stronger online presence.
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (

              <FadeIn key={reason.title} delay={index * 0.15}>

                <div className="flex gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                    <Icon className="h-8 w-8 text-blue-600" />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {reason.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {reason.description}
                    </p>

                  </div>

                </div>

              </FadeIn>

            );

          })}

        </div>

        <FadeIn delay={0.6}>

          <div className="mt-20 rounded-3xl bg-blue-600 p-12 text-center text-white">

            <h2 className="text-4xl font-black">
              Ready to Grow Your Business?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Whether you're launching a new business or improving an existing
              one, we're here to help you build a stronger digital presence.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-blue-600 transition hover:scale-105"
            >
              Book a Free Strategy Call

              <ArrowRight className="h-5 w-5" />

            </a>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}