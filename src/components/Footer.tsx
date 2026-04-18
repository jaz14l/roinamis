import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <Link to="/" className="text-foreground font-display font-light tracking-[0.4em] text-2xl md:text-3xl">
            roinamis
          </Link>
          <p className="text-muted-foreground text-xs leading-relaxed tracking-[0.05em] max-w-md mx-auto mt-6">
            El Roi — the God who sees you. Faith-rooted streetwear for those navigating identity, ambition, and purpose.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
          <div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-foreground mb-4">Navigate</p>
            <div className="flex flex-col gap-3">
              <Link to="/shop" className="link-subtle">Shop</Link>
              <Link to="/about" className="link-subtle">Our Story</Link>
              <Link to="/signup" className="link-subtle">Join the List</Link>
              <Link to="/privacy" className="link-subtle">Privacy</Link>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-foreground mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="https://instagram.com/roinamis" target="_blank" rel="noopener noreferrer" className="link-subtle">Instagram</a>
              <a href="https://tiktok.com/@roinamis" target="_blank" rel="noopener noreferrer" className="link-subtle">TikTok</a>
              <a href="mailto:hello@roinamis.com" className="link-subtle">hello@roinamis.com</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-[0.625rem] tracking-[0.15em]">
            © {new Date().getFullYear()} roinamis. wear the story.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
