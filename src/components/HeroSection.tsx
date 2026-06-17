import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RoinamisMark from "./RoinamisMark";
import hoodieSand from "@/assets/products/hoodie-sand.jpg";
import jacketBrown from "@/assets/products/jacket-brown.jpg";

const HeroSection = () => {
  const panels = [
    {
      label: "The Hoodie",
      sub: "Drop 001",
      cta: "Shop hoodies",
      to: "/shop?category=hoodie",
      image: hoodieSand,
    },
    {
      label: "The Jacket",
      sub: "Statement piece",
      cta: "Shop jackets",
      to: "/shop?category=jacket",
      image: jacketBrown,
    },
  ];

  return (
    <>
      {/* Wordmark hero — the logo IS the statement */}
      <section className="pt-[5.25rem] md:pt-[5.5rem]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <RoinamisMark className="h-28 md:h-44 w-auto" strokeWidth={2} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-tagline mt-10 md:mt-14"
          >
            El Roi — the God who sees you
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="font-display font-light tracking-[0.02em] text-foreground text-3xl md:text-5xl lg:text-6xl leading-[1.05] mt-6 max-w-3xl mx-auto"
          >
            A horizon, not a hype cycle.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-6"
          >
            Five arcs. One sun. Heritage layered in tonal earth — built for the
            in-between.
          </motion.p>

          {/* Arc gradient hairline divider — a literal echo of the mark */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 1.1, ease: "easeOut" }}
            style={{ background: "var(--gradient-arc)" }}
            className="h-px w-40 mx-auto mt-12 origin-center"
          />
        </div>
      </section>

      {/* Editorial split */}
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
