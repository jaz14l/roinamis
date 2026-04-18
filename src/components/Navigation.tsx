import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/roinamis-logo-transparent.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "Story" },
    { to: "/signup", label: "Join" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-foreground font-display font-medium tracking-[0.2em] text-base" aria-label="roinamis home">
            <img src={logo} alt="roinamis" className="h-7 w-auto" />
            <span>roinamis</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                    location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
