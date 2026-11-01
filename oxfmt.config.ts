import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  astro: true,
  // The profile README and the GitHub folder are maintained separately.
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    "README.md",
    ".github/**",
  ],
});
