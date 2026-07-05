import { gallery } from "./generated/gallery";
import { entries } from "./utils";

export const dynamicParams = false;

export async function generateStaticParams() {
  return entries(gallery).reduce(
    (acc, [feature, ids]) => {
      ids.forEach(({ name }) => acc.push({ feature, id: name }));
      return acc;
    },
    [] as Awaited<PageProps<"/gallery/[feature]/[id]">["params"]>[],
  );
}
