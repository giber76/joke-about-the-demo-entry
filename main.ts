import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents.
const joke =
  "I asked my agent to make one button blue; it shipped a design system, a migration guide, and a button that is, technically, blue.";

// The rules require 1-280 Unicode code points, not only whitespace.
const length = [...joke].length;
if (length < 1 || length > 280 || joke.trim().length === 0) {
  throw new Error(`entry.txt must be 1-280 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
