import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";
import { pages } from "~/lib/menu-items";
import { birch } from "~/lib/generated/sprites/birch";
import { TITLE } from "~/lib/project-meta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  alternates: {
    canonical: pages.overview.url,
  },
};

export default function Page() {
  const img = birch;
  const alt = "Birch sprite";
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.overview.title}
`
}
</Md>
<HeroMd
src={img}
alt={alt}
blobBgColor="bg-amber-500"
>
{
`
**${TITLE}** is an open-source enhancement project built
for and on top of _Pokémon Emerald_. Its goal is simple:
respect player choice, reduce friction, enhance where it
makes sense, and preserve the core experience and story.

Every feature is optional. Enable only the improvements you
want and keep everything else as close to vanilla Emerald
as you prefer.
`
}
</HeroMd>
<Md>
{
`
Emerald Flow, along with its documentation, is developed as
an open-source, ad-free project. It distributes BPS patches
only and will always remain freely available to the community.

No ROMs ever leave your browser. No ROMs are uploaded to a
server. Patching is performed entirely on the client side.

Just classic Emerald, but you set the flow of the game.
`
}
</Md>
</>
);
}
