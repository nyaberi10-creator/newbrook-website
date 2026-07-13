import Link from "next/link";
import { ArrowRight, Globe, Megaphone, Bot } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "Business Website & Lead Generation",
    category: "Website Development",
    description:
      "A modern, conversion-focused website designed to build credibility, generate enquiries and provide a strong digital presence for growing businesses.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing Campaign",
    category: "Meta & TikTok Ads",
    description:
      "A scalable advertising strategy focused on reaching the right audience, generating qualified leads and improving return on ad spend.",
  },
  {
    icon: Bot,
    title: "Marketing Automation System",
    category: "Email & AI Automation",
    description:
      "An integrated workflow using email marketing and automation to nurture leads, improve customer engagement and save valuable time.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Solutions
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            The Kind of Work We Help Businesses Achieve
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            As Newbrook Digital grows, this section will showcase real client
            success stories. For now, these examples demonstrate the types of
            digital solutions we build to help businesses grow.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <span className="mt-8 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                  {project.category}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  {project.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Explore Our Services

            <ArrowRight className="ml-2 h-5 w-5" />

          </Link>

        </div>

      </div>
    </section>
  );
}