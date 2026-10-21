import { Link, useSearchParams } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { filterPreviewProducts, previewProducts } from "@/data/preview-products";
import ProductTile from "@/components/preview/ProductTile";
import Philosophy from "@/components/preview/Philosophy";

const filters = [{ id: "all", label: "All pieces" }, { id: "outerwear", label: "Outerwear" }, { id: "tops", label: "Tops" }, { id: "bottoms", label: "Bottoms" }, { id: "sets", label: "Sets" }];

export default function PreviewShop() {
  const [params, setParams] = useSearchParams();
  const requestedCategory = params.get("category") || "all";
  const category = filters.some(filter => filter.id === requestedCategory) ? requestedCategory : "all";
  const shown = filterPreviewProducts(category);

  return (
    <main>
      <section className="store-image" aria-label="roinamis collection">
        <div className="grid h-[380px] grid-cols-1 md:h-[440px] md:grid-cols-2">
          <img src={previewProducts[0].image} alt="Washed olive wave-panel utility jacket" className="store-product-image h-full min-h-0 w-full" fetchPriority="high" />
          <img src={previewProducts[1].image} alt="Cream-to-espresso wave knit" className="store-product-image hidden h-full min-h-0 w-full md:block" />
        </div>
        <div className="store-hero-copy flex items-end justify-between gap-6 px-6 py-8 md:px-12">
          <div><p className="store-label mb-4">The first collection</p><h1 className="text-5xl leading-none md:text-7xl">roinamis</h1><p className="mt-4 text-sm">wear the story.</p></div>
          <Button asChild variant="ghost" className="store-hero-link h-auto rounded-none border-b p-0 pb-2 text-xs hover:bg-transparent"><a href="#collection">Explore <ArrowDownRight /></a></Button>
        </div>
      </section>
      <section id="collection" className="scroll-mt-44 px-5 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between gap-5"><div><p className="store-label mb-3 text-muted-foreground">Collection 01</p><h2 className="text-3xl md:text-4xl">The pieces</h2></div><span className="store-label text-muted-foreground">{shown.length.toString().padStart(2, "0")} pieces</span></div>
          <div role="group" aria-label="Filter collection" className="mt-7 flex gap-6 overflow-x-auto border-b border-border pb-4">
            {filters.map(filter => <Button key={filter.id} variant="link" aria-pressed={category === filter.id} onClick={() => setParams(filter.id === "all" ? {} : { category: filter.id }, { preventScrollReset: true })} className={`store-label h-auto rounded-none p-0 ${category === filter.id ? "underline underline-offset-8" : "text-muted-foreground"}`}>{filter.label}</Button>)}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">{shown.map(product => <ProductTile key={product.id} product={product} />)}</div>
        </div>
      </section>
      <section className="border-t border-border px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 sm:flex-row sm:items-center"><div><p className="store-label mb-3 text-muted-foreground">First release</p><h2 className="text-2xl md:text-3xl">What’s taking shape.</h2></div><Button asChild variant="link" className="h-auto self-start rounded-none border-b border-foreground p-0 pb-2 sm:self-auto"><Link to="/">Join for updates <ArrowUpRight /></Link></Button></div>
      </section>
      <Philosophy />
    </main>
  );
}