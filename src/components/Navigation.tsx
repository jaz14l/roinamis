import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import RoinamisMark from "./RoinamisMark";
import RoinamisWordmark from "./RoinamisWordmark";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const leftLinks = [
    { to: "/shop", label: "Shop All" },
    { to: "/shop?category=hoodie", label: "Hoodies" },
    { to: "/shop?category=jacket", label: "Jackets" },
  ];

  const rightLinks = [
    { to: "/shop?category=accessory", label: "Accessories" },
    { to: "/signup", label: "Sign In" },
    { to: "/signup", label: "Join" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  const linkClass = (to: string) =>
    `text-[0.6875rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
      location.pathname + location.search === to || location.pathname === to
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility strip */}
      <div className="bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-7 flex items-center justify-center">
          <p className="text-[0.625rem] tracking-[0.2em] uppercase">
            Drop 001 — free shipping over $150
          </p>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/85 backdrop-blur-md border-b border-border/40">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          {/* Desktop layout: 3-column with centered wordmark */}
          <div className="hidden md:grid grid-cols-3 items-center h-14">
            <div className="flex items-center gap-8">
              {leftLinks.map((link) => (
                <Link key={link.label} to={link.to} className={linkClass(link.to)}>
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              to="/"
              className="justify-self-center flex flex-col items-center gap-1.5 text-foreground"
            >
              <RoinamisMark className="h-6 w-auto" />
              <RoinamisWordmark className="h-3 w-auto" />
            </Link>


            <div className="flex items-center gap-8 justify-end">
              {rightLinks.map((link) => (
                <Link key={link.label} to={link.to} className={linkClass(link.to)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex items-center justify-between h-14">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
              aria-label="Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <Link
              to="/"
              className="flex flex-col items-center gap-1 text-foreground"
            >
              <RoinamisMark className="h-5 w-auto" />
              <RoinamisWordmark className="h-2.5 w-auto" />
            </Link>


            <Link to="/signup" className="text-[0.6875rem] tracking-[0.18em] uppercase text-muted-foreground">
              Join
            </Link>
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
              className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {allLinks.map((link, i) => (
                  <Link
                    key={`${link.label}-${i}`}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;
