"use client";

import FadeIn from "@/components/ui/FadeIn";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Discover",
    description:
      "We start by understanding your business, goals, audience, and current challenges.",
  },
  {
    icon: PenTool,
    title: "2. Build",
    description:
      "We design and develop websites, marketing campaigns, or automation systems tailored to your needs.",
  },
  {
    icon: Rocket,
    title: "3. Launch",
    description:
      "After testing everything thoroughly, we launch your project with confidence.",
  },
  {
    icon: BarChart3,
    title: "4. Optimize",
    description:
      "We monitor performance and continuously improve results based on real data.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Our Process
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              A Simple Process That Keeps
              <br />
              Your Project Moving
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We believe successful digital projects are built through
              collaboration, transparency, and continuous improvement.
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeIn key={step.title} delay={index * 0.15}>
                <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
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