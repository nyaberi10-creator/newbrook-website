const testimonials = [
  {
    name: "Future Client",
    company: "Your Business Could Be Next",
    quote:
      "We're excited to partner with businesses that value growth, innovation, and measurable results. Your success story could be featured here.",
  },
  {
    name: "Growing Brands",
    company: "Across Multiple Industries",
    quote:
      "At Newbrook, every project is built around strategy, performance, and long-term partnerships rather than one-time transactions.",
  },
  {
    name: "Our Promise",
    company: "Newbrook",
    quote:
      "We don't just deliver websites and campaigns—we build systems that help businesses grow with confidence.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Client Success
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Building lasting partnerships.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200"
            >
              <p className="text-lg leading-8 text-slate-600">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">{item.name}</h3>
                <p className="text-blue-600">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}