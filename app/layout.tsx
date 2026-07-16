import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";

import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
} from "@/lib/schema";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newbrook.digital"),

   verification: {
    google: "b1yXo3SXw2-eMh7FLxIxUocmVutdbIQpFBD76y47ULg",
  },

  title: {
    default: "NewBrook Digital | Websites, SEO, Paid Ads & AI Automation",
    template: "%s | NewBrook Digital",
  },

  description:
    "NewBrook Digital helps ambitious businesses attract more customers, automate marketing, and scale sustainably through high-performing websites, SEO, Meta Ads, TikTok Ads, Klaviyo email marketing, and AI-powered automation.",

  applicationName: "NewBrook Digital",

  category: "Digital Marketing",

  keywords: [
    "Website Development",
    "Web Design",
    "Digital Marketing",
    "SEO",
    "Technical SEO",
    "Local SEO",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "TikTok Ads",
    "Google Ads",
    "Email Marketing",
    "Klaviyo",
    "Marketing Automation",
    "CRM Automation",
    "AI Automation",
    "Lead Generation",
    "Growth Marketing",
    "Conversion Optimization",
    "Landing Pages",
    "Marketing Agency",
    "NewBrook Digital",
    "US Web Design",
    "Business Growth",
  ],

  authors: [
    {
      name: "NewBrook Digital",
      url: "https://newbrook.digital",
    },
  ],

  creator: "NewBrook Digital",

  publisher: "NewBrook Digital",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "https://newbrook.digital",

    siteName: "NewBrook Digital",

    title: "NewBrook Digital | Websites, SEO, Paid Ads & AI Automation",

    description:
      "Helping ambitious businesses grow through high-performing websites, SEO, paid advertising, email marketing and AI automation.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NewBrook Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NewBrook Digital",

    description:
      "Helping businesses grow through websites, SEO, paid advertising and AI automation.",

    images: ["/og-image.jpg"],

    creator: "@newbrookdigital",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NewBrook Digital",
    url: "https://newbrook.digital",
    logo: "https://newbrook.digital/logo.png",
    image: "https://newbrook.digital/og-image.jpg",

    description:
      "Digital marketing agency helping businesses grow through websites, SEO, paid advertising, email marketing and AI automation.",

    email: "hello@newbrook.digital",

    sameAs: [
      "https://www.linkedin.com/company/newbrook-digital",
      "https://www.facebook.com/",
      "https://www.instagram.com/",
    ],

    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },

    knowsAbout: [
      "Website Development",
      "SEO",
      "Meta Ads",
      "TikTok Ads",
      "Google Ads",
      "Email Marketing",
      "AI Automation",
      "Marketing Strategy",
      "Growth Systems",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-white font-sans text-slate-900 antialiased`}
      >
       
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={professionalServiceSchema} />

        <ScrollProgress />

        <BackToTop />

        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1 pt-20">
            {children}
          </main>

          <Footer />
        </div>
        <GoogleAnalytics gaId="G-YBQGCW4NJ6" />
      </body>
    </html>
  );
}