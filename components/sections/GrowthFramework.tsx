"use client";

import {
  Rocket,
  Globe,
  Megaphone,
  Mail,
  Bot,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Build",
    description:
      "Create a fast, modern website that establishes trust and turns visitors into qualified leads.",
  },
  {
    icon: Megaphone,
    title: "Attract",
    description:
      "Drive targeted traffic using Meta Ads, TikTok Ads, SEO, and digital marketing strategies.",
  },
  {
    icon: Mail,
    title: "Convert",
    description:
      "Nurture leads with landing pages, Klaviyo email automation, and conversion-focused customer journeys.",
  },
  {
    icon: Bot,
    title: "Automate",
    description:
      "Remove repetitive work with AI-powered workflows that improve efficiency and customer experience.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Use analytics, optimization, and continuous improvements to help your business grow sustainably.",
  },
];

export default function GrowthFramework() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            The Newbrook Growth System™
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            A Proven Digital Growth Journey
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Every successful business follows a growth journey. We help you
            build the right digital foundation, attract the right audience,
            convert more customers, automate operations, and scale with
            confidence.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-5">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

        <div className="mt-20 rounded-3xl bg-blue-600 p-10 text-center text-white">

          <Rocket className="mx-auto h-14 w-14" />

          <h3 className="mt-6 text-4xl font-black">
            Growth Doesn't Happen by Chance
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-blue-100">
            We combine strategy, technology, marketing, and automation into one
            complete system designed to help ambitious businesses grow faster
            and smarter.
          </p>

        </div>

      </div>
    </section>
  );
}