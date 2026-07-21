import { ExternalLink } from "~/components/external-link";
import { Md } from "~/components/markdown";

import { pages } from "~/lib/menu-items";
import { TITLE, VERSION } from "~/lib/project-meta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rom-patcher-JS",
  description: `Learn how to setup ${TITLE} with Rom-patcher-JS`,
};

export default function Page() {
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.setup["rom-patcher-js"].title}
Rom Patcher JS is an online web-based ROM patcher. 
Here's a step-by-step process to patch your game with Rom Patcher JS.
- **Step 1**: Head to ${TITLE}'s Github repository by using the link mentioned below.
`
}
</Md>
<ExternalLink className="mx-auto" href={`https://github.com/emerald-flow/emerald-flow-release/releases/tag/v${VERSION}`}>
{TITLE}
</ExternalLink>
<Md>
{ 
`
- **Step 2**: Head for the latest release in the **Release** section.
- **Step 3**: Scroll down and under **Assets** download the latest released **pokemon-emerald-flow.bps** file.
- **Step 4**: Head to Rom Patcher JS' website by using the link mentioned below.
`
}
</Md>
<ExternalLink className="mx-auto" href="https://www.marcrobledo.com/RomPatcher.js">
ROM Patcher JS
</ExternalLink>
<Md>
{ 
`
- **Step 5**: Submit your **Official Pokémon Emerald** ROM as the ROM file.
- **Step 6**: Submit the **pokemon-emerald-flow.bps** file as the Patch file.
- **Step 7**: Click on "Apply patch" and you're done!
`
}
</Md>
</>
);
}
