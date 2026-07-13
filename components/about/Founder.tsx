import { Award, Briefcase, Target } from "lucide-react";

export default function Founder() {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 items-center lg:grid-cols-2">

          <div className="aspect-square rounded-3xl bg-slate-800 flex items-center justify-center">
            <span className="text-slate-500">
              Founder Image
            </span>
          </div>

          <div>

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
              Meet the Founder
            </span>

            <h2 className="mt-8 text-5xl font-black">
              Building businesses through
              technology and strategy.
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">
              At Newbrook, we believe growth should never depend on guesswork.
              Every campaign, website, automation and customer journey is built
              with one objective—creating measurable business results through
              strategy, data and modern technology.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">
                <Award className="text-blue-400" />
                <span>Growth-focused digital strategist</span>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase className="text-blue-400" />
                <span>Specialized in marketing systems and automation</span>
              </div>

              <div className="flex items-center gap-4">
                <Target className="text-blue-400" />
                <span>Committed to measurable business outcomes</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}