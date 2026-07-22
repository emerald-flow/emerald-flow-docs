import { ExternalLink } from "~/components/external-link";
import { Md } from "~/components/markdown";
import { pages } from "~/lib/menu-items";
import { TITLE } from "~/lib/project-meta";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hack-dex",
  description: `Learn how to setup ${TITLE} with Hack-dex.`,
};

export default function Page() {
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.setup["hack-dex"].title}
`
}
</Md>
<Link href="https://www.hackdex.app/hack/emerald-flow" className="mx-auto" target="_blank">
<Image className="non-sprite" width="190" height="60" src="https://www.hackdex.app/img/badge-dark.png" alt="Download now at hackdex.app" unoptimized priority/>
</Link>
<Md>
{
`
Hack Dex is an online web-based ROM hack patch hosting and patching
platform. Here's a step-by-step process to patch your game with
Hack Dex.

- **Step 1**: Head to ${TITLE}'s Hack Dex page by using the link mentioned below.
`
}
</Md>
<ExternalLink className="mx-auto" href="https://www.hackdex.app/hack/emerald-flow">
Hack Dex
</ExternalLink>
<Md>
{ 
`
- **Step 2**: On the main banner, click on "Select Pokémon Emerald ROM".
- **Step 3**: Submit your **Official Pokémon Emerald** ROM as the ROM file.
- **Step 4**:  On the main banner, click on "Agree and Download".
- **Step 5**:  On the main banner, click on "Patch Now" and you're done!
`
}
</Md>
</>
);
}
