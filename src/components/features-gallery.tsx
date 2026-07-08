/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { PropsWithChildren } from "react";
import type { features } from "~/lib/feature-list";
import { H3 } from "./ui/typography";
import { galleryObj, type GalleryObj } from "~/lib/generated/gallery";
import Link from "next/link";
import Image from "next/image";
import type { Placeholders } from "~/lib/generated/placeholders/type";
import { galleryMeta } from "~/lib/gallery-meta";
import { cn, entries } from "~/lib/utils";

export function FeaturesGallery<T extends keyof typeof features>({
  feature,
  placeholders,
}: PropsWithChildren<{ feature: T; placeholders: Placeholders[NoInfer<T>] }>) {
  const gallery = entries(galleryMeta[feature]);
  if (gallery.length === 0) return;
  return (
    <div className="flex w-full flex-col gap-4">
      <H3 className="mt-0">Gallery</H3>
      <div
        className={`grid grid-cols-1 gap-4 ${cn("md:grid-cols-2", gallery.length < 3 && "md:grid-cols-1")}`}
      >
        {gallery.map(([name, description]) => {
          //@ts-expect-error
          const { id } = galleryObj[feature][
            name
          ] as GalleryObj["adopt-eggs"][string];
          //@ts-expect-error
          const placeholder = placeholders[name] as string;
          return (
            <Link
              className="relative overflow-hidden rounded-md"
              key={id}
              href={`/gallery/${feature}/${name as string}`}
            >
              <Image
                placeholder={placeholder ? "blur" : "empty"}
                alt={description as string}
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${feature}/${id}.webp`}
                blurDataURL={placeholder}
                width={240}
                height={160}
                className="relative w-full"
                unoptimized
              />
              <div className="absolute bottom-0 w-full overflow-hidden bg-linear-to-b from-black/40 to-black/60 px-2 py-1 text-nowrap text-ellipsis text-white backdrop-blur-[2px]">
                {description as string}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
