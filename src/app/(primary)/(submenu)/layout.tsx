import type { PropsWithChildren } from "react";
import { PageWrapper } from "~/components/page-wrapper";

export default function Layout(props: PropsWithChildren) {
  return (
    <PageWrapper
      className="min-h-[calc(100dvh-11.75rem)] md:mt-10 md:min-h-[calc(100dvh-14.25rem)] [&>a:first-child]:mb-2"
      navigable
    >
      {props.children}
    </PageWrapper>
  );
}
