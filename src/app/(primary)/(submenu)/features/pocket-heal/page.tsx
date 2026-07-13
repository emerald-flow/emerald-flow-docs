import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { joy } from "~/lib/generated/sprites/joy";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/pocket-heal";
import { startButton } from "~/lib/generated/sprites/startButton";

export default function Page() {
  const feature = features["pocket-heal"];
  const img = joy;
  const alt = "Nurse joy sprite";
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
blobBgColor="bg-pink-500"
>
{
`
**${feature.title}** lets you Heal your party like in the 
Pokémon Center, remotely.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-pink-800"
borderColor="border-pink-600"
childBorderColor="[&>div]:not-first:border-pink-600"
textColor="text-pink-600"
>
<FeatureNotes.NoteMd src={startButton} alt="Start button sprite">
{
`
**Start screen option** 

**HEAL** appears in the Start Menu after obtaining the Running Shoes.
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
<FeaturesGallery feature="pocket-heal" placeholders={placeholder}/>
</>
);
}
