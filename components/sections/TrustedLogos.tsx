const logos = [
  "Google",
  "Meta",
  "TikTok",
  "HubSpot",
  "GA4",
  "Zapier",
];

export default function TrustedLogos() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Technologies We Work With
        </p>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="rounded-2xl border border-slate-200 bg-slate-50 py-6 text-lg font-bold text-slate-700 transition hover:border-blue-500 hover:bg-white hover:text-blue-600"
            >
              {logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}