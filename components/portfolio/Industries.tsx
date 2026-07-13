const industries = [
  "E-commerce",
  "Healthcare",
  "Education",
  "Real Estate",
  "Professional Services",
  "Nonprofits",
  "Technology Startups",
  "Hospitality",
  "Financial Services",
  "Construction",
  "Manufacturing",
  "Retail",
];

export default function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Supporting businesses across industries.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Every industry has unique challenges. We build tailored digital
            strategies that help businesses attract customers, increase revenue,
            and scale efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center font-semibold text-slate-800 transition hover:border-blue-500 hover:bg-blue-50"
            >
              {industry}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}