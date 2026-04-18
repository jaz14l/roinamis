import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    <section className="pt-[5.25rem] md:pt-[5.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: i * 0.15 }}
            className="relative group overflow-hidden bg-background"
          >
            <Link to={panel.to} className="block">
              <div className="relative aspect-[3/4] md:aspect-auto md:h-[calc(100vh-5.5rem)] overflow-hidden">
                <img
                  src={panel.image}
                  alt={panel.label}
                  width={1200}
                  height={1600}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
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
  );
};

export default HeroSection;
