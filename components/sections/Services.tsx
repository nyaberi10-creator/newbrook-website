import {
  Megaphone,
  Globe,
  Workflow,
  ChartColumn,
  Search,
  PencilRuler,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Advertising",
    description: "High-performing Meta, Google and TikTok campaigns focused on profitable growth.",
  },
  {
    icon: Globe,
    title: "Web Experiences",
    description: "Conversion-focused websites and landing pages that turn visitors into customers.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "CRM integrations, lead nurturing and workflow automation that save time and improve follow-up.",
  },
  {
    icon: ChartColumn,
    title: "Analytics",
    description: "GA4, dashboards and reporting that provide complete visibility into performance.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Technical and content strategies that increase long-term organic visibility.",
  },
  {
    icon: PencilRuler,
    title: "Creative",
    description: "Messaging, ad creatives and visual assets designed to improve engagement and conversions.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Capabilities
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Everything you need to build predictable growth.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Every service is connected into one measurable growth system rather
            than operating as isolated marketing activities.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}