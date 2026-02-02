// app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://example.com"; // replace later after domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/collections", "/about", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return routes;
}
