import { menuItems } from "~/lib/menu-items";
import { MutedLink } from "./muted-link";
import { TITLE } from "~/lib/project-meta";

export function Footer() {
  return (
    <footer className="border-t pb-8 [&>div]:mt-4 [&>div]:px-4">
      <div className="text-muted-foreground border-b pb-4 text-center text-sm font-medium">
        Made with <span className="text-green-500">💚</span> for Emerald
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="text-muted-foreground max-w-md space-y-3 text-sm">
          <p>© 2026 {TITLE}</p>
          <p>
            {TITLE} is an independent fan project and is not affiliated with,
            endorsed by, or sponsored by Nintendo, GAME FREAK, or The Pokémon
            Company.
          </p>
          <p>
            This project distributes BPS patches only and does not host or
            distribute ROMs. No ROMs leaves the browser.
          </p>
        </div>
        <nav className="flex max-w-7xl flex-row flex-wrap items-start gap-4 text-sm md:items-end">
          {menuItems.map((item) => (
            <MutedLink key={item.url} link={{ href: item.url }}>
              {item.title}
            </MutedLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
