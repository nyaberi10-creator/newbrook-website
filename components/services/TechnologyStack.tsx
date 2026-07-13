const tools = [
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "Klaviyo",
  "HubSpot",
  "Google Analytics 4",
  "Looker Studio",
  "OpenAI",
  "n8n",
  "Zapier",
  "Make",
  "Vercel",
];

export default function TechnologyStack() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Technology Stack
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Built using industry-leading platforms.
          </h2>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-4">

          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-2xl bg-white p-8 text-center font-semibold shadow-sm transition hover:shadow-lg"
            >
              {tool}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}