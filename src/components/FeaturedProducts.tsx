import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products, type Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
  offset?: boolean;
}

const EditorialProductCard = ({ product, index = 0, offset = false }: ProductCardProps) => {
  const primary = product.colorways?.[0];
  if (!primary) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={offset ? "md:translate-y-16" : ""}
    >
      <Link to={`/product/${product.id}`} className="group block cursor-pointer">
        <div className="relative mb-6 overflow-hidden bg-secondary">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={primary.image}
              alt={`${product.name} in ${primary.name}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        </div>
        <div className="flex justify-between items-baseline">
          <h3 className="text-xs uppercase tracking-[0.18em] text-foreground font-medium">
            {product.name} / {primary.name}
          </h3>
          <span className="text-xs font-light text-foreground">${product.price}</span>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  const featured: Product[] = products.filter((p) =>
    ["el-roi-hoodie", "heritage-tee", "adinkra-jacket"].includes(p.id)
  );

  return (
    <section className="px-6 lg:px-12 py-24 md:py-40 bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-24 gap-6">
          <h2 className="font-display text-4xl md:text-6xl font-extralight tracking-tight text-foreground">
            Seasonal Essentials
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Est. MMXXIV
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-20 md:gap-y-24">
          {featured.map((product, i) => (
            <EditorialProductCard
              key={product.id}
              product={product}
              index={i}
              offset={i === 1}
            />
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            to="/shop"
            className="inline-block text-[10px] uppercase tracking-[0.3em] border-b border-foreground/30 pb-1 text-foreground hover:border-foreground transition-colors"
          >
            View the full collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
