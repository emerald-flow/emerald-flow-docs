import { seeAlso } from "~/lib/see-also";
import { H3 } from "./ui/typography";
import { MutedLink } from "./muted-link";
import { pages } from "~/lib/menu-items";

export function SeeAlso(props: { feature: keyof typeof seeAlso }) {
  const count: number = seeAlso[props.feature].length;
  if (count === 0) return;
  return (
    <div className="flex w-full flex-col gap-4">
      <H3 className="mt-0">See also</H3>
      <div className="flex flex-row flex-wrap gap-4 md:gap-8">
        {seeAlso[props.feature].map((feature) => {
          const page = pages.features[feature];
          return (
            <MutedLink key={page.url} link={{ href: page.url }}>
              {page.title}
            </MutedLink>
          );
        })}
      </div>
    </div>
  );
}
