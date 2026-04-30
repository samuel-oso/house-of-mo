import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/services/wedding", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services/corporate", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/parties", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/services/event-planning",
      priority: 0.7,
      changeFrequency: "monthly",
    },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
