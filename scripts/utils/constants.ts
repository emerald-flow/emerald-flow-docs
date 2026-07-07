import path from "node:path";

export const GALLERY_CACHE = (str: string) =>
  path.resolve(`.script-cache/${str}.hash`);

export const GALLERY_IN_DIR = path.resolve("assets/gallery");
export const GALLERY_OUT_DIR = path.resolve("src/lib/generated/gallery.ts");
export const GALLERY_PLACEHOLDER_IN_DIR = path.resolve(
  "assets/gallery-placeholders",
);
export const GALLERY_PLACEHOLDER_OUT_DIR = path.resolve(
  "src/lib/generated/placeholders",
);
export const SPRITES_IN_DIR = path.resolve("assets/sprites");
export const SPRITES_OUT_DIR = path.resolve("src/lib/generated/sprites");

export const HASH_LENGTH = 8;

export const MIME_TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

export const IMAGE_EXTENSIONS = new Set(Object.keys(MIME_TYPES));
