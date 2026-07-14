"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import ResourceCard from "./ResourceCard";
import { resources } from "@/lib/resources";

export default function ResourceSearch() {
  const [query, setQuery] = useState("");

  const filteredResources = useMemo(() => {
    if (!query.trim()) return resources;

    const search = query.toLowerCase();

    return resources.filter((resource) => {
      return (
        resource.title.toLowerCase().includes(search) ||
        resource.description.toLowerCase().includes(search) ||
        resource.category.toLowerCase().includes(search) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(search)
        )
      );
    });
  }, [query]);

  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-center text-4xl font-black text-slate-900">
            Search the Knowledge Centre
          </h2>

          <p className="mt-6 text-center text-lg text-slate-600">
            Find practical guides, frameworks and resources.
          </p>

          <div className="relative mt-10">

            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-slate-300 bg-white py-4 pl-14 pr-6 text-lg shadow-sm outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredResources.length > 0 ? (
            filteredResources.map((article) => (
              <ResourceCard
                key={article.slug}
                category={article.category}
                title={article.title}
                description={article.excerpt}
                readTime={article.readTime}
                href={`/resources/${article.category}/${article.slug}`}
              />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-300 p-16 text-center">

              <h3 className="text-2xl font-bold text-slate-900">
                No resources found
              </h3>

              <p className="mt-4 text-slate-600">
                Try searching for another topic.
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}