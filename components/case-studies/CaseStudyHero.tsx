import { TrendingUp } from "lucide-react";

interface Props {
  category: string;
  title: string;
  description: string;
}

export default function CaseStudyHero({
  category,
  title,
  description,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.25),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
          <TrendingUp className="mr-2 h-4 w-4" />
          {category}
        </div>

        <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {description}
        </p>

      </div>
    </section>
  );
}