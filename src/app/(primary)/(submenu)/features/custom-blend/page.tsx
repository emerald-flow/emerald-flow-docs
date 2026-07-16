import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { oran } from "~/lib/generated/sprites/oran";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/custom-blend";
import { blender } from "~/lib/generated/sprites/blender";
import { pages } from "~/lib/menu-items";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["custom-blend"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
  alternates: {
    canonical: pages.features["custom-blend"].url,
  },
};

export default function Page() {
  const img = oran;
  const alt = "Oran berry item sprite";
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
className="scale-80"
>
{
`
**${feature.title}** ${feature.description}

This allows you to craft Pokéblocks of your choice.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-blue-800"
borderColor="border-blue-600"
childBorderColor="[&>div]:not-first:border-blue-600"
textColor="text-blue-600"
>
<FeatureNotes.NoteMd src={oran} alt="Oran berry item sprite">
{
`
**No consumption** 

Berries are not consumed in this mode.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={blender} alt="Berry blender sprite">
{
`
**${pages.features["auto-blend"].title}** 

This feature can be used alongside [${pages.features["auto-blend"].title}](${pages.features["auto-blend"].url}) for a better blending experience.
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
