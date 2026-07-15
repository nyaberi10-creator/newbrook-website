"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Newbrook Digital offer?",
    answer:
      "We help businesses grow through website development, Meta Ads, TikTok Ads, email marketing with Klaviyo, SEO, AI automation and digital strategy.",
  },
  {
    question: "Do you work with businesses outside US?",
    answer:
      "Yes. We work remotely with businesses around the world using modern collaboration tools, making it easy to deliver projects regardless of location.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Most websites are completed within 2–6 weeks depending on the project's size, content and required functionality.",
  },
  {
    question: "Can you manage our digital marketing after launch?",
    answer:
      "Absolutely. We provide ongoing website maintenance, advertising management, email marketing, SEO and optimization services to help businesses continue growing.",
  },
  {
    question: "Do you build custom AI and automation systems?",
    answer:
      "Yes. We create AI-powered workflows and automation systems that reduce repetitive tasks, improve customer experiences and save valuable time.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book a free strategy call through our contact page. We'll discuss your goals, recommend the best solution and provide a clear roadmap for your project.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Answers Before You Even Ask
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Here are some of the most common questions businesses ask before
            starting a project with us.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6">
                  <p className="leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}