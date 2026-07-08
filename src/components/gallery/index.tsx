/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from "next/image";
import {
  galleryObj,
  type Gallery,
  type GalleryObj,
} from "~/lib/generated/gallery";
import { GalleryInfo } from "./gallery-info";
import { GalleryReturn } from "./gallery-return";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn, entries } from "~/lib/utils";
import { galleryMeta } from "~/lib/gallery-meta";

export function Gallery<T extends keyof typeof galleryObj>({
  name,
  feature,
  isModal = false,
}: {
  feature: T;
  name: keyof (typeof galleryMeta)[NoInfer<T>];
  isModal?: boolean;
}) {
  const names = Object.keys(galleryMeta[feature]) as (typeof name)[];
  const index = names.indexOf(name);
  //@ts-ignore
  const { id } = galleryObj[feature][name] as GalleryObj["adopt-eggs"][string];
  const description = galleryMeta[feature][name];

  return (
    <>
      <div
        className={cn(
          "relative w-full items-center justify-center md:w-[80%]",
          !isModal && "md:w-full",
        )}
      >
        <Image
          className="h-auto w-full"
          alt={description as string}
          src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${feature}/${id}.webp`}
          width={240}
          height={160}
          unoptimized
          priority
        />
        {isModal && (
          <GalleryNavigations names={names} index={index} feature={feature} />
        )}
        <GalleryReturn
          feature={feature}
          isModal={isModal}
          className="top-[1%] left-[1%]"
        />
        <GalleryInfo
          className="right-[1%] bottom-[1%]"
          description={description as string}
        />
      </div>
      {isModal && <GalleryCarousal feature={feature} index={index} />}
    </>
  );
}

function GalleryNavigations<T extends keyof typeof galleryObj>(props: {
  index: number;
  feature: T;
  names: (keyof (typeof galleryMeta)[NoInfer<T>])[];
}) {
  const length = props.names.length;
  const isFirstIndex = props.index === 0;
  const isLastIndex = props.index === length - 1;
  const nextIndex = (props.index + 1) % length;
  const prevIndex = props.index - 1 || 0;
  return (
    <>
      {!isFirstIndex && (
        <Link
          href={`/gallery/${props.feature}/${props.names[prevIndex] as string}`}
          replace
          className="absolute top-[50%] left-[1%] opacity-80"
        >
          <Button variant="secondary">
            <ChevronLeft />
          </Button>
        </Link>
      )}
      {!isLastIndex && (
        <Link
          href={`/gallery/${props.feature}/${props.names[nextIndex] as string}`}
          replace
          className="absolute top-[50%] right-[1%] opacity-80"
        >
          <Button variant="secondary">
            <ChevronRight />
          </Button>
        </Link>
      )}
    </>
  );
}

const range = (start: number, end: number) => {
  const output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += 1) {
    output.push(i);
  }
  return output;
};

function GalleryCarousal<T extends keyof typeof galleryObj>(props: {
  index: number;
  feature: T;
}) {
  const images = entries(galleryMeta[props.feature]).filter((_, i) =>
    range(props.index - 8, props.index + 8).includes(i),
  );
  return (
    <div className="fixed bottom-[5%] flex scale-80 items-center overflow-hidden bg-linear-to-b from-black/0 to-black/60 md:relative md:bottom-0">
      {images.map(([name, description], i) => {
        //@ts-expect-error
        const { id } = galleryObj[props.feature][
          name
        ] as GalleryObj["adopt-eggs"][string];
        return (
          <Link
            key={id}
            href={`/gallery/${props.feature}/${name as string}`}
            replace
          >
            <Image
              alt={`${description as string} - Small`}
              width={240}
              height={160}
              className={cn(
                "h-auto w-40 transform object-cover brightness-50 contrast-125 transition hover:brightness-75",
                i === props.index && "w-48 brightness-110 hover:brightness-110",
              )}
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${props.feature}/${id}.webp`}
              unoptimized
              priority
            />
          </Link>
        );
      })}
    </div>
  );
}
