import Image from "next/image";
import { PageWrapper } from "~/components/page-wrapper";
import { Badge } from "~/components/ui/badge";
import { H1 } from "~/components/ui/typography";

export default function Page() {
  return (
    <PageWrapper className="flex flex-1 flex-col items-center justify-center">
      <Image
        src="/logo.png"
        width={140}
        height={140}
        alt="Pokemon Emerald Flow Logo"
        priority
      />

      <div className="mt-8 flex flex-col items-center gap-2">
        <H1>Pokemon Emerald Flow</H1>
        <Badge variant={"outline"}>v1.0.0-beta</Badge>
      </div>
    </PageWrapper>
  );
}
