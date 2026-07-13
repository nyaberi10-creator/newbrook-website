import {
  Lightbulb,
  Handshake,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern technology, AI and automation to solve real business problems.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We build long-term relationships based on trust, collaboration and transparency.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Every project is designed to generate measurable and sustainable business growth.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We communicate honestly, deliver responsibly and always put our clients first.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Values
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            The principles behind everything we build.
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}