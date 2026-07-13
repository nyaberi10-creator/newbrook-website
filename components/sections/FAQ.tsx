const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "We work with ambitious businesses that want to improve lead generation, customer acquisition and long-term growth.",
  },
  {
    question: "Do you only manage advertising?",
    answer:
      "No. We combine strategy, websites, paid media, automation and analytics into one connected growth system.",
  },
  {
    question: "How do projects begin?",
    answer:
      "Every engagement starts with a strategy session where we understand your goals, challenges and opportunities.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We collaborate with in-house teams and external partners to strengthen your marketing ecosystem.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 p-8"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}