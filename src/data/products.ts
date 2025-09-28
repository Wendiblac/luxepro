export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: "men" | "unisex" | "women";
  collection?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  images: string[];
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  reviews: {
    rating: number;
    count: number;
  };
  inStock: boolean;
}

import SbC1 from "../assets/sbc1.jpg";
import SbC2 from "../assets/sbc2.jpg";
import SbC3 from "../assets/sbc3.jpg";
import SbC4 from "../assets/sbc4.jpg";
import SbC5 from "../assets/sbc5.jpg";
import SbC6 from "../assets/men-collection.jpg";

// Women’s products
import Wm1 from "../assets/wm1.jpg";
import Wm2 from "../assets/wm2.jpg";
import Wm3 from "../assets/wm3.jpg";
import Wm4 from "../assets/wm4.jpg";
import Wm5 from "../assets/wm5.jpg";
import Wm6 from "../assets/wm6.jpg";
import Wm7 from "../assets/wm7.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Luxury Kaftan",
    slug: "luxury-silk-blazer",
    price: 1299,
    originalPrice: 1599,
    category: "men",
    collection: "Signature Collection",
    isNew: true,
    images: [SbC4, SbC5],
    description:
      "Expertly tailored Luxury kaftan with impeccable attention to detail. Features our signature lining and hand-finished seams.",
    features: [
      "100% Mulberry Silk",
      "Hand-tailored construction",
      "Mother-of-pearl buttons",
      "Signature gold lining",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Ivory"],
    reviews: { rating: 4.8, count: 124 },
    inStock: true,
  },
  {
    id: "2",
    name: "Heritage Kaftan",
    slug: "heritage-cashmere-coat",
    price: 2499,
    category: "men",
    collection: "Heritage",
    images: [SbC3],
    description:
      "Timeless Heritage kaftan crafted from the finest Scottish wool. A wardrobe investment piece.",
    features: [
      "100% Scottish Cashmere",
      "Double-breasted design",
      "Silk lining",
      "Horn buttons",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Charcoal"],
    reviews: { rating: 4.9, count: 89 },
    inStock: true,
  },
  {
    id: "3",
    name: "Designer Watch",
    slug: "designer-watch",
    price: 1599,
    category: "unisex",
    collection: "Timepieces",
    images: [SbC6, SbC1],
    description:
      "Swiss-made timepiece with premium leather strap. Combines classic design with modern precision.",
    features: [
      "Swiss Movement",
      "Sapphire Crystal",
      "Water Resistant",
      "Premium Leather Strap",
    ],
    sizes: ["38mm", "42mm"],
    colors: ["Gold/Black", "Silver/Brown", "Rose Gold/Navy"],
    reviews: { rating: 4.8, count: 92 },
    inStock: true,
  },
  {
    id: "4",
    name: "Classic Suit",
    slug: "classic-oxford-shirt",
    price: 299,
    category: "men",
    isNew: true,
    images: [SbC2, SbC6],
    description:
      "Essential Classic kaftan crafted from premium cotton. Perfect for both business and casual wear.",
    features: [
      "100% Premium Cotton",
      "Mother-of-pearl buttons",
      "Reinforced collar",
      "Tailored fit",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Navy"],
    reviews: { rating: 4.7, count: 156 },
    inStock: true,
  },
  {
    id: "5",
    name: "Bespoke Suit",
    slug: "bespoke-wool-suit",
    price: 3499,
    category: "men",
    images: [SbC6, SbC5],
    description:
      "Hand-tailored Kaftan suit made from the finest Italian wool. Each piece is individually crafted to perfection.",
    features: [
      "Italian Super 150s Wool",
      "Hand-stitched lapels",
      "Functional sleeve buttons",
      "Bespoke construction",
    ],
    sizes: ["36", "38", "40", "42", "44", "46"],
    colors: ["Navy", "Charcoal", "Black"],
    reviews: { rating: 5.0, count: 45 },
    inStock: true,
  },
  {
    id: "6",
    name: "Dashiki Kaftan",
    slug: "leather-handbag",
    price: 899,
    category: "men",
    isNew: true,
    images: [SbC1],
    description:
      "Handcrafted Dashiki kaftan with gold touches. Perfect companion for the modern professional.",
    features: [
      "Italian Leather",
      "Gold-plated hardware",
      "Multiple compartments",
      "Adjustable strap",
    ],
    sizes: ["One Size"],
    colors: ["Black", "Cognac", "Navy"],
    reviews: { rating: 4.6, count: 78 },
    inStock: true,
  },

  // Women Products
  {
    id: "7",
    name: "Emerald Royal Gown",
    slug: "emerald-royal-gown",
    price: 2199,
    category: "women",
    collection: "Evening Elegance",
    images: [Wm1, Wm2],
    description:
      "An exquisite emerald green gown with off-shoulder lace details and a flowing satin train. Perfect for galas and high-profile events.",
    features: [
      "Luxurious satin blend",
      "Intricate lace bodice",
      "Floor-length design with train",
      "Corset-style waist fit",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Emerald Green"],
    reviews: { rating: 4.9, count: 64 },
    inStock: true,
  },
  {
    id: "8",
    name: "Blush Crystal Gown",
    slug: "blush-crystal-gown",
    price: 2499,
    category: "women",
    collection: "Bespoke",
    isNew: true,
    images: [Wm3],
    description:
      "A blush pink gown with sparkling crystal embellishments, one-shoulder floral applique, and fitted mermaid silhouette.",
    features: [
      "Hand-sewn crystal beading",
      "One-shoulder floral detail",
      "Mermaid silhouette",
      "Fully lined",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blush Pink"],
    reviews: { rating: 4.8, count: 52 },
    inStock: true,
  },
  {
    id: "9",
    name: "Rose Elegance Dress",
    slug: "rose-elegance-dress",
    price: 1999,
    category: "women",
    isNew: true,
    isFeatured: true,
    images: [Wm4],
    description:
      "A soft rose gown featuring a draped satin shawl neckline and figure-hugging silhouette. The perfect evening elegance piece.",
    features: [
      "Premium satin fabric",
      "Draped neckline detail",
      "Slim-fit silhouette",
      "Concealed back zipper",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rose Pink"],
    reviews: { rating: 4.7, count: 48 },
    inStock: true,
  },
  {
    id: "10",
    name: "Champagne Glow Dress",
    slug: "champagne-glow-dress",
    price: 2299,
    category: "women",
    images: [Wm5],
    description:
      "A champagne-toned gown with an illusion back and delicate sequin embroidery. Features a dramatic floor-sweeping train.",
    features: [
      "Sequin-embroidered tulle",
      "Illusion back with lace",
      "Floor-length with train",
      "Sleeveless fitted bodice",
    ],
    sizes: ["S", "M", "L"],
    colors: ["Champagne"],
    reviews: { rating: 4.9, count: 72 },
    inStock: true,
  },
  {
    id: "11",
    name: "Lavender Luxe Dress",
    slug: "lavender-luxe-dress",
    price: 2399,
    category: "women",
    images: [Wm6],
    description:
      "An elegant lavender purple gown with draped detailing, sequin accents, and floor-sweeping glamour.",
    features: [
      "Lavender sequin fabric",
      "Draped shoulder detail",
      "Slim-fit silhouette",
      "Full lining for comfort",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Lavender Purple"],
    reviews: { rating: 4.8, count: 58 },
    inStock: true,
  },
  {
    id: "12",
    name: "Purple Lace Couture",
    slug: "purple-lace-couture",
    price: 2599,
    category: "women",
    isNew: true,
    images: [Wm7],
    description:
      "A regal purple lace gown with intricate lace embroidery, sheer bodice, and dramatic satin train.",
    features: [
      "Handcrafted lace embroidery",
      "Sheer bodice with corset fit",
      "Flowing satin skirt with train",
      "Off-shoulder neckline",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Purple Lace"],
    reviews: { rating: 5.0, count: 81 },
    inStock: true,
  },
];

export const collections = [
  {
    id: "1",
    name: "Signature Collection",
    description:
      "Our most coveted pieces, crafted with uncompromising attention to detail",
    image: SbC1,
    productCount: 24,
  },
  {
    id: "2",
    name: "Heritage",
    description: "Timeless designs inspired by our rich fashion heritage",
    image: SbC2,
    productCount: 18,
  },
  {
    id: "3",
    name: "Bespoke",
    description: "Individually tailored pieces for the discerning customer",
    image: Wm4,
    productCount: 12,
  },
  {
    id: "4",
    name: "Dashiki",
    description:
      "Handcrafted Dashiki kaftan with gold touches.",
    image: SbC4,
    productCount: 8,
  },
  {
    id: "5",
    name: "Evening Elegance",
    description: "Sophisticated gowns and couture dresses for women",
    image: Wm1,
    productCount: 20,
  },
];
