import { notFound } from "next/navigation";

import CategoryHero from "@/components/resources/CategoryHero";
import ResourceCard from "@/components/resources/ResourceCard";

import {
  resources,
  resourceCategories,
} from "@/lib/resources";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({
  params,
}: Props) {
  const { category } = await params;

  const categoryInfo = resourceCategories.find(
  (item) => item.slug === category
);

  if (!categoryInfo) {
    notFound();
  }

  const articles = resources.filter(
    (resource) => resource.category === category
  );

  return (
    <main className="bg-slate-50">

      <CategoryHero
        title={categoryInfo.title}
        description={categoryInfo.description}
      />

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2">

            {articles.map((article) => (

              <ResourceCard
                key={article.slug}
                category={categoryInfo.title}
                title={article.title}
                description={article.excerpt}
                readTime={article.readTime}
                href={`/resources/${article.category}/${article.slug}`}
              />

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}