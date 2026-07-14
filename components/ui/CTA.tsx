import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function CTA({
  title,
  description,
  buttonText,
  href,
}: CTAProps) {
  return (
    <section className="rounded-[40px] bg-slate-900 px-10 py-20 text-center text-white">

      <h2 className="text-4xl font-black">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
        {description}
      </p>

      <Link
        href={href}
        className="mt-10 inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
      >
        {buttonText}

        <ArrowRight className="ml-3 h-5 w-5" />
      </Link>

    </section>
  );
}