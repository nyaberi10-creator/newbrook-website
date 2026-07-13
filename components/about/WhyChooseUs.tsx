const reasons = [
  "Integrated marketing and technology solutions",
  "Transparent reporting and measurable KPIs",
  "AI-powered automation and workflows",
  "Klaviyo lifecycle marketing expertise",
  "Scalable systems built for long-term growth",
  "A strategic partner focused on business outcomes",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Why Businesses Choose Newbrook
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Trusted for strategy.
            Chosen for results.
          </h2>

        </div>

        <div className="mt-16 space-y-6">

          {reasons.map((reason) => (
            <div
              key={reason}
              className="rounded-2xl border border-slate-200 p-6 text-lg font-medium transition hover:border-blue-500 hover:shadow-md"
            >
              ✓ {reason}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}