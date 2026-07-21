import GrainBackground from "@/components/GrainBackground";
import SignUpForm from "@/components/SignUpForm";
import RoinamisWordmark from "@/components/RoinamisWordmark";
import ruralBg from "@/assets/signup-rural.jpg";

const Signup = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Background imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src={ruralBg}
          alt=""
          className="h-full w-full object-cover opacity-70"
          aria-hidden="true"
        />
        {/* Cream wash + soft vignette to keep it warm and readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.35) 40%, hsl(var(--background) / 0.85) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.6) 100%)",
          }}
        />
      </div>

      <GrainBackground />

      {/* Top wordmark */}
      <header className="relative z-20 flex justify-center pt-10 md:pt-14">
        <RoinamisWordmark className="h-5 md:h-6 w-auto opacity-90" />
      </header>

      {/* Hero + form */}
      <section className="relative z-20 flex flex-col items-center justify-center px-6 pt-16 pb-20 md:pt-24 md:pb-28 min-h-[calc(100vh-9rem)]">
        <div className="w-full max-w-xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-[10px] uppercase tracking-[0.45em] text-muted-foreground mb-8">
            Vol. 01 — By Invitation
          </p>

          {/* Headline */}
          <h1 className="font-display font-light text-foreground leading-[0.95] tracking-tight lowercase text-[2.75rem] sm:text-6xl md:text-7xl mb-8">
            worn slow.
            <br />
            <span className="italic font-extralight">made to last.</span>
          </h1>

          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
            <span className="h-px w-10 bg-foreground/30" />
            <span className="h-1 w-1 rounded-full bg-foreground/50" />
            <span className="h-px w-10 bg-foreground/30" />
          </div>

          {/* Brand message */}
          <p className="max-w-md mx-auto text-[15px] md:text-base leading-relaxed text-foreground/75 mb-12">
            roinamis is a quiet wardrobe of heavyweight essentials, cut in earth
            tones and made in small runs. Join the list for first look at Drop 001
            — private previews, member-only pricing, and the field notes behind
            each piece.
          </p>

          {/* Form */}
          <SignUpForm />

          {/* Trust line */}
          <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            No noise. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 pb-8 flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
        <span>roinamis © {new Date().getFullYear()}</span>
        <span className="opacity-60">Made slow · Worn long</span>
      </footer>
    </main>
  );
};

export default Signup;
