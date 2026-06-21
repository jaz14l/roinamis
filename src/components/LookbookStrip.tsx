import { motion } from "framer-motion";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import bgAtmosphere from "@/assets/bg-atmosphere.jpg";
import hoodieClay from "@/assets/products/hoodie-clay.jpg";
import jacketBrown from "@/assets/products/jacket-brown.jpg";
import teeOlive from "@/assets/products/tee-olive.jpg";
import hoodieOlive from "@/assets/products/hoodie-olive.jpg";

const frames = [
  { src: bgAtmosphere, w: "w-64", alt: "Atmosphere" },
  { src: heroLifestyle, w: "w-96", alt: "Campaign" },
  { src: hoodieClay, w: "w-64", alt: "Clay hoodie detail" },
  { src: jacketBrown, w: "w-96", alt: "Adinkra jacket" },
  { src: teeOlive, w: "w-64", alt: "Heritage tee" },
  { src: hoodieOlive, w: "w-80", alt: "Olive hoodie" },
];

const LookbookStrip = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex items-end justify-between gap-6">
        <h2 className="font-display text-3xl md:text-5xl font-extralight tracking-tight text-foreground">
          Lookbook 001
        </h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll →
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex gap-4 md:gap-6 px-6 lg:px-12 overflow-x-auto no-scrollbar"
      >
        {frames.map((f, i) => (
          <div
            key={i}
            className={`${f.w} h-80 md:h-96 shrink-0 bg-secondary overflow-hidden`}
          >
            <img
              src={f.src}
              alt={f.alt}
              loading="lazy"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms]"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default LookbookStrip;
