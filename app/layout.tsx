import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newbrook.digital"),

  title: {
    default: "Newbrook Digital | Websites, Marketing & AI Automation",
    template: "%s | Newbrook Digital",
  },

  description:
    "Newbrook Digital helps businesses grow through high-converting websites, Meta Ads, TikTok Ads, Klaviyo Email Marketing, SEO, and AI Automation.",

  keywords: [
    "Website Development",
    "Digital Marketing",
    "Meta Ads",
    "TikTok Ads",
    "SEO",
    "AI Automation",
    "Klaviyo",
    "Marketing Agency",
    "Newbrook Digital",
    "Kenya Web Design",
    "Business Websites",
  ],

  authors: [
    {
      name: "Newbrook Digital",
    },
  ],

  creator: "Newbrook Digital",

  publisher: "Newbrook Digital",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://newbrook.digital",

    siteName: "Newbrook Digital",

    title: "Newbrook Digital | Websites, Marketing & AI Automation",

    description:
      "Helping businesses grow through websites, paid advertising, SEO, email marketing and AI automation.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Newbrook Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Newbrook Digital",

    description:
      "Helping businesses grow through websites, paid advertising, SEO and AI automation.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-white font-sans text-slate-900 antialiased`}
      >
        {/* Progress Bar */}

        <ScrollProgress />

        {/* Back To Top */}

        <BackToTop />

        {/* Website */}

        <div className="flex min-h-screen flex-col">

          <Navbar />

          <main className="flex-1 pt-20">
            {children}
          </main>

          <Footer />

        </div>

      </body>
    </html>
  );
}