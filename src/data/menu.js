// Single source of truth for menu data.
// Update prices/items here — they cascade to the Menu page and Home preview.

export const menu = [
  {
    slug: 'street-food',
    title: 'Street Food & Appetizers',
    items: [
      { name: 'Pani Puri Kit (Signature)', detail: 'Serves 10–12 · Classic 1 flavor / Premium 2 flavors', half: '$100', halfLabel: 'Classic', full: '$120', fullLabel: 'Premium' },
      { name: 'Bhel Puri', half: '$70', full: '$130' },
      { name: 'Aloo Tikki Chaat', half: '$75', full: '$140' },
      { name: 'Samosa (Plain)', half: '$75', full: '$140' },
      { name: 'Samosa Chaat (with Chole)', half: '$90', full: '$160' },
      { name: 'Kachori with Aloo Sabzi', half: '$90', full: '$160' },
      { name: 'Pakora Mix', half: '$75', full: '$140' },
      { name: 'Pav Bhaji (with Pav)', half: '$90', full: '$140' },
      { name: 'Pav Bhaji (without Pav)', half: '$80', full: '$140' },
      { name: 'Vada Pav', detail: '25 pcs $100 · 50 pcs $200', half: '', full: '' },
    ],
  },
  {
    slug: 'rice-biryani',
    title: 'Rice & Biryani',
    items: [
      { name: 'Chicken Biryani', half: '$75', full: '$140' },
      { name: 'Goat Biryani', half: '$110', full: '$220' },
      { name: 'Vegetable Biryani', half: '$70', full: '$120' },
      { name: 'Chicken Yakhni Pulao', half: '$85', full: '$150' },
      { name: 'Goat Yakhni Pulao', half: '$120', full: '$200' },
      { name: 'Matar Pulao', half: '$60', full: '$105' },
      { name: 'Jeera Rice', half: '$55', full: '$95' },
    ],
  },
  {
    slug: 'signature-chicken',
    title: 'Signature Chicken',
    note: 'Boneless option available for all chicken dishes except traditional curry',
    items: [
      { name: 'Butter Chicken', half: '$95', full: '$170' },
      { name: 'Chicken Curry', half: '$85', full: '$150' },
      { name: 'Chicken Korma', half: '$95', full: '$165' },
      { name: 'Chicken Kadai', half: '$90', full: '$160' },
      { name: 'Chili Chicken', half: '$90', full: '$160' },
      { name: 'Chili Wings', half: '$85', full: '$150' },
      { name: 'Tandoori Chicken', half: '$85', full: '$150' },
      { name: 'Chicken Roast', half: '$95', full: '$170' },
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
      { name: 'Palak Paneer', half: '$85', full: '$150' },
      { name: 'Matar Methi Malai Paneer', half: '$85', full: '$150' },
      { name: 'Mixed Vegetable Sabzi', half: '$65', full: '$110' },
      { name: 'Aloo Gobi', half: '$70', full: '$120' },
      { name: 'Bhindi Masala', half: '$75', full: '$130' },
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
    slug: 'breads',
    title: 'Breads & Accompaniments',
    items: [
      { name: 'Roti', detail: '25 pcs $50 · 50 pcs $95', half: '', full: '' },
      { name: 'Puri', detail: '25 pcs $28 · 50 pcs $55', half: '', full: '' },
    ],
  },
  {
    slug: 'sides',
    title: 'Fresh Sides',
    items: [
      { name: 'Cucumber or Mixed Raita', half: '$35', halfLabel: 'Half', full: '$60', fullLabel: 'Full' },
      { name: 'Kachumber Salad', half: '$40', halfLabel: 'Half', full: '$70', fullLabel: 'Full' },
    ],
  },
  {
    slug: 'chutneys',
    title: 'House Chutneys',
    items: [
      { name: 'Cilantro Mint Chutney', half: '$15', halfLabel: '16 oz', full: '$25', fullLabel: '32 oz' },
      { name: 'Tamarind Chutney',      half: '$15', halfLabel: '16 oz', full: '$25', fullLabel: '32 oz' },
    ],
  },
  {
    slug: 'sweets',
    title: 'Sweet Bites',
    note: 'Other desserts available upon request · Gluten-free & vegan options available upon request',
    items: [
      { name: 'Kheer (Classic)', half: '$50', full: '$90' },
      { name: 'Kesar Kheer', half: '$60', full: '$100' },
      { name: 'Rose Kheer', half: '$60', full: '$100' },
      { name: 'Mango Tiramisu (Eggless)', half: '$70', full: '$120' },
    ],
  },
];

// Categories highlighted on the home page
export const featuredSlugs = ['street-food', 'signature-chicken', 'braised-goat', 'sweets'];