import Link from "next/link";

export default function CaseStudyCTA() {
  return (
    <section className="mt-24 rounded-3xl bg-blue-600 p-14 text-center text-white">

      <h2 className="text-4xl font-black">
        Ready to achieve similar results?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
        Let's build a growth strategy tailored to your business goals.
      </p>

      <Link
        href="/contact"
        className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-slate-100"
      >
        Book a Strategy Call
      </Link>

    </section>
  );
}