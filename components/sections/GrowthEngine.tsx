const steps = [
  {
    number: "01",
    title: "Attract",
    description:
      "Drive qualified traffic using Meta Ads, TikTok Ads and Google Ads.",
  },
  {
    number: "02",
    title: "Convert",
    description:
      "Landing pages and funnels turn visitors into qualified leads.",
  },
  {
    number: "03",
    title: "Nurture",
    description:
      "Email marketing and automation build trust while your business sleeps.",
  },
  {
    number: "04",
    title: "Retain",
    description:
      "Customer journeys create repeat purchases and stronger lifetime value.",
  },
  {
    number: "05",
    title: "Scale",
    description:
      "Analytics reveal what works so we can confidently invest in growth.",
  },
];

export default function GrowthEngine() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            The Newbrook Growth Engine™
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Marketing shouldn't feel like
            guessing.
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-300">
            Every successful business follows the same growth journey.
            We connect each stage into one predictable revenue system.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-5">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <p className="text-5xl font-black text-blue-500">
                {step.number}
              </p>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}