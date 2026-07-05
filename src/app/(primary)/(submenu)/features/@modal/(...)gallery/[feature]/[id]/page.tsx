import { Gallery } from "~/components/gallery";
import { Modal } from "~/components/modal";
import type { galleryObj } from "~/lib/generated/gallery";

export * from "~/lib/gallery-static-params";

export default async function Page({
  params,
}: PageProps<"/gallery/[feature]/[id]">) {
  const { id, feature } = (await params) as {
    id: string;
    feature: keyof typeof galleryObj;
  };
  return (
    <Modal pathname={`/gallery/${feature}/${id}`}>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <Gallery id={id} feature={feature} isModal />
      </div>
    </Modal>
  );
}
