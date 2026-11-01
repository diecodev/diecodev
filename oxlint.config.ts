import { defineConfig } from "oxlint";
import astro from "ultracite/oxlint/astro";
import core from "ultracite/oxlint/core";

export default defineConfig({
  env: core.env,
  extends: [core, astro],
  ignorePatterns: core.ignorePatterns,
});
