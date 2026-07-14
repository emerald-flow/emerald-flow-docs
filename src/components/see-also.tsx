import { seeAlso } from "~/lib/see-also";
import { H3 } from "./ui/typography";
import { MutedLink } from "./muted-link";
import { pages } from "~/lib/menu-items";

export function SeeAlso(props: { feature: keyof typeof seeAlso }) {
  const count: number = seeAlso[props.feature].length;
  if (count === 0) return;
  return (
    <div className="min-h-28 w-full">
      <H3 className="mt-0 mb-4">See also</H3>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
        {seeAlso[props.feature].map((feature) => {
          const page = pages.features[feature];
          return (
            <li key={page.url}>
              <MutedLink link={{ href: page.url }}>{page.title}</MutedLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
