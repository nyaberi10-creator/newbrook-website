import { CalendarDays } from "lucide-react";

export default function StrategySession() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="rounded-3xl border border-slate-200 p-12 shadow-sm">

          <div className="flex items-center gap-5">

            <div className="rounded-2xl bg-blue-100 p-4">
              <CalendarDays className="text-blue-600" />
            </div>

            <div>

              <h2 className="text-4xl font-black">
                Free Strategy Session
              </h2>

              <p className="mt-3 text-lg text-slate-600">
                Every project starts with understanding your business,
                goals and opportunities.
              </p>

            </div>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold">45 Minutes</h3>
              <p className="mt-3 text-slate-600">
                Discovery & Growth Discussion
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold">Business Audit</h3>
              <p className="mt-3 text-slate-600">
                Identify growth opportunities
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h3 className="font-bold">Action Plan</h3>
              <p className="mt-3 text-slate-600">
                Receive practical next steps
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}