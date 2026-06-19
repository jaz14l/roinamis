import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RoinamisMark from "./RoinamisMark";
import RoinamisWordmark from "./RoinamisWordmark";
import hoodieSand from "@/assets/products/hoodie-sand.jpg";
import jacketBrown from "@/assets/products/jacket-brown.jpg";

const HeroSection = () => {
  const panels = [
    {
      label: "Hoodies",
      sub: "Drop 001",
      cta: "Shop hoodies",
      to: "/shop?category=hoodie",
      image: hoodieSand,
    },
    {
      label: "Jackets",
      sub: "Drop 001",
      cta: "Shop jackets",
      to: "/shop?category=jacket",
      image: jacketBrown,
    },
  ];

  return (
    <>
      {/* Compact brand hero — mark + wordmark, then straight to product */}
      <section className="pt-[5.25rem] md:pt-[5.5rem]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <RoinamisMark className="h-16 md:h-24 w-auto" />
            <RoinamisWordmark className="h-10 md:h-16 w-auto" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[0.6875rem] tracking-[0.25em] uppercase text-muted-foreground mt-8"
          >
            Drop 001 — Now available
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <Link
              to="/shop"
              className="inline-block bg-foreground text-background text-[0.6875rem] tracking-[0.22em] uppercase px-7 py-3 hover:opacity-90 transition-opacity"
            >
              Shop the drop
            </Link>
            <Link
              to="/shop?category=hoodie"
              className="text-[0.6875rem] tracking-[0.22em] uppercase text-foreground border-b border-foreground/60 pb-1"
            >
              Hoodies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category split — straight into product */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="relative group overflow-hidden bg-background"
            >
              <Link to={panel.to} className="block">
                <div className="relative aspect-[3/4] md:aspect-auto md:h-[80vh] overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.label}
                    width={1200}
                    height={1600}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-center">
                  <p className="text-[0.625rem] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                    {panel.sub}
                  </p>
                  <h2 className="text-foreground text-2xl md:text-3xl font-display font-light tracking-[0.05em] mb-5">
                    {panel.label}
                  </h2>
                  <span className="inline-block text-[0.6875rem] tracking-[0.2em] uppercase text-foreground border-b border-foreground/60 pb-1">
                    {panel.cta}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
