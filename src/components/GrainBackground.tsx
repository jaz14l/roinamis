import { motion } from "framer-motion";

const GrainBackground = () => {
  return (
    <>
      {/* Animated gradient background */}
      <motion.div
        className="fixed inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, hsl(32 12% 12%) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 80%, hsl(28 10% 10%) 0%, transparent 50%),
            radial-gradient(ellipse 70% 70% at 20% 90%, hsl(35 8% 8%) 0%, transparent 40%),
            hsl(30 10% 6%)
          `,
        }}
      />

      {/* Subtle light shift animation */}
      <motion.div
        className="fixed inset-0 -z-10 opacity-30"
        animate={{
          background: [
            "radial-gradient(ellipse 100% 100% at 30% 30%, hsl(35 15% 15% / 0.3) 0%, transparent 60%)",
            "radial-gradient(ellipse 100% 100% at 70% 60%, hsl(30 12% 14% / 0.3) 0%, transparent 60%)",
            "radial-gradient(ellipse 100% 100% at 40% 70%, hsl(32 10% 12% / 0.3) 0%, transparent 60%)",
            "radial-gradient(ellipse 100% 100% at 30% 30%, hsl(35 15% 15% / 0.3) 0%, transparent 60%)",
          ],
        }}
        transition={{
          duration: 20,
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
