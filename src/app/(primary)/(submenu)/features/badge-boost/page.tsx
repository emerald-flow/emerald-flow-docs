import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { badges } from "~/lib/generated/sprites/badges";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/badge-boost";

export default function Page() {
  const feature = features["badge-boost"];
  const img = badges;
  const alt = "Badges sprite";
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
**${feature.title}** lets you toggle the stat boosts 
provided by Gym badges on the player's Pokémon.

Disabling badge boosts makes in-game battles more closely 
match Link Battles and Battle Frontier battles, where badge boosts 
are not applied.
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
<FeaturesGallery feature="badge-boost" placeholders={placeholder}/>
</>
);
}
