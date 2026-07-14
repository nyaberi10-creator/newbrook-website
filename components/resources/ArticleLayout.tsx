import { ReactNode } from "react";

import ArticleHero from "./ArticleHero";
import ArticleCTA from "./ArticleCTA";

interface ArticleLayoutProps {
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
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <ArticleHero
        category={category}
        title={title}
        description={description}
        readingTime={readingTime}
      />

      {/* Article */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-14">

            <article className="prose prose-lg max-w-none prose-slate">

              {children}

            </article>

            <div className="mt-20 border-t border-slate-200 pt-12">

              <ArticleCTA />

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}