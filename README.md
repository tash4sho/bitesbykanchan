# Bites by Kanchan — Catering Website

A modern, fast, SEO-friendly catering website built with [Astro](https://astro.build).
Production-ready, mobile-responsive, and entirely composed from libraries and assets that are
**free for commercial use**.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens http://localhost:4321)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

Requires **Node.js 18.17+** or 20+.

---

## VS Code setup (step-by-step)

1. **Install VS Code** if you haven't already → <https://code.visualstudio.com>
2. **Install Node.js** (LTS version) → <https://nodejs.org>
3. **Open this folder in VS Code**: `File → Open Folder → bites-by-kanchan`
4. **Install the recommended extensions**: VS Code will prompt automatically — accept it.
   The most important one is the official **Astro** extension (`astro-build.astro-vscode`)
   for `.astro` syntax highlighting and IntelliSense.
5. **Open the integrated terminal**: `Ctrl + ` ` ` (backtick) or `View → Terminal`
6. **Run the install + dev commands**:

   ```bash
   npm install
   npm run dev
   ```

7. Open <http://localhost:4321> — that's your site running locally.
   Edits to any file will hot-reload in the browser.

---

## Project structure

```
bites-by-kanchan/
├── public/
│   ├── favicon.svg            # Browser tab icon (SVG, brand monogram)
│   └── og-image.svg           # Social-share preview image
├── src/
│   ├── components/
│   │   ├── ContactForm.astro  # Accessible form with validation
│   │   ├── Footer.astro       # Site footer
│   │   ├── Hero.astro         # Home hero section + illustrated SVG plate
│   │   ├── MenuCategory.astro # Reusable menu category list
│   │   ├── Navbar.astro       # Sticky responsive nav
│   │   ├── Ornament.astro     # Decorative SVG ornaments (leaf, chili, etc.)
│   │   └── Slideshow.astro    # Photo carousel for the home page
│   ├── data/
│   │   ├── menu.js            # 🍽 Single source of truth for the menu
│   │   └── photos.js          # 📷 Slideshow photo list
│   ├── layouts/
│   │   └── BaseLayout.astro   # SEO meta, fonts, structured data
│   ├── pages/
│   │   ├── about.astro        # /about
│   │   ├── contact.astro      # /contact
│   │   ├── index.astro        # /
│   │   └── menu.astro         # /menu
│   └── styles/
│       └── global.css         # Design tokens, reset, shared styles
├── astro.config.mjs           # Astro configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## How to customize

### 🍽 Update the menu
All menu items live in **`src/data/menu.js`**.
Edit the `menu` array — changes flow to both the Menu page and the Home preview automatically.

### 📷 Swap in your slideshow photos
1. Drop your photos into **`public/images/slideshow/`**.
2. Open **`src/data/photos.js`** and update each entry's `src`, `alt`, and (optional) `caption`.
3. Delete the `placeholder-*.svg` files once you have real photos.

Tips:
- Aim for **landscape 4:3** (e.g. 1200×900). The slideshow is sized for it.
- Compress to ~150 KB per image with [Squoosh](https://squoosh.app) or [TinyJPG](https://tinyjpg.com) before uploading.
- Auto-rotate interval, title, and intro text are all props on `<Slideshow />` in `src/pages/index.astro` if you want to tweak them.

### 🎨 Change colors & fonts
Edit the CSS variables at the top of **`src/styles/global.css`**:

```css
--burgundy:     #7A2B2B;   /* primary brand */
--cream:        #FAF6EE;   /* page background */
--gold:         #C9A961;   /* accent */
--font-display: 'Fraunces', serif;
--font-body:    'DM Sans', sans-serif;
```

Fonts are loaded from Google Fonts in `src/layouts/BaseLayout.astro`.

### ✏️ Update copy
- **Home page** → `src/pages/index.astro`
- **About page** → `src/pages/about.astro`
- **Contact page** → `src/pages/contact.astro`
- **Footer** → `src/components/Footer.astro`

### 📨 Wire up the contact form
The form in `src/components/ContactForm.astro` is set to use **Formspree** (free tier).

1. Create a free account at <https://formspree.io>.
2. Create a new form, copy the form ID.
3. Open `src/components/ContactForm.astro` and replace `YOUR_FORM_ID`:

   ```astro
   const formAction = 'https://formspree.io/f/abcd1234';
   ```

**Alternatives** (all free, all commercial-friendly):

| Service | Why pick it |
|---|---|
| **Formspree** (default) | Easiest. 50 free submissions/month, no signup required for the recipient to receive emails. |
| **Web3Forms** | No account needed — just an access key. Unlimited submissions on free tier. |
| **Netlify Forms** | If you deploy to Netlify, just add `data-netlify="true"` to the `<form>` tag. |
| **Formspark** | Pay-as-you-go, very simple. |

If you don't configure an endpoint, the form falls back to a friendly "demo mode" message so it never breaks.

---

## Deployment

This is a static site. Deploy free to any of these:

- **Netlify** → drag-and-drop the `dist/` folder, or connect your Git repo
- **Vercel** → import the Git repo, defaults work out of the box
- **Cloudflare Pages** → connect the repo, build command `npm run build`, output `dist`
- **GitHub Pages** → push `dist/` to a `gh-pages` branch

Before deploying, update the `site` field in `astro.config.mjs` to your real domain (used for canonical URLs).

---

## License summary — everything used in this project

| Item | Type | License | Commercial use |
|---|---|---|---|
| **Astro** (framework) | Library | MIT | ✅ Yes |
| **Fraunces** (display font) | Font | SIL Open Font License 1.1 | ✅ Yes |
| **DM Sans** (body font) | Font | SIL Open Font License 1.1 | ✅ Yes |
| **All SVG illustrations** | Custom artwork | Original — yours to use | ✅ Yes |
| **Color palette** | — | N/A (cannot be copyrighted) | ✅ Yes |
| **All page copy** | Custom text | Original — yours to use | ✅ Yes |

**Confirmed safe for commercial use.** No GPL, no proprietary templates, no paid UI kits.
The website ships with **zero third-party UI dependencies** beyond Astro itself — no Tailwind,
no React, no icon libraries — which keeps both the licensing surface and the bundle size minimal.

### License source verification

- Astro: <https://github.com/withastro/astro/blob/main/LICENSE>
- Fraunces: <https://fonts.google.com/specimen/Fraunces/about> (designed by Undercase Type, OFL)
- DM Sans: <https://fonts.google.com/specimen/DM+Sans/about> (designed by Colophon Foundry / Indian Type Foundry, OFL)

The OFL allows embedding fonts in commercial work, including websites, with no attribution required in the rendered page.

---

## Performance & SEO notes

This project is built around Astro best practices:

- **Zero JavaScript by default.** Only the small mobile-nav toggle and the contact-form fetch handler ship JS — and only on the pages that need it.
- **Static HTML output.** Every page is fully pre-rendered for instant first paint.
- **Fonts are loaded with `display=swap`** to avoid blocking rendering.
- **CSS is auto-inlined** when small (Astro setting `inlineStylesheets: 'auto'`).
- **Semantic HTML, alt text, skip-link, focus-visible** for accessibility.
- **JSON-LD structured data** (`FoodEstablishment`) so search engines understand the business.
- **Open Graph + Twitter cards** for rich social previews.
- **Canonical URLs** generated automatically from `astro.config.mjs`.

Expect Lighthouse scores in the high 90s out of the box.

---

## License (this project's own code)

You own the code. Use it freely for the Bites by Kanchan business.
