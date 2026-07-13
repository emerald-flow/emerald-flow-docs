import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { ppUp } from "~/lib/generated/sprites/ppUp";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/ev-training";
import { noEv } from "~/lib/generated/sprites/noEv";
import { pomeg } from "~/lib/generated/sprites/pomeg";

export default function Page() {
  const feature = features["ev-training"];
  const img = ppUp;
  const alt = "Vitamin item sprite";
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
**${feature.title}** lets you customize how Effort Values (EVs) 
are earned and trained throughout the game.

Choose between vanilla EV training, disabling EV gains entirely, 
or an enhanced Vitamin mode for faster and more convenient EV training.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-purple-800"
borderColor="border-purple-600"
childBorderColor="[&>div]:not-first:border-purple-600"
textColor="text-purple-600"
>
<FeatureNotes.NoteMd src={noEv} alt="No EV sprite">
{
`
**No EV Gains** 

Disabling EV Training prevents Pokémon from earning new EVs. 
Any EVs already gained remain unchanged. EV-reducing berries continue to remove 10 EVs.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={ppUp} alt="Vitamin item sprite">
{
`
**Vitamin Training** 

Vitamin mode raises the per-stat Vitamin limit from 100 EVs to 252 EVs, 
while preserving the overall 510 EV limit.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={pomeg} alt="Pomeg berry item sprite">
{
`
**EV-reducing berries** 

In Vitamin mode, EV-reducing berries remove 1 EV instead of 10 EVs, 
making it easier to fine-tune EV spreads.
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
<FeaturesGallery feature="ev-training" placeholders={placeholder}/>
</>
);
}
