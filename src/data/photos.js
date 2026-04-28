// Slideshow photos for the home page.
//
// HOW TO ADD YOUR OWN PHOTOS:
//   1. Drop your image files into:  public/images/slideshow/
//      (e.g. biryani.jpg, butter-chicken.jpg, thali.jpg)
//
//   2. Update the `src` paths below to match your filenames.
//      Anything in public/ is served from the root, so:
//         File:  public/images/slideshow/biryani.jpg
//         Path:  /images/slideshow/biryani.jpg
//
//   3. Always include an `alt` description — it's what screen readers and
//      Google's image search will see. Be specific: "Layered chicken biryani
//      garnished with fried onions" beats "Food photo".
//
//   4. `caption` is optional — appears below the photo in italic.
//
// PHOTO TIPS:
//   • Aim for landscape 4:3 ratio (e.g. 1200×900 px) — it's what the slideshow is sized for.
//   • Compress with https://squoosh.app or https://tinyjpg.com before uploading.
//     Target ~150 KB per image for fast loading.
//   • If you have WebP versions, name them the same with `.webp` and they'll
//     be auto-served (the component checks for them).

export const photos = [
  {
    src: '/images/slideshow/biryani.jpg',
    alt: 'Hand-layered chicken biryani in a brass serving dish',
    caption: 'Slow-layered biryani, garnished by hand.',
  },
  {
    src: '/images/slideshow/placeholder-2.svg',
    alt: 'Pani puri kit with crispy shells and tamarind water',
    caption: 'Pani puri assembled at the table.',
  },
  {
    src: '/images/slideshow/butterchicken.jpg',
    alt: 'Butter chicken in a copper karahi with fresh cilantro',
    caption: 'Butter chicken, the way grandma made it.',
  },
  {
    src: '/images/slideshow/wings.jpg',
    alt: 'Wings',
    caption: 'A full basket of wings for a Sunday gathering.',
  },
  {
    src: '/images/slideshow/tandoori.jpg',
    alt: 'Tandoori chicken on a bed of sliced onions and lemon',
    caption: 'Tandoori, charred and resting.',
  },
  {
    src: '/images/slideshow/chaats.jpg',
    alt: 'Delicious Chaats',
    caption: 'Chaats, made the morning of.',
  },
];
