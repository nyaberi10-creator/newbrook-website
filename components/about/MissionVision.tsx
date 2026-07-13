import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-sm border border-slate-200">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
              <Target className="h-8 w-8 text-blue-600" />
            </div>

            <h2 className="mt-8 text-4xl font-black text-slate-900">
              Our Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              To help ambitious businesses grow by connecting strategy,
              technology, marketing, automation and analytics into one
              measurable growth system.
            </p>

          </div>

          <div className="rounded-3xl bg-slate-950 p-10 text-white">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
              <Eye className="h-8 w-8" />
            </div>

            <h2 className="mt-8 text-4xl font-black">
              Our Vision
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              To become one of Africa's most trusted digital growth partners,
              helping businesses compete globally through innovation,
              automation and measurable marketing.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}