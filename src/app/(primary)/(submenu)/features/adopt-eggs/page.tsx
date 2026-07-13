import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/adopt-eggs";
import { egg } from "~/lib/generated/sprites/egg";
import { birch } from "~/lib/generated/sprites/birch";
import { oak } from "~/lib/generated/sprites/oak";
import { pages } from "~/lib/menu-items";
import { cycling } from "~/lib/generated/sprites/cycling";

export default function Page() {
  const feature = features["adopt-eggs"];
  const img = egg;
  const alt = "Egg sprite";
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
className="scale-80"
blobBgColor="bg-lime-500"
>
{
`
**${feature.title}** lets you obtain Pokémon that 
would otherwise be late or unavailable through normal gameplay.

Visit the Day Care to adopt legitimate Eggs containing Pokémon from across the Kanto, Johto, and Hoenn regions.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-lime-800"
borderColor="border-lime-600"
childBorderColor="[&>div]:not-first:border-lime-600"
textColor="text-lime-600"
>
<FeatureNotes.NoteMd src={birch} alt="Birch sprite">
{
`
**Hoenn First** 

Before obtaining the National Dex, only Pokémon 
from the Hoenn Pokédex are available for adoption.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={oak} alt="Oak sprite">
{
`
**National Expansion** 

After unlocking the National Dex, the adoption program expands to 
include every eligible Generation I, II, and III Pokémon.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={cycling} alt="May cycling sprite">
{
`
**${pages.features["fast-eggs"].title}** 

This feature can be used alongside [${pages.features["fast-eggs"].title}](${pages.features["fast-eggs"].url}) for a better breeding experience.
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
className="scale-90"
/>)
)
}
</Options>
<FeaturesGallery feature="adopt-eggs" placeholders={placeholder}/>
</>
);
}
