"use client";

import FadeIn from "@/components/animations/FadeIn";

const stats = [
  {
    value: "6",
    suffix: "+",
    title: "Growth Services",
  },
  {
    value: "100",
    suffix: "%",
    title: "Data-Driven Decisions",
  },
  {
    value: "24",
    suffix: "/7",
    title: "Performance Monitoring",
  },
  {
    value: "1",
    suffix: "",
    title: "Connected Growth System",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

        {stats.map((stat, index) => (
          <FadeIn
            key={stat.title}
            delay={index * 0.1}
          >
            <div className="text-center">

              <div className="text-6xl font-black text-blue-500">
                {stat.value}
                {stat.suffix}
              </div>

              <p className="mt-4 text-slate-300">
                {stat.title}
              </p>

            </div>
          </FadeIn>
        ))}

      </div>
    </section>
  );
}