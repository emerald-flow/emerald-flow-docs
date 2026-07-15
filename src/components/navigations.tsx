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
    <div className="sticky bottom-0 flex h-16 w-full items-center justify-stretch p-0">
      {prev && (
        <NavButton
          href={prev.url}
          className="absolute left-[-15.5] origin-left scale-90 md:left-0"
          leftIcon={<ChevronLeft />}
        >
          {prev.title}
        </NavButton>
      )}
      {next && (
        <NavButton
          href={next.url}
          className="absolute right-[-15.5] origin-right scale-90 md:right-0"
          bClassName="text-transparent bg-gradient-to-r from-emerald-400 to-lime-400"
          rightIcon={<ChevronRight className="text-lime-500" />}
        >
          {next.title}
        </NavButton>
      )}
    </div>
  );
}

function NavButton({
  href,
  children,
  className,
  bClassName,
  leftIcon,
  rightIcon,
}: PropsWithChildren<{
  bClassName?: string;
  className?: string;
  href: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}>) {
  return (
    <Link href={href} className={cn(className)}>
      <Button
        variant="outline"
        className="dark:bg-sidebar hover:dark:bg-sidebar m-0! md:scale-100"
      >
        {leftIcon}
        <span
          className={cn(
            "flex items-center justify-center bg-linear-to-r bg-clip-text",
            bClassName,
          )}
        >
          {children}
        </span>
        {rightIcon}
      </Button>
    </Link>
  );
}
