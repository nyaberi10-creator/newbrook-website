import type { Metadata } from "next";

const siteUrl = "https://newbrook.digital";

export const siteConfig = {
  name: "NewBrook Digital",

  shortName: "NewBrook",

  description:
    "Helping ambitious businesses grow through websites, SEO, paid advertising, email marketing and AI automation.",

  url: siteUrl,

  ogImage: `${siteUrl}/og-image.jpg`,

  email: "hello@newbrook.digital",

  phone: "+254 XXX XXX XXX",
};

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function generateSEO({
  title,
  description,
  path = "",
  image,
}: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,

    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,

      description,

      url,

      siteName: siteConfig.name,

      type: "website",

      images: [
        {
          url: image ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [image ?? siteConfig.ogImage],
    },
  };
}