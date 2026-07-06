import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

export function PageWrapper({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<"section">>) {
  return (
    <main
      {...props}
      className={cn(
        "mx-auto mb-18 flex w-full max-w-2xl flex-col items-start px-8 *:mb-6",
        props.className,
      )}
    >
      {children}
    </main>
  );
}
