/* eslint-disable @typescript-eslint/unbound-method */
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { useLocalStorage } from "~/hooks/use-localstorage";
import { pages } from "~/lib/menu-items";
import { VERSION } from "~/lib/project-meta";

const STORAGE_KEY = "emerald-flow-version";

export function NewRelease() {
  const { push } = useRouter();
  const [seenVersion, setSeenVersion] = useLocalStorage<string | null>(
    STORAGE_KEY,
    null,
  );
  useEffect(() => {
    if (seenVersion === VERSION) return;
    toast("Emerald Flow has been updated! 🎉", {
      description: `You're now viewing v${VERSION}.`,
      position: "bottom-right",
      duration: Infinity,
      action: {
        label: "Changelog",
        onClick: () => {
          setSeenVersion(VERSION);
          push(pages.changelog.url);
        },
      },
      closeButton: true,
      onDismiss: () => setSeenVersion(VERSION),
    });
  }, [seenVersion, setSeenVersion, push]);
  return null;
}
