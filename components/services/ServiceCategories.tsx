import {
  Target,
  Megaphone,
  Globe,
  Mail,
  Bot,
  ChartColumn,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Growth Strategy",
    items: [
      "Business Growth Audits",
      "Marketing Strategy",
      "Customer Journey Mapping",
      "Go-To-Market Planning",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Media",
    items: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "Remarketing Campaigns",
    ],
  },
  {
    icon: Globe,
    title: "Web Experiences",
    items: [
      "Corporate Websites",
      "Landing Pages",
      "SEO Foundations",
      "Conversion Optimization",
    ],
  },
  {
    icon: Mail,
    title: "Email & Lifecycle Marketing",
    items: [
      "Klaviyo Setup",
      "Welcome Series",
      "Abandoned Cart",
      "Browse Abandonment",
      "Win-Back Campaigns",
      "Product Launch Campaigns",
      "Customer Segmentation",
      "Email Design",
    ],
  },
  {
    icon: Bot,
    title: "AI & Automation",
    items: [
      "AI Agents",
      "CRM Automation",
      "Zapier",
      "n8n",
      "Make.com",
      "Lead Routing",
    ],
  },
  {
    icon: ChartColumn,
    title: "Analytics & Intelligence",
    items: [
      "Google Analytics 4",
      "Looker Studio",
      "Dashboards",
      "Conversion Tracking",
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Core Services
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Everything working together.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Instead of isolated marketing activities, we build connected
            systems that support your entire customer journey.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <ul className="mt-8 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-lg text-slate-600"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}