import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const primary = product.colorways?.[0];
  if (!primary) return null;
  const colorLabel =
    product.colorways.length > 1
      ? `${product.colorways.length} colors`
      : primary.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="aspect-[3/4] overflow-hidden bg-secondary mb-4">
          <img
            src={primary.image}
            alt={`${product.name} in ${primary.name}`}
            loading="lazy"
            width={800}
            height={1024}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <p className="text-foreground text-sm tracking-wide">{product.name}</p>
            <p className="text-foreground text-sm">${product.price}</p>
          </div>
          <p className="text-muted-foreground text-xs tracking-[0.1em] uppercase">
            {colorLabel}
            {product.soldOut && <span className="ml-2 text-destructive">Sold out</span>}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
