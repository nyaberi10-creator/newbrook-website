import Link from "next/link";
import {
  Search,
  PenTool,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "We learn about your business, goals, audience and challenges. Every successful project begins with a clear strategy.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Build",
    description:
      "We design and develop websites, marketing systems and automations tailored to your business objectives.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch",
    description:
      "After thorough testing, we launch your project with confidence and ensure everything performs as expected.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Optimize & Scale",
    description:
      "Growth doesn't stop after launch. We continuously refine your digital strategy using real data and insights.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Process
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            A Simple Process Built Around Your Success
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            We believe every successful digital project follows a clear,
            collaborative process. From strategy to continuous optimization,
            we work with you every step of the way.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {process.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <span className="text-sm font-bold tracking-widest text-blue-600">
                  STEP {item.step}
                </span>

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">

                  <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-slate-900 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Ready to Start Your Digital Growth Journey?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're launching a new business or scaling an existing one,
            we'll guide you through every stage with clarity, transparency and
            measurable results.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Start Your Project

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}