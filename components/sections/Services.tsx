import Link from "next/link";
import {
  Globe,
  Megaphone,
  Mail,
  Bot,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, modern and conversion-focused websites that help businesses build trust, generate leads and turn visitors into customers.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Meta Ads, TikTok Ads and Google Ads campaigns built to attract qualified traffic and deliver measurable business growth.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Klaviyo email campaigns and automations that recover abandoned carts, nurture leads and increase customer lifetime value.",
  },
  {
    icon: Bot,
    title: "AI & Business Automation",
    description:
      "Smart workflows and AI-powered systems that reduce manual work, improve customer experience and help your business scale efficiently.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            What We Do
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">
            Digital solutions designed to help your business grow.
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            Every service we offer is part of one complete growth strategy.
            From building your online presence to generating leads and
            automating operations, we help businesses grow with confidence.
          </p>

        </div>

        {/* Services */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">

                  <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-slate-900 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Looking for a complete digital growth partner?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We combine strategy, technology, marketing and automation into one
            seamless system that helps businesses grow faster and smarter.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Let's Build Your Growth Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

        </div>

      </div>
    </section>
  );
}