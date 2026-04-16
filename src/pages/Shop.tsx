import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainBackground from "@/components/GrainBackground";
import ProductCard from "@/components/ProductCard";
import { products, type Product } from "@/data/products";

type FilterCategory = "all" | Product["category"];

const Shop = () => {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filters: { value: FilterCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "hoodie", label: "Hoodies" },
    { value: "tee", label: "Tees" },
    { value: "jacket", label: "Jackets" },
    { value: "accessory", label: "Accessories" },
  ];

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <main className="relative min-h-screen">
      <GrainBackground />
      <Navigation />

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-tagline mb-3">Drop 001</p>
          <h1 className="text-foreground text-3xl md:text-4xl font-light tracking-wide">
            The Collection
          </h1>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-6 mb-12 overflow-x-auto pb-2"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`text-xs tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 pb-1 ${
                filter === f.value
                  ? "text-foreground border-b border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Shop;
