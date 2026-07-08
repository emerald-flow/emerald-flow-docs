import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { zigzagoon } from "~/lib/generated/sprites/zigzagoon";
import { pokeball } from "~/lib/generated/sprites/pokeball";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/no-hm-slave";
import { boulder } from "~/lib/generated/sprites/boulder";
import { tm } from "~/lib/generated/sprites/tm";
import { frontierSymbol } from "~/lib/generated/sprites/frontierSymbol";
import { startButton } from "~/lib/generated/sprites/startButton";

export default function Page() {
  const feature = features["no-hm-slave"];
  const img = zigzagoon;
  const alt = "Zigzagoon sprite";
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
**${feature.title}** removes the need to teach HM moves to your Pokémon.

HM moves behave similarly to [Secret Techniques](https://bulbapedia.bulbagarden.net/wiki/Secret_Technique) 
from **Pokémon: Let's Go, Pikachu! and Pokémon: Let's Go, Eevee!**
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-amber-800"
borderColor="border-amber-600"
childBorderColor="[&>div]:not-first:border-amber-600"
textColor="text-amber-600"
>
<FeatureNotes.NoteMd src={pokeball} alt="Pokeball item sprite">
{
`
**Requirements** 

At least one Pokémon must be in your party, and the required Badge must be obtained.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={startButton} alt="Start button sprite">
{
`
**Start screen option** 

**MOVES** appears in the Start Menu after obtaining the Running Shoes.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={boulder} alt="Boulder sprite">
{
`
**Interactive moves** 

Interactive moves such as CUT, STRENGTH, and SURF do not appear in the **MOVES** menu. 
Interact with the corresponding object to use them.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={tm} alt="TM item sprite">
{
`
**Special Moves** 

SECRET POWER, SWEET SCENT and TELEPORT are also available from the **MOVES** menu.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={frontierSymbol} alt="Frontier symbol sprite">
{
`
**Battle Frontier** 

The **MOVES** menu does not appear in special Start Menus, such as those used in the Battle Pyramid and Battle Pike.
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
<FeaturesGallery feature="no-hm-slave" placeholders={placeholder}/>
</>
);
}
