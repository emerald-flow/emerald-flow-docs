import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { physicalSpecial } from "~/lib/generated/sprites/physicalSpecial";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/physical-special-split";
import { AlertMd } from "~/components/alerts";
import { pokedex } from "~/lib/generated/sprites/pokedex";
import { cn } from "~/lib/utils";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["physical-special-split"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
};

export default function Page() {
  const img = physicalSpecial;
  const alt = "Physical-special item sprite";
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${feature.title}
`
}
</Md>
<HeroMd 
src={img}
alt={alt}
blobBgColor="bg-purple-500"
>
{
`
**${feature.title}** ${feature.description}

Instead of damage being determined solely by move type, 
each move is individually classified as Physical, Special, or Status.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-purple-800"
borderColor="border-purple-600"
childBorderColor="[&>div]:not-first:border-purple-600"
textColor="text-purple-600"
>
<FeatureNotes.NoteMd src={physicalSpecial} alt="Physical-Special sprite">
{
`
**Damage Categories** 

The Physical-Special Split applies to all Generation III moves, 
using the Generation IV damage classifications.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={pokedex} alt="Pokédex sprite">
{
`
**Better Summary** 

For the best experience, enable Better Summary to view each move's 
Physical, Special, or Status category directly from the 
Pokémon Summary screen.
`
}
</FeatureNotes.NoteMd>
</FeatureNotes>
<AlertMd variant="tip">
{
`
Need to see every updated damage category? 
The reference below lists the complete Physical, Special, and Status 
classifications for all moves (1–354) available in this game.

- [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/User:TehPerson/List_of_moves_(Generation_IV))
`
}
</AlertMd>
<Options>
{
feature.options.map((option, i)=>
(
<Options.Option
key={i}
src={img}
alt={alt}
option={option}
defaultOption={feature.defaultOption}
className={cn(option.title === feature.defaultOption && "pb-8 translate-y-4")}
/>)
)
}
</Options>
<FeaturesGallery feature={feature.id} placeholders={placeholder} />
<SeeAlso feature={feature.id} />
</>
);
}
