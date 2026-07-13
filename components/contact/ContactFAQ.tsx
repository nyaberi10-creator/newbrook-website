const faqs = [
  {
    question: "How soon will I receive a response?",
    answer:
      "We typically respond to all inquiries within one business day.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with businesses in Kenya, the United States, and around the world through virtual meetings and collaborative tools.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We partner with ecommerce brands, professional service firms, startups, nonprofits, and growing businesses looking to improve their digital presence.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Absolutely. We provide ongoing website maintenance, paid advertising management, Klaviyo email marketing, analytics, and AI automation support.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Questions we often receive.
          </h2>

        </div>

        <div className="mt-16 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
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