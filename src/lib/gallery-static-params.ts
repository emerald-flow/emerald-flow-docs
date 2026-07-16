import type { Metadata } from "next";
import { gallery } from "./generated/gallery";
import { entries } from "./utils";
import { galleryMeta } from "./gallery-meta";
import { features } from "./feature-list";

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

const kebabToString = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).replaceAll("-", " ");

export async function generateMetadata<T extends keyof typeof gallery>(props: {
  params: { feature: T; id: keyof (typeof galleryMeta)[T] };
}): Promise<Metadata> {
  const { feature, id } = await props.params;
  return {
    title: `${kebabToString(id as string)} | ${features[feature].title} | Gallery`,
    description: galleryMeta[feature][id] as string,
  };
}
