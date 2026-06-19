import sunburst from "@/assets/symbol_15_sunburst.png";
import spiral from "@/assets/symbol_11_spiral.png";
import wave from "@/assets/symbol_06_wave.png";

const finalists = [
  { name: "Sunburst", src: sunburst, id: "15" },
  { name: "Spiral", src: spiral, id: "11" },
  { name: "Wave", src: wave, id: "06" },
];

const LogoFinalists = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-16 text-center">
          <p className="text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            roinamis · symbol finalists
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight">
            Three marks, one identity
          </h1>
        </header>

        {/* Large comparison */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {finalists.map((f) => (
            <div key={f.id} className="flex flex-col items-center gap-6">
              <div className="aspect-square w-full bg-card border border-border/40 flex items-center justify-center p-12">
                <img src={f.src} alt={f.name} className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <p className="text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                  Option {f.id}
                </p>
                <h2 className="font-display text-2xl tracking-tight">{f.name}</h2>
              </div>
            </div>
          ))}
        </section>

        {/* Scale test — small (favicon / nav size) */}
        <section className="mb-24">
          <h3 className="text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
            At nav / favicon scale
          </h3>
          <div className="flex items-center justify-center gap-16 py-12 bg-card border border-border/40">
            {finalists.map((f) => (
              <div key={f.id} className="flex flex-col items-center gap-4">
                <img src={f.src} alt={f.name} className="h-8 w-auto" />
                <img src={f.src} alt={f.name} className="h-5 w-auto opacity-80" />
                <span className="text-[0.625rem] tracking-[0.2em] uppercase text-muted-foreground">
                  {f.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Paired with wordmark */}
        <section className="mb-24">
          <h3 className="text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
            Paired with wordmark
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finalists.map((f) => (
              <div
                key={f.id}
                className="bg-card border border-border/40 aspect-[4/3] flex flex-col items-center justify-center gap-4"
              >
                <img src={f.src} alt={f.name} className="h-16 w-auto" />
                <span className="font-display font-light tracking-[0.4em] text-sm">
                  roinamis
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Inverted */}
        <section>
          <h3 className="text-[0.625rem] tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
            On dark surface
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finalists.map((f) => (
              <div
                key={f.id}
                className="bg-foreground aspect-square flex items-center justify-center p-16"
              >
                <img
                  src={f.src}
                  alt={f.name}
                  className="w-full h-full object-contain invert"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default LogoFinalists;
