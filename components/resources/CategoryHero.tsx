interface CategoryHeroProps {
  title: string;
  description: string;
}

export default function CategoryHero({
  title,
  description,
}: CategoryHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 text-white">

      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-5xl font-black lg:text-6xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {description}
        </p>

      </div>

    </section>
  );
}