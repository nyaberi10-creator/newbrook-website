"use client";

import FadeIn from "@/components/animations/FadeIn";
import {
  MousePointerClick,
  Globe,
  Users,
  Mail,
  Bot,
  DollarSign,
  Repeat,
} from "lucide-react";

const journey = [
  {
    icon: MousePointerClick,
    title: "Traffic",
    text: "Meta Ads, Google Ads, TikTok Ads and SEO attract qualified visitors.",
  },
  {
    icon: Globe,
    title: "Website",
    text: "Visitors land on a high-converting website or landing page.",
  },
  {
    icon: Users,
    title: "Lead Capture",
    text: "Forms, chat and lead magnets capture visitor information.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    text: "Klaviyo automations nurture leads with personalized email flows.",
  },
  {
    icon: Bot,
    title: "Automation",
    text: "CRM workflows, AI agents and automations qualify and route leads.",
  },
  {
    icon: DollarSign,
    title: "Sales",
    text: "Sales teams receive qualified opportunities with complete context.",
  },
  {
    icon: Repeat,
    title: "Retention",
    text: "Email campaigns and customer journeys increase repeat purchases and referrals.",
  },
];

export default function GrowthJourney() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Growth Journey
            </span>

            <h2 className="mt-8 text-5xl font-black text-slate-900">
              Every customer follows a journey.
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Our job is to make every step measurable, connected and optimized
              so your marketing works as one complete system.
            </p>

          </div>
        </FadeIn>

        <div className="mt-24 space-y-8">

          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.title}
                delay={index * 0.08}
              >
                <div className="flex items-start gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Icon size={30} />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      {item.text}
                    </p>

                  </div>

                </div>
              </FadeIn>
            );
          })}

        </div>

      </div>
    </section>
  );
}