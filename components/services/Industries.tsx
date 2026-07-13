const industries = [
  "Ecommerce",
  "Professional Services",
  "Healthcare",
  "Real Estate",
  "Construction",
  "Education",
  "Financial Services",
  "Startups & SaaS",
];

export default function Industries() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Industries
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Helping ambitious businesses grow.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Every industry has unique challenges, but the principles of sustainable
            growth remain the same.
          </p>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-4">

          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-slate-200 p-8 text-center text-lg font-semibold transition hover:border-blue-500 hover:shadow-lg"
            >
              {industry}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}