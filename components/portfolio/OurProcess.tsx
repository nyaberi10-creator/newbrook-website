const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We take time to understand your business, goals, audience, and current challenges before recommending a solution.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A tailored roadmap is created covering website development, paid advertising, email marketing, AI automation, and analytics where needed.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our team designs, builds, launches, and optimizes every solution with performance and scalability in mind.",
  },
  {
    number: "04",
    title: "Growth",
    description:
      "We continuously measure, improve, and optimize campaigns and systems to help your business achieve long-term growth.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            A proven process for sustainable growth.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Every successful project follows a structured process that keeps
            strategy, execution, and measurable results aligned.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200 hover:shadow-lg transition"
            >
              <div className="text-5xl font-black text-blue-600">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}