"use client";

import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import type { PropsWithChildren, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { flatMenuItems, flatMenuUrlToIndex } from "~/lib/menu-items";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Navigations() {
  const pathname = usePathname() as (typeof flatMenuItems)[number]["url"];
  const index = flatMenuUrlToIndex[pathname];
  const prev = flatMenuItems[index - 1];
  const next = flatMenuItems[index + 1];
  return (
    <div className="sticky bottom-0 flex h-20 w-full items-center justify-stretch p-0">
      {prev && (
        <NavButton
          href={prev.url}
          className="absolute left-[-15.5] origin-left scale-85 md:left-0"
          aClassName="py-6!"
          bClassName="items-end"
          leftIcon={<ChevronLeft />}
        >
          <span className="text-xs text-gray-400">Previous</span>
          {prev.title}
        </NavButton>
      )}
      {next && (
        <NavButton
          href={next.url}
          className="absolute right-[-15.5] origin-right scale-85 md:right-0"
          aClassName="py-6!"
          bClassName="text-transparent bg-linear-to-r from-emerald-400 to-lime-400 items-start bg-clip-text"
          rightIcon={<ChevronRight className="text-lime-500" />}
        >
          <span className="text-xs text-gray-400">Next</span>
          {next.title}
        </NavButton>
      )}
    </div>
  );
}

export function NavButton({
  href,
  children,
  className,
  aClassName,
  bClassName,
  leftIcon,
  rightIcon,
}: PropsWithChildren<
  {
    aClassName?: string;
    bClassName?: string;
    className?: string;
    href: string;
  } & (
    | { leftIcon?: undefined; rightIcon?: ReactNode }
    | { leftIcon?: ReactNode; rightIcon?: undefined }
  )
>) {
  return (
    <Link href={href} className={cn("rounded-md", className)} role="button">
      <Button
        variant="outline"
        className={cn(
          "dark:bg-sidebar dark:hover:bg-sidebar-accent scale-100",
          aClassName,
        )}
      >
        {leftIcon}
        <span className={cn("flex flex-col", bClassName)}>{children}</span>
        {rightIcon}
      </Button>
    </Link>
  );
}
