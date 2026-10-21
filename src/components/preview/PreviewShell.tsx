import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingBag, X, ArrowUpRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { filterPreviewProducts } from "@/data/preview-products";
import wave from "@/assets/roinamis-wave-line.png";

export default function PreviewShell() {
  const [menu, setMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenu(false);
    if (!location.hash) window.scrollTo(0, 0);
    else requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
  }, [location.pathname, location.hash]);

  const navLinks = [
    { label: "Collection", to: "/preview-shop#collection" },
    { label: "Outerwear", to: "/preview-shop?category=outerwear#collection" },
    { label: "Tops", to: "/preview-shop?category=tops#collection" },
    { label: "Philosophy", to: "/preview-shop#philosophy" },
  ];

  return (
    <div className="preview-store min-h-screen">
      <header className="sticky top-0 z-30 bg-background">
        <div className="bg-primary px-4 py-2 text-center text-primary-foreground"><p className="store-label normal-case">roinamis. wear the story.</p></div>
        <div className="relative flex h-20 items-center justify-between border-b border-border px-5 md:h-24 md:px-12">
          <div className="flex w-20 items-center gap-1 md:w-32">
            <Button variant="ghost" size="icon" aria-label={menu ? "Close menu" : "Open menu"} title="Menu" onClick={() => setMenu(!menu)} className="md:hidden">{menu ? <X /> : <Menu />}</Button>
            <span className="store-label hidden text-muted-foreground md:block">Preview Shop</span>
          </div>
          <Link to="/preview-shop" aria-label="roinamis Preview Shop" className="store-wordmark absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl">roinamis</Link>
          <div className="flex items-center gap-1 md:gap-3">
            <Button variant="ghost" size="icon" aria-label="Search collection" title="Search" onClick={() => setSearchOpen(true)}><Search /></Button>
            <Button variant="ghost" size="icon" aria-label="Shopping bag" title="Shopping bag" onClick={() => setBagOpen(true)}><ShoppingBag /></Button>
          </div>
        </div>
        <nav aria-label="Store navigation" className="hidden h-12 items-center justify-center gap-12 border-b border-border md:flex">
          {navLinks.map(link => <Button key={link.label} asChild variant="link" className="store-label h-auto p-0"><Link to={link.to}>{link.label}</Link></Button>)}
        </nav>
        {menu && <nav aria-label="Mobile store navigation" className="absolute w-full border-b border-border bg-background p-6 md:hidden"><div className="flex flex-col gap-5">{navLinks.map(link => <Link key={link.label} className="store-label" to={link.to} onClick={() => setMenu(false)}>{link.label}</Link>)}</div></nav>}
      </header>
      <Outlet />
      <footer className="border-t border-border px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
            <div><img src={wave} alt="roinamis wave logo" className="mb-6 h-auto w-20" /><p className="store-wordmark text-2xl">roinamis</p><p className="mt-3 text-sm">wear the story.</p></div>
            <div><p className="store-label mb-5 text-muted-foreground">Stay in touch</p><Button asChild variant="link" className="h-auto p-0"><Link to="/">Join the email / SMS list <ArrowUpRight /></Link></Button><a className="mt-4 block text-sm" href="mailto:roinamis@gmail.com">roinamis@gmail.com</a></div>
            <div><p className="store-label mb-5 text-muted-foreground">Follow</p><a className="flex items-center gap-2 text-sm" href="https://www.instagram.com/roinamis/" target="_blank" rel="noreferrer"><Instagram size={14} />Instagram</a><a className="mt-4 block text-sm" href="https://www.tiktok.com/@roinamis" target="_blank" rel="noreferrer">TikTok</a></div>
          </div>
          <div className="store-label mt-14 flex justify-between border-t border-border pt-6 text-muted-foreground"><span>© {new Date().getFullYear()} roinamis</span><Link to="/privacy">Privacy</Link></div>
        </div>
      </footer>
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="preview-store max-w-xl">
          <DialogTitle>Search collection</DialogTitle><DialogDescription className="sr-only">Find a piece by name or colour.</DialogDescription>
          <input type="search" autoFocus value={query} onChange={event => setQuery(event.target.value)} aria-label="Search pieces" placeholder="Search pieces" className="w-full border-b border-border bg-background py-3 text-base outline-none focus:border-foreground" />
          <div className="max-h-[55svh] overflow-y-auto">
            {filterPreviewProducts("all", query).map(product => <Link key={product.id} to={`/preview-shop/product/${product.id}`} onClick={() => setSearchOpen(false)} className="flex items-center gap-4 border-b border-border py-4"><img src={product.image} alt="" className="store-product-image h-20 w-16" /><div><p className="text-sm">{product.name}</p><p className="mt-1 text-xs text-muted-foreground">{product.color}</p></div><ArrowUpRight className="ml-auto" size={16} /></Link>)}
            {filterPreviewProducts("all", query).length === 0 && <p className="py-8 text-sm text-muted-foreground">No pieces found.</p>}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={bagOpen} onOpenChange={setBagOpen}>
        <DialogContent className="preview-store max-w-md">
          <DialogTitle>Your bag</DialogTitle><DialogDescription>Purchases will open with the first release.</DialogDescription>
          <ShoppingBag className="mx-auto my-6" size={36} strokeWidth={1} />
          <Button onClick={() => { setBagOpen(false); navigate("/"); }}>Join for release updates <ArrowUpRight /></Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}