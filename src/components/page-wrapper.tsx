import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { cn } from "~/lib/utils";
import { Navigations } from "./navigations";

export function PageWrapper({
  children,
  navigable = false,
  ...props
}: PropsWithChildren<
  ComponentPropsWithoutRef<"section"> & { navigable?: boolean }
>) {
  return (
    <main
      {...props}
      className={cn(
        "relative mx-auto mb-18 flex w-full max-w-2xl flex-col items-start px-8 *:mb-6",
        props.className,
      )}
    >
      {children}
      {navigable && <div className="mt-auto mb-0! w-full border border-t-0" />}
      {navigable && <Navigations />}
    </main>
  );
}
