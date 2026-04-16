import hoodieSand from "@/assets/products/hoodie-sand.jpg";
import hoodieClay from "@/assets/products/hoodie-clay.jpg";
import hoodieOlive from "@/assets/products/hoodie-olive.jpg";
import teeOlive from "@/assets/products/tee-olive.jpg";
import teeSand from "@/assets/products/tee-sand.jpg";
import jacketBrown from "@/assets/products/jacket-brown.jpg";
import bracelet from "@/assets/products/bracelet.jpg";
import ballChain from "@/assets/products/ball-chain.jpg";

export interface Product {
  id: string;
  name: string;
  category: "hoodie" | "tee" | "jacket" | "accessory";
  price: number;
  colorway: string;
  image: string;
  description: string;
  details: string[];
  sizes?: string[];
  soldOut?: boolean;
}

export const products: Product[] = [
  {
    id: "hoodie-sand",
    name: "El Roi Hoodie",
    category: "hoodie",
    price: 105,
    colorway: "Sand",
    image: hoodieSand,
    description: "Heavyweight 400gsm cotton. Oversized silhouette. Tonal embroidery at chest. You were seen before you were ready.",
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
    id: "hoodie-clay",
    name: "El Roi Hoodie",
    category: "hoodie",
    price: 105,
    colorway: "Clay",
    image: hoodieClay,
    description: "Heavyweight 400gsm cotton. Oversized silhouette. Tonal embroidery at chest. Rooted in something deeper.",
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
    id: "hoodie-olive",
    name: "El Roi Hoodie",
    category: "hoodie",
    price: 105,
    colorway: "Olive",
    image: hoodieOlive,
    description: "Heavyweight 400gsm cotton. Oversized silhouette. Tonal embroidery at chest. Still here. Still seen.",
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
    id: "tee-olive",
    name: "Heritage Tee",
    category: "tee",
    price: 65,
    colorway: "Olive",
    image: teeOlive,
    description: "Oversized boxy fit. Ghanaian-inspired tonal print. 280gsm cotton. The pattern carries the story.",
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
    id: "tee-sand",
    name: "Heritage Tee",
    category: "tee",
    price: 65,
    colorway: "Sand",
    image: teeSand,
    description: "Oversized boxy fit. Clean and grounded. 280gsm cotton. Less noise, more meaning.",
    details: [
      "280gsm premium cotton",
      "Oversized boxy cut",
      "Subtle woven label detail",
      "Ribbed crew neck",
      "Drop shoulder",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "jacket-brown",
    name: "Adinkra Jacket",
    category: "jacket",
    price: 145,
    colorway: "Deep Brown",
    image: jacketBrown,
    description: "Statement piece. Structured oversized silhouette with Ghanaian Adinkra-inspired panel detailing. One per drop.",
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
    id: "bracelet-earth",
    name: "Sankofa Bracelet",
    category: "accessory",
    price: 30,
    colorway: "Earth",
    image: bracelet,
    description: "Handcrafted wooden and stone beads. West African craft tradition. Each one is unique. Go back and get it.",
    details: [
      "Hand-selected wooden and stone beads",
      "Inspired by West African beadwork",
      "Adjustable elastic band",
      "Each bracelet is one of one",
    ],
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getProductsByCategory = (category: Product["category"]) =>
  products.filter((p) => p.category === category);
