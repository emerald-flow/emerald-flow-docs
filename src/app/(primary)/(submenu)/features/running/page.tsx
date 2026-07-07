import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { running } from "~/lib/generated/sprites/running";
import { mom } from "~/lib/generated/sprites/mom";
import { bButton } from "~/lib/generated/sprites/bButton";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/permanent-repel";

export default function Page() {
  const feature = features.running;
  const img = running;
  const alt = "Brendan running sprite";
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
>
{
`
**${feature.title}** can be used to set the type of running experience you want to have.

You can choose to run indoors, and additonally run without the B button.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-emerald-800"
borderColor="border-emerald-600"
childBorderColor="[&>div]:not-first:border-emerald-600"
textColor="text-emerald-600"
>
<FeatureNotes.NoteMd src={mom} alt="Mom sprite">
{
`
**Running Shoes** 

Running shoes must still be obtained by mom at the start of the game.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={bButton} alt="B-Button sprite">
{
`
**B-Button** 

Some options might still require you to hold B.
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
<FeaturesGallery feature="permanent-repel" placeholders={placeholder}/>
</>
);
}
