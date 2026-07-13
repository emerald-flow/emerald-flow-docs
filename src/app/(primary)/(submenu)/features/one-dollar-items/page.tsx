import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { amuletCoin } from "~/lib/generated/sprites/amuletCoin";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/one-dollar-items";
import { clerk } from "~/lib/generated/sprites/clerk";
import { pages } from "~/lib/menu-items";
import { SeeAlso } from "~/components/see-also";

export default function Page() {
  const feature = features["one-dollar-items"];
  const img = amuletCoin;
  const alt = "Amulet coin item sprite";
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
**${feature.title}** lets you purchase every item sold in a PokéMart for $1.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-yellow-800"
borderColor="border-yellow-600"
childBorderColor="[&>div]:not-first:border-yellow-600"
textColor="text-yellow-600"
>
<FeatureNotes.NoteMd src={clerk} alt="Amulet Coin item sprite">
{
`
**${pages.features["pocket-mart"].title}** 

This feature can be used alongside [${pages.features["pocket-mart"].title}](${pages.features["pocket-mart"].url}) for easy item access.
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
