import { TitleMdx } from "~/components/title-mdx";
import { PageHero } from "~/components/page-hero";
import { pages } from "~/lib/menu-items";
import type { PropsWithChildren } from "react";

export const Title = () => (
  <TitleMdx title={pages.features["1$-items"].title} />
);

export const Hero = (props: PropsWithChildren) => (
  <PageHero src="/birch.webp" alt="Professor Birch introduction screen sprite">
    {props.children}
  </PageHero>
);
