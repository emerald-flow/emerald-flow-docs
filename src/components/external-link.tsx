import { ExternalLink as Icon } from "lucide-react";
import type { PropsWithChildren } from "react";
import { MutedLink } from "~/components/muted-link";
import { cn } from "~/lib/utils";

export function ExternalLink({
  href,
  className,
  children,
}: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <MutedLink
      link={{
        href,
        className: cn("underline underline-offset-2", className),
        rel: "noopener noreferrer",
        target: "_blank",
      }}
      muted={{
        size: "medium",
        className: "inline-flex flex-1 flex-row gap-0 items-center",
      }}
    >
      {children}
      <Icon size={16} className="-translate-y-px" />
    </MutedLink>
  );
}
