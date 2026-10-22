import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { previewProducts } from "@/data/preview-products";
import ProductTile from "@/components/preview/ProductTile";

export default function PreviewProduct() {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const legacyColour = id === "navy-wave-jacket" ? "navy" : id === "burgundy-wave-jacket" ? "burgundy" : undefined;
  const product = previewProducts.find(piece => piece.id === (legacyColour ? "wave-jacket" : id));
  if (!product) return <main className="px-6 py-24 text-center"><h1 className="text-3xl">Piece not found.</h1><Button asChild variant="link" className="mt-6"><Link to="/preview-shop">Back to collection <ArrowLeft /></Link></Button></main>;
  const variant = product.variants?.find(colour => colour.id === (params.get("colour") ?? legacyColour)) ?? product.variants?.[0];
  const displayed = variant ?? product;
  return (
    <main className="mx-auto max-w-[1536px] px-5 pb-20 pt-8 md:px-12 md:pt-10">
      <Link to="/preview-shop#collection" className="store-label mb-8 inline-flex items-center gap-2"><ArrowLeft size={14} /> Collection / {product.name}</Link>
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div className="space-y-5">
          <div className="store-image aspect-[4/5] overflow-hidden"><img src={displayed.image} alt={`${product.name}, ${displayed.color}`} className="store-product-image h-full w-full" /></div>
          {displayed.gallery && <div className="grid grid-cols-2 gap-5">{displayed.gallery.map(photo => <div key={photo.image} className="store-image aspect-[4/5] overflow-hidden"><img src={photo.image} alt={photo.alt} loading="lazy" className="store-product-image h-full w-full" /></div>)}</div>}
        </div>
        <div className="self-center py-6 md:max-w-md">
          <p className="store-label mb-5 text-muted-foreground">Collection 01</p><h1 className="text-3xl leading-tight md:text-4xl">{product.name}</h1><p className="mt-4 text-sm text-muted-foreground">{displayed.color}</p>
          {product.variants && <div role="group" aria-label="Jacket colour" className="mt-5 flex gap-3">{product.variants.map(colour => <Button key={colour.id} variant="outline" aria-label={`Select ${colour.color}`} aria-pressed={variant?.id === colour.id} title={colour.color} onClick={() => setParams({ colour: colour.id }, { preventScrollReset: true })} className={`h-auto rounded-none p-1 ${variant?.id === colour.id ? "border-foreground ring-1 ring-ring" : "border-border"}`}><img src={colour.image} alt={colour.color} className="store-product-image h-16 w-16" /></Button>)}</div>}
          <p className="mt-9 text-base leading-relaxed">{displayed.description}</p>
          <div className="my-9 border-y border-border py-5"><p className="store-label">Coming soon</p></div>
          <Button asChild className="w-full rounded-none"><Link to="/">Join for release updates <ArrowUpRight /></Link></Button>
          <details className="mt-9 border-b border-border pb-5" open><summary className="store-label cursor-pointer">Design details</summary><ul className="mt-5 space-y-3 text-sm text-muted-foreground">{displayed.details.map(detail => <li key={detail}>{detail}</li>)}</ul></details>
        </div>
      </div>
      <section className="mt-20 border-t border-border pt-12"><h2 className="mb-8 text-2xl">From the collection</h2><div className="grid grid-cols-2 gap-5 md:grid-cols-3">{previewProducts.filter(piece => piece.id !== product.id).map(piece => <ProductTile key={piece.id} product={piece} />)}</div></section>
    </main>
  );
}