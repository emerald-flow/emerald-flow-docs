import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { feebas } from "~/lib/generated/sprites/feebas";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/always-feebas";
import { surfing } from "~/lib/generated/sprites/surfing";
import { fishingRod } from "~/lib/generated/sprites/fishingRod";
import { pages } from "~/lib/menu-items";
import { signPost } from "~/lib/generated/sprites/signPost";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["always-feebas"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
  alternates: {
    canonical: pages.features["always-feebas"].url,
  },
};

export default function Page() {
  const img = feebas;
  const alt = "Feebas sprite";
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
blobBgColor="bg-yellow-500"
>
{
`
**${feature.title}** ${feature.description}

All tiles on the Route 119 river are now capable of triggering a Feebas encounter.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-yellow-800"
borderColor="border-yellow-600"
childBorderColor="[&>div]:not-first:border-yellow-600"
textColor="text-yellow-600"
>
<FeatureNotes.NoteMd src={signPost} alt="Sign Post sprite">
{
`
**Route 119** 

This feature only affects fishing encounters on Route 119.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={surfing} alt="Brendan surfing sprite">
{
`
**Surfing** 

Surfing will not result in a Feebas encounter.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={fishingRod} alt="Super Rod item sprite">
{
`
**${pages.features["instant-fishing"].title}** 

This feature can be used alongside [${pages.features["instant-fishing"].title}](${pages.features["instant-fishing"].url}) for a better fishing experience.
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
