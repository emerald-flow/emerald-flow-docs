import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { tm } from "~/lib/generated/sprites/tm";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/infinite-tms";

export default function Page() {
  const feature = features["infinite-tms"];
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
**${feature.title}** lets you reuse TMs 
without consuming them after a single use.
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
<FeaturesGallery feature="infinite-tms" placeholders={placeholder}/>
</>
);
}
