import { Md } from "~/components/markdown";
import { RomPatcher } from "~/components/rom-patcher";
import { pages } from "~/lib/menu-items";

export default function Page() {
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.setup["quick-patch"].title}

Patch your **Pokémon Emerald (USA, Europe) .gba ROM** directly in your browser. 
Your ROM never leaves your device. 
Quick Patch automatically verifies your game, 
downloads the latest patch, and creates your patched ROM in just a few clicks.
`
}
</Md>
<RomPatcher />
</>
);
}
