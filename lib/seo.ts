import { Metadata } from "next";

export const siteConfig = {
  name: "Newbrook Digital",
  description:
    "Newbrook Digital helps businesses grow with modern websites, Meta Ads, TikTok Ads, Klaviyo email marketing, AI automation, and digital strategy.",

  url: "https://newbrook.digital",

  ogImage: "/og-image.jpg",

  links: {
    email: "mailto:newbrooksdigital@gmail.com",
    phone: "tel:+254729178171",
  },

  keywords: [
    "Website Development",
    "Web Design",
    "Next.js",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "TikTok Ads",
    "Email Marketing",
    "Klaviyo",
    "Marketing Automation",
    "AI Automation",
    "SEO",
    "Digital Marketing",
    "Newbrook Digital",
  ],
};

export const defaultMetadata: Metadata = {
  title: {
    default: "Newbrook Digital",
    template: "%s | Newbrook Digital",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: "Newbrook Digital",
    },
  ],

  creator: "Newbrook Digital",

  publisher: "Newbrook Digital",

  metadataBase: new URL(siteConfig.url),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Newbrook Digital",
    description: siteConfig.description,
    siteName: "Newbrook Digital",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Newbrook Digital",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};