import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ArticleLayout from "@/components/resources/ArticleLayout";
import JsonLd from "@/components/seo/JsonLd";

import {
  getResourceBySlug,
  getRelatedResources,
} from "@/lib/resources";

interface Props {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = getResourceBySlug(slug);

  if (!article) {
    return {};
  }

  const url = `https://newbrook.digital/resources/${article.category}/${article.slug}`;

  return {
    title: article.title,

    description: article.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: article.title,

      description: article.description,

      url,

      type: "article",

      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: article.title,

      description: article.description,

      images: ["/og-image.jpg"],
    },
  };
}

export default async function ResourcePage({
  params,
}: Props) {
  const { category, slug } = await params;

  const article = getResourceBySlug(slug);

  if (!article || article.category !== category) {
    notFound();
  }

  const related = getRelatedResources(category, slug);

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: article.title,

    description: article.description,

    author: {
      "@type": "Organization",
      name: "NewBrook Digital",
    },

    publisher: {
      "@type": "Organization",

      name: "NewBrook Digital",

      logo: {
        "@type": "ImageObject",
        url: "https://newbrook.digital/logo.png",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": `https://newbrook.digital/resources/${article.category}/${article.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <ArticleLayout
        category={article.category}
        title={article.title}
        description={article.description}
        readingTime={article.readTime}
      >
        {article.content.map((section) => (
          <section
            key={section.heading}
            className="mb-12"
          >
            <h2>{section.heading}</h2>

            <p>{section.body}</p>
          </section>
        ))}

        {related.length > 0 && (
          <>
            <hr className="my-16" />

            <h2>Continue Reading</h2>

            <div className="mt-8 grid gap-6">
              {related.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.category}/${resource.slug}`}
                  className="rounded-2xl border p-6 transition hover:border-blue-600 hover:bg-blue-50"
                >
                  <h3 className="text-xl font-bold">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {resource.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}
      </ArticleLayout>
    </>
  );
}