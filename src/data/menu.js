// Single source of truth for menu data.
// Update prices/items here — they cascade to the Menu page and Home preview.

export const menu = [
  {
    slug: 'street-food',
    title: 'Street Food & Appetizers',
    note: 'Perfect for gatherings & events',
    items: [
      { name: 'Pani Puri Kit (Signature)', detail: 'Serves 10–12', half: '$100', halfLabel: 'Classic', full: '$120', fullLabel: 'Premium' },
      { name: 'Bhel Puri', half: '$70', full: '$130' },
      { name: 'Aloo Tikki Chaat', half: '$75', full: '$140' },
      { name: 'Samosa Chaat', half: '$75', full: '$140' },
      { name: 'Kachori with Aloo Sabzi', half: '$90', full: '$160' },
      { name: 'Pakora Mix', half: '$75', full: '$140' },
      { name: 'Pav Bhaji (with Pav)', half: '$90', full: '$140' },
      { name: 'Pav Bhaji (without Pav)', half: '$80', full: '$140' },
      { name: 'Vada Pav', detail: '$5 each · 25 pcs $100', half: '', full: '' },
    ],
  },
  {
    slug: 'rice-biryani',
    title: 'Rice & Biryani',
    items: [
      { name: 'Chicken Biryani', half: '$75', full: '$140' },
      { name: 'Goat Biryani', half: '—', full: '$220' },
      { name: 'Vegetable Biryani', half: '$70', full: '$120' },
      { name: 'Chicken Yakhni Pulao', half: '$85', full: '$150' },
      { name: 'Goat Yakhni Pulao', half: '$120', full: '$200' },
      { name: 'Matar Pulao', half: '$60', full: '$105' },
      { name: 'Plain Pulao', half: '$55', full: '$95' },
    ],
  },
  {
    slug: 'signature-chicken',
    title: 'Signature Chicken',
    note: 'Boneless option available for all chicken dishes except traditional curry',
    items: [
      { name: 'Butter Chicken (Boneless)', half: '$95', full: '$170' },
      { name: 'Chicken Curry (Bone-In)', half: '$85', full: '$150' },
      { name: 'Chicken Korma (Boneless)', half: '$95', full: '$165' },
      { name: 'Chicken Kadai (Boneless avail.)', half: '$90', full: '$160' },
      { name: 'Chili Chicken (Boneless)', half: '$90', full: '$160' },
      { name: 'Chili Wings', half: '$85', full: '$150' },
      { name: 'Tandoori Chicken', half: '$85', full: '$150' },
    ],
  },
  {
    slug: 'braised-goat',
    title: 'Braised Goat Specialties',
    items: [
      { name: 'Goat Curry', half: '$115', full: '$210' },
      { name: 'Chana Dal Gosht', half: '$120', full: '$220' },
      { name: 'Aloo Gosht (Goat & Potato Curry)', half: '$115', full: '$210' },
    ],
  },
  {
    slug: 'vegetarian',
    title: 'Vegetarian Classics',
    items: [
      { name: 'Paneer Makhni', half: '$90', full: '$160' },
      { name: 'Paneer Bhurji', half: '$85', full: '$150' },
      { name: 'Matar Methi Paneer', half: '$85', full: '$150' },
      { name: 'Mixed Vegetable Curry', half: '$65', full: '$110' },
      { name: 'Aloo Gobi', half: '$70', full: '$120' },
      { name: 'Bhindi', half: '$75', full: '$130' },
    ],
  },
  {
    slug: 'lentils',
    title: 'Lentils & Comforts',
    items: [
      { name: 'Dal Makhni', half: '$70', full: '$120' },
      { name: 'Yellow Dal', half: '$60', full: '$100' },
      { name: 'Channa Masala', half: '$70', full: '$120' },
    ],
  },
  {
    slug: 'seafood',
    title: 'Seafood',
    items: [
      { name: 'Tandoori Salmon', half: '$130', full: '$240' },
    ],
  },
  {
    slug: 'roti',
    title: 'Roti & Accompaniments',
    items: [
      { name: 'Roti', detail: '$2 each · 25 pcs $50 · 50 pcs $95', half: '', full: '' },
    ],
  },
  {
    slug: 'sides',
    title: 'Fresh Sides',
    items: [
      { name: 'Cucumber Raita', half: '$35', halfLabel: 'Half', full: '$60', fullLabel: 'Full' },
      { name: 'Kachumber Salad', detail: 'cucumber, tomato, onion, lemon', half: '$40', halfLabel: 'Half', full: '$70', fullLabel: 'Full' },
    ],
  },
  {
    slug: 'chutneys',
    title: 'House Chutneys',
    items: [
      { name: 'Cilantro Mint Chutney', detail: '16 oz · 32 oz', half: '$15', full: '$25' },
      { name: 'Tamarind Chutney',      detail: '16 oz · 32 oz', half: '$15', full: '$25' },
    ],
  },
];

// Categories highlighted on the home page
export const featuredSlugs = ['street-food', 'signature-chicken', 'braised-goat', 'vegetarian'];
