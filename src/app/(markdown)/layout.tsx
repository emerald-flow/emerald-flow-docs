import type { PropsWithChildren } from "react";
import { PageWrapper } from "~/components/page-wrapper";

export default function Layout(props: PropsWithChildren) {
  return (
    <PageWrapper className="flex flex-col items-start gap-1">
      {props.children}
    </PageWrapper>
  );
}
