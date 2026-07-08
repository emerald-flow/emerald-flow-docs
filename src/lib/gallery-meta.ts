import type { galleryObj } from "./generated/gallery";

type Features = keyof typeof galleryObj;

type GalleryMeta = {
  [T in Features]: {
    [U in keyof (typeof galleryObj)[T]]: string;
  };
};

export const galleryMeta = {
  "permanent-repel": {
    "option-menu": "Permanent repel in option menu",
  },
  running: {
    "option-menu": "Running in the option menu",
  },
  "level-cap": {
    "option-menu": "Level Cap in the option menu",
    "level-up": "Level up before Gym 3",
    "level-up-blocked": "Level up blocked before Gym 3",
  },
  "no-hm-slave": {
    "option-menu": "No HM Slave in the option menu",
    "start-menu": "Moves in the Start menu",
    "moves-menu": "Moves menu",
    usage: "Using ROCK SMASH",
  },
  "better-summary": {
    "option-menu": "Better Summary in the option menu",
    "stat-modifier": "Red for an increased stat, and blue for a decreased stat",
    "damage-category": "Damage category of each move",
    "base-stats": "Base stats (BS) of a Pokémon",
    ivs: "IVs of a Pokémon",
    evs: "EVs of Pokémon",
    pp: "PP retained in Contest moves",
  },
  "physical-special-split": {
    "option-menu": "Physical Special Split in the option menu",
  },
  "pocket-tutor": {
    "option-menu": "Pocket Tutor in the option menu",
  },
  "better-evolutions": {
    "option-menu": "Better Evolutions in the option menu",
  },
  "adopt-eggs": {
    "option-menu": "Adopt Eggs in the option menu",
  },
  "pocket-pc": {
    "option-menu": "Pocket PC in the option menu",
  },
  "pocket-heal": {
    "option-menu": "Pocket Heal in the option menu",
  },
  "forget-hms": {
    "option-menu": "Forget HMs in the option menu",
  },
  "infinite-tms": {
    "option-menu": "Infinite TMs in the option menu",
  },
  "pocket-mart": {
    "option-menu": "Pocket Mart in the option menu",
  },
  "one-dollar-items": {
    "option-menu": "One Dollar Items in the option menu",
  },
  "pocket-bikes": {
    "option-menu": "Pocket Bikes in the option menu",
  },
  "auto-blend": {
    "option-menu": "Auto Blend in the option menu",
  },
  "custom-blend": {
    "option-menu": "Custom Blend in the option menu",
  },
  "badge-boost": {
    "option-menu": "Badge Boost in the option menu",
  },
  "ev-training": {
    "option-menu": "EV Training in the option menu",
  },
  "perfect-catches": {
    "option-menu": "Perfect Catches in the option menu",
  },
  "fast-eggs": {
    "option-menu": "Fast Eggs in the option menu",
  },
  "instant-fishing": {
    "option-menu": "Instant Fishing in the option menu",
  },
  "always-feebas": {
    "option-menu": "Always Feebas in the option menu",
  },
  "better-safari": {
    "option-menu": "Better Safari in the option menu",
  },
  "no-fleeing-mon": {
    "option-menu": "No Fleeing Mons in the option menu",
  },
  "instant-text": {
    "option-menu": "Instant Text in the option menu",
  },
  music: {
    "option-menu": "Music in the option menu",
  },
} as const satisfies GalleryMeta;
