import type { PropsWithChildren } from "react";
import SubLayout from "~/components/sub-layout";
import { pages } from "~/lib/menu-items";

export default function Layout(props: PropsWithChildren) {
  return <SubLayout {...pages.setup}>{props.children}</SubLayout>;
}
