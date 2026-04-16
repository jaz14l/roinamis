import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lifestyle.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="roinamis — wear the story"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-tagline mb-4"
        >
          Drop 001
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-foreground text-3xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight mb-6 max-w-2xl"
        >
          You were seen before you were ready.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground text-sm md:text-base tracking-wide mb-10 max-w-md"
        >
          Faith-rooted streetwear for those navigating identity, ambition, and purpose. Every piece carries a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/shop" className="btn-brand text-center max-w-xs">
            Shop the Drop
          </Link>
          <Link
            to="/about"
            className="text-tagline hover:text-foreground transition-colors duration-300 py-3.5 px-6 text-center"
          >
            Our Story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
