import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
    supabase.functions.invoke("zapier-webhook", {
      body: { email, phone: phone || null },
    }).catch(console.error);

    setIsSubmitted(true);
  };

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValid = validateEmail(email);

  return (
    <div className="relative z-10 mx-auto w-full max-w-sm">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p
              id="signup-intro"
              className="mb-8 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Join the list
            </p>


            <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="signup-intro">
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-brand"
                  required
                />
              </div>

              <AnimatePresence initial={false}>
                {showPhone && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-left"
                  >
                    <label
                      htmlFor="phone"
                      className="mb-2 block pt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 000 0000"
                      className="input-brand"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {!showPhone && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowPhone(true)}
                    className="link-subtle inline-flex min-h-[44px] items-center border-b border-border uppercase tracking-[0.22em] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Add phone for SMS
                  </button>
                </div>
              )}


              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="btn-brand !mt-8"
              >
                {isSubmitting ? "Joining" : "Stay Close"}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            role="status"
            aria-live="polite"
          >
            <p className="text-lg tracking-wide text-foreground">You're in.</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              We'll be in touch before the first drop
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SignUpForm;
