import Link from "next/link";
import type { ComponentProps, PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const mutedVariants = cva("", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export function MutedLink({
  children,
  muted,
  link,
}: PropsWithChildren<{
  link: Omit<ComponentProps<typeof Link>, "children">;
  muted?: { className?: string } & VariantProps<typeof mutedVariants>;
}>) {
  return (
    <Link {...link}>
      <span
        className={cn(
          "text-muted-foreground text-sm underline underline-offset-2",
          mutedVariants({ className: muted?.className, size: muted?.size }),
        )}
      >
        {children}
      </span>
    </Link>
  );
}
