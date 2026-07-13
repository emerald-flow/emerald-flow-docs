import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { clerk } from "~/lib/generated/sprites/clerk";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/pocket-mart";
import { startButton } from "~/lib/generated/sprites/startButton";

export default function Page() {
  const feature = features["pocket-mart"];
  const img = clerk;
  const alt = "Clerk sprite";
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
blobBgColor="bg-blue-500"
>
{
`
**${feature.title}** lets you access the
PokéMart, remotely.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-blue-800"
borderColor="border-blue-600"
childBorderColor="[&>div]:not-first:border-blue-600"
textColor="text-blue-600"
>
<FeatureNotes.NoteMd src={startButton} alt="Start button sprite">
{
`
**Start screen option** 

**MART** appears in the Start Menu after obtaining the Running Shoes.
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
<FeaturesGallery feature="pocket-mart" placeholders={placeholder}/>
</>
);
}
