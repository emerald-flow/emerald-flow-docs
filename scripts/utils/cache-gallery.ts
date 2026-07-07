import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { features } from "~/lib/feature-list";
import { GALLERY_CACHE, GALLERY_IN_DIR, IMAGE_EXTENSIONS } from "./constants";

async function fingerprintGallery() {
  const hash = createHash("sha256");

  for (const feature of Object.keys(features).sort()) {
    const featureDir = path.join(GALLERY_IN_DIR, feature);

    try {
      const files = await fs.readdir(featureDir, {
        withFileTypes: true,
      });

      const imageFiles = files
        .filter(
          (file) =>
            file.isFile() &&
            IMAGE_EXTENSIONS.has(path.extname(file.name).toLowerCase()),
        )
        .sort((a, b) => a.name.localeCompare(b.name));

      for (const file of imageFiles) {
        const fullPath = path.join(featureDir, file.name);
        const stat = await fs.stat(fullPath);

        hash.update(feature);
        hash.update(file.name);
        hash.update(String(stat.size));
        hash.update(String(stat.mtimeMs));
      }
    } catch {
      // Ignore missing directories.
    }
  }

  return hash.digest("hex");
}

export async function hasGalleryChanged(source: "gen-gallery" | "up-gallery") {
  const current = await fingerprintGallery();

  try {
    const previous = await fs.readFile(GALLERY_CACHE(source), "utf8");
    if (previous === current) {
      console.log(`✓ Gallery unchanged. Skipping generation. (${source})`);
      return false;
    }
  } catch {
    // First run.
  }

  await fs.mkdir(path.dirname(GALLERY_CACHE(source)), { recursive: true });
  await fs.writeFile(GALLERY_CACHE(source), current, "utf8");

  return true;
}
