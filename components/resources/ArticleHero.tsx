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
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 text-white">

      <div className="mx-auto max-w-5xl px-6">

        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
          {category}
        </span>

        <h1 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {description}
        </p>

        <div className="mt-8 text-sm font-medium text-slate-400">
          {readingTime} read
        </div>

      </div>

    </section>
  );
}