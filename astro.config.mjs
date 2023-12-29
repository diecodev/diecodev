import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  site: "https://diecodev.deno.dev",
  integrations: [tailwind(), sitemap()],
});
