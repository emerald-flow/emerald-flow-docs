"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Undo2 } from "lucide-react";
import { pages } from "~/lib/menu-items";
import type { galleryObj } from "~/lib/generated/gallery";
import { useRouter } from "next/navigation";
import { cn } from "~/lib/utils";

export function GalleryReturn(props: {
  feature: keyof typeof galleryObj;
  className?: string;
  isModal?: boolean;
}) {
  const router = useRouter();
  return (
    <Link
      href={`${pages.features.url}/${props.feature}`}
      replace
      className={cn(
        "absolute opacity-80",
        props.className,
        props.isModal && "pointer-events-none",
      )}
    >
      <Button
        variant="secondary"
        className={cn(props.isModal && "pointer-events-auto")}
        onClick={() => props.isModal && router.back()}
      >
        <Undo2 />
      </Button>
    </Link>
  );
}
