import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RoinamisMark from "./RoinamisMark";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center px-6 lg:px-12 pt-32 md:pt-36 pb-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-8 items-center">
        {/* Left — editorial typography */}
        <div className="col-span-12 lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <RoinamisMark className="h-7 w-auto opacity-80" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-muted-foreground">
              Vol. 01 — Drop 001
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-[18vw] lg:text-[10rem] font-light leading-[0.82] tracking-tighter mb-12 text-foreground lowercase"
          >
            roina<br />
            <span className="ml-10 lg:ml-32 italic font-extralight">mis.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xs lg:ml-auto lg:mr-24"
          >
            <p className="text-sm leading-relaxed mb-8 text-muted-foreground">
              Heavyweight essentials in considered earth tones. Built for a permanent wardrobe.
            </p>
            <Link to="/shop" className="group inline-flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-foreground">
                Discover the collection
              </span>
              <span className="h-px w-8 bg-foreground transition-all duration-500 group-hover:w-16" />
            </Link>
          </motion.div>
        </div>

        {/* Right — editorial image with overlay card */}
        <div className="col-span-12 lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-full aspect-[4/5] overflow-hidden bg-secondary"
          >
            <img
              src={heroLifestyle}
              alt="roinamis Drop 001"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms]"
              loading="eager"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 border border-foreground/10 bg-background p-5 lg:p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed text-foreground">
              Drop 001<br />Limited Release
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
