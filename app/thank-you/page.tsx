"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Briefcase,
  Calendar,
} from "lucide-react";

import { trackEvent } from "@/lib/analytics";

export const metadata = {
  title: "Thank You | NewBrook Digital",
  description:
    "Thank you for contacting NewBrook Digital. We've received your request and will be in touch shortly.",
};

export default function ThankYouPage() {
  useEffect(() => {
    trackEvent("thank_you_page_view", {
      page: "/thank-you",
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-28">
      <div className="mx-auto max-w-4xl px-6">

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl lg:p-16">

          <div className="flex justify-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

              <CheckCircle2
                size={60}
                className="text-green-600"
              />

            </div>

          </div>

          <h1 className="mt-8 text-center text-5xl font-black text-slate-900">
            Thank You!
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-9 text-slate-600">
            Your strategy session request has been received successfully.
            Our team will review your information and contact you within
            one business day.
          </p>

          <div className="mt-14 rounded-2xl bg-blue-50 p-8">

            <h2 className="text-2xl font-bold text-slate-900">
              What happens next?
            </h2>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 text-blue-600" size={22} />
                <p className="text-slate-700">
                  We'll carefully review your project requirements.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 text-blue-600" size={22} />
                <p className="text-slate-700">
                  We'll prepare a personalized growth strategy tailored to your business.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 text-blue-600" size={22} />
                <p className="text-slate-700">
                  A member of our team will contact you within one business day.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 text-blue-600" size={22} />
                <p className="text-slate-700">
                  You'll receive practical recommendations to help grow your business.
                </p>
              </div>

            </div>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <Link
              href="/resources"
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-600 hover:shadow-lg"
            >

              <BookOpen className="text-blue-600" size={32} />

              <h3 className="mt-4 text-xl font-bold">
                Free Resources
              </h3>

              <p className="mt-3 text-slate-600">
                Learn more about websites, SEO,
                AI automation and digital marketing.
              </p>

            </Link>

            <Link
              href="/portfolio"
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-600 hover:shadow-lg"
            >

              <Briefcase className="text-blue-600" size={32} />

              <h3 className="mt-4 text-xl font-bold">
                View Portfolio
              </h3>

              <p className="mt-3 text-slate-600">
                Explore our latest digital marketing
                and website development projects.
              </p>

            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-600 hover:shadow-lg"
            >

              <Calendar className="text-blue-600" size={32} />

              <h3 className="mt-4 text-xl font-bold">
                Contact Us
              </h3>

              <p className="mt-3 text-slate-600">
                Need to update your request?
                Reach out to our team anytime.
              </p>

            </Link>

          </div>

          <div className="mt-16 text-center">

            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Back to Homepage

              <ArrowRight size={18} />

            </Link>

          </div>

          <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">

            <h3 className="text-xl font-bold text-slate-900">
              📩 Check your email
            </h3>

            <p className="mt-3 text-slate-600">
              We'll be in touch shortly. If you don't hear from us within one
              business day, please check your spam folder or contact us directly.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}