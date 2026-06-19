import { Link } from "react-router-dom";
import RoinamisMark from "./RoinamisMark";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex flex-col items-center gap-3 text-foreground">
            <RoinamisMark className="h-10 w-auto" />
            <span className="font-display font-light tracking-[0.4em] text-lg md:text-xl">
              roinamis
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-foreground mb-4">Shop</p>
            <div className="flex flex-col gap-3">
              <Link to="/shop" className="link-subtle">All Products</Link>
              <Link to="/shop?category=hoodie" className="link-subtle">Hoodies</Link>
              <Link to="/shop?category=jacket" className="link-subtle">Jackets</Link>
              <Link to="/shop?category=accessory" className="link-subtle">Accessories</Link>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-foreground mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com/roinamis" target="_blank" rel="noopener noreferrer" className="link-subtle">Instagram</a>
              <a href="https://tiktok.com/@roinamis" target="_blank" rel="noopener noreferrer" className="link-subtle">TikTok</a>
              <a href="mailto:hello@roinamis.com" className="link-subtle">Contact</a>
              <Link to="/privacy" className="link-subtle">Privacy</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-[0.625rem] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} roinamis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
