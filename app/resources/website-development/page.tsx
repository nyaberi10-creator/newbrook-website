import Link from "next/link";
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Clock3,
} from "lucide-react";

const articles = [
  {
    title: "How to Build a Business Website That Converts Visitors into Customers",
    description:
      "Learn the essential pages, design principles and conversion strategies every modern business website should include.",
    time: "10 min read",
    href: "#",
  },
  {
    title: "7 Mistakes That Cost Businesses Leads Online",
    description:
      "Discover the most common website mistakes and how to fix them before they hurt your business.",
    time: "8 min read",
    href: "#",
  },
  {
    title: "Landing Pages vs Websites: Which Does Your Business Need?",
    description:
      "Understand when to build a complete website and when a focused landing page delivers better results.",
    time: "6 min read",
    href: "#",
  },
];

const checklist = [
  "Fast loading pages",
  "Mobile responsive design",
  "SEO-ready structure",
  "Conversion-focused layout",
  "Clear calls-to-action",
  "Secure HTTPS website",
];

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-white py-24 border-b border-slate-200">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Globe className="mr-2 h-4 w-4" />
              Website Development
            </div>

            <h1 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">
              Build Websites That Actually Grow Your Business
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Learn how professional websites generate leads, build trust,
              improve conversions and become the foundation of a successful
              digital business.
            </p>

          </div>

        </div>

      </section>

      {/* Featured */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-3">

            <div className="lg:col-span-2">

              <h2 className="text-3xl font-black text-slate-900">
                Featured Guides
              </h2>

              <div className="mt-10 space-y-8">

                {articles.map((article) => (

                  <Link
                    key={article.title}
                    href={article.href}
                    className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >

                    <div className="flex items-center text-sm font-medium text-blue-600">

                      <Clock3 className="mr-2 h-4 w-4" />

                      {article.time}

                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      {article.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {article.description}
                    </p>

                    <span className="mt-6 inline-flex items-center font-semibold text-blue-600">

                      Read Guide

                      <ArrowRight className="ml-2 h-4 w-4" />

                    </span>

                  </Link>

                ))}

              </div>

            </div>

            {/* Sidebar */}

            <aside>

              <div className="sticky top-24 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">

                <h3 className="text-2xl font-bold text-slate-900">
                  Website Checklist
                </h3>

                <p className="mt-4 text-slate-600">
                  Every Newbrook website includes:
                </p>

                <div className="mt-8 space-y-4">

                  {checklist.map((item) => (

                    <div
                      key={item}
                      className="flex items-start"
                    >

                      <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-600" />

                      <span>{item}</span>

                    </div>

                  ))}

                </div>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Start Your Website Project
                </Link>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
}