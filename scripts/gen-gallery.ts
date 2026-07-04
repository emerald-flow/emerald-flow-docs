import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

import { features } from "~/lib/feature-list";
import { entries } from "~/lib/utils";

const GALLERY_DIR = path.resolve("assets/gallery");
const OUTPUT_FILE = path.resolve("src/lib/generated/gallery.ts");

const IMAGE_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif"]);
const HASH_LENGTH = 8;

async function sha256(file: string) {
  const buffer = await fs.readFile(file);

  return createHash("sha256")
    .update(buffer)
    .digest("hex")
    .slice(0, HASH_LENGTH);
}

async function main() {
  const gallery: Record<
    string,
    {
      id: string;
      name: string;
      path: string;
    }[]
  > = {};

  for (const feature of Object.keys(features)) {
    const featureDir = path.join(GALLERY_DIR, feature);

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

  const galleryObj: Record<string, Record<string, string>> = {};

  entries(gallery).forEach(([feature, entries]) => {
    galleryObj[feature] ??= {};
    entries.forEach(({ id, name }) => (galleryObj[feature]![name] = id));
  });

  const source = `/* AUTO-GENERATED FILE - DO NOT EDIT */

export const gallery = ${JSON.stringify(gallery, null, 2)} as const;

export const galleryObj = ${JSON.stringify(galleryObj, null, 2)} as const;
`;

  await fs.writeFile(OUTPUT_FILE, source, "utf8");

  console.log(
    `✓ Generated gallery and galleryObj for ${Object.keys(gallery).length} feature(s).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
