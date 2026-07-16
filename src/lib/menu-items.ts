/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

import { featureTitles } from "./feature-list";
import type { KebabCase, KebabCaseUrl, Prettify } from "./types";
import { getKebabCase, getUrl } from "./utils";
const sections = [
  ["Overview"],
  ["Setup", ["Quick Patch", "Rom Patcher JS", "Hack Dex"]],
  ["Features", featureTitles],
] as const satisfies Sections;

const getMenuItems = <T extends Sections>(sections: T) =>
  sections.map(([section, subSections]) => ({
    title: section,
    url: getUrl(section),
    items: (subSections ?? []).map((subSection) => ({
      title: subSection,
      url: `${getUrl(section)}${getUrl(subSection)}`,
    })),
  })) as MenuData<T>;

const getPages = <T extends Sections>(sections: T) => {
  return sections.reduce(
    (acc, [section, subSections]) => {
      const sectionName = getKebabCase(section);
      acc[sectionName] = {
        title: section,
        url: getUrl(section),
      };
      subSections?.forEach((subSection) => {
        const subSectionName = getKebabCase(subSection);
        acc[sectionName]![subSectionName] = {
          title: subSection,
          url: `${getUrl(section)}${getUrl(subSection)}`,
        };
      });
      return acc;
    },
    {} as Record<string, SectionPage>,
  ) as PageData<T>;
};

export const menuItems = getMenuItems(sections);

export const flatMenuItems = menuItems.reduce((acc, { items, ...rest }) => {
  acc.push({ ...rest, index: acc.length });
  items.forEach((item) => acc.push({ ...item, index: acc.length }));
  return acc;
}, [] as unknown[]) as unknown as FlatMenuData<typeof sections>;

export const flatMenuUrlToIndex = flatMenuItems.reduce(
  (acc, { index, url }) => {
    acc[url] = index;
    return acc;
  },
  {} as Record<string, number>,
) as unknown as UrlToIndex<typeof flatMenuItems>;

export const pages = getPages(sections);

type Section = [string] | [string, string[]];

type Sections = Section[];

type MenuItemContent<T extends string = string, U extends string = ""> = {
  title: T;
  url: U extends ""
    ? `${KebabCaseUrl<T>}`
    : `${KebabCaseUrl<U>}${KebabCaseUrl<T>}`;
};

type FlatMenuItemContentStructure = {
  title: string;
  url: string;
  index: number;
};

type FlatMenuItemContent<
  T extends string = string,
  U extends string = string,
  V extends number = number,
> = MenuItemContent<T, U> & { index: V };

type MenuSubItems<
  T extends string[] = string[],
  S extends string = "",
  U extends unknown[] = [],
> = T extends [infer R extends string, ...infer Rest extends string[]]
  ? MenuSubItems<Rest, S, [...U, Prettify<MenuItemContent<R, S>>]>
  : U;

type FlatMenuSubItems<
  T extends string[] = string[],
  S extends string = "",
  U extends unknown[] = [],
  V extends unknown[] = [],
> = T extends [infer R extends string, ...infer Rest extends string[]]
  ? FlatMenuSubItems<
      Rest,
      S,
      [...U, Prettify<FlatMenuItemContent<R, S, [...U, ...V, 0]["length"]>>],
      V
    >
  : U;

type MenuItem<T extends Section> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? Prettify<MenuItemContent<R, ""> & { items: MenuSubItems<S, R> }>
  : T extends [infer R extends string]
    ? Prettify<MenuItemContent<R, ""> & { items: [] }>
    : never;

type FlatMenuItem<T extends Section, U extends unknown[] = []> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? [
      Prettify<FlatMenuItemContent<R, "", U["length"]>>,
      ...Prettify<FlatMenuSubItems<S, R, [], U>>,
    ]
  : T extends [infer R extends string]
    ? [Prettify<FlatMenuItemContent<R, "", U["length"]>>]
    : never;

type MenuData<T extends Sections, U extends unknown[] = []> = T extends [
  infer R extends Section,
  ...infer S extends Sections,
]
  ? MenuData<S, [...U, MenuItem<R>]>
  : U;

type FlatMenuData<T extends Sections, U extends unknown[] = []> = T extends [
  infer R extends Section,
  ...infer S extends Sections,
]
  ? FlatMenuData<S, [...U, ...FlatMenuItem<R, U>]>
  : U;

type Page = { title: string; url: string };

type SectionPage = {
  title: string;
  url: string;
  [key: string]: Page | string;
};

type PageSubItems<
  T extends string[] = string[],
  S extends string = "",
  U extends object = {},
> = T extends [infer R extends string, ...infer Rest extends string[]]
  ? PageSubItems<
      Rest,
      S,
      U & { [key in `${KebabCase<R>}`]: Prettify<MenuItemContent<R, S>> }
    >
  : U;

type PageItem<T extends Section> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? {
      [key in `${KebabCase<R>}`]: Prettify<
        MenuItemContent<R> & PageSubItems<S, R>
      >;
    }
  : T extends [infer R extends string]
    ? {
        [key in `${KebabCase<R>}`]: Prettify<MenuItemContent<R>>;
      }
    : never;

type PageData<
  T extends Sections,
  U extends Record<string, SectionPage> = {},
> = Prettify<
  T extends [infer R extends Section, ...infer S extends Sections]
    ? PageData<S, U & PageItem<R>>
    : U
>;

type UrlToIndex<
  T extends FlatMenuItemContentStructure[],
  U extends Record<string, number> = {},
> = T extends [
  infer R extends FlatMenuItemContentStructure,
  ...infer Rest extends FlatMenuItemContentStructure[],
]
  ? UrlToIndex<Rest, Prettify<U & { [k in R["url"]]: R["index"] }>>
  : U;
