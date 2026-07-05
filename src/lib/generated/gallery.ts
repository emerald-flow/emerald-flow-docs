/* AUTO-GENERATED FILE - DO NOT EDIT */

import type { pages } from "~/lib/menu-items";

type Features = Exclude<keyof typeof pages.features, "url" | "title">;

export const gallery = {
  "permanent-repel": [
    {
      name: "1",
      id: "1.d82c06d4",
      path: "/assets/gallery/permanent-repel/1.webp",
    },
    {
      name: "2",
      id: "2.d82c06d4",
      path: "/assets/gallery/permanent-repel/2.webp",
    },
  ],
  running: [],
  "level-cap": [],
  "no-hm-slave": [],
  "better-summary": [],
  "physical-special-split": [],
  "pocket-tutor": [],
  "better-evolutions": [],
  "adopt-eggs": [],
  "pocket-pc": [],
  "pocket-heal": [],
  "forget-hms": [],
  "infinite-tms": [],
  "pocket-mart": [],
  "one$-items": [],
  "pocket-bikes": [],
  "auto-blend": [],
  "custom-blend": [],
  "badge-boost": [],
  "ev-training": [],
  "perfect-catches": [],
  "fast-eggs": [],
  "instant-fishing": [],
  "always-feebas": [],
  "better-safari": [],
  "no-fleeing-mons": [],
  "instant-text": [],
  music: [],
} as const satisfies Gallery;

export type Gallery = Record<
  Features,
  { id: string; name: string; path: string }[]
>;

export const galleryObj = {
  "permanent-repel": {
    "1": {
      id: "1.d82c06d4",
      index: 0,
    },
    "2": {
      id: "2.d82c06d4",
      index: 1,
    },
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
} as const satisfies GalleryObj;

export type GalleryObj = Record<
  Features,
  Record<string, { id: string; index: number }>
>;
