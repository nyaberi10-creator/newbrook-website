import {
  ShieldCheck,
  TrendingUp,
  Bot,
  BarChart3,
} from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Growth-Focused Strategy",
    description:
      "Every recommendation is aligned with measurable business outcomes, not vanity metrics.",
  },
  {
    icon: Bot,
    title: "Marketing + Automation",
    description:
      "We connect advertising, websites, CRM, email automation and AI into one efficient system.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Performance is continuously measured, tested and improved using analytics and reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    description:
      "We focus on sustainable growth, transparency and continuous improvement—not quick wins.",
  },
];

export default function WhyNewbrook() {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
            Why Newbrook
          </span>

          <h2 className="mt-8 text-5xl font-black">
            More than an agency.
            <br />
            A strategic growth partner.
          </h2>

          <p className="mt-8 text-xl text-slate-300 leading-9">
            We don't deliver isolated marketing services.
            We build connected systems that generate, convert and retain customers.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {reason.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}