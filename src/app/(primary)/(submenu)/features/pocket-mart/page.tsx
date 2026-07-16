import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { clerk } from "~/lib/generated/sprites/clerk";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/pocket-mart";
import { startButton } from "~/lib/generated/sprites/startButton";
import { amuletCoin } from "~/lib/generated/sprites/amuletCoin";
import { pages } from "~/lib/menu-items";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["pocket-mart"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
  alternates: {
    canonical: pages.features["pocket-mart"].url,
  },
};

export default function Page() {
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
<FeatureNotes.NoteMd src={startButton} alt="Start button sprite">
{
`
**Start screen option** 

**MART** appears in the Start Menu after obtaining the Running Shoes.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={amuletCoin} alt="Amulet Coin item sprite">
{
`
**${pages.features["one-dollar-items"].title}** 

This feature can be used alongside [${pages.features["one-dollar-items"].title}](${pages.features["one-dollar-items"].url}) for easy item access.
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
