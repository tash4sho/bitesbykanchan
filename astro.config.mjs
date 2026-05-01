import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.bitesbykanchan.com",
  integrations: [sitemap()],
  compressHTML: true,
});