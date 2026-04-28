# Slideshow images

Drop your photos here and update `src/data/photos.js` to point to them.

## Quick steps

1. Copy your photos into this folder (`public/images/slideshow/`).
2. Open `src/data/photos.js`.
3. Replace the placeholder `src` paths with your filenames:

   ```js
   {
     src: '/images/slideshow/your-biryani.jpg',
     alt: 'Hand-layered chicken biryani in a brass dish',
     caption: 'Slow-layered biryani, garnished by hand.',
   }
   ```

   ⚠️ Note the leading `/` — it points to the root of the site, not this folder.

## Image guidelines

- **Aspect ratio:** landscape 4:3 (e.g. 1200×900) works best
- **File format:** JPG for photos, WebP if you can produce it (smaller files)
- **Size:** compress to ~150 KB per image with [Squoosh](https://squoosh.app) or [TinyJPG](https://tinyjpg.com)
- **Filenames:** lowercase, no spaces (use hyphens) — e.g. `butter-chicken.jpg` not `Butter Chicken.JPG`

## Once you've added photos

You can delete the `placeholder-*.svg` files. They're just stand-ins so the slideshow has something to show before you swap in real photography.
