import { ArrowRight, ChevronRight } from "lucide-react";
import { HeroImage } from "~/components/hero";
import { Md } from "~/components/markdown";
import { NavButton } from "~/components/navigations";
import { VersionPill } from "~/components/pills";
import { logo } from "~/lib/generated/sprites/logo";
import { pages } from "~/lib/menu-items";
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
<div className="flex flex-row gap-2">
<NavButton
href={pages.overview.url}
rightIcon={<ChevronRight/>}
>
{pages.overview.title}
</NavButton>
<div className="relative">
<div className="absolute opacity-70 -inset-px bg-linear-to-r from-emerald-400 to-lime-400 rounded-xl blur-sm" />
<NavButton
className="z-1"
href={pages.setup["quick-patch"].url}
bClassName="text-transparent bg-linear-to-r from-emerald-400 to-lime-400 items-start bg-clip-text"
rightIcon={<ArrowRight className="text-lime-500" />}
>
Patch Now!
</NavButton>
</div>
</div>
</>
);
}
