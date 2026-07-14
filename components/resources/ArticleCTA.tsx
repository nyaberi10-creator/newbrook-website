import Link from "next/link";

export default function ArticleCTA() {
  return (
    <section className="rounded-3xl bg-blue-600 p-12 text-center text-white">

      <h2 className="text-4xl font-black">
        Ready to grow your business?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
        Whether you're launching a new website, improving your marketing,
        or building automation systems, we're here to help you create
        sustainable business growth.
      </p>

      <Link
        href="/contact"
        className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
      >
        Book a Strategy Session
      </Link>

    </section>
  );
}