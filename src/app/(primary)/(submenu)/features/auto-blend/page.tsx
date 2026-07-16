import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { blender } from "~/lib/generated/sprites/blender";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/auto-blend";
import { pages } from "~/lib/menu-items";
import { oran } from "~/lib/generated/sprites/oran";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["auto-blend"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
  alternates: {
    canonical: pages.features["auto-blend"].url,
  },
};

export default function Page() {
  const img = blender;
  const alt = "Blender sprite";
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
className="scale-80"
>
{
`
**${feature.title}** ${feature.description}

It applies to both the player and the NPCs, resulting in perfect berry blends.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-sky-800"
borderColor="border-sky-600"
childBorderColor="[&>div]:not-first:border-sky-600"
textColor="text-sky-600"
>
<FeatureNotes.NoteMd src={oran} alt="Oran berry item sprite">
{
`
**${pages.features["custom-blend"].title}** 

This feature can be used alongside [${pages.features["custom-blend"].title}](${pages.features["custom-blend"].url}) for a better blending experience.
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
