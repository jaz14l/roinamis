import GrainBackground from "@/components/GrainBackground";
import SignUpForm from "@/components/SignUpForm";
import RoinamisMark from "@/components/RoinamisMark";

const Signup = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <GrainBackground />

      <section className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-md text-center">
          <RoinamisMark className="mx-auto h-28 w-28 sm:h-36 sm:w-36" />

          <h1 className="mt-10 text-[13px] font-normal uppercase tracking-[0.42em] text-foreground sm:mt-12 sm:text-sm">
            wear the story
          </h1>

          <div className="mx-auto mt-8 h-px w-10 bg-border sm:mt-10" />

          <div className="mt-10 sm:mt-12">
            <SignUpForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
