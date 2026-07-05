"use client";

import type { PropsWithChildren } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { usePathname, useRouter } from "next/navigation";

export function Modal(props: PropsWithChildren<{ pathname: string }>) {
  const router = useRouter();
  const pathname = usePathname();
  if (pathname !== props.pathname) return null;
  return (
    <Dialog
      defaultOpen
      modal
      onOpenChange={(open) => {
        if (!open) router.back();
      }}
    >
      <DialogContent showCloseButton={false}>{props.children}</DialogContent>
    </Dialog>
  );
}
