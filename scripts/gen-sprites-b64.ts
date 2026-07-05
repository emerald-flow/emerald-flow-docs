import { promises as fs } from "node:fs";
import path from "node:path";
import { MIME_TYPES, SPRITES_IN_DIR, SPRITES_OUT_DIR } from "./utils/constants";

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
  });

  const files: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }

  return files;
}

async function main() {
  // Remove previously generated modules.
  await fs.rm(SPRITES_OUT_DIR, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(SPRITES_OUT_DIR, {
    recursive: true,
  });

  const files = await walk(SPRITES_IN_DIR);

  let generated = 0;

  for (const input of files) {
    const ext = path.extname(input).toLowerCase();
    const mime = MIME_TYPES[ext];

    if (!mime) continue;

    const relative = path.relative(SPRITES_IN_DIR, input);

    const output = path.join(
      SPRITES_OUT_DIR,
      relative.replace(/\.[^.]+$/, ".ts"),
    );

    await fs.mkdir(path.dirname(output), {
      recursive: true,
    });

    const buffer = await fs.readFile(input);

    const base64 = buffer.toString("base64");

    const name = path.basename(input, ext);

    const source = `/* AUTO-GENERATED FILE - DO NOT EDIT */

export const ${name} = "data:${mime};base64,${base64}" as const;

`;

    await fs.writeFile(output, source, "utf8");

    generated++;
  }

  console.log(`✓ Generated ${generated} inline image module(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
