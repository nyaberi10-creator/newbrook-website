import Link from "next/link";
import {
  Megaphone,
  ArrowRight,
  CheckCircle,
  Clock3,
  Target,
} from "lucide-react";

const articles = [
  {
    title: "Meta Ads vs TikTok Ads: Which Platform Is Right for Your Business?",
    description:
      "Compare Meta and TikTok advertising to determine which platform best fits your goals, audience and budget.",
    time: "12 min read",
    href: "#",
  },
  {
    title: "How to Launch Your First High-Converting Meta Ads Campaign",
    description:
      "Learn the complete process of building campaigns that generate qualified leads and measurable results.",
    time: "9 min read",
    href: "#",
  },
  {
    title: "5 Reasons Your Ads Are Not Converting",
    description:
      "Identify common mistakes that waste advertising budgets and discover practical ways to improve performance.",
    time: "7 min read",
    href: "#",
  },
];

const highlights = [
  "Meta Ads Strategy",
  "TikTok Advertising",
  "Audience Targeting",
  "Conversion Tracking",
  "Campaign Optimization",
  "Performance Reporting",
];

export default function PaidAdsPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-3xl">

            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Megaphone className="mr-2 h-4 w-4" />
              Paid Advertising
            </div>

            <h1 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">
              Grow Faster with Smarter Advertising
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Learn how to create profitable advertising campaigns using Meta
              Ads, TikTok Ads and proven digital marketing strategies.
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
                <Target className="mr-3 h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">
                  What You'll Learn
                </h3>
              </div>

              <div className="mt-8 space-y-4">

                {highlights.map((item) => (

                  <div key={item} className="flex items-start">

                    <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-600" />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Launch Your Campaign
              </Link>

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}