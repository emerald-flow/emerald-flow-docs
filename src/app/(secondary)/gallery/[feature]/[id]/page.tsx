import { Gallery } from "~/components/gallery";
import type { galleryObj } from "~/lib/generated/gallery";

export * from "~/lib/gallery-static-params";

export default async function Page({
  params,
}: PageProps<"/gallery/[feature]/[id]">) {
  const { id, feature } = (await params) as {
    id: keyof (typeof galleryObj)[keyof typeof galleryObj];
    feature: keyof typeof galleryObj;
  };
  return <Gallery id={id} feature={feature} />;
}
