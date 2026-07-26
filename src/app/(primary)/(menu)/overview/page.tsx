import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";
import { pages } from "~/lib/menu-items";
import { birch } from "~/lib/generated/sprites/birch";
import { TITLE } from "~/lib/project-meta";
import type { Metadata } from "next";

const description = ` is designed for players who want to replay Pokémon Emerald, with some modern QoL changes and Enhancements, without turning it into a different game. 
Every gameplay enhancement is optional, allowing you to build your own version of Emerald while keeping the original story.`;

export const metadata: Metadata = {
  title: "Overview",
  description: `${TITLE} ${description}`,
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
**${TITLE}** ${description}

Just classic Emerald, but you set the flow of the game.
`
}
</HeroMd>
<Md>
{
`
### Design Philosophy
- Preserve vanilla Emerald.
- Every gameplay feature is **OPTIONAL**.
- **REVERSE COMPATIBILITY** with the orignal save file.
- Maintain **SAVE FILE LEGALITY**.
- Quick and easy browser-based patching.
- All feature toggles are accessible from within the game.
- Stay as **UNOPINIONATED** as possible.

### Who is this best suited for?
- Players who want a vanilla Pokémon Emerald experience with modern conveniences.
- Players who prefer choosing their own quality-of-life features instead of having them forced upon them.
- Players who want to continue using their existing save file.
- Players who want to reduce repetitive grinding and fast-track parts of the game.
- Players planning a Pokémon Emerald Nuzlocke who want first-class optional tools to support their run.
`
}
</Md>
</>
);
}
