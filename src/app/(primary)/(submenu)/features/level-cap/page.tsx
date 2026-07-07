import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { AlertMd } from "~/components/alerts";
import { rareCandy } from "~/lib/generated/sprites/rareCandy";
import { gymSign } from "~/lib/generated/sprites/gymSign";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/level-cap";

export default function Page() {
  const feature = features["level-cap"];
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
**Level Cap** lets you enforce a global level cap that applies to all 
experience gains, including battles and Rare Candies.

Train without accidentally overleveling and keep every major battle at its intended difficulty. 
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-blue-800"
borderColor="border-blue-600"
childBorderColor="[&>div]:not-first:border-blue-600"
textColor="text-blue-600"
>
<FeatureNotes.NoteMd src={gymSign} alt="Pokeball item sprite">
{
`
**Cap progression** 

The level cap automatically updates after each major battle to match the next Gym Leader,
 Elite Four member, Champion, or Steven's ace.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={rareCandy} alt="Pokeball item sprite">
{
`
**Experience/Level gains** 

Only experience and level gains are capped.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={pokeball} alt="Pokeball item sprite">
{
`
**Higher-level Pokémon** 

Pokémon above the current cap can still participate in battle.
`
}
</FeatureNotes.NoteMd>
</FeatureNotes>
<AlertMd variant="tip" className="[&>a]:">
{
`
Need the exact level caps? Check these references that provide a breakdown of the cap progression.

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
<FeaturesGallery feature="level-cap" placeholders={placeholder}/>
</>
);
}
