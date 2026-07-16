import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { fishingRod } from "~/lib/generated/sprites/fishingRod";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/instant-fishing";
import { feebas } from "~/lib/generated/sprites/feebas";
import { pages } from "~/lib/menu-items";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["instant-fishing"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
  alternates: {
    canonical: pages.features["instant-fishing"].url,
  },
};

export default function Page() {
  const img = fishingRod;
  const alt = "Super rod item sprite";
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
**${feature.title}** ${feature.description}
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-blue-800"
borderColor="border-blue-600"
childBorderColor="[&>div]:not-first:border-blue-600"
textColor="text-blue-600"
>
<FeatureNotes.NoteMd src={fishingRod} alt={alt}>
{
`
**Encounter rates** 

Fishing encounter rates are unchanged. You can still fail to get a bite.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={feebas} alt="Feebas sprite">
{
`
**${pages.features["always-feebas"].title}** 

This feature can be used alongside [${pages.features["always-feebas"].title}](${pages.features["always-feebas"].url}) for a better fishing experience.
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
