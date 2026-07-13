import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { fluffyTail } from "~/lib/generated/sprites/fluffyTail";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/no-fleeing-mon";
import { latios } from "~/lib/generated/sprites/latios";
import { camper } from "~/lib/generated/sprites/camper";
import { pages } from "~/lib/menu-items";
import { safariball } from "~/lib/generated/sprites/safariball";

export default function Page() {
  const feature = features["no-fleeing-mon"];
  const img = fluffyTail;
  const alt = "Fluffy tail item sprite";
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
blobBgColor="bg-amber-500"
>
{
`
**${feature.title}** prevents Roaming Pokémon and Safari Zone Pokémon from fleeing from battles.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-amber-800"
borderColor="border-amber-600"
childBorderColor="[&>div]:not-first:border-amber-600"
textColor="text-amber-600"
>
<FeatureNotes.NoteMd src={latios} alt="Latios sprite">
{
`
**Roaming Pokémon** 

Roaming Pokémon no longer flee after each turn, allowing the battle to continue as a normal wild battle.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={camper} alt="Camper sprite">
{
`
**Safari Zone** 

Wild Pokémon encountered in the Safari Zone will no longer flee during Safari battles.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={safariball} alt="Safari ball item sprite">
{
`
**${pages.features["better-safari"].title}** 

This feature can be used alongside [${pages.features["better-safari"].title}](${pages.features["better-safari"].url}) for a even better Safari experience.
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
<FeaturesGallery feature="no-fleeing-mon" placeholders={placeholder}/>
</>
);
}
