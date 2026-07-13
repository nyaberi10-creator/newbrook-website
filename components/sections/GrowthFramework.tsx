import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We audit your business, competitors, audience and current marketing performance to identify growth opportunities.",
  },
  {
    icon: PenTool,
    title: "Build",
    description:
      "We design your complete growth system including website, advertising, automation and analytics.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Campaigns, landing pages and automations are deployed with proper tracking from day one.",
  },
  {
    icon: BarChart3,
    title: "Scale",
    description:
      "We optimize continuously using real performance data to increase conversions and revenue.",
  },
];

export default function GrowthFramework() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Framework
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            A proven process built for sustainable growth.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Every project follows the same disciplined framework so that strategy,
            execution and measurement stay connected from start to finish.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
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

      </div>
    </section>
  );
}