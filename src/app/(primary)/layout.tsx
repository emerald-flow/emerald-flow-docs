import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar";
import { ModeToggle } from "~/components/mode-toggle";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Github, Reddit } from "~/components/icons";
import Link from "next/link";
import { Toaster } from "~/components/ui/sonner";
import { NewRelease } from "~/components/new-release";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="floating" />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center gap-2 px-4">
          <SidebarTrigger
            variant="outline"
            className="dark:bg-sidebar/95 sidebar-toggle"
            popoverTarget="no-js-sidebar"
          />
          <ModeToggle />
          <Toaster />
          <NewRelease />
          <div className="ml-auto flex gap-2">
            <Link href="https://www.reddit.com/r/EmeraldFlow/" target="_blank">
              <Button variant="outline" className="dark:bg-sidebar/95">
                <Reddit />
              </Button>
            </Link>
            <Link href="https://github.com/emerald-flow" target="_blank">
              <Button variant="outline" className="dark:bg-sidebar/95">
                <Github />
              </Button>
            </Link>
          </div>
        </header>
        {children}
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
