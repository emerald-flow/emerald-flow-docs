import { HeroImage } from "~/components/hero";
import { Md } from "~/components/markdown";
import { VersionPill } from "~/components/pills";
import { logo } from "~/lib/generated/sprites/logo";

export default function Page() {
  // prettier-ignore
  return (
<>
<HeroImage
src={logo}
alt="Logo sprite"
/>
<Md>
{
`
# Pokémon Emerald Flow
`  
}  
</Md>   
<VersionPill />
</>
);
}
