import { Gallery } from "~/components/gallery";
import { gallery, type galleryObj } from "~/lib/generated/gallery";
import { entries } from "~/lib/utils";

// All posts besides gallery will be a 404
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

export default async function Page({
  params,
}: PageProps<"/gallery/[feature]/[id]">) {
  const { id, feature } = (await params) as {
    id: string;
    feature: keyof typeof galleryObj;
  };
  return <Gallery id={id} feature={feature} />;
}
