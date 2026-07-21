import GrainBackground from "@/components/GrainBackground";
import SignUpForm from "@/components/SignUpForm";
import RoinamisMark from "@/components/RoinamisMark";

const Signup = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <GrainBackground />

      {/* Top mark */}
      <header className="relative z-20 flex justify-center pt-10 md:pt-14">
        <RoinamisMark className="h-14 md:h-16 w-auto opacity-90" />
      </header>

      {/* Hero + form */}
      <section className="relative z-20 flex flex-col items-center justify-center px-6 pt-16 pb-20 md:pt-24 md:pb-28 min-h-[calc(100vh-9rem)]">
        <div className="w-full max-w-xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-muted-foreground mb-8">
            Vol. 01 — By Invitation
          </p>

          <h1 className="font-display font-light text-foreground leading-[0.95] tracking-tight lowercase text-[2.75rem] sm:text-6xl md:text-7xl mb-8">
            worn slow.
            <br />
            <span className="italic font-extralight">made to last.</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-12" aria-hidden="true">
            <span className="h-px w-10 bg-foreground/30" />
            <span className="h-1 w-1 rounded-full bg-foreground/50" />
            <span className="h-px w-10 bg-foreground/30" />
          </div>

          <SignUpForm />
        </div>
      </section>

      <footer className="relative z-20 pb-8 flex justify-center text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
        <span>roinamis © {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
};

export default Signup;
