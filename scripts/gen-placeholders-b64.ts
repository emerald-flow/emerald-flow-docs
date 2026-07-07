import { promises as fs } from "node:fs";
import path from "node:path";

import { features } from "~/lib/feature-list";
import {
  GALLERY_PLACEHOLDER_IN_DIR,
  GALLERY_PLACEHOLDER_OUT_DIR,
  IMAGE_EXTENSIONS,
  MIME_TYPES,
} from "./utils/constants";

async function main() {
  await fs.rm(GALLERY_PLACEHOLDER_OUT_DIR, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(GALLERY_PLACEHOLDER_OUT_DIR, {
    recursive: true,
  });

  const imports: string[] = [];
  const typeEntries: string[] = [];

  let generated = 0;

  for (const feature of Object.keys(features)) {
    const featureDir = path.join(GALLERY_PLACEHOLDER_IN_DIR, feature);

    const placeholders: Record<string, string> = {};

    try {
      const files = await fs.readdir(featureDir, {
        withFileTypes: true,
      });

      for (const file of files) {
        if (!file.isFile()) continue;

        const ext = path.extname(file.name).toLowerCase();
        const mime = MIME_TYPES[ext];

        if (!IMAGE_EXTENSIONS.has(ext) || !mime) continue;

        const id = path.basename(file.name, ext);

        const buffer = await fs.readFile(path.join(featureDir, file.name));

        placeholders[id] = `data:${mime};base64,${buffer.toString("base64")}`;
      }
    } catch {
      // Feature has no placeholder directory.
    }

    const source = `/* AUTO-GENERATED FILE - DO NOT EDIT */

export const placeholder = ${JSON.stringify(placeholders, null, 2)} as const;
`;

    await fs.writeFile(
      path.join(GALLERY_PLACEHOLDER_OUT_DIR, `${feature}.ts`),
      source,
      "utf8",
    );

    const importName = feature
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    imports.push(
      `import type { placeholder as ${importName} } from "./${feature}";`,
    );

    typeEntries.push(`  "${feature}": typeof ${importName};`);

    generated++;
  }

  const typeSource = `/* AUTO-GENERATED FILE - DO NOT EDIT */

${imports.join("\n")}

export type Placeholders = {
${typeEntries.join("\n")}
};
`;

  await fs.writeFile(
    path.join(GALLERY_PLACEHOLDER_OUT_DIR, "type.ts"),
    typeSource,
    "utf8",
  );

  console.log(`✓ Generated ${generated} placeholder module(s) and type.ts.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
