import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { safariball } from "~/lib/generated/sprites/safariball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/better-safari";
import { running } from "~/lib/generated/sprites/running";
import { fluffyTail } from "~/lib/generated/sprites/fluffyTail";
import { pages } from "~/lib/menu-items";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["better-safari"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
};

export default function Page() {
  const img = safariball;
  const alt = "Safari ball item sprite";
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
blobBgColor="bg-lime-500"
className="scale-80"
>
{
`
**${feature.title}** ${feature.description}

The Step counter and the Safari ball counter will be disabled.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-lime-800"
borderColor="border-lime-600"
childBorderColor="[&>div]:not-first:border-lime-600"
textColor="text-lime-600"
>
<FeatureNotes.NoteMd src={running} alt="Bredan running sprite">
{
`
**Unlimited Steps** 

The Safari Zone step counter no longer decreases
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={safariball} alt={alt}>
{
`
**Unlimited Safari balls** 

Safari Balls are no longer consumed.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={fluffyTail} alt="Fluffy tail item sprite">
{
`
**${pages.features["no-fleeing-mon"].title}** 

This feature can be used alongside [${pages.features["no-fleeing-mon"].title}](${pages.features["no-fleeing-mon"].url}) for a even better Safari experience.
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
