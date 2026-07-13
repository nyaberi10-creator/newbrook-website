"use client";

import FadeIn from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

const commitments = [
  "Clear communication from start to finish.",
  "Solutions tailored to your business goals.",
  "Modern technologies and industry best practices.",
  "Responsive support throughout your project.",
  "Focus on long-term business growth.",
  "Continuous learning to keep up with digital trends.",
];

export default function Commitment() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                Our Commitment
              </span>

              <h2 className="mt-6 text-5xl font-black text-slate-900">
                Building Long-Term Partnerships
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Every project we take on is treated with care, attention to
                detail, and a commitment to helping your business grow.
                Our goal isn't simply to deliver a website or marketing
                campaign—it's to become a trusted digital partner.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <div className="space-y-6">

                {commitments.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >

                    <CheckCircle2 className="mt-1 h-6 w-6 text-blue-600" />

                    <p className="text-lg text-slate-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}