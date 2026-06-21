import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const { error } = await supabase.from("email_signups").insert({ email });
      if (error) throw error;
      toast.success("You're on the list.");
      setEmail("");
    } catch (err: any) {
      toast.error(err?.message ?? "Could not subscribe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="px-6 lg:px-12 py-24 md:py-32 border-t border-border/40">
      <div className="max-w-2xl mx-auto text-center">
        <h4 className="font-display text-3xl md:text-5xl font-light mb-12 tracking-tight text-foreground">
          Stay within the quiet.
        </h4>
        <form onSubmit={onSubmit} className="relative">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL ADDRESS"
            className="w-full bg-transparent border-b border-foreground/20 py-5 text-center text-[10px] tracking-[0.3em] uppercase text-foreground placeholder:text-muted-foreground focus:border-foreground outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-10 text-[10px] font-medium uppercase tracking-[0.4em] bg-foreground text-background px-12 py-5 hover:opacity-90 disabled:opacity-50 transition-all"
          >
            {loading ? "Sending…" : "Join the roster"}
          </button>
        </form>

        <div className="mt-24 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>roinamis © {new Date().getFullYear()}</span>
          <div className="flex gap-8">
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <a href="https://instagram.com/roinamis" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="mailto:hello@roinamis.com" className="hover:text-foreground transition-colors">Contact</a>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
