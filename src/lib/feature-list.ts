/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { KebabCase, Prettify } from "./types";
import { getKebabCase } from "./utils";

const VANILLA_GAMEPLAY = "Vanilla gameplay";

const getOptions = <T>(
  options: T extends Options<infer _ extends Option[]>
    ? T
    : `type does not match {options: T, defaultOption: T[number][0]}`,
) => {
  if (typeof options === "string") throw new Error("Invalid object");
  return options;
};

const activeText = <T extends string>(str: T) =>
  `${str} remains active until disbled.` as const;
const startScreenText = <T extends string>(str: T) =>
  `Access ${str} from the Start menu` as const;

export const featureList = [
  [
    "Permanent Repel",
    "replaces repeated use of Repel items with a simple toggle.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", activeText("Repel")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Running",
    "lets you customize how your character runs.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["Indoor", "Hold B to run indoors and outdoors."],
        ["Perma", "Run without holding B indoors or outdoors."],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Level Cap",
    "lets you enforce a global level cap across all experience gains, including battles, day care and rare candies.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Enforce the current level cap until the next major battle."],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "No HM Slave",
    "removes the need to teach HM moves to your Pokémon.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("MOVES")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Better Summary",
    "enhances the Pokémon summary screen with additional good to know information.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Enable the enhanced Summary screen."],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Physical-Special Split",
    "updates every move to use the modern damage system introduced in Generation IV.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", activeText("Physical-Special Split")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket Tutor",
    "lets your Pokémon learn every move they could legitimately know from a single menu.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("TUTOR")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Better Evolutions",
    "adds more convenient ways to evolve Pokémon that normally require trading or friendship.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["Lvl.30", "Pokémon evolve at Level 30"],
        ["Item", "Pokémon evolve during level up with a held item"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Adopt Eggs",
    "lets you obtain Pokémon that would otherwise be late or unavailable through normal gameplay.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Daycare lady provides eggs for adoption"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket PC",
    "lets you use the PC available in the Pokémon Center, remotely.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("PC")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket Heal",
    "lets you Heal your party like in the Pokémon Center, remotely.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("HEAL")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Forget HMs",
    "lets you replace HM moves on a Pokémon learning a new move.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "HMs can now be forgotten"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Infinite TMs",
    "lets you reuse TMs without consuming them after a single use.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "TMs do not run out"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket Mart",
    "lets you access the PokéMart, remotely.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("MART")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "One Dollar Items",
    "lets you purchase every item sold in a PokéMart for $1.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Items now cost 1$"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket Bikes",
    "lets you swap Bikes, remotely.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("BIKES")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Auto Blend",
    "automates the berry blending mini game.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Berry blending is now automatic and perfect"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Custom Blend",
    "lets you choose berries on behalf of the NPCs.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Choose berries for all NPCs from bag"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Badge Boost",
    "lets you toggle the stat boosts provided by Gym badges on the player's Pokémon.",
    getOptions({
      options: [
        ["Off", "Badge boosts are now turned off"],
        ["On", VANILLA_GAMEPLAY],
      ],
      defaultOption: "On",
    } as const),
  ],
  [
    "EV Training",
    "lets you customize how Effort Values (EVs) are earned and trained throughout the game.",
    getOptions({
      options: [
        ["Off", "Any EV gains are turned off"],
        ["On", VANILLA_GAMEPLAY],
        ["Vitamin", "Vitamins cap at 252EV, Berries remove 1EV"],
      ],
      defaultOption: "On",
    } as const),
  ],
  [
    "Perfect Catches",
    "guarantees that every Poké Ball successfully catches a wild Pokémon.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Every Pokéball catches successfully"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Fast Eggs",
    "speeds up both Egg generation and Egg hatching.",
    getOptions({
      options: [
        ["1x", VANILLA_GAMEPLAY],
        ["4x", "Eggs generate and hatch 4x faster"],
        ["10x", "Eggs generate and hatch 10x faster"],
      ],
      defaultOption: "1x",
    } as const),
  ],
  [
    "Instant Fishing",
    "automates the fishing timing mini game.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Fishing timing mini-game is skipped"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Always Feebas",
    "lets you encounter Feebas by fishing anywhere on Route 119.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "All fishing encounters on Route 119 are Feebas."],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Better Safari",
    "removes the Safari Zone's timing limits.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Step and Safari ball counters are disabled"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "No Fleeing Mon",
    "prevents Roaming Pokémon and Safari Zone Pokémon from fleeing from battles.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Safari and Roaming Pokémon do not flee"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Instant Text",
    "displays all dialogue instantly, bypassing the game's normal text speed.",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Text prints instantly"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Music",
    "lets you toggle the game's background music on or off.",
    getOptions({
      options: [
        ["Off", "Background music stops playing"],
        ["On", VANILLA_GAMEPLAY],
      ],
      defaultOption: "On",
    } as const),
  ],
] as const satisfies FeatureList;

const getFeatures = <T extends FeatureList>(sections: T) => {
  return sections.reduce(
    (acc, [section, sectionDescription, { defaultOption, options }]) => {
      const sectionName = getKebabCase(section);
      acc[sectionName] = {
        id: sectionName,
        title: section,
        description: sectionDescription,
        options: options.map(([title, description]) => ({
          title,
          description,
        })),
        defaultOption,
      };
      options.forEach(([title, description]) => {
        acc[sectionName]![getKebabCase(title)] = {
          title,
          description,
        };
      });
      return acc;
    },
    {} as Record<string, any>,
  ) as Features<T>;
};

export const features = getFeatures(featureList);

export const featureTitles = featureList.map(
  ([title]) => title,
) as FeatureTitles;

type Option = [string, string];

type Options<T extends Option[] = Option[]> = {
  options: T;
  defaultOption: NoInfer<T>[number][0];
};
type FeatureList = [string, string, Options][];

type FeatureTitles<
  T extends FeatureList = typeof featureList,
  U extends string[] = [],
> = T extends [
  infer R extends FeatureList[number],
  ...infer Rest extends FeatureList,
]
  ? FeatureTitles<Rest, [...U, R[0]]>
  : U;

type OptionObject<T extends Option = Option> = {
  title: T[0];
  description: T[1];
};
type AccumulateOptions<T extends Option[], U extends object = {}> = T extends [
  infer R extends Option,
  ...infer Rest extends Option[],
]
  ? AccumulateOptions<
      Rest,
      Prettify<
        U & {
          [key in `${KebabCase<R[0]>}`]: Prettify<OptionObject<R>>;
        }
      >
    >
  : U;

type CleanOptions<
  T extends Option[],
  U extends OptionObject[] = [],
> = T extends [infer R extends Option, ...infer Rest extends Option[]]
  ? CleanOptions<Rest, [...U, Prettify<OptionObject<R>>]>
  : U;

type Features<
  T extends FeatureList = typeof featureList,
  U extends object = {},
> = T extends [
  infer R extends FeatureList[number],
  ...infer Rest extends FeatureList,
]
  ? Features<
      Rest,
      Prettify<
        U & {
          [key in `${KebabCase<R[0]>}`]: Prettify<
            {
              id: `${KebabCase<R[0]>}`;
              title: R[0];
              description: R[1];
              defaultOption: R[2]["defaultOption"];
              options: CleanOptions<R[2]["options"]>;
            } & AccumulateOptions<R[2]["options"]>
          >;
        }
      >
    >
  : U;
