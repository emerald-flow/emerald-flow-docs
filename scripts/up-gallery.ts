import { promises as fs } from "node:fs";
import path from "node:path";
import { list, put } from "@vercel/blob";
import { gallery } from "~/lib/generated/gallery";

import nextEnv from "@next/env";
import { hasGalleryChanged } from "./utils/cache-gallery";

const projectDir = process.cwd();
const { loadEnvConfig } = nextEnv;
loadEnvConfig(projectDir);

const ROOT = path.resolve();

async function main() {
  if (!(await hasGalleryChanged("up-gallery"))) return;
  const desired = new Map<string, string>();

  for (const [feature, images] of Object.entries(gallery)) {
    for (const image of images) {
      desired.set(`${feature}/${image.id}.webp`, path.join(ROOT, image.path));
    }
  }

  const { blobs } = await list({
    oidcToken: process.env.VERCEL_OIDC_TOKEN,
    storeId: process.env.BLOB_STORE_ID,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  const current = new Set(
    blobs
      .filter((blob) => !blob.pathname.endsWith("/"))
      .map((blob) => blob.pathname),
  );

  const uploads = [...desired].filter(([pathname]) => !current.has(pathname));

  if (uploads.length === 0) {
    console.log("✓ Blob store already in sync.");
    return;
  }

  console.log(`Uploading ${uploads.length} image(s)...`);

  for (const [pathname, source] of uploads) {
    const file = await fs.readFile(source);

    await put(pathname, file, {
      access: "public",
      cacheControlMaxAge: 31536000,
      contentType: "image/webp",
      addRandomSuffix: false,
    });

    console.log(`✓ ${pathname}`);
  }

  console.log("✓ Blob synchronization complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
