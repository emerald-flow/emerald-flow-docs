import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { interrobang } from "~/lib/generated/sprites/interrobang";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/instant-text";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["instant-text"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
};

export default function Page() {
  const img = interrobang;
  const alt = "Unown interrobang sprite";
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
blobBgColor="bg-slate-500"
blobScale="scale-700"
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
