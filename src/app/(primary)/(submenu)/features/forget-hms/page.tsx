import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { hm } from "~/lib/generated/sprites/hm";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/forget-hms";

export default function Page() {
  const feature = features["forget-hms"];
  const img = hm;
  const alt = "HM item sprite";
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
**${feature.title}** lets you replace HM moves on 
a Pokémon learning a new move.
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
<FeaturesGallery feature="forget-hms" placeholders={placeholder}/>
</>
);
}
