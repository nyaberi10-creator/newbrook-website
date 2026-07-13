import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    category: "Lead Generation",
    title: "Multi-Channel Growth Campaign",
    description:
      "A connected advertising and automation strategy designed to increase qualified leads while reducing acquisition costs.",
  },
  {
    category: "Website Experience",
    title: "High-Converting Business Website",
    description:
      "A modern website focused on speed, trust, SEO and conversion optimization to support long-term business growth.",
  },
  {
    category: "Marketing Automation",
    title: "Automated Customer Journey",
    description:
      "Integrated CRM, email automation and lead nurturing workflows to improve response time and customer engagement.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-2xl">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Featured Projects
            </span>

            <h2 className="mt-8 text-5xl font-black text-slate-900">
              Solutions designed for measurable business outcomes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every engagement is tailored to the client's goals, combining
              strategy, execution and analytics into one connected system.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
          >
            View all projects
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                {project.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {project.description}
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-600"
              >
                Discuss a similar project
                <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}