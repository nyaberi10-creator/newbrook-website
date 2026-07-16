import {
  ShieldCheck,
  MessageSquare,
  Target,
  Sparkles,
} from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "Honest Partnership",
    description:
      "We believe trust is earned. You'll always receive transparent communication, realistic recommendations, and clear expectations—never exaggerated promises.",
  },
  {
    icon: Target,
    title: "Growth With Purpose",
    description:
      "Every website, campaign, automation, and strategy is designed with one objective in mind: helping your business attract better leads and achieve sustainable growth.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "You'll always know what we're working on, why it matters, and what results to expect. No confusing reports or unnecessary jargon.",
  },
  {
    icon: Sparkles,
    title: "Quality Without Shortcuts",
    description:
      "We build modern digital experiences using proven best practices, scalable systems, and attention to detail that continues to deliver value long after launch.",
  },
];

export default function NewbrookPromise() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Promise
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            What Every Client Can Expect
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-600">
            We're building NewBrook Digital one successful partnership at a
            time. While we're growing our portfolio, our commitment never
            changes: deliver exceptional work, communicate openly, and focus on
            results that genuinely move your business forward.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {promises.map((promise) => {
            const Icon = promise.icon;

            return (
              <div
                key={promise.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {promise.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {promise.description}
                </p>
              </div>
            );
          })}

        </div>

        <div className="mt-24 rounded-3xl bg-slate-900 p-12 text-center text-white">

          <h3 className="text-3xl font-black">
            Our Commitment
          </h3>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-300">
            We may not be the right fit for every project—and we're honest about
            that. But if we choose to work together, you can expect strategic
            thinking, consistent communication, and a genuine commitment to
            helping your business succeed.
          </p>

        </div>

      </div>
    </section>
  );
}