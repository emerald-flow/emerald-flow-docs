import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { repel } from "~/lib/generated/sprites/repel";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/permanent-repel";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["permanent-repel"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
};

export default function Page() {
  const img = repel;
  const alt = "Repel item sprite";
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
>
{
`
**${feature.title}** ${feature.description}

When enabled, Repel remains active indefinitely until you choose to turn it off.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-emerald-800"
borderColor="border-emerald-600"
childBorderColor="[&>div]:not-first:border-emerald-600"
textColor="text-emerald-600"
>
<FeatureNotes.NoteMd src={pokeball} alt="Pokéball item sprite">
{
`
**Encounters** 

Wild Pokémon with a higher level than your lead Pokémon can still appear.
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
