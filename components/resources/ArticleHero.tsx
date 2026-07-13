import { Clock3, FolderOpen } from "lucide-react";

interface ArticleHeroProps {
  category: string;
  title: string;
  description: string;
  readingTime: string;
}

export default function ArticleHero({
  category,
  title,
  description,
  readingTime,
}: ArticleHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">

        <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          <FolderOpen className="mr-2 h-4 w-4" />
          {category}
        </div>

        <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
          {title}
        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-600">
          {description}
        </p>

        <div className="mt-10 flex items-center text-slate-500">
          <Clock3 className="mr-2 h-5 w-5" />
          {readingTime}
        </div>

      </div>
    </section>
  );
}