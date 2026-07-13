import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { masterball } from "~/lib/generated/sprites/masterball";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/perfect-catches";
import { SeeAlso } from "~/components/see-also";

export default function Page() {
  const feature = features["perfect-catches"];
  const img = masterball;
  const alt = "Master ball item sprite";
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
blobBgColor="bg-purple-500"
className="scale-80"
>
{
`
**${feature.title}** guarantees that every Poké Ball 
successfully catches a wild Pokémon.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-purple-800"
borderColor="border-purple-600"
childBorderColor="[&>div]:not-first:border-purple-600"
textColor="text-purple-600"
>
<FeatureNotes.NoteMd src={pokeball} alt="Pokéball item sprite">
{
`
**All Pokéballs** 

Every Pokéball, Great Ball, Ultra Ball, and other catchable Ball now has a 100% catch rate.
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
