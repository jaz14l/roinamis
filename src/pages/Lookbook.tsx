import { Link } from "react-router-dom";
import GrainBackground from "@/components/GrainBackground";
import RoinamisMark from "@/components/RoinamisMark";
import { groups, references, conceptCount } from "@/data/lookbook";

const Lookbook = () => {
  return (
    <main className="relative min-h-screen">
      <GrainBackground />

      <header className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-10 pb-16">
        <div className="flex items-center justify-between">
          <Link to="/" className="nav-link" aria-label="Back to roinamis">
            roinamis
          </Link>
          <RoinamisMark className="h-8 w-8 object-contain mix-blend-multiply" />
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="text-tagline">Concept book, vol. 01</p>
          <h1 className="font-display text-4xl md:text-6xl font-extralight tracking-tight text-foreground mt-4">
            Wear the story
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-6 max-w-xl">
            {conceptCount} apparel concepts and campaign directions across oversized tees,
            sleeveless cuts, washed finishes and placement studies. Cream, stone, espresso,
            washed grey and faded black throughout. Every image is saved in the project files
            and grouped by category.
          </p>
        </div>
      </header>

      <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-20">
        <h2 className="text-tagline mb-6">Reference boards</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {references.map((r) => (
            <figure key={r.label} className="bg-secondary overflow-hidden">
              <img
                src={r.src}
                alt={r.alt}
                loading="lazy"
                className="w-full h-56 md:h-64 object-cover"
              />
              <figcaption className="px-4 py-3 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                {r.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {groups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-24 md:pb-32"
        >
          <div className="border-t border-border pt-8 mb-10 max-w-2xl">
            <h2 className="font-display text-2xl md:text-4xl font-extralight tracking-tight text-foreground">
              {group.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3">{group.intro}</p>
          </div>

          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {group.concepts.map((c) => (
              <article key={c.id} className="flex flex-col">
                <div className="bg-secondary overflow-hidden aspect-[3/4]">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg tracking-tight text-foreground">
                    {c.campaign}
                  </h3>
                  <span className="text-[11px] tracking-[0.2em] text-muted-foreground">
                    {c.no}
                  </span>
                </div>
                <p className="text-xs tracking-[0.14em] uppercase text-muted-foreground mt-1">
                  {c.garment} / {c.color}
                </p>

                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Front
                    </dt>
                    <dd className="text-foreground/90">{c.front}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Back
                    </dt>
                    <dd className="text-foreground/90">{c.back}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Placement
                    </dt>
                    <dd className="text-foreground/90">{c.placement}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Fabric and fit
                    </dt>
                    <dd className="text-foreground/90">{c.fabric}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Campaign
                    </dt>
                    <dd className="text-foreground/90">{c.concept}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      Shots
                    </dt>
                    <dd className="text-foreground/90">
                      <ul className="space-y-1 mt-1">
                        {c.shots.map((s) => (
                          <li key={s} className="text-muted-foreground">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      ))}

      <footer className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-16 border-t border-border pt-8 flex items-center justify-between">
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">roinamis</p>
        <Link to="/" className="link-subtle">
          back to signup
        </Link>
      </footer>
    </main>
  );
};

export default Lookbook;
