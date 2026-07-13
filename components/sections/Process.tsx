const steps = [
  "Discovery Workshop",
  "Growth Strategy",
  "Execution",
  "Optimization",
];

export default function Process() {
  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
            Our Process
          </span>

          <h2 className="mt-8 text-5xl font-black">
            From strategy to sustainable growth.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-300">
            We follow a structured process that keeps every project focused,
            measurable and aligned with your business objectives.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="text-5xl font-black text-blue-500">
                0{index + 1}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}