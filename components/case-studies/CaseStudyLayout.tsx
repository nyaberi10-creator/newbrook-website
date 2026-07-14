import { ReactNode } from "react";

import CaseStudyHero from "./CaseStudyHero";
import ChallengeSolution from "./ChallengeSolution";
import ResultsGrid from "./ResultsGrid";
import CaseStudyCTA from "./CaseStudyCTA";

interface Props {
  category: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  children: ReactNode;
}

export default function CaseStudyLayout({
  category,
  title,
  description,
  challenge,
  solution,
  results,
  children,
}: Props) {
  return (
    <main className="bg-slate-50">

      <CaseStudyHero
        category={category}
        title={title}
        description={description}
      />

      <section className="py-20">

        <div className="mx-auto max-w-5xl px-6">

          <ChallengeSolution
            challenge={challenge}
            solution={solution}
          />

          <ResultsGrid results={results} />

          <article className="prose prose-lg mt-20 max-w-none">

            {children}

          </article>

          <CaseStudyCTA />

        </div>

      </section>

    </main>
  );
}