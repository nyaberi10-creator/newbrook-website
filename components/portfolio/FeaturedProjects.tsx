export default function FeaturedProjects() {
  const projects = [
    {
      title: "Website Development",
      description:
        "Modern, responsive websites built for speed, SEO, and conversions.",
      results: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Lead Generation",
      ],
    },
    {
      title: "Meta Ads Campaigns",
      description:
        "Data-driven Facebook and Instagram advertising that generates quality leads and sales.",
      results: [
        "Lead Generation",
        "Sales Campaigns",
        "Audience Targeting",
        "ROAS Optimization",
      ],
    },
    {
      title: "Google Ads",
      description:
        "High-performing search and display campaigns designed to attract customers with buying intent.",
      results: [
        "Search Ads",
        "Performance Max",
        "Remarketing",
        "Conversion Tracking",
      ],
    },
    {
      title: "Klaviyo Email Marketing",
      description:
        "Automated email flows that increase customer retention and lifetime value.",
      results: [
        "Welcome Flows",
        "Cart Recovery",
        "Post Purchase",
        "Campaign Management",
      ],
    },
    {
      title: "AI Automation",
      description:
        "Workflow automation using AI and modern automation platforms to eliminate repetitive work.",
      results: [
        "CRM Automation",
        "Lead Qualification",
        "Workflow Automation",
        "AI Integrations",
      ],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Actionable dashboards and reporting that help businesses make smarter marketing decisions.",
      results: [
        "GA4",
        "Looker Studio",
        "Custom Dashboards",
        "Performance Reports",
      ],
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Work
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Solutions that drive measurable growth.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Every project is designed around one goal: helping businesses grow
            through strategy, technology, and measurable marketing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.results.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}