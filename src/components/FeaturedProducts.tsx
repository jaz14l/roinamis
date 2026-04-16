import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featured = products.filter((p) =>
    ["hoodie-sand", "tee-olive", "jacket-brown", "bracelet-earth"].includes(p.id)
  );

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-tagline mb-3">The Collection</p>
            <h2 className="text-foreground text-2xl md:text-3xl font-light tracking-wide">
              Drop 001
            </h2>
          </div>
          <Link to="/shop" className="link-subtle hidden sm:block">
            View All →
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link to="/shop" className="link-subtle">View All →</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
