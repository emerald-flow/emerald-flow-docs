import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { repel } from "~/lib/generated/sprites/repel";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/always-feebas";

export default function Page() {
  const feature = features["always-feebas"];
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
**Permanent Repel** lets you toggle Repel effects on or
off without repeatedly using any Repel items.

It behaves just like a standard Repel, but stays active until you
choose otherwise.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-emerald-800"
borderColor="border-emerald-600"
childBorderColor="[&>div]:not-first:border-emerald-600"
textColor="text-emerald-600"
>
<FeatureNotes.NoteMd src={pokeball} alt="Pokeball item sprite">
{
`
**Encounters** 

Wild Pokémon with a higher level than your
lead Pokémon can still appear.
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
<FeaturesGallery feature="always-feebas" placeholders={placeholder}/>
</>
);
}
