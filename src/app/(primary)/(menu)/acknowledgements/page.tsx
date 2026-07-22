import { Md } from "~/components/markdown";
import { pages } from "~/lib/menu-items";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acknowledgements",
  alternates: {
    canonical: pages.acknowledgements.url,
  },
};

export default function Page() {
  // prettier-ignore
  return (
<Md>
{
`
## ${pages.acknowledgements.title}

### Foundations

- Emerald Flow is built on top of the [pret/pokeemerald](https://github.com/pret/pokeemerald) decompilation project.
- The Quick Patcher is based on [Hackdex-App's fork](https://github.com/Hackdex-App/RomPatcher.js) of [RomPatcher.js by marcrobledo](https://github.com/marcrobledo/RomPatcher.js).
- Patch hosting is provided through GitHub Releases and distributed via jsDelivr.

### Development

Emerald Flow is currently developed by:

- [Officer KD6-3.7](https://github.com/officer-kd6-3dot7)

All gameplay features, project architecture, and design decisions were implemented and directed by the development team unless otherwise credited.

### Patch code

- Unless otherwise stated, all gameplay features were implemented specifically for Emerald Flow patch by the Development team (not vibe-coded).
- **Instant text**: The [credited implementation code](https://github.com/emerald-flow/emerald-flow-patch/blob/master/src/text.c#L319) has been forked from the [InstantTextOption PR](https://github.com/LOuroboros/pokeemerald/compare/master...LOuroboros:pokeemerald:instantTextOption) by [LOuroboros](https://github.com/LOuroboros)

### Documentation code

- Unless otherwise stated, the documentation site was developed for Emerald Flow by the Development team (not vibe-coded).
- **Quick-patcher**: Is a fork of [Hackdex-App's fork](https://github.com/Hackdex-App/RomPatcher.js) of [RomPatcher.js by marcrobledo](https://github.com/marcrobledo/RomPatcher.js/)

### Assets

Any assets used in-game or on the documentation site are either:

- Sourced directly from the base game,
- Derived from assets in the base game, or
- Created specifically for Emerald Flow.

### AI Use

AI-assisted development was used selectively for the following:

- The [Start menu cursor](https://github.com/emerald-flow/emerald-flow-patch/blob/master/src/menu.c#L998).
- The [Prebuild scripts](https://github.com/emerald-flow/emerald-flow-docs/tree/main/scripts) for the documentation site.
- Assisting with content writing for the documentation site.
`
}
</Md>
);
}
