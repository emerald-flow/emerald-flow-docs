/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { TooltipProvider } from "~/components/ui/tooltip";
import { ThemeProvider } from "~/components/theme-provider";
import { QueryProvider } from "~/components/query-provider";
import { URL as SiteURL, TITLE } from "~/lib/project-meta";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const description =
  "A lightweight, opt-in, quality-of-life and enhancement patch for Pokémon Emerald.";

export const metadata: Metadata = {
  metadataBase: new URL(SiteURL),
  title: {
    default: TITLE,
    template: "%s | Emerald Flow",
  },
  alternates: {
    canonical: "/",
  },
  description,
  applicationName: TITLE,
  openGraph: {
    type: "website",
    url: "/",
    siteName: TITLE,
    title: TITLE,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description,
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
