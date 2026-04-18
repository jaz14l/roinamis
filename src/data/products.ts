import hoodieSand from "@/assets/products/hoodie-sand.jpg";
import hoodieClay from "@/assets/products/hoodie-clay.jpg";
import hoodieOlive from "@/assets/products/hoodie-olive.jpg";
import teeOlive from "@/assets/products/tee-olive.jpg";
import teeSand from "@/assets/products/tee-sand.jpg";
import jacketBrown from "@/assets/products/jacket-brown.jpg";
import bracelet from "@/assets/products/bracelet.jpg";
import ballChain from "@/assets/products/ball-chain.jpg";

export interface Colorway {
  name: string;
  image: string;
  swatch: string; // hex for the small color dot
}

export interface Product {
  id: string;
  name: string;
  category: "hoodie" | "tee" | "jacket" | "accessory";
  price: number;
  colorways: Colorway[];
  description: string;
  details: string[];
  sizes?: string[];
  soldOut?: boolean;
}

export const products: Product[] = [
  {
    id: "el-roi-hoodie",
    name: "El Roi Hoodie",
    category: "hoodie",
    price: 105,
    colorways: [
      { name: "Sand", image: hoodieSand, swatch: "#c9b89a" },
      { name: "Clay", image: hoodieClay, swatch: "#a8745a" },
      { name: "Olive", image: hoodieOlive, swatch: "#6b6a4a" },
    ],
    description:
      "Heavyweight 400gsm cotton. Oversized silhouette. Tonal embroidery at chest. You were seen before you were ready.",
    details: [
      "400gsm heavyweight French terry",
      "Oversized drop-shoulder fit",
      "Tonal El Roi embroidery",
      "Ribbed cuffs and hem",
      "Kangaroo pocket",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "heritage-tee",
    name: "Heritage Tee",
    category: "tee",
    price: 65,
    colorways: [
      { name: "Olive", image: teeOlive, swatch: "#6b6a4a" },
      { name: "Sand", image: teeSand, swatch: "#c9b89a" },
    ],
    description:
      "Oversized boxy fit. Ghanaian-inspired tonal print. 280gsm cotton. The pattern carries the story.",
    details: [
      "280gsm premium cotton",
      "Oversized boxy cut",
      "Ghanaian textile-inspired all-over print",
      "Ribbed crew neck",
      "Drop shoulder",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "adinkra-jacket",
    name: "Adinkra Jacket",
    category: "jacket",
    price: 145,
    colorways: [{ name: "Deep Brown", image: jacketBrown, swatch: "#4a3325" }],
    description:
      "Statement piece. Structured oversized silhouette with Ghanaian Adinkra-inspired panel detailing. One per drop.",
    details: [
      "Heavy wool-blend shell",
      "Adinkra-inspired embroidered panels",
      "Oversized structured fit",
      "Interior woven story label",
      "Two-way front closure",
    ],
    sizes: ["S", "M", "L", "XL"],
    soldOut: false,
  },
  {
    id: "sankofa-bracelet",
    name: "Sankofa Bracelet",
    category: "accessory",
    price: 30,
    colorways: [{ name: "Earth", image: bracelet, swatch: "#8a6a4a" }],
    description:
      "Handcrafted wooden and stone beads. West African craft tradition. Each one is unique. Go back and get it.",
    details: [
      "Hand-selected wooden and stone beads",
      "Inspired by West African beadwork",
      "Adjustable elastic band",
      "Each bracelet is one of one",
    ],
  },
  {
    id: "question-everything-ball-chain",
    name: "Question Everything Ball Chain",
    category: "accessory",
    price: 35,
    colorways: [{ name: "Silver", image: ballChain, swatch: "#c0c0c0" }],
    description:
      "Silver ball chain with an inverted question mark pendant. Question everything. Trust the process.",
    details: [
      "Sterling silver ball chain",
      "Inverted question mark pendant",
      "Lobster clasp closure",
      '20" chain length',
    ],
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getProductsByCategory = (category: Product["category"]) =>
  products.filter((p) => p.category === category);
