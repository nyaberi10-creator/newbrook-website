export interface PricingOption {
  label: string;
  price: number;
}

export const websiteTypes: PricingOption[] = [
  {
    label: "Business Website",
    price: 1200,
  },
  {
    label: "Corporate Website",
    price: 2500,
  },
  {
    label: "E-commerce Store",
    price: 4500,
  },
  {
    label: "Custom Web Application",
    price: 7000,
  },
];

export const addOns: PricingOption[] = [
  {
    label: "SEO Setup",
    price: 250,
  },
  {
    label: "Blog",
    price: 150,
  },
  {
    label: "Booking System",
    price: 200,
  },
  {
    label: "Email Marketing Setup",
    price: 300,
  },
  {
    label: "CRM Integration",
    price: 300,
  },
  {
    label: "AI Automation",
    price: 400,
  },
];