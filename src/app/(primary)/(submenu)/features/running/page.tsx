import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { running } from "~/lib/generated/sprites/running";
import { mom } from "~/lib/generated/sprites/mom";
import { bButton } from "~/lib/generated/sprites/bButton";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/running";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";
import { pages } from "~/lib/menu-items";

const feature = features.running;

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
  alternates: {
    canonical: pages.features.running.url,
  },
};

export default function Page() {
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
**${feature.title}** ${feature.description}

Choose whether running is available indoors, 
or remove the need to hold the B Button altogether.
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

Running Shoes must still be obtained from Mom at the start of the game.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={bButton} alt="B-Button sprite">
{
`
**B-Button** 

Some options may still require you to hold the B Button.
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
<FeaturesGallery feature={feature.id} placeholders={placeholder} />
<SeeAlso feature={feature.id} />
</>
);
}
