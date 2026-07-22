import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { flute } from "~/lib/generated/sprites/flute";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/music";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";
import { pages } from "~/lib/menu-items";

const feature = features.music;

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
  alternates: {
    canonical: pages.features.music.url,
  },
};

export default function Page() {
  const img = flute;
  const alt = "PokéFlute item sprite";
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
blobBgColor="bg-orange-500"
className="scale-80"
>
{
`
**${feature.title}** ${feature.description}

Turn off background music while keeping all sound effects, Pokémon cries, and menu sounds.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-orange-800"
borderColor="border-orange-600"
childBorderColor="[&>div]:not-first:border-orange-600"
textColor="text-orange-600"
>
<FeatureNotes.NoteMd src={flute} alt={alt}>
{
`
**Background Music** 

Only background music is affected. Sound effects are unaffected.
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
