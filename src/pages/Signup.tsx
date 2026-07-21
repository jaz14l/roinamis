import GrainBackground from "@/components/GrainBackground";
import SignUpForm from "@/components/SignUpForm";
import RoinamisMark from "@/components/RoinamisMark";

const Signup = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <GrainBackground />

      {/* Logo + form */}
      <section className="relative z-20 flex flex-col items-center justify-center px-6 pt-20 pb-20 md:pt-28 md:pb-28 min-h-screen">
        <div className="w-full max-w-xl mx-auto text-center">
          <RoinamisMark className="h-16 md:h-20 w-auto opacity-90 mx-auto mb-6" />

          <p className="text-[11px] tracking-[0.35em] text-muted-foreground mb-14">
            wear the story
          </p>

          <SignUpForm />
        </div>
      </section>
    </main>
  );
};

export default Signup;
