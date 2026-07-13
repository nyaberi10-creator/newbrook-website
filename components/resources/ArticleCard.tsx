import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  time: string;
  href: string;
}

export default function ArticleCard({
  title,
  description,
  time,
  href,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
    >
      <div className="flex items-center text-sm font-medium text-blue-600">
        <Clock3 className="mr-2 h-4 w-4" />
        {time}
      </div>

      <h3 className="mt-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>

      <span className="mt-6 inline-flex items-center font-semibold text-blue-600">
        Read Guide
        <ArrowRight className="ml-2 h-4 w-4" />
      </span>
    </Link>
  );
}