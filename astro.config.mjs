// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Replace with your real domain when you deploy. Used for canonical URLs and sitemap.
  site: 'https://bitesbykanchan.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
