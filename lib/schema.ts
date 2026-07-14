const websiteUrl = "https://newbrook.digital";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "NewBrook Digital",

  url: websiteUrl,

  logo: `${websiteUrl}/logo.png`,

  image: `${websiteUrl}/og-image.jpg`,

  description:
    "NewBrook Digital helps businesses grow through websites, SEO, paid advertising, email marketing and AI automation.",

  email: "hello@newbrook.digital",

  sameAs: [
    "https://www.linkedin.com/company/newbrook-digital",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "NewBrook Digital",

  url: websiteUrl,

  potentialAction: {
    "@type": "SearchAction",

    target: `${websiteUrl}/resources?search={search_term_string}`,

    "query-input": "required name=search_term_string",
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",

  "@type": "ProfessionalService",

  name: "NewBrook Digital",

  url: websiteUrl,

  areaServed: "Worldwide",

  serviceType: [
    "Website Development",
    "SEO",
    "Meta Ads",
    "TikTok Ads",
    "Email Marketing",
    "Marketing Automation",
    "AI Automation",
  ],
};