import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://newbrook.digital";

  return [
    {
      url,
      lastModified: new Date(),
    },
    {
      url: `${url}/services`,
      lastModified: new Date(),
    },
    {
      url: `${url}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${url}/about`,
      lastModified: new Date(),
    },
    {
      url: `${url}/resources`,
      lastModified: new Date(),
    },
    {
      url: `${url}/contact`,
      lastModified: new Date(),
    },
  ];
}