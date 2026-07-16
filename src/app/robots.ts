import type { MetadataRoute } from "next";
import { URL } from "~/lib/project-meta";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}
