"use client";

import Link from "next/link";
import {
  Globe,
  Megaphone,
  Mail,
  Bot,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Development",
    description:
      "Beautiful, fast and SEO-optimized websites built to convert visitors into customers.",
    icon: Globe,
    href: "/services",
    color: "text-blue-600",
  },
  {
    title: "Meta Ads",
    description:
      "High-performing Facebook and Instagram campaigns designed for profitable growth.",
    icon: Megaphone,
    href: "/services",
    color: "text-indigo-600",
  },
  {
    title: "Email Marketing",
    description:
      "Klaviyo email automation, abandoned carts, welcome flows and campaigns that increase customer lifetime value.",
    icon: Mail,
    href: "/services",
    color: "text-green-600",
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive business tasks with AI-powered workflows that save time.",
    icon: Bot,
    href: "/services",
    color: "text-purple-600",
  },
  {
    title: "Analytics",
    description:
      "Track every click, lead and sale with accurate reporting and dashboards.",
    icon: BarChart3,
    href: "/services",
    color: "text-orange-600",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Everything You Need
            <br />
            To Scale Online
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We combine strategy, design, advertising,
            automation and analytics into one growth system.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >

                <Icon className={`h-12 w-12 ${service.color}`} />

                <h3 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
                >
                  Learn More

                  <ArrowRight className="h-5 w-5" />

                </Link>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}