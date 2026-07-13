import type { features } from "./feature-list";

type SeeAlso = {
  [k in keyof typeof features]: (keyof typeof features)[];
};

export const seeAlso = {
  "permanent-repel": ["running"],

  running: ["permanent-repel", "pocket-bikes", "instant-text"],

  "level-cap": [
    "better-summary",
    "badge-boost",
    "ev-training",
    "better-evolutions",
  ],

  "no-hm-slave": ["pocket-tutor", "forget-hms", "infinite-tms"],

  "better-summary": ["level-cap", "physical-special-split", "pocket-tutor"],

  "physical-special-split": [
    "level-cap",
    "better-summary",
    "better-evolutions",
  ],

  "pocket-tutor": ["better-summary", "better-evolutions", "adopt-eggs"],

  "better-evolutions": ["pocket-tutor", "adopt-eggs", "forget-hms"],

  "adopt-eggs": ["fast-eggs", "pocket-tutor", "better-evolutions"],

  "pocket-pc": ["pocket-tutor", "pocket-heal", "pocket-mart", "pocket-bikes"],

  "pocket-heal": ["pocket-tutor", "pocket-pc", "pocket-mart", "pocket-bikes"],

  "forget-hms": [
    "pocket-tutor",
    "no-hm-slave",
    "infinite-tms",
    "better-evolutions",
  ],

  "infinite-tms": ["pocket-tutor", "no-hm-slave", "forget-hms"],

  "pocket-mart": [
    "one-dollar-items",
    "pocket-tutor",
    "pocket-pc",
    "pocket-heal",
    "pocket-bikes",
  ],

  "one-dollar-items": ["pocket-mart"],

  "pocket-bikes": ["pocket-tutor", "pocket-pc", "pocket-heal", "pocket-mart"],

  "auto-blend": ["custom-blend"],

  "custom-blend": ["auto-blend"],

  "badge-boost": ["level-cap", "ev-training"],

  "ev-training": ["level-cap", "badge-boost"],

  "perfect-catches": ["better-safari", "no-fleeing-mon"],

  "fast-eggs": ["adopt-eggs", "better-evolutions"],

  "instant-fishing": ["always-feebas", "perfect-catches"],

  "always-feebas": ["instant-fishing", "perfect-catches"],

  "better-safari": ["no-fleeing-mon", "perfect-catches"],

  "no-fleeing-mon": ["better-safari", "perfect-catches"],

  "instant-text": ["music", "running"],

  music: ["instant-text", "running"],
} as const satisfies SeeAlso;
