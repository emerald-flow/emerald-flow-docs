"use client";
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { useSwipeable } from "react-swipeable";
import { gallery } from "~/lib/generated/gallery";

export function GallerySwipeable(
  props: PropsWithChildren<{
    index: number;
    feature: keyof typeof gallery;
    className?: string;
  }>,
) {
  const router = useRouter();
  const featureGallery = gallery[props.feature];
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (props.index < featureGallery.length - 1)
        router.replace(
          `/gallery/${props.feature}/${featureGallery[props.index + 1]!.name}`,
        );
    },
    onSwipedRight: () => {
      if (props.index > 0)
        router.replace(
          `/gallery/${props.feature}/${featureGallery[props.index - 1]!.name}`,
        );
    },
    trackMouse: true,
  });
  return (
    <div className={props.className} {...handlers}>
      {props.children}
    </div>
  );
}
