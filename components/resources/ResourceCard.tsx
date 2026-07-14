import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  category: string;
  title: string;
  description: string;
  href: string;
  readTime: string;
}

export default function ResourceCard({
  category,
  title,
  description,
  href,
  readTime,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
    >
      <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        {category}
      </span>

      <h2 className="mt-4 text-2xl font-black text-slate-900">
        {title}
      </h2>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex items-center justify-between">

        <span className="text-sm text-slate-500">
          {readTime} read
        </span>

        <span className="inline-flex items-center font-semibold text-blue-600">
          Read Guide

          <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
        </span>

      </div>

    </Link>
  );
}