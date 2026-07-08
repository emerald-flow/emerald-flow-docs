import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { pokedex } from "~/lib/generated/sprites/pokedex";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/better-summary";
import { arrows } from "~/lib/generated/sprites/arrows";
import { physical } from "~/lib/generated/sprites/physical";
import { ppUp } from "~/lib/generated/sprites/ppUp";

export default function Page() {
  const feature = features["better-summary"];
  const img = pokedex;
  const alt = "Pokédex sprite";
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
blobBgColor="bg-rose-500"
>
{
`
**${feature.title}** enhances the Pokémon summary screen with additional information.

View nature modifiers, move damage categories, and hidden Pokémon stats directly from the summary screen.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-rose-800"
borderColor="border-rose-600"
childBorderColor="[&>div]:not-first:border-rose-600"
textColor="text-rose-600"
>
<FeatureNotes.NoteMd src={arrows} alt="Arrows sprite">
{
`
**Nature Modifiers** 

Stats increased and decreased by a Nature are highlighted in red and blue, respectively.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={physical} alt="Physical type sprite">
{
`
**Damange Category** 

Physical, Special, and Status moves are displayed in the Battle Moves section.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={pokedex} alt="Pokédex sprite">
{
`
**Hidden Stats** 

Press A to cycle between Base Stats (BS), EVs, and IVs.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={ppUp} alt="PP Up item sprite">
{
`
**PP Info** 

The original PP information remains available in the Contest Moves section.
`
}
</FeatureNotes.NoteMd>
</FeatureNotes>
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
/>)
)
}
</Options>
<FeaturesGallery feature="better-summary" placeholders={placeholder}/>
</>
);
}
