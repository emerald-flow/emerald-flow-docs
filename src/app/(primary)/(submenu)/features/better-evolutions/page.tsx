import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { rareCandy } from "~/lib/generated/sprites/rareCandy";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/better-evolutions";
import { sootheBell } from "~/lib/generated/sprites/sootheBell";

export default function Page() {
  const feature = features["better-evolutions"];
  const img = rareCandy;
  const alt = "Rare candy item sprite";
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
**${feature.title}** adds more convenient ways to evolve Pokémon 
that normally require trading or friendship.

Choose between simplified level-based evolutions or held-item level-up 
evolutions while preserving every original evolution method.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-blue-800"
borderColor="border-blue-600"
childBorderColor="[&>div]:not-first:border-blue-600"
textColor="text-blue-600"
>
<FeatureNotes.NoteMd src={pokeball} alt="Pokéball item sprite">
{
`
**Evolution Methods** 

Trade, trade-with-item, friendship, and friendship-with-time 
evolutions are affected with this feature.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={rareCandy} alt="Rare candy item sprite">
{
`
**Level 30** 

Pokémon with the above evolution methods can all 
evolve naturally upon reaching Level 30.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={sootheBell} alt="Soothe Bell item sprite">
{
`
**Items** 

Pokémon with the above evolution methods can all 
evolve by leveling up while holding a matching type-boosting 
item from either the current or evolved form. 
Friendship evolutions can use Soothe Bell as well.
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
<FeaturesGallery feature="better-evolutions" placeholders={placeholder}/>
</>
);
}
