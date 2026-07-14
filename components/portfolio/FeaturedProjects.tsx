import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Mail,
  Megaphone,
  Search,
  TrendingUp,
  Workflow,
} from "lucide-react";

import { caseStudies } from "@/lib/caseStudies";

const icons = {
  "Website Development": Globe,
  "Paid Advertising": Megaphone,
  "Email Marketing": Mail,
  SEO: Search,
  Automation: Workflow,
  "Growth Strategy": TrendingUp,
};

export default function FeaturedProjects() {
  return (
    <section
      id="case-studies"
      className="bg-slate-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Case Studies
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Real business challenges.
            <br />
            Measurable growth.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Every engagement is focused on solving business problems,
            improving performance and creating sustainable growth.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {caseStudies.map((study) => {

            const Icon =
              icons[study.category as keyof typeof icons];

            return (

              <div
                key={study.slug}
                className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="flex items-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                    <Icon className="h-7 w-7 text-blue-600" />

                  </div>

                  <div className="ml-5">

                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                      {study.category}
                    </p>

                    <h3 className="text-2xl font-black text-slate-900">
                      {study.title}
                    </h3>

                  </div>

                </div>

                <div className="mt-8">

                  <h4 className="font-bold text-slate-900">
                    Challenge
                  </h4>

                  <p className="mt-3 leading-8 text-slate-600">
                    {study.challenge}
                  </p>

                </div>

                <div className="mt-8">

                  <h4 className="font-bold text-slate-900">
                    Solution
                  </h4>

                  <p className="mt-3 leading-8 text-slate-600">
                    {study.solution}
                  </p>

                </div>

                <div className="mt-10 grid grid-cols-3 gap-4">

                  {study.results.map((result) => (

                    <div
                      key={result}
                      className="rounded-2xl bg-slate-100 p-4 text-center"
                    >
                      <p className="font-bold text-blue-600">
                        {result}
                      </p>
                    </div>

                  ))}

                </div>

                <Link
                  href={`/portfolio/${study.slug}`}
                  className="mt-10 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  View Full Case Study

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Link>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}