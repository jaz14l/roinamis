import charcoal from "@/assets/preview/charcoal-wave-set.jpeg.asset.json";
import green from "@/assets/preview/green-wave-top.jpg.asset.json";
import utility from "@/assets/preview/utility-wave-jacket.jpeg.asset.json";
import knit from "@/assets/preview/ombre-wave-knit.jpeg.asset.json";

export type PreviewCategory = "tops" | "outerwear" | "sets";
export interface PreviewProduct {
  id: string;
  name: string;
  category: PreviewCategory;
  color: string;
  image: string;
  description: string;
  details: string[];
  pieces: ("top" | "pants")[];
}

// Working names describe the owner's mockups, not confirmed commercial specifications.
export const previewProducts: PreviewProduct[] = [
  {
    id: "utility-wave-jacket", name: "Utility Wave Jacket", category: "outerwear", color: "Washed olive",
    image: utility.url, pieces: ["top"],
    description: "Curved panels follow the wave across a collared zip jacket. A washed olive finish is paired with metal hardware and asymmetrical pockets.",
    details: ["Wave-shaped panelling", "Flap chest pocket with wave mark", "Angled zip pocket", "D-ring detailing"],
  },
  {
    id: "ombre-wave-knit", name: "Ombré Wave Knit", category: "outerwear", color: "Cream / espresso",
    image: knit.url, pieces: ["top"],
    description: "A collared zip knit with a brushed surface. Cream gives way to espresso, with wave lines running through the body.",
    details: ["Ombré colour transition", "Curved wave stitch lines", "Collared neckline", "Chest wave mark"],
  },
  {
    id: "charcoal-wave-set", name: "Charcoal Wave Set", category: "sets", color: "Washed charcoal",
    image: charcoal.url, pieces: ["top", "pants"],
    description: "A washed charcoal hoodie and pant set. Contoured wave seams run across both pieces, with a tonal mark at the chest.",
    details: ["Matching hoodie and pants", "Contoured wave seamlines", "Tonal chest wave mark", "Washed charcoal finish"],
  },
  {
    id: "green-wave-crewneck", name: "Green Wave Crewneck", category: "tops", color: "Sage / forest",
    image: green.url, pieces: ["top"],
    description: "A crewneck moving from sage into forest green. A diagonal wave seam crosses the front, with the wave mark at the chest.",
    details: ["Sage-to-forest colour transition", "Diagonal wave panelling", "Ribbed neckline, cuffs and hem", "Chest wave mark"],
  },
];

export function filterPreviewProducts(category: string, search = "") {
  const query = search.trim().toLowerCase();
  return previewProducts.filter(product =>
    (category === "all" || product.category === category) &&
    `${product.name} ${product.color}`.toLowerCase().includes(query)
  );
}