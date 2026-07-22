import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/pokenav-call";
import { pokenav } from "~/lib/generated/sprites/pokenav";
import { norman } from "~/lib/generated/sprites/norman";
import { pages } from "~/lib/menu-items";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";
import { flute } from "~/lib/generated/sprites/flute";

const feature = features["pokenav-call"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
  alternates: {
    canonical: pages.features["pokenav-call"].url,
  },
};

export default function Page() {
  const img = pokenav;
  const alt = "Pokénav sprite";
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
blobBgColor="bg-yellow-500"
>
{
`
**${feature.title}** ${feature.description}

Pokénav calls that randomly show up and disturb normal 
gameplay can now be customized to not show up.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-yellow-800"
borderColor="border-yellow-600"
childBorderColor="[&>div]:not-first:border-yellow-600"
textColor="text-yellow-600"
>
<FeatureNotes.NoteMd src={norman} alt="Norman sprite">
{
`
**Registrations** 

Registrations calls, like Gym leader calls by Norman or Roxanne 
will still show up in the and interrupt gameplay.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={flute} alt="Pokéflute sprite">
{
`
**Notifications Only** 

Plays only a notifcation sound in the background. Handles the call automatically.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd className="grayscale" src={flute} alt="Pokéflute sprite">
{
`
**Silent Mode** 

Silently handles the entire call automatically.
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
<FeaturesGallery feature={feature.id} placeholders={placeholder} />
<SeeAlso feature={feature.id} />
</>
);
}
