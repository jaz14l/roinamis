import charcoal from "@/assets/preview/charcoal-wave-set-white.jpg";
import green from "@/assets/preview/green-wave-top-white.jpg";
import utility from "@/assets/preview/utility-wave-jacket-white.jpg";
import knit from "@/assets/preview/ombre-wave-knit-white.jpg";
import navyJacket from "@/assets/preview/navy-wave-jacket-white.jpg";
import navyDetail from "@/assets/preview/navy-wave-jacket-detail-white.jpg";
import burgundyJacket from "@/assets/preview/burgundy-wave-jacket-white.jpg";
import burgundyDetail from "@/assets/preview/burgundy-wave-jacket-detail-white.jpg";
import burgundyCollar from "@/assets/preview/burgundy-wave-jacket-collar-white.jpg";
import burgundyZip from "@/assets/preview/burgundy-wave-jacket-zip-white.jpg";
import waveJeans from "@/assets/preview/charcoal-wave-jeans-white.jpg";

export interface PreviewVariant {
  id: string;
  color: string;
  image: string;
  gallery: { image: string; alt: string }[];
  description: string;
  details: string[];
}

export type PreviewCategory = "tops" | "outerwear" | "sets" | "bottoms";
export interface PreviewProduct {
  id: string;
  name: string;
  category: PreviewCategory;
  color: string;
  image: string;
  variants?: PreviewVariant[];
  gallery?: { image: string; alt: string }[];
  description: string;
  details: string[];
  pieces: ("top" | "pants")[];
}

// Working names describe the owner's mockups, not confirmed commercial specifications.
export const previewProducts: PreviewProduct[] = [
  {
    id: "utility-wave-jacket", name: "Utility Wave Jacket", category: "outerwear", color: "Washed olive",
    image: utility, pieces: ["top"],
    description: "Curved panels follow the wave across a collared zip jacket. A washed olive finish is paired with metal hardware and asymmetrical pockets.",
    details: ["Wave-shaped panelling", "Flap chest pocket", "Angled zip pocket", "D-ring detailing"],
  },
  {
    id: "ombre-wave-knit", name: "Ombré Wave Knit", category: "outerwear", color: "Cream / espresso",
    image: knit, pieces: ["top"],
    description: "A collared zip knit with a brushed surface. Cream gives way to espresso, with wave lines running through the body.",
    details: ["Ombré colour transition", "Curved wave stitch lines", "Collared neckline", "Chest wave mark"],
  },
  {
    id: "charcoal-wave-set", name: "Charcoal Wave Set", category: "sets", color: "Washed charcoal",
    image: charcoal, pieces: ["top", "pants"],
    description: "A washed charcoal hoodie and pant set. Contoured wave seams run across both pieces, with a tonal mark at the chest.",
    details: ["Matching hoodie and pants", "Contoured wave seamlines", "Tonal chest wave mark", "Washed charcoal finish"],
  },
  {
    id: "green-wave-crewneck", name: "Green Wave Crewneck", category: "tops", color: "Sage / forest",
    image: green, pieces: ["top"],
    description: "A crewneck moving from sage into forest green. A diagonal wave seam crosses the front, with the wave mark at the chest.",
    details: ["Sage-to-forest colour transition", "Diagonal wave panelling", "Ribbed neckline, cuffs and hem"],
  },
  {
    id: "wave-jacket", name: "Wave Jacket", category: "outerwear", color: "Navy / Burgundy",
    image: navyJacket, pieces: ["top"],
    description: "A collared zip jacket with curved wave panels across the body and sleeves. Available in navy and burgundy.",
    details: ["Curved wave panelling", "Pointed collar and front zip", "Elasticated cuffs"],
    variants: [
      {
        id: "navy", color: "Navy", image: navyJacket,
        gallery: [{ image: navyDetail, alt: "Navy jacket sleeve with wave panels and phrase patch" }],
        description: "A navy zip jacket with curved wave panels across the body and sleeves. Shoulder straps and metal hardware finish the design.",
        details: ["Curved wave panelling", "Pointed collar and front zip", "Shoulder straps with metal rings", "‘i am more than they see’ patch"],
      },
      {
        id: "burgundy", color: "Burgundy", image: burgundyJacket,
        gallery: [
          { image: burgundyDetail, alt: "Burgundy jacket sleeve with wave panels and phrase patch" },
          { image: burgundyCollar, alt: "Burgundy jacket collar and tonal wave label" },
          { image: burgundyZip, alt: "Burgundy jacket curved zip pocket and stitching" },
        ],
        description: "A burgundy zip jacket with layered wave panels and a textured finish. An elasticated hem and cuffs frame the silhouette.",
        details: ["Layered wave panelling", "Pointed collar and front zip", "Elasticated hem and cuffs", "Tonal leather label", "Curved zip pocket"],
      },
    ],
  },
  {
    id: "charcoal-wave-jeans", name: "Charcoal Wave Jeans", category: "bottoms", color: "Washed charcoal",
    image: waveJeans, pieces: ["pants"],
    description: "Washed charcoal jeans with long wave panels running down both legs. Curved seams carry the design from the front to the back.",
    details: ["Full-length wave panelling", "Five-pocket design", "Washed charcoal finish", "Front and back views shown"],
  },
];

export function filterPreviewProducts(category: string, search = "") {
  const query = search.trim().toLowerCase();
  return previewProducts.filter(product =>
    (category === "all" || product.category === category) &&
    `${product.name} ${product.color} ${product.variants?.map(variant => `${variant.color} ${product.name}`).join(" ") ?? ""}`.toLowerCase().includes(query)
  );
}