import { motion } from "framer-motion";

const BrandStatement = () => {
  return (
    <section className="py-24 md:py-36 border-y border-border/30">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-tagline mb-8"
        >
          El Roi — the God who sees you
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-foreground text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide"
        >
          Not church merch. Not hype. Just culture rooted in something deeper. Every thread, every print, every name carries meaning — if you know, you know.
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-sm tracking-wide mt-10"
        >
          Heritage. Identity. Purpose.
        </motion.p>
      </div>
    </section>
  );
};

export default BrandStatement;
