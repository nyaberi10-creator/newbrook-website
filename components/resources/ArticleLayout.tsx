import { ReactNode } from "react";

import ArticleHero from "./ArticleHero";
import ArticleCTA from "./ArticleCTA";

interface Props {
  category: string;
  title: string;
  description: string;
  readingTime: string;
  children: ReactNode;
}

export default function ArticleLayout({
  category,
  title,
  description,
  readingTime,
  children,
}: Props) {
  return (
    <main className="bg-slate-50">

      <ArticleHero
        category={category}
        title={title}
        description={description}
        readingTime={readingTime}
      />

      <section className="py-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-12 shadow-sm">

          <article className="prose prose-lg max-w-none prose-slate">

            {children}

          </article>

          <ArticleCTA />

        </div>

      </section>

    </main>
  );
}