import { notFound } from "next/navigation";

import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";
import { caseStudies } from "@/lib/caseStudies";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyPage({
  params,
}: Props) {
  const { slug } = await params;

  const study = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!study) {
    notFound();
  }

  return (
    <CaseStudyLayout
      category={study.category}
      title={study.title}
      description={study.description}
      challenge={study.challenge}
      solution={study.solution}
      results={study.results}
    >
      <h2>Project Overview</h2>

      <p>
        This case study demonstrates how Newbrook Digital
        approached the client's objectives using a
        combination of strategy, technology and marketing.
      </p>

      <h2>Our Process</h2>

      <ul>
        <li>Business discovery session</li>
        <li>Competitor research</li>
        <li>Strategy development</li>
        <li>Implementation</li>
        <li>Testing & optimization</li>
        <li>Performance reporting</li>
      </ul>

      <h2>Outcome</h2>

      <p>
        By aligning marketing, technology and automation,
        the business gained a scalable growth system that
        continues to deliver measurable improvements.
      </p>
    </CaseStudyLayout>
  );
}