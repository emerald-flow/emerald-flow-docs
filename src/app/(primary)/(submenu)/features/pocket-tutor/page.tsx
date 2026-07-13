import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { heartscale } from "~/lib/generated/sprites/heartscale";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/pocket-tutor";
import { tm } from "~/lib/generated/sprites/tm";
import { egg } from "~/lib/generated/sprites/egg";

export default function Page() {
  const feature = features["pocket-tutor"];
  const img = heartscale;
  const alt = "Heartscale item sprite";
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
blobBgColor="bg-sky-500"
>
{
`
**${feature.title}** lets your Pokémon learn every move 
they could legitimately know from a single menu.

It only offers moves your Pokémon can legally learn 
based on its species, evolution stage, and current level.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-sky-800"
borderColor="border-sky-600"
childBorderColor="[&>div]:not-first:border-sky-600"
textColor="text-sky-600"
>
<FeatureNotes.NoteMd src={tm} alt="TM item sprite">
{
`
**Legitimate Move Pool** 

Available legitimate moves are automatically determined using your Pokémon's species, 
evolution line, evolution stage, current level, and learnsets. 
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={egg} alt="Egg sprite">
{
`
**Hatched Pokémon** 

Pokémon hatched from Eggs can also learn their eligible Egg Moves, 
along with their complete level-up learnset of the base stage.
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
<FeaturesGallery feature="pocket-tutor" placeholders={placeholder}/>
</>
);
}
