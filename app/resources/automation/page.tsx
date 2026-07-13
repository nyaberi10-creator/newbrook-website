import Link from "next/link";
import {
  Bot,
  ArrowRight,
  CheckCircle,
  Clock3,
  Workflow,
} from "lucide-react";

const articles = [
  {
    title: "AI Automation for Small Businesses",
    description:
      "Discover how AI can automate repetitive tasks, improve customer service and increase productivity.",
    time: "10 min read",
    href: "#",
  },
  {
    title: "How Workflow Automation Saves Time",
    description:
      "Learn how to connect your business tools and eliminate manual work using automation.",
    time: "8 min read",
    href: "#",
  },
  {
    title: "The Best AI Tools for Growing Businesses",
    description:
      "Explore practical AI tools that help marketing, sales and operations teams work more efficiently.",
    time: "7 min read",
    href: "#",
  },
];

const topics = [
  "AI Workflows",
  "CRM Automation",
  "Lead Nurturing",
  "Zapier",
  "Make.com",
  "Business Automation",
];

export default function AutomationPage() {
  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Bot className="mr-2 h-4 w-4" />
              AI & Automation
            </div>

            <h1 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">
              Automate Your Business for Faster Growth
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Learn how automation and AI reduce manual work, improve efficiency
              and help your business scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <h2 className="text-3xl font-black text-slate-900">
              Featured Guides
            </h2>

            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
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

          <aside>
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center">
                <Workflow className="mr-3 h-6 w-6 text-blue-600" />
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
                Automate My Business
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}