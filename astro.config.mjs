import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [sitemap()],
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
  site: "https://dieco.dev",
});
