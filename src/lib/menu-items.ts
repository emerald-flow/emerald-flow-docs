/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-empty-object-type */
const separatorIn = " " as const;
const separatorOut = "-" as const;

const sections = [
  ["Overview"],
  ["Setup", ["Rom Patcher JS", "Hack Dex"]],
  [
    "Features",
    [
      "Permanent Repel",
      "Running",
      "Level Cap",
      "No HM Slave",
      "Better Summary",
      "Physical-Special split",
      "Pocket Tutor",
      "Better Evolutions",
      "Adopt Eggs",
      "Pocket PC",
      "Pocket Heal",
      "Forget HMs",
      "Infinite TMs",
      "Pocket Mart",
      "1$ Items",
      "Pocket Bikes",
      "Auto Blend",
      "Custom Blend",
      "Badge Boost",
      "EV Training",
      "Catch Rate",
      "Fast Eggs",
      "Instant Fishing",
      "Always Feebas",
      "Better Safari",
      "No Fleeing Mons",
      "Instant Text",
      "Music",
    ],
  ],
  ["Credits"],
  ["Plans"],
] as const satisfies Sections;

const getKebabCase = <T extends string>(str: T) =>
  str.toLowerCase().replaceAll(separatorIn, separatorOut) as KebabCase<T>;

const getUrl = <T extends string>(str: T): KebabCaseUrl<T> =>
  `/${getKebabCase(str)}`;

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

export const pages = getPages(sections);

type Prettify<T> = {
  [k in keyof T]: T[k];
} & {};

type Section = [string] | [string, string[]];

type Sections = Section[];

type KebabCase<
  T extends string,
  U extends string = "",
> = T extends `${infer R extends string}${infer Rest}`
  ? R extends typeof separatorIn
    ? KebabCase<Rest, `${U}${typeof separatorOut}`>
    : KebabCase<Rest, `${U}${Lowercase<R>}`>
  : U;

type KebabCaseUrl<T extends string> = `/${KebabCase<T>}`;

type MenuItemContent<T extends string = string, U extends string = ""> = {
  title: T;
  url: U extends ""
    ? `${KebabCaseUrl<T>}`
    : `${KebabCaseUrl<U>}${KebabCaseUrl<T>}`;
};

type MenuSubItems<
  T extends string[] = string[],
  S extends string = "",
  U extends unknown[] = [],
> = T extends [infer R extends string, ...infer Rest extends string[]]
  ? MenuSubItems<Rest, S, [...U, Prettify<MenuItemContent<R, S>>]>
  : U;

type MenuItem<T extends Section> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? Prettify<MenuItemContent<R> & { items: MenuSubItems<S, R> }>
  : T extends [infer R extends string]
    ? Prettify<MenuItemContent<R> & { items: [] }>
    : never;

type MenuData<T extends Sections, U extends unknown[] = []> = T extends [
  infer R extends Section,
  ...infer S extends Sections,
]
  ? MenuData<S, [...U, MenuItem<R>]>
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
      [key in `${KebabCase<R>}`]: Prettify<MenuItemContent<R>> &
        PageSubItems<S, R>;
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
