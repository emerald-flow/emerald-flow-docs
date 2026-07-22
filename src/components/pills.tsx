import { VERSION } from "~/lib/project-meta";
import { Badge } from "./ui/badge";

export const LatestPill = () => <Badge variant="outline">Latest</Badge>;

export const BestPill = () => <Badge variant="outline">Best ⭐</Badge>;

export const DefaultPill = () => <Badge variant="outline">Default ✅</Badge>;

export const VersionPill = () => <Badge variant={"outline"}>v{VERSION}</Badge>;
