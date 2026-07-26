import { Md } from "~/components/markdown";
import { pages } from "~/lib/menu-items";
import type { Metadata } from "next";
import { LatestPill } from "~/components/pills";
import { ExternalLink } from "~/components/external-link";
import { TITLE, VERSION, VERSION_RELEASE_DATE } from "~/lib/project-meta";

export const metadata: Metadata = {
  title: "Changelog",
  description: `Learn what changed in ${TITLE}.`,
  alternates: {
    canonical: pages.changelog.url,
  },
};

export default function Page() {
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.changelog.title}

### v${VERSION} (${VERSION_RELEASE_DATE})
`}
</Md>
<ul className="ml-4 flex list-disc flex-col [&>li]:not-last:pb-4">
<li>
<div className="flex items-center gap-2">
<ExternalLink href={`https://github.com/emerald-flow/emerald-flow-release/releases#release-v${VERSION}`}>
v{VERSION}
</ExternalLink> 
<LatestPill />
</div>
</li>
<li>Fixes an issue related to the <strong>Pokenav Call</strong> feature where the player freezes on receiving a call.</li>
</ul>
<Md>
{
`
### v1.0.0-beta.2 (Jul 23, 2026)

- [v1.0.0-beta.2](https://github.com/emerald-flow/emerald-flow-release/releases#release-v1.0.0-beta.2)
- Added the **Pokenav Call** feature.
- Fixed an issue where the background music reset after riding the Cable Car.

### v1.0.0-beta.1 (Jul 17, 2026)

- [v1.0.0-beta.1](https://github.com/emerald-flow/emerald-flow-release/releases#release-v1.0.0-beta.1)
- Fixes a [save compatibility and patching issue](https://github.com/emerald-flow/emerald-flow-release/issues/1) with respect to the contents of the Pokedex.
- Battle Style now defaults to "SHIFT".

### v1.0.0-beta.0 (Jul 15, 2026)

- [v1.0.0-beta.0](https://github.com/emerald-flow/emerald-flow-release/releases#release-v1.0.0-beta.0)
- Initial beta release featuring 28 gameplay features.

`
}
</Md>
</>
);
}
