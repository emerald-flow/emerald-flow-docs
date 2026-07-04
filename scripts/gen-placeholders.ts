import { promises as fs } from "node:fs";
import path from "node:path";

import sharp from "sharp";

import { features } from "~/lib/feature-list";

const PUBLIC_DIR = path.resolve("public/gallery");
const OUTPUT_DIR = path.resolve("assets/gallery-placeholders");

const IMAGE_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif"]);

async function main() {
  await fs.rm(OUTPUT_DIR, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(OUTPUT_DIR, {
    recursive: true,
  });

  let generated = 0;

  for (const feature of Object.keys(features)) {
    const inputDir = path.join(PUBLIC_DIR, feature);
    const outputDir = path.join(OUTPUT_DIR, feature);

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
