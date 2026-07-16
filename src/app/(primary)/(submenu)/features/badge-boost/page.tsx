import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { badges } from "~/lib/generated/sprites/badges";
import { FeaturesGallery } from "~/components/features-gallery";
import { placeholder } from "~/lib/generated/placeholders/badge-boost";
import { SeeAlso } from "~/components/see-also";
import type { Metadata } from "next";

const feature = features["badge-boost"];

export const metadata: Metadata = {
  title: feature.title,
  description: `${feature.title} ${feature.description}`,
};

export default function Page() {
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
**${feature.title}** ${feature.description}

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
<FeaturesGallery feature={feature.id} placeholders={placeholder} />
<SeeAlso feature={feature.id} />
</>
);
}
