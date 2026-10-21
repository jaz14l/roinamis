import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { PreviewProduct } from "@/data/preview-products";

export default function ProductTile({ product }: { product: PreviewProduct }) {
  return (
    <Link to={`/preview-shop/product/${product.id}`} className="group block">
      <div className="store-image aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={product.name} loading="lazy" className="store-product-image h-full w-full object-contain" />
      </div>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div><h3 className="text-sm">{product.name}</h3><p className="mt-1 text-xs text-muted-foreground">{product.color}</p></div>
        <ArrowUpRight size={16} aria-hidden="true" className="shrink-0" />
      </div>
      <p className="store-label mt-3 text-muted-foreground">Coming soon</p>
    </Link>
  );
}