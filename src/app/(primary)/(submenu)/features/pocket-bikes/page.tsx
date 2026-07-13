import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { bike } from "~/lib/generated/sprites/bike";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/pocket-bikes";
import { rydel } from "~/lib/generated/sprites/rydel";
import { startButton } from "~/lib/generated/sprites/startButton";

export default function Page() {
  const feature = features["pocket-bikes"];
  const img = bike;
  const alt = "Bike item sprite";
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
blobBgColor="bg-amber-500"
>
{
`
**${feature.title}** lets you swap Bikes, remotely.

Swap bikes without travelling to Rydel's shop in Mauville City.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-amber-800"
borderColor="border-amber-600"
childBorderColor="[&>div]:not-first:border-amber-600"
textColor="text-amber-600"
>
<FeatureNotes.NoteMd src={rydel} alt="Rydel sprite">
{
`
**Rydel's Shop** 

A bike must be obtained first, from Rydel for the **BIKES** option to appear in the start menu.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={startButton} alt="Start button sprite">
{
`
**Start screen option** 

**BIKES** appears in the Start Menu after obtaining a bike from Rydel.
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
<FeaturesGallery feature="pocket-bikes" placeholders={placeholder}/>
</>
);
}
