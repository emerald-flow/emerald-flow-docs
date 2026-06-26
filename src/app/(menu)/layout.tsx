import type { PropsWithChildren } from "react";
import { PageWrapper } from "~/components/page-wrapper";

export default function Layout(props: PropsWithChildren) {
  return (
    <PageWrapper className="mt-8 flex flex-1 flex-col items-start gap-2 lg:mt-16 lg:min-h-[calc(100dvh-12rem)]">
      {props.children}
    </PageWrapper>
  );
}
