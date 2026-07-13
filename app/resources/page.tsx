import Link from "next/link";
import {
  BookOpen,
  Bot,
  Mail,
  Search,
  Megaphone,
  Globe,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Learn how modern websites generate leads, improve credibility and increase conversions.",
    slug: "website-development",
  },
  {
    icon: Megaphone,
    title: "Meta & TikTok Ads",
    description:
      "Practical guides for running high-performing paid advertising campaigns.",
    slug: "paid-ads",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Klaviyo tutorials, automation strategies and customer retention guides.",
    slug: "email-marketing",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Discover how AI and automation can streamline your business and save time.",
    slug: "automation",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Improve your search visibility with practical SEO strategies and best practices.",
    slug: "seo",
  },
  {
    icon: BookOpen,
    title: "Business Growth",
    description:
      "Actionable insights to help you attract customers, improve operations and scale sustainably.",
    slug: "growth",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-slate-50">
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Newbrook Knowledge Center
            </span>

            <h1 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">
              Learn. Implement. Grow.
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Explore practical guides, tutorials and resources covering
              websites, digital marketing, AI automation and business growth.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.slug}
                  href={`/resources/${category.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                    <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                  </div>

                  <h2 className="mt-8 text-2xl font-bold text-slate-900">
                    {category.title}
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    {category.description}
                  </p>

                  <span className="mt-8 inline-flex items-center font-semibold text-blue-600">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>

                </Link>
              );
            })}

          </div>

        </div>
      </section>
    </main>
  );
}