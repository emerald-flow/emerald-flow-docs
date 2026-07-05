"use client";
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from "next/image";
import { gallery, galleryObj, type GalleryObj } from "~/lib/generated/gallery";
import { GalleryInfo } from "./gallery-info";
import { GalleryReturn } from "./gallery-return";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";
import { GallerySwipeable } from "./gallery-swipeable";
import { galleryDescription } from "~/lib/gallery-description";

export function Gallery({
  id,
  feature,
  isModal = false,
}: {
  id: string;
  feature: keyof typeof galleryObj;
  isModal?: boolean;
}) {
  //@ts-expect-error
  const img = galleryObj[feature][id] as GalleryObj[keyof GalleryObj][string];
  //@ts-expect-error
  const description = galleryDescription[feature][id] as string;

  return (
    <>
      <GallerySwipeable
        feature={feature}
        index={img.index}
        className={cn(
          "relative w-full items-center justify-center md:w-[80%]",
          !isModal && "md:w-full",
        )}
      >
        <Image
          className="h-auto w-full"
          alt={description}
          src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${feature}/${img.id}.webp`}
          width={240}
          height={160}
          unoptimized
          priority
        />
        {isModal && <GalleryNavigations index={img.index} feature={feature} />}
        <GalleryReturn
          feature={feature}
          isModal={isModal}
          className="top-[1%] left-[1%]"
        />
        <GalleryInfo
          className="top-[1%] right-[1%]"
          description={description}
        />
      </GallerySwipeable>
      {isModal && <GalleryCarousal feature={feature} index={img.index} />}
    </>
  );
}

function GalleryNavigations(props: {
  index: number;
  feature: keyof typeof galleryObj;
}) {
  const length = gallery[props.feature].length;
  const isFirstIndex = props.index === 0;
  const isLastIndex = props.index === length - 1;
  const nextIndex = (props.index + 1) % length;
  const prevIndex = props.index - 1 && 0;
  return (
    <>
      {!isFirstIndex && (
        <Link
          href={`/gallery/${props.feature}/${gallery[props.feature][prevIndex]!.name}`}
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
          href={`/gallery/${props.feature}/${gallery[props.feature][nextIndex]!.name}`}
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

function GalleryCarousal(props: {
  index: number;
  feature: keyof typeof galleryObj;
}) {
  const images = Object.values(galleryObj[props.feature]).filter((img) =>
    range(props.index - 2, props.index + 2).includes(img.index),
  );
  return (
    <div className="fixed bottom-[5%] flex scale-80 items-center overflow-hidden bg-linear-to-b from-black/0 to-black/60 md:relative md:bottom-0">
      {images.map((img) => (
        <Link
          key={img.id}
          href={`/gallery/${props.feature}/${gallery[props.feature][img.index]!.name}`}
          replace
        >
          <Image
            alt={`Feature ${props.feature} Showcase #${img.index} Small`}
            width={240}
            height={160}
            className={cn(
              "h-auto w-40 transform object-cover brightness-50 contrast-125 transition hover:brightness-75",
              img.index === props.index &&
                "w-48 brightness-110 hover:brightness-110",
            )}
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${props.feature}/${img.id}.webp`}
            unoptimized
            priority
          />
        </Link>
      ))}
    </div>
  );
}
