"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "High-converting websites",
  "Meta & TikTok Ads Management",
  "Klaviyo Email Marketing",
  "AI Business Automation",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-40" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            Digital Growth Partner for Modern Businesses
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-7xl">
            Helping Businesses Grow Through
            <span className="block text-blue-600">
              Websites, Digital Marketing & AI Automation
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
            Newbrook Digital helps ambitious businesses attract more customers,
            increase conversions, and streamline operations through modern
            websites, performance marketing, email automation, and AI-powered
            business systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              View Our Work
            </Link>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">

            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

            <Image
              src="/logo.png"
              alt="Newbrook Digital"
              width={900}
              height={900}
              priority
              className="h-full w-full object-cover"
            />

          </div>

          <div className="absolute -bottom-8 -left-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Our Focus
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Growth That Matters
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-7 text-slate-600">
              We don't just build beautiful websites—we create digital systems
              that help businesses generate leads, increase sales, and grow
              sustainably.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}