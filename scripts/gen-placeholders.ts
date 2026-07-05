import { promises as fs } from "node:fs";
import path from "node:path";

import sharp from "sharp";

import { features } from "~/lib/feature-list";
import {
  GALLERY_IN_DIR,
  GALLERY_PLACEHOLDER_IN_DIR,
  IMAGE_EXTENSIONS,
} from "./utils/constants";

async function main() {
  await fs.rm(GALLERY_PLACEHOLDER_IN_DIR, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(GALLERY_PLACEHOLDER_IN_DIR, {
    recursive: true,
  });

  let generated = 0;

  for (const feature of Object.keys(features)) {
    const inputDir = path.join(GALLERY_IN_DIR, feature);
    const outputDir = path.join(GALLERY_PLACEHOLDER_IN_DIR, feature);

    try {
      const files = await fs.readdir(inputDir, {
        withFileTypes: true,
      });

      await fs.mkdir(outputDir, {
        recursive: true,
      });

      for (const file of files) {
        if (!file.isFile()) continue;

        const ext = path.extname(file.name).toLowerCase();
        if (!IMAGE_EXTENSIONS.has(ext)) continue;

        const input = path.join(inputDir, file.name);
        const output = path.join(
          outputDir,
          `${path.basename(file.name, ext)}.webp`,
        );

        await sharp(input)
          .resize({ width: 18, height: 12 })
          .webp()
          .toFile(output);

        generated++;
      }
    } catch {
      // Feature has no gallery directory.
      continue;
    }
  }

  console.log(`✓ Generated ${generated} gallery placeholder(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
