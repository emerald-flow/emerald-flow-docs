import type { MDXComponents } from "mdx/types";
import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  InlineCode,
  List,
  P,
} from "~/components/ui/typography";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  blockquote: Blockquote,
  ul: List,
  code: InlineCode,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
