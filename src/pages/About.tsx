import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GrainBackground from "@/components/GrainBackground";
import heroImage from "@/assets/hero-lifestyle.jpg";

const About = () => {
  return (
    <main className="relative min-h-screen">
      <GrainBackground />
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="roinamis story"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-12 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-tagline mb-3"
          >
            The Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-foreground text-3xl md:text-5xl font-light tracking-wide"
          >
            El Roi — the God who sees you
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 md:px-10 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground text-lg md:text-xl font-light leading-relaxed tracking-wide">
              roinamis was born from a space most people don't talk about — the in-between. Between faith and the real world. Between who you are and who you're becoming. Between being seen and feeling invisible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
              The name comes from El Roi — "the God who sees me." It's a quiet declaration. Not loud. Not performative. Just a reminder that you were known before you arrived, and that your story matters even when nobody's watching.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
              We design for the person navigating it all — campus, culture, ambition, spirituality — without needing to explain themselves. Our pieces draw from Ghanaian textile heritage, earth-tone palettes, and heavyweight construction because the quality has to match the message. If the hoodie feels cheap, the story falls apart.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-2 border-border pl-6"
          >
            <p className="text-foreground text-lg font-light tracking-wide italic">
              "Not church merch. Not hype. Just culture rooted in something deeper."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
              Every tag, every print, every caption carries meaning — for those who know. The Adinkra symbols reference wisdom passed down through generations. The oversized silhouettes honor comfort and presence. The earth tones ground everything in something real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8"
          >
            <Link to="/shop" className="btn-brand text-center inline-block max-w-xs">
              Shop Drop 001
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
