import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.bitesbykanchan.com",
  integrations: [sitemap()],
  compressHTML: true,
  output: "hybrid",
  adapter: cloudflare()
});