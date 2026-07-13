import {
  Target,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Strategy Before Execution",
    description:
      "We begin by understanding your business, customers and goals before recommending technology or marketing solutions.",
  },
  {
    icon: TrendingUp,
    title: "Built for Long-Term Growth",
    description:
      "Every website, campaign and automation is designed to increase leads, improve conversions and support sustainable growth.",
  },
  {
    icon: Lightbulb,
    title: "Modern Technology",
    description:
      "We use proven platforms and the latest digital tools to build solutions that are fast, scalable and future-ready.",
  },
  {
    icon: ShieldCheck,
    title: "A Partner You Can Trust",
    description:
      "We believe in clear communication, measurable results and building long-term relationships with every client.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Newbrook Digital
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            More Than a Digital Agency
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            We don't simply deliver websites or advertising campaigns.
            We create complete digital systems that help businesses attract
            customers, improve operations and scale with confidence.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                  <Icon className="h-8 w-8 text-blue-600" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  {reason.description}
                </p>

              </div>
            );
          })}

        </div>

        <div className="mt-20 rounded-3xl bg-blue-600 p-12 text-center">

          <h3 className="text-4xl font-black text-white">
            Your Success Is Our Success
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're launching a new business, improving your marketing,
            or automating operations, our goal is to become your long-term
            digital growth partner—not just another service provider.
          </p>

        </div>

      </div>
    </section>
  );
}