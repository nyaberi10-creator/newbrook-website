export interface ResourceSection {
  heading: string;
  body: string;
}

export interface Resource {
  slug: string;
  category: string;

  title: string;
  description: string;
  excerpt: string;

  readTime: string;

  level: "Beginner" | "Intermediate" | "Advanced";

  featured: boolean;

  author: string;

  published: string;

  tags: string[];

  content: ResourceSection[];
}

export interface ResourceCategory {
  slug: string;
  title: string;
  description: string;
}

export const resourceCategories: ResourceCategory[] = [
  {
    slug: "web-development",
    title: "Website Development",
    description:
      "Learn how modern websites are planned, designed and optimized for growth.",
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    description:
      "Practical resources for Meta Ads, Google Ads and TikTok Ads.",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    description:
      "Build customer relationships through lifecycle email marketing.",
  },
  {
    slug: "seo",
    title: "SEO",
    description:
      "Improve visibility with technical SEO and content strategy.",
  },
  {
    slug: "automation",
    title: "Automation",
    description:
      "Connect your tools and automate repetitive business tasks.",
  },
  {
    slug: "growth",
    title: "Business Growth",
    description:
      "Frameworks for building predictable, scalable growth systems.",
  },
];

export const resources: Resource[] = [
  {
    slug: "website-planning-guide",
    category: "web-development",

    title: "Website Planning Guide",

    description:
      "Learn how to plan a website that supports your business objectives.",

    excerpt:
      "A practical planning framework before investing in design or development.",

    readTime: "8 min",

    level: "Beginner",

    featured: true,

    author: "NewBrook Digital",

    published: "2026-07-14",

    tags: ["Website", "Planning"],

    content: [
      {
        heading: "Start with business goals",

        body:
          "Every successful website begins with clearly defined business objectives rather than visual design.",
      },
      {
        heading: "Know your audience",

        body:
          "Understanding customer needs helps shape navigation, messaging and conversion paths.",
      },
    ],
  },

  {
    slug: "meta-ads-foundation",
    category: "paid-advertising",

    title: "Meta Ads Foundations",

    description:
      "Understand how Meta Ads campaigns are structured and managed.",

    excerpt:
      "Learn campaign objectives, audiences and creative planning.",

    readTime: "10 min",

    level: "Beginner",

    featured: true,

    author: "NewBrook Digital",

    published: "2026-07-14",

    tags: ["Meta Ads"],

    content: [
      {
        heading: "Campaign objectives",

        body:
          "Selecting the correct objective is one of the most important decisions before launching a campaign.",
      },
    ],
  },

  {
    slug: "welcome-email-framework",
    category: "email-marketing",

    title: "Welcome Email Framework",

    description:
      "Design welcome sequences that introduce your brand and encourage engagement.",

    excerpt:
      "Learn how to structure an automated onboarding email series.",

    readTime: "9 min",

    level: "Beginner",

    featured: true,

    author: "NewBrook Digital",

    published: "2026-07-14",

    tags: ["Email Marketing"],

    content: [
      {
        heading: "First impressions matter",

        body:
          "Welcome emails set expectations and begin building trust with new subscribers.",
      },
    ],
  },

  {
    slug: "seo-fundamentals",
    category: "seo",

    title: "SEO Fundamentals",

    description:
      "Learn the essential principles behind search engine optimization.",

    excerpt:
      "A beginner-friendly introduction to SEO strategy and implementation.",

    readTime: "11 min",

    level: "Beginner",

    featured: true,

    author: "NewBrook Digital",

    published: "2026-07-14",

    tags: ["SEO"],

    content: [
      {
        heading: "Search intent",

        body:
          "Effective SEO starts with understanding what users are searching for and why.",
      },
    ],
  },

  {
    slug: "automation-basics",
    category: "automation",

    title: "Business Automation Basics",

    description:
      "Understand how automation improves efficiency across marketing and sales.",

    excerpt:
      "Reduce repetitive work with connected business systems.",

    readTime: "8 min",

    level: "Beginner",

    featured: true,

    author: "NewBrook Digital",

    published: "2026-07-14",

    tags: ["Automation"],

    content: [
      {
        heading: "Map your process",

        body:
          "Before automating any workflow, understand every step in the current process.",
      },
    ],
  },

  {
    slug: "building-growth-systems",
    category: "growth",

    title: "Building Growth Systems",

    description:
      "Create repeatable systems that support long-term business growth.",

    excerpt:
      "Move beyond isolated marketing activities and build sustainable processes.",

    readTime: "10 min",

    level: "Beginner",

    featured: true,

    author: "NewBrook Digital",

    published: "2026-07-14",

    tags: ["Growth"],

    content: [
      {
        heading: "Think in systems",

        body:
          "Businesses grow more consistently when marketing, sales and operations work together as one system.",
      },
    ],
  },
];

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getResourcesByCategory(category: string) {
  return resources.filter(
    (resource) => resource.category === category
  );
}

export function getFeaturedResources() {
  return resources.filter((resource) => resource.featured);
}

export function getRelatedResources(
  category: string,
  slug: string
) {
  return resources
    .filter(
      (resource) =>
        resource.category === category &&
        resource.slug !== slug
    )
    .slice(0, 3);
}

export function searchResources(query: string) {
  const term = query.toLowerCase();

  return resources.filter((resource) => {
    return (
      resource.title.toLowerCase().includes(term) ||
      resource.description.toLowerCase().includes(term) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(term)
      )
    );
  });
}