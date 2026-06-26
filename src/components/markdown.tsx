import type { ComponentProps } from "react";
import Markdown from "react-markdown";
import Link from "next/link";

export function Md(props: Omit<ComponentProps<typeof Markdown>, "components">) {
  return (
    <Markdown
      {...props}
      components={{
        h1: ({ children, ...rest }) => (
          <h1
            className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
            {...rest}
          >
            {children}
          </h1>
        ),
        h2: ({ children, ...rest }) => (
          <h2
            className="w-full scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
            {...rest}
          >
            {children}
          </h2>
        ),
        h3: ({ children, ...rest }) => (
          <h3
            className="mt-4 w-full scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
            {...rest}
          >
            {children}
          </h3>
        ),
        h4: ({ children, ...rest }) => (
          <h4
            className="mt-4 w-full scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight"
            {...rest}
          >
            {children}
          </h4>
        ),
        p: ({ children, ...rest }) => (
          <p
            {...rest}
            className="leading-7 text-pretty hyphens-auto not-first:mt-6"
          >
            {children}
          </p>
        ),
        ul: ({ children, ...rest }) => (
          <ul
            className="ml-4 flex flex-1 list-disc flex-col [&>li]:mt-2"
            {...rest}
          >
            {children}
          </ul>
        ),
        a: ({ href, children }) => (
          <Link href={href!}>
            <p className="text-muted-foreground">{children}</p>
          </Link>
        ),
      }}
    />
  );
}
