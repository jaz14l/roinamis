import GrainBackground from "@/components/GrainBackground";
import SignUpForm from "@/components/SignUpForm";
import RoinamisMark from "@/components/RoinamisMark";
import RoinamisWordmark from "@/components/RoinamisWordmark";

const Signup = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <GrainBackground />

      <div className="relative z-10 flex flex-col items-center w-full">
        <RoinamisMark className="h-24 md:h-32 w-auto mb-6 opacity-90" />
        <RoinamisWordmark className="h-6 md:h-8 w-auto mb-16 opacity-90" />

        <SignUpForm />
      </div>

      <footer className="relative z-10 mt-24 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
        roinamis © {new Date().getFullYear()}
      </footer>
    </main>
  );
};

export default Signup;
