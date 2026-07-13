const systems = [
  {
    title: "Traffic Acquisition",
    subtitle: "Bring the right people",
    description:
      "Meta Ads, Google Ads, TikTok Ads and SEO work together to consistently attract qualified visitors.",
  },
  {
    title: "Conversion System",
    subtitle: "Turn visitors into leads",
    description:
      "Landing pages, forms and CRO remove friction and increase conversions.",
  },
  {
    title: "CRM & Automation",
    subtitle: "Never lose another lead",
    description:
      "Every lead is captured, organised and automatically nurtured through intelligent workflows.",
  },
  {
    title: "Email Marketing",
    subtitle: "Build relationships",
    description:
      "Automated sequences educate prospects, increase trust and generate repeat business.",
  },
  {
    title: "Reporting & Analytics",
    subtitle: "Measure what matters",
    description:
      "Every click, lead and sale is tracked so decisions are based on real business data.",
  },
];

export default function GrowthOS() {
  return (
    <section className="bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-4xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            The Newbrook Growth OS™
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            One connected system.
          </h2>

          <p className="mt-6 text-xl leading-9 text-slate-300">
            Growth happens when every marketing channel supports the next.
            We design systems instead of isolated campaigns.
          </p>

        </div>

        <div className="mt-24 space-y-8">

          {systems.map((system, index) => (
            <div
              key={system.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-10 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800"
            >
              <div className="grid gap-8 lg:grid-cols-12">

                <div className="lg:col-span-2">

                  <div className="text-5xl font-black text-blue-500">
                    0{index + 1}
                  </div>

                </div>

                <div className="lg:col-span-4">

                  <h3 className="text-3xl font-black text-white">
                    {system.title}
                  </h3>

                  <p className="mt-3 text-blue-400">
                    {system.subtitle}
                  </p>

                </div>

                <div className="lg:col-span-6">

                  <p className="text-lg leading-9 text-slate-300">
                    {system.description}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}