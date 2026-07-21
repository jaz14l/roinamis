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

      {/* Form */}
      <section className="relative z-20 flex flex-col items-center justify-center px-6 pt-16 pb-20 md:pt-24 md:pb-28 min-h-[calc(100vh-9rem)]">
        <div className="w-full max-w-xl mx-auto text-center">
          <SignUpForm />
        </div>
      </section>
    </main>
  );
};

export default Signup;
