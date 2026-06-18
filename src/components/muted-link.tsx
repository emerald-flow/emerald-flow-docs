import { Link } from "next-view-transitions";
import { Muted } from "./ui/typography";
import type { ComponentProps, PropsWithChildren } from "react";

export function MutedLink({
  children,
  ...props
}: PropsWithChildren<{
  link: Omit<ComponentProps<typeof Link>, "children">;
  muted?: Omit<ComponentProps<typeof Muted>, "children">;
}>) {
  return (
    <Link {...props.link}>
      <Muted {...props.muted}>{children}</Muted>
    </Link>
  );
}
