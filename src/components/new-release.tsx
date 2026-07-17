"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useLocalStorage } from "~/hooks/use-localstorage";
import { VERSION } from "~/lib/project-meta";

const STORAGE_KEY = "emerald-flow-version";

export function NewRelease() {
  const [seenVersion, setSeenVersion] = useLocalStorage<string | null>(
    STORAGE_KEY,
    null,
  );
  useEffect(() => {
    if (seenVersion === VERSION) return;
    toast("Emerald Flow has been updated!", {
      description: `You're now viewing v${VERSION}.`,
      position: "bottom-right",
      duration: Infinity,
      action: {
        label: "Dismiss",
        onClick: () => setSeenVersion(VERSION),
      },
      onDismiss: () => setSeenVersion(VERSION),
    });
  }, [seenVersion, setSeenVersion]);
  return null;
}
