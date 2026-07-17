import { AlertMd } from "~/components/alerts";
import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";

import { pages } from "~/lib/menu-items";
import { setup } from "~/lib/generated/sprites/setup";
import { TITLE } from "~/lib/project-meta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup",
  description: "Learn how to setup Emerald Flow.",
  alternates: {
    canonical: pages.setup.url,
  },
};

export default function Page() {
  const img = setup;
  const alt = "Bag and Brendan sprite";
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.setup.title}
`
}
</Md>
<HeroMd
src={img}
alt={alt}
>
{
`
**${TITLE}** is designed to be reverse
compatible with the original _Pokémon Emerald_.

However, save data is valuable, and mistakes happen. Make regular
backups of your save files and always create one before moving an
existing game to ${TITLE}.
`
}
</HeroMd>
<AlertMd variant="important">
{
`
- Since ${TITLE} is distributed as a patch, you'll need a
**LEGALLY OBTAINED CLEAN COPY OF AN ORIGINAL POKÉMON EMERALD ROM**.

- This website does not distribute any ROM files. 
Patches are made available in **.bps** formats.
`
}
</AlertMd>
<AlertMd variant="caution">
{
`
**DO NOT ATTEMPT TO PATCH AN ALREADY MODIFIED OR PATCHED ROM.**
`
}
</AlertMd>
<AlertMd>
{
`
When launching ${TITLE} for the first time, all game options
will be **RESET** to their **DEFAULT VALUES**.
This reset only happens **ONCE**, at first launch. If you&apos;re curious about
the default settings, head over to the Features section for a complete
overview.
`
}
</AlertMd>
<Md>
{
`
The following pages cover two ways to set up your game:

- [${pages.setup["quick-patch"].title} (Best ⭐)](${pages.setup["quick-patch"].url})
- [${pages.setup["rom-patcher-js"].title}](${pages.setup["rom-patcher-js"].url})
`
}
</Md>
</>
);
}
