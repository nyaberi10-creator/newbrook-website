"use client";

import FadeIn from "@/components/animations/FadeIn";
import {
  Search,
  PenTool,
  Rocket,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We uncover opportunities through research, audits and customer insights.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We design the complete marketing and technology ecosystem around your goals.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description:
      "Campaigns, websites, automations and analytics launch together as one system.",
  },
  {
    icon: BarChart3,
    title: "Optimize",
    description:
      "Continuous testing improves conversion rates and marketing efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description:
      "Once the system performs consistently, we increase investment for sustainable growth.",
  },
];

export default function NewbrookMethod() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="text-center">

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
              The Newbrook Method™
            </span>

            <h2 className="mt-8 text-5xl font-black">
              A framework built for
              measurable business growth.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              Every engagement follows a proven process that connects
              strategy, execution and optimization into one measurable
              growth system.
            </p>

          </div>
        </FadeIn>

        <div className="mt-24 grid gap-8 lg:grid-cols-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeIn
                key={step.title}
                delay={index * 0.15}
              >
                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">

                    <Icon size={32} />

                  </div>

                  <div className="mt-8 text-blue-400 font-bold">
                    0{index + 1}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    {step.description}
                  </p>

                </div>
              </FadeIn>
            );
          })}

        </div>

      </div>
    </section>
  );
}