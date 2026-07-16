//@ts-nocheck
import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { TooltipProvider } from "~/components/ui/tooltip";
import { ThemeProvider } from "~/components/theme-provider";
import { QueryProvider } from "~/components/query-provider";
import { URL as SiteURL } from "~/lib/project-meta";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SiteURL),
  title: {
    default: "Emerald Flow",
    template: "%s | Emerald Flow",
  },
  description:
    "An open-source, opt-in enhancement project that modernizes Pokémon Emerald while preserving its original experience.",
  applicationName: "Emerald Flow",
  openGraph: {
    type: "website",
    siteName: "Emerald Flow",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("no-js", geist.variable, "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.remove('no-js');
              document.documentElement.classList.add('js');
            `,
          }}
        />
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
            enableSystem
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
