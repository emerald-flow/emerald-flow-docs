/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/ban-ts-comment */
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

type Props = {
  params: Promise<{ feature: string; id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function getMetadata<T extends keyof typeof gallery>({
  feature,
  id,
}: {
  feature: T;
  id: keyof (typeof galleryMeta)[T];
}): Metadata {
  return {
    title: `${kebabToString(id as string)} | ${features[feature].title} | Gallery`,
    description: galleryMeta[feature][id] as string,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id, feature } = await params;
  //@ts-ignore
  return getMetadata({ id, feature });
}
