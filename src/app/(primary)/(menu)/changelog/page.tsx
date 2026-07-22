import { Md } from "~/components/markdown";
import { pages } from "~/lib/menu-items";
import type { Metadata } from "next";
import { LatestPill } from "~/components/pills";
import { ExternalLink } from "~/components/external-link";

export const metadata: Metadata = {
  title: "Changelog",
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

### v1.0.0-beta.2 (Jul 23, 2026)
`}
</Md>
<ul className="ml-4 flex list-disc flex-col [&>li]:not-last:pb-4">
<li>
<div className="flex items-center gap-2">
<ExternalLink href="https://github.com/emerald-flow/emerald-flow-release/releases#release-v1.0.0-beta.2">
v1.0.0-beta.2
</ExternalLink> 
<LatestPill />
</div>
</li>
<li>
Added the <strong>Pokenav Call</strong> feature.
</li>
<li>Fixed an issue where the background music reset after riding the Cable Car.</li>
</ul>
<Md>
{
`
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
