const stats = [
  {
    number: "50+",
    title: "Projects Delivered",
  },
  {
    number: "100%",
    title: "Custom Strategies",
  },
  {
    number: "24/7",
    title: "Automation Capabilities",
  },
  {
    number: "ROI",
    title: "Growth Focused",
  },
];

export default function Results() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-300">
            Results
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Everything we build is focused on measurable business growth.
          </h2>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-slate-700 p-10 text-center"
            >
              <div className="text-5xl font-black text-blue-400">
                {stat.number}
              </div>

              <p className="mt-4 text-lg text-slate-300">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}