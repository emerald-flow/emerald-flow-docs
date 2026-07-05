import type { galleryObj } from "./generated/gallery";

type Features = keyof typeof galleryObj;

type GalleryDescription = {
  [T in Features]: {
    [U in keyof (typeof galleryObj)[T]]: string;
  };
};

export const galleryDescription = {
  "permanent-repel": {
    "1": "Permanent repel in options",
    "2": "Permanent repel in options 2",
  },
  running: {},
  "level-cap": {},
  "no-hm-slave": {},
  "better-summary": {},
  "physical-special-split": {},
  "pocket-tutor": {},
  "better-evolutions": {},
  "adopt-eggs": {},
  "pocket-pc": {},
  "pocket-heal": {},
  "forget-hms": {},
  "infinite-tms": {},
  "pocket-mart": {},
  "one$-items": {},
  "pocket-bikes": {},
  "auto-blend": {},
  "custom-blend": {},
  "badge-boost": {},
  "ev-training": {},
  "perfect-catches": {},
  "fast-eggs": {},
  "instant-fishing": {},
  "always-feebas": {},
  "better-safari": {},
  "no-fleeing-mons": {},
  "instant-text": {},
  music: {},
} as const satisfies GalleryDescription;
