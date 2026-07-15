import { HeroImage } from "~/components/hero";
import { Md } from "~/components/markdown";
import { VersionPill } from "~/components/pills";
import { logo } from "~/lib/generated/sprites/logo";
import { TITLE } from "~/lib/project-meta";

export default function Page() {
  // prettier-ignore
  return (
<>
<HeroImage
src={logo}
alt="Logo sprite"
hideBlob
className="overflow-hidden rounded-lg border-4"
/>
<Md>
{
`
# ${TITLE}
`  
}  
</Md>   
<VersionPill />
</>
);
}
