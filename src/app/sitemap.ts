import type { MetadataRoute } from "next";
import { gallery } from "~/lib/generated/gallery";
import { flatMenuItems } from "~/lib/menu-items";
import { URL } from "~/lib/project-meta";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: URL, lastModified },
    ...flatMenuItems.map(({ url }) => ({
      url: `${URL}${url}`,
      lastModified,
    })),
    ...Object.entries(gallery).flatMap(([feature, images]) =>
      images.map(({ name }) => ({
        url: `${URL}/gallery/${feature}/${name}`,
        lastModified,
      })),
    ),
  ];
}
