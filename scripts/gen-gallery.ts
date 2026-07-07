import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

import { features } from "~/lib/feature-list";
import { entries } from "~/lib/utils";
import {
  GALLERY_IN_DIR,
  HASH_LENGTH,
  IMAGE_EXTENSIONS,
  GALLERY_OUT_DIR,
} from "./utils/constants";
import { hasGalleryChanged } from "./utils/cache-gallery";

async function sha256(file: string) {
  const buffer = await fs.readFile(file);

  return createHash("sha256")
    .update(buffer)
    .digest("hex")
    .slice(0, HASH_LENGTH);
}

async function main() {
  if (!(await hasGalleryChanged("gen-gallery"))) return;

  const gallery: Record<
    string,
    {
      id: string;
      name: string;
      path: string;
    }[]
  > = {};

  for (const feature of Object.keys(features)) {
    const featureDir = path.join(GALLERY_IN_DIR, feature);

    try {
      const files = await fs.readdir(featureDir, {
        withFileTypes: true,
      });

      gallery[feature] = await Promise.all(
        files
          .filter(
            (file) =>
              file.isFile() &&
              IMAGE_EXTENSIONS.has(path.extname(file.name).toLowerCase()),
          )
          .map(async (file) => {
            const ext = path.extname(file.name);
            const basename = path.basename(file.name, ext);
            const hash = await sha256(path.join(featureDir, file.name));

            return {
              name: basename,
              id: `${basename}.${hash}`,
              path: `/assets/gallery/${feature}/${file.name}`,
            };
          }),
      );
    } catch {
      gallery[feature] = [];
    }
  }

  const galleryObj: Record<
    string,
    Record<string, { id: string; index: number }>
  > = {};

  entries(gallery).forEach(([feature, entries]) => {
    galleryObj[feature] ??= {};
    entries.forEach(
      ({ id, name }, index) => (galleryObj[feature]![name] = { id, index }),
    );
  });

  const source = `/* AUTO-GENERATED FILE - DO NOT EDIT */

import type { pages } from "~/lib/menu-items";

type Features = Exclude<keyof typeof pages.features, "url" | "title">

export const gallery = ${JSON.stringify(gallery, null, 2)} as const satisfies Gallery;

export type Gallery = Record<Features, { id: string; name: string; path: string }[]>;

export const galleryObj = ${JSON.stringify(galleryObj, null, 2)} as const satisfies GalleryObj;

export type GalleryObj = Record<Features, Record<string, { id: string; index: number }>>;
`;

  await fs.writeFile(GALLERY_OUT_DIR, source, "utf8");

  console.log(
    `✓ Generated gallery and galleryObj for ${Object.keys(gallery).length} feature(s).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
