import { motion } from "framer-motion";
import bgAtmosphere from "@/assets/bg-atmosphere.jpg";

const GrainBackground = () => {
  return (
    <>
      {/* Base dark layer */}
      <div className="fixed inset-0 -z-30 bg-background" />

      {/* Atmospheric background image with fade */}
      <motion.div
        className="fixed inset-0 -z-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${bgAtmosphere})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Dark vignette overlay to fade edges */}
      <div
        className="fixed inset-0 -z-24"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 40%, transparent 0%, hsl(30 10% 6% / 0.7) 70%, hsl(30 10% 6%) 100%),
            linear-gradient(to top, hsl(30 10% 6%) 0%, transparent 40%),
            linear-gradient(to bottom, hsl(30 10% 6% / 0.6) 0%, transparent 30%)
          `,
        }}
      />

      {/* Subtle animated gradient overlay */}
      <motion.div
        className="fixed inset-0 -z-20 opacity-40"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 40% 50%, hsl(35 15% 12% / 0.4) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 60% 40%, hsl(30 12% 10% / 0.4) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 50% 55%, hsl(32 10% 11% / 0.4) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 40% 50%, hsl(35 15% 12% / 0.4) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Film grain overlay */}
      <div className="grain-overlay animate-grain" />
    </>
  );
};

export default GrainBackground;
