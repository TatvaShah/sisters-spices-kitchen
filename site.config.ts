import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Sister's Spices Kitchen",
  tagline: "Pure vegetarian Indian tiffin meals and catering.",
  category: "Vegetarian Indian tiffin",
  schemaType: "FoodEstablishment",
  area: "Toronto, ON",
  siteUrl: "https://sisters-spices-kitchen-ca.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#b41c24" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Pure vegetarian",
    headline: "Home-style Indian meals, packed for the week",
    subhead: "Tiffin meal plans and catering, with delivery included to select locations across the GTA. Subscribe on WhatsApp.",
    images: [
      { src: "/images/post-3.jpg", alt: "Fresh tiffin containers of paneer curry from Sister's Spices Kitchen" },
      { src: "/images/post-6.jpg", alt: "A bowl of paneer curry from Sister's Spices Kitchen" },
      { src: "/images/post-10.jpg", alt: "Masoor curry from Sister's Spices Kitchen" },
    ],
    primaryCta: { label: "Order on WhatsApp", href: "https://wa.me/14379749596" },
    secondaryCta: { label: "See the menu", href: "#menu" },
  },

  highlights: [
    "100% vegetarian",
    "Tiffin meal plans",
    "Delivery included to select GTA locations",
    "Orders on WhatsApp",
  ],

  about: {
    title: "Welcome to Sister's Spices Kitchen",
    body: [
      "Sister's Spices Kitchen makes pure vegetarian Indian food, snacks and catering in Toronto. Chefs by passion, with one simple idea: better food, better mood.",
      "Tiffin meal plans are freshly prepared, 100% vegetarian and made with love. Delivery is included to select locations across the GTA. Subscribe or order on WhatsApp, or send a message on Instagram.",
    ],
    image: { src: "/images/post-3.jpg", alt: "Fresh tiffin containers of paneer curry from Sister's Spices Kitchen" },
  },

  menu: {
    label: "Menu",
    title: "Meal plans and sweets",
    variant: "list",
    groups: [
      {
        title: "Tiffin meal plans",
        note: "Delivery included",
        items: [
          {
            name: "Roti Lover Meal Plan",
            description: "2 sabjis (12 oz each), 6 rotis, raita or salad. Weekly (6 meals) $76, biweekly (12 meals) $145, 20 meals $225.",
            veg: true,
          },
          {
            name: "Daily Comfort Meal Plan",
            description: "8 oz sabji, 8 oz dal, 8 oz rice, 4 rotis, raita or salad. Weekly (6 meals) $72, biweekly (12 meals) $135, 20 meals $210.",
            veg: true,
          },
        ],
      },
      {
        title: "Diwali sweets",
        note: "Prices per lb",
        items: [
          { name: "Besan Barfi", price: "$12.99", veg: true },
          { name: "Gulab Jamun", price: "$12.99", veg: true },
          { name: "Chum Chum", price: "$12.99", veg: true },
          { name: "Gajrella Barfi", price: "$12.99", veg: true },
          { name: "Rasgulla", price: "$13.50", veg: true },
          { name: "Desi Gud Jalebi", price: "$13.99", veg: true },
          { name: "Desi Gud Laddoo", price: "$13.99", veg: true },
          { name: "Besan Laddoo", price: "$13.99", veg: true },
          { name: "Malai Peda", price: "$13.99", veg: true },
          { name: "Coconut Barfi", price: "$13.99", veg: true },
          { name: "Motichoor Laddoo", price: "$14.99", veg: true },
          { name: "Kaju Katli", price: "$15.99", veg: true },
          { name: "Khoya Barfi", price: "$15.99", veg: true },
          { name: "Khoya Milk Cake", price: "$15.99", veg: true },
        ],
      },
    ],
    footnote: "Meal plan and Diwali sweets prices were posted on Instagram. Sweet prices are per lb. Order sweets at least 1 day in advance. A weekly tiffin menu is posted on Instagram.",
  },

  gallery: {
    title: "From the kitchen",
    items: [
      { src: "/images/post-3.jpg", alt: "Fresh tiffin containers of paneer curry from Sister's Spices Kitchen", caption: "Tiffin meals" },
      { src: "/images/post-6.jpg", alt: "A bowl of paneer curry from Sister's Spices Kitchen", caption: "Paneer curry" },
      { src: "/images/post-10.jpg", alt: "Masoor curry from Sister's Spices Kitchen", caption: "Masoor curry" },
      { src: "/images/post-1.jpg", alt: "The Roti Lover meal plan posted by Sister's Spices Kitchen", caption: "Roti Lover plan" },
      { src: "/images/post-2.jpg", alt: "The Daily Comfort meal plan posted by Sister's Spices Kitchen", caption: "Daily Comfort plan" },
      { src: "/images/post-4.jpg", alt: "A weekly tiffin menu posted by Sister's Spices Kitchen", caption: "Weekly tiffin menu" },
      { src: "/images/post-5.jpg", alt: "Festive sweets and diyas posted by Sister's Spices Kitchen", caption: "Festive sweets" },
      { src: "/images/post-9.jpg", alt: "Barfi from the Diwali sweets menu at Sister's Spices Kitchen", caption: "Diwali sweets" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "sisters_spices",
    embeds: [
      "https://www.instagram.com/reel/DfoCYn3SQln/",
      "https://www.instagram.com/reel/DflvkWMSU1o/",
      "https://www.instagram.com/p/Dfggjb8yvWG/",
    ],
  },

  order: {
    label: "How to order",
    title: "Order on WhatsApp",
    intro: "Tap the button to subscribe or place an order on WhatsApp. You can also send a message on Instagram. Delivery is included to select locations across the GTA.",
    dmMessage: "Hi Sister's Spices Kitchen! I would like to order.\nMeal plan or sweets:\nStart date:\nDelivery area:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Order on WhatsApp", href: "https://wa.me/14379749596" }],
    note: "Order sweets at least 1 day in advance.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Subscribe or order on WhatsApp at 437-974-9596, or send a message on Instagram." },
    { q: "Do you deliver?", a: "Delivery is included to select locations across the GTA." },
    { q: "What is in the meal plans?", a: "The Roti Lover plan has 2 sabjis (12 oz each), 6 rotis, and raita or salad, from $76 for 6 meals. The Daily Comfort plan has 8 oz sabji, 8 oz dal, 8 oz rice, 4 rotis, and raita or salad, from $72 for 6 meals." },
    { q: "Do you make sweets?", a: "The Diwali sweets menu includes barfi, laddoo, gulab jamun and more, with prices by the pound. Order at least 1 day in advance." },
  ],

  contact: {
    title: "Contact",
    area: "Toronto, Ontario",
    phone: "437-974-9596",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/sisters_spices/" }],
  },

  seo: {
    title: "Sister's Spices Kitchen | Vegetarian Indian tiffin in Toronto",
    description: "Pure vegetarian Indian tiffin meal plans and catering in Toronto, with delivery included to select GTA locations. Order on WhatsApp at 437-974-9596.",
    keywords: ["vegetarian tiffin Toronto", "Indian meal plans GTA", "Sister's Spices Kitchen"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
