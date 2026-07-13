import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ArticleCTA() {
  return (
    <section className="mt-20 rounded-3xl bg-blue-600 p-12 text-white">

      <h2 className="text-4xl font-black">
        Ready to Grow Your Business?
      </h2>

      <p className="mt-6 text-lg leading-8 text-blue-100">
        Whether you need a high-converting website, paid advertising,
        SEO, automation or email marketing, Newbrook Digital can help.
      </p>

      <Link
        href="/contact"
        className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-slate-100"
      >
        Book a Strategy Call

        <ArrowRight className="ml-2 h-5 w-5" />

      </Link>

    </section>
  );
}