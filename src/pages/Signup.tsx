import { Link } from "react-router-dom";
import GrainBackground from "@/components/GrainBackground";
import SignUpForm from "@/components/SignUpForm";
import RoinamisMark from "@/components/RoinamisMark";

const Signup = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background text-foreground">
      <GrainBackground />

      <header className="relative z-20 border-b border-border/70">
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 sm:px-8"
        >
          <span className="nav-link !text-foreground">roinamis</span>
          <ul className="flex items-center gap-5 sm:gap-8">
            <li>
              <a href="mailto:hello@roinamis.com" className="nav-link">
                contact
              </a>
            </li>
            <li>
              <Link to="/privacy" className="nav-link">
                privacy
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="relative z-20 flex flex-1 items-center px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-md">
          <div className="flex justify-center">
            <RoinamisMark className="h-24 w-24 sm:h-32 sm:w-32" />
          </div>

          <h1 className="mt-10 text-center text-[12px] font-normal uppercase tracking-[0.46em] text-foreground sm:mt-12 sm:text-[13px]">
            wear the story
          </h1>

          <p className="mx-auto mt-5 max-w-[22rem] text-center text-sm leading-relaxed text-muted-foreground">
            Join the email list to hear about new pieces, restocks, and release
            dates before anyone else.
          </p>

          <div className="mx-auto mt-10 h-px w-8 bg-border sm:mt-12" />

          <div className="mt-10 sm:mt-12">
            <SignUpForm />
          </div>
        </div>
      </main>

      <footer className="relative z-20 border-t border-border/70">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:px-8">
          <span>roinamis</span>
          <span>vol. 01</span>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
