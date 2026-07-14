import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Search,
  Globe,
  Megaphone,
  Mail,
  Workflow,
  TrendingUp,
  BarChart3,
} from "lucide-react";

import ResourceCard from "@/components/resources/ResourceCard";
import ResourceSearch from "@/components/resources/ResourceSearch";
import {
  resourceCategories,
  getFeaturedResources,
} from "@/lib/resources";

export default function ResourcesPage() {
  const featured = getFeaturedResources();

  const icons: Record<string, React.ElementType> = {
    "web-development": Globe,
    "paid-advertising": Megaphone,
    "email-marketing": Mail,
    automation: Workflow,
    seo: Search,
    growth: TrendingUp,
  };

  return (
    <main className="bg-slate-50">

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-28 text-white">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-semibold text-blue-200">
            Knowledge Centre
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            Learn how modern businesses
            <span className="block text-blue-400">
              build predictable growth.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Practical guides on websites, SEO, advertising, email marketing,
            automation and growth systems. Designed to help you make informed
            marketing decisions.
          </p>

        </div>

      </section>

      {/* FEATURED */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex items-center justify-between">

            <div>

              <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Featured Guides
              </span>

              <h2 className="mt-3 text-4xl font-black text-slate-900">
                Start here
              </h2>

            </div>

          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            {featured.map((article) => (

              <ResourceCard
                key={article.slug}
                category={article.category}
                title={article.title}
                description={article.excerpt}
                readTime={article.readTime}
                href={`/resources/${article.category}/${article.slug}`}
              />

            ))}

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Browse Topics
            </span>

            <h2 className="mt-4 text-4xl font-black text-slate-900">
              Explore by Category
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {resourceCategories.map((category) => {
              const Icon = icons[category.slug] || BookOpen;

              return (
                <Link
                  key={category.slug}
                  href={`/resources/${category.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                    <Icon className="h-7 w-7 text-blue-600" />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {category.description}
                  </p>

                  <div className="mt-8 flex items-center font-semibold text-blue-600">

                    Explore

                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-28">

        <div className="mx-auto max-w-5xl rounded-[40px] bg-slate-900 px-12 py-20 text-center text-white">

          <BarChart3 className="mx-auto h-14 w-14 text-blue-400" />

          <h2 className="mt-8 text-5xl font-black">
            Need advice specific to your business?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Every business is different. Book a strategy session and let's
            discuss the right approach for your goals.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Book a Strategy Session

            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>

        </div>

      </section>

    </main>
  );
}