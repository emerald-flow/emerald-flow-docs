import type { PropsWithChildren } from "react";
import type { features } from "~/lib/feature-list";
import { H3 } from "./ui/typography";
import { gallery } from "~/lib/generated/gallery";
import Link from "next/link";
import Image from "next/image";
import type { Placeholders } from "~/lib/generated/placeholders/type";
import { galleryDescription } from "~/lib/gallery-description";
import { cn } from "~/lib/utils";

export function FeaturesGallery<T extends keyof typeof features>({
  feature,
  placeholders,
}: PropsWithChildren<{ feature: T; placeholders: Placeholders[NoInfer<T>] }>) {
  const length: number = gallery[feature].length;
  if (length === 0) return;
  return (
    <div className="flex w-full flex-col gap-4">
      <H3>Gallery</H3>
      <div
        className={`grid grid-cols-1 gap-4 ${cn("md:grid-cols-2", length < 4 && "md:grid-cols-1")}`}
      >
        {gallery[feature].map(({ name, id }) => {
          const description = galleryDescription[feature][name];
          const placeholder = placeholders[name] as string;
          return (
            <Link key={id} href={`/gallery/${feature}/${name}`}>
              <Image
                placeholder={placeholder ? "blur" : "empty"}
                alt={description}
                src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${feature}/${id}.webp`}
                blurDataURL={placeholder}
                width={240}
                height={160}
                className="w-full rounded-md"
                unoptimized
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
