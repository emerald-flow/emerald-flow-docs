import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { cycling } from "~/lib/generated/sprites/cycling";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/fast-eggs";
import { egg } from "~/lib/generated/sprites/egg";
import { slugma } from "~/lib/generated/sprites/slugma";
import { oldman } from "~/lib/generated/sprites/oldman";
import { pages } from "~/lib/menu-items";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["fast-eggs"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
};

export default function Page() {
  const img = cycling;
  const alt = "May cycling sprite";
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
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-emerald-800"
borderColor="border-emerald-600"
childBorderColor="[&>div]:not-first:border-emerald-600"
textColor="text-emerald-600"
>
<FeatureNotes.NoteMd src={oldman} alt="Old man sprite">
{
`
**Egg Generation** 

Egg generation is sped up in the Day care.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={cycling} alt={alt}>
{
`
**Egg Hatching** 

Eggs require fewer steps to hatch.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={slugma} alt="Slugma sprite">
{
`
**Flame Body & Magma Armor** 

The selected multiplier stacks with Flame Body and Magma Armor, reducing hatch times even further.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={egg} alt="Egg item sprite">
{
`
**${pages.features["adopt-eggs"].title}** 

This feature can be used alongside [${pages.features["adopt-eggs"].title}](${pages.features["adopt-eggs"].url}) for a better breeding experience.
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
