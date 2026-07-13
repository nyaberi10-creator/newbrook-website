import { AlertTriangle } from "lucide-react";

const problems = [
  "Your ads generate clicks but not enough customers.",
  "Your website isn't converting visitors into leads.",
  "Marketing tools don't communicate with each other.",
  "You can't clearly measure what is driving revenue.",
];

export default function Problem() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            The Challenge
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Marketing isn't broken.
            <br />
            It's disconnected.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Most businesses invest in marketing channels separately.
            We connect every part of your customer journey into one
            measurable growth system.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {problems.map((problem) => (
            <div
              key={problem}
              className="flex gap-5 rounded-3xl bg-white p-8 shadow-sm"
            >
              <AlertTriangle className="mt-1 text-red-500" />

              <p className="text-lg leading-8 text-slate-700">
                {problem}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}