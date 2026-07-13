import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const categories = {
  "website-development": {
    title: "Website Development",
    description:
      "Learn how modern websites generate leads, build trust and convert visitors into customers.",
  },

  "paid-ads": {
    title: "Meta & TikTok Ads",
    description:
      "Discover strategies for running profitable Meta Ads, TikTok Ads and paid advertising campaigns.",
  },

  "email-marketing": {
    title: "Email Marketing",
    description:
      "Master Klaviyo, email automation and customer retention strategies that increase revenue.",
  },

  automation: {
    title: "AI & Automation",
    description:
      "Explore AI tools, workflow automation and productivity systems for modern businesses.",
  },

  seo: {
    title: "SEO",
    description:
      "Learn practical SEO techniques that improve your rankings and generate long-term organic traffic.",
  },

  growth: {
    title: "Business Growth",
    description:
      "Actionable strategies for scaling your business using technology, marketing and automation.",
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const data =
    categories[category as keyof typeof categories];

  if (!data) {
    notFound();
  }

  return (
    <main className="bg-white">

      <section className="py-28">

        <div className="mx-auto max-w-5xl px-6">

          <Link
            href="/resources"
            className="inline-flex items-center font-semibold text-blue-600 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>

          <span className="mt-10 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Knowledge Center
          </span>

          <h1 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">
            {data.title}
          </h1>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            {data.description}
          </p>

          <div className="mt-20 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12">

            <h2 className="text-3xl font-bold text-slate-900">
              Articles Coming Soon
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We're creating in-depth guides, tutorials and practical resources
              to help businesses grow using modern digital marketing,
              automation and web technologies.
            </p>

            <div className="mt-10 space-y-4">

              <div className="rounded-xl bg-white p-5 shadow-sm">
                🚀 Complete Guide Coming Soon
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                📈 Best Practices
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                ✅ Free Checklist
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                🎯 Expert Tips
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}