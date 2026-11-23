import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
const joke =
  "I asked my agent to make one button blue; it shipped a design system, a migration guide, and a button that is, technically, blue.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
