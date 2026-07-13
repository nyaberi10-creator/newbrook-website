import Link from "next/link";
import {
  Search,
  ArrowRight,
  CheckCircle,
  Clock3,
  LineChart,
} from "lucide-react";

const articles = [
  {
    title: "The Complete Website SEO Checklist for 2026",
    description:
      "Learn the essential technical, on-page and content SEO practices that help websites rank higher in search engines.",
    time: "12 min read",
    href: "#",
  },
  {
    title: "Keyword Research for Small Businesses",
    description:
      "Understand how to find keywords your customers are searching for and build content around them.",
    time: "9 min read",
    href: "#",
  },
  {
    title: "Local SEO: Get Found in Your City",
    description:
      "Optimize your business for local searches using Google Business Profile, reviews and location pages.",
    time: "8 min read",
    href: "#",
  },
];

const topics = [
  "Technical SEO",
  "Keyword Research",
  "On-Page SEO",
  "Local SEO",
  "Core Web Vitals",
  "Google Search Console",
];

export default function SEOPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Search className="mr-2 h-4 w-4" />
              Search Engine Optimization
            </div>

            <h1 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">
              Increase Your Visibility on Google
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Discover proven SEO strategies that help businesses attract more
              organic traffic, generate qualified leads and build long-term
              online growth.
            </p>

          </div>

        </div>
      </section>

      {/* Content */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">

          {/* Articles */}

          <div className="space-y-8 lg:col-span-2">

            <h2 className="text-3xl font-black text-slate-900">
              Featured Guides
            </h2>

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

          {/* Sidebar */}

          <aside>

            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <div className="flex items-center">
                <LineChart className="mr-3 h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Topics Covered
                </h3>
              </div>

              <div className="mt-8 space-y-4">

                {topics.map((topic) => (

                  <div key={topic} className="flex items-start">

                    <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-600" />

                    <span>{topic}</span>

                  </div>

                ))}

              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Improve My SEO
              </Link>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}