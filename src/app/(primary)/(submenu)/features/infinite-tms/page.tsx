import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { tm } from "~/lib/generated/sprites/tm";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/infinite-tms";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["infinite-tms"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
};

export default function Page() {
  const img = tm;
  const alt = "TM item sprite";
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
blobBgColor="bg-orange-500"
className="scale-80"
>
{
`
**${feature.title}** ${feature.description}
`
}
</HeroMd>
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
