import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import roinamisLogo from "@/assets/roinamis-logo.png";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const { error } = await supabase
      .from("email_signups")
      .insert({ email, phone: phone || null });

    setIsSubmitting(false);

    if (error) {
      if (error.code === "23505") {
        toast({
          title: "Already signed up",
          description: "This email is already on our list.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again.",
          variant: "destructive",
        });
      }
      return;
    }

    // Fire-and-forget Zapier webhook for welcome email
    supabase.functions.invoke('zapier-webhook', {
      body: { email, phone: phone || null },
    }).catch(console.error);

    setIsSubmitted(true);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValid = validateEmail(email);

  return (
    <div className="relative z-10 w-full max-w-md mx-auto px-6">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-12"
            >
              <motion.img
                src={roinamisLogo}
                alt="roinamis"
                className="h-44 md:h-56 lg:h-64 w-auto mx-auto"
                style={{ mixBlendMode: 'multiply' }}
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 15px rgba(80,70,60,0.4))',
                    'drop-shadow(0 0 35px rgba(100,85,70,0.6))',
                    'drop-shadow(0 0 15px rgba(80,70,60,0.4))'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-tagline mb-10"
            >
              <span className="border-b border-muted-foreground/30 pb-0.5">Join for updates</span>
            </motion.p>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input-brand"
                required
              />

              <AnimatePresence>
                {showPhone && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone (optional)"
                      className="input-brand"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {!showPhone && (
                <motion.button
                  type="button"
                  onClick={() => setShowPhone(true)}
                  className="text-tagline hover:text-foreground transition-colors duration-300 py-2"
                  whileTap={{ scale: 0.98 }}
                >
                  + <span className="border-b border-muted-foreground/30 pb-0.5">Add phone for SMS</span>
                </motion.button>
              )}

              <motion.button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="btn-brand mt-6"
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Joining
                    </motion.span>
                  </span>
                ) : (
                  "Stay Close"
                )}
              </motion.button>
            </motion.form>

            {/* Privacy link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <a href="/privacy" className="link-subtle">
                Privacy Policy
              </a>
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <motion.img
                src={roinamisLogo}
                alt="roinamis"
                className="h-44 md:h-56 lg:h-64 w-auto mx-auto"
                style={{ mixBlendMode: 'multiply' }}
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 15px rgba(80,70,60,0.4))',
                    'drop-shadow(0 0 35px rgba(100,85,70,0.6))',
                    'drop-shadow(0 0 15px rgba(80,70,60,0.4))'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground text-lg tracking-wide mb-4"
            >
              You're in.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-tagline"
            >
              We'll be in touch.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SignUpForm;
