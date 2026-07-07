import { promises as fs } from "node:fs";
import path from "node:path";

import sharp from "sharp";

import { features } from "~/lib/feature-list";
import { GALLERY_IN_DIR, IMAGE_EXTENSIONS } from "./utils/constants";

async function main() {
  let converted = 0;

  for (const feature of Object.keys(features)) {
    const featureDir = path.join(GALLERY_IN_DIR, feature);

    try {
      const files = await fs.readdir(featureDir, {
        withFileTypes: true,
      });

      for (const file of files) {
        if (!file.isFile()) continue;

        const ext = path.extname(file.name).toLowerCase();
        if (!IMAGE_EXTENSIONS.has(ext)) continue;

        // Already converted.
        if (ext === ".webp") continue;

        const input = path.join(featureDir, file.name);
        const output = path.join(
          featureDir,
          `${path.basename(file.name, ext)}.webp`,
        );

        await sharp(input)
          .webp({ lossless: true, quality: 100 })
          .toFile(output);

        await fs.rm(input);

        converted++;
      }
    } catch {
      // Feature has no gallery directory.
      continue;
    }
  }

  console.log(`✓ Converted ${converted} gallery image(s) to WebP.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
