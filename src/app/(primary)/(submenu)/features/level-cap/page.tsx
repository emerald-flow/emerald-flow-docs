import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { AlertMd } from "~/components/alerts";
import { badges } from "~/lib/generated/sprites/badges";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/level-cap";
import { rareCandy } from "~/lib/generated/sprites/rareCandy";
import { gymSign } from "~/lib/generated/sprites/gymSign";
import { SeeAlso } from "~/components/see-also";

export default function Page() {
  const feature = features["level-cap"];
  const img = badges;
  const alt = "Gym sign sprite";
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
>
{
`
**${feature.title}** lets you enforce a global level cap 
across all experience gains, including battles, day care and rare candies.

Train without accidentally overleveling, 
and keep every major battle at its intended difficulty.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-sky-800"
borderColor="border-sky-600"
childBorderColor="[&>div]:not-first:border-sky-600"
textColor="text-sky-600"
>
<FeatureNotes.NoteMd src={gymSign} alt="Gym sign sprite">
{
`
**Cap progression** 

The level cap automatically updates after each major battle to match the next Gym Leader,
 Elite Four member, Champion, or Steven's ace.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={rareCandy} alt="Rare candy item sprite">
{
`
**Experience/Level gains** 

Only experience and level gains are capped.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={pokeball} alt="Pokéball item sprite">
{
`
**Higher-level Pokémon** 

Pokémon above the current level cap can still participate in battle.
`
}
</FeatureNotes.NoteMd>
</FeatureNotes>
<AlertMd variant="tip">
{
`
Need the exact level caps? These references provide a breakdown of the cap progression.

- [Nuzlocke University](https://nuzlockeuniversity.ca/2022/01/18/hardcore-nuzlocke-level-caps-by-generation/#emerald)
- [PokémonDB](https://pokemondb.net/emerald/gymleaders-elitefour)
`
}
</AlertMd>
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
