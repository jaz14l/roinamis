import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainBackground from "@/components/GrainBackground";
import { getProductById, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [colorIndex, setColorIndex] = useState(0);

  if (!product) {
    return (
      <main className="relative min-h-screen">
        <GrainBackground />
        <Navigation />
        <div className="pt-32 text-center">
          <p className="text-foreground text-lg">Product not found.</p>
          <Link to="/shop" className="link-subtle mt-4 inline-block">
            Back to Shop →
          </Link>
        </div>
      </main>
    );
  }

  const selectedColor = product.colorways[colorIndex];

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="relative min-h-screen">
      <GrainBackground />
      <Navigation />

      <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 md:px-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase">
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[3/4] overflow-hidden bg-secondary relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedColor.image}
                  src={selectedColor.image}
                  alt={`${product.name} in ${selectedColor.name}`}
                  width={800}
                  height={1024}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-tagline mb-3">{selectedColor.name}</p>
            <h1 className="text-foreground text-2xl md:text-3xl font-light tracking-wide mb-2">
              {product.name}
            </h1>
            <p className="text-foreground text-lg mb-6">${product.price}</p>

            <p className="text-muted-foreground text-sm leading-relaxed tracking-wide mb-8">
              {product.description}
            </p>

            {/* Colorway selector */}
            {product.colorways.length > 1 && (
              <div className="mb-8">
                <p className="text-xs tracking-[0.15em] uppercase text-foreground mb-3">
                  Colorway — <span className="text-muted-foreground">{selectedColor.name}</span>
                </p>
                <div className="flex gap-3">
                  {product.colorways.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setColorIndex(i)}
                      aria-label={`Select ${c.name}`}
                      aria-pressed={colorIndex === i}
                      className={`relative w-10 h-10 rounded-full transition-all duration-300 ${
                        colorIndex === i
                          ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                          : "ring-1 ring-border hover:ring-foreground/50"
                      }`}
                      style={{ backgroundColor: c.swatch }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size selector */}
            {product.sizes && (
              <div className="mb-8">
                <p className="text-xs tracking-[0.15em] uppercase text-foreground mb-3">Size</p>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border text-xs tracking-wider transition-colors duration-300 ${
                        selectedSize === size
                          ? "border-foreground text-foreground bg-secondary"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart (placeholder) */}
            <button
              disabled={product.soldOut || (product.sizes && !selectedSize)}
              className="btn-brand max-w-sm"
            >
              {product.soldOut ? "Sold Out" : "Coming Soon"}
            </button>

            <p className="text-muted-foreground text-[0.625rem] tracking-[0.1em] uppercase mt-4">
              Connect Shopify to enable purchases
            </p>

            {/* Details */}
            <div className="mt-12 border-t border-border/30 pt-8">
              <p className="text-xs tracking-[0.15em] uppercase text-foreground mb-4">Details</p>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="text-muted-foreground text-sm tracking-wide flex items-start gap-2">
                    <span className="text-stone mt-1">·</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <p className="text-tagline mb-8">You might also like</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default ProductDetail;
