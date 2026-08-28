import { useEffect, useRef } from "react";
import { Instagram, Music2 } from "lucide-react";
import SignUpForm from "@/components/SignUpForm";
import waveMark from "@/assets/roinamis-wave-line.png";

const Signup = () => {
  const rootRef = useRef<HTMLElement>(null);
  const readyRef = useRef(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      rootRef.current?.classList.add("is-ready");
      readyRef.current = true;
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const respondToPointer = (event: React.PointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    if (!root || event.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = root.getBoundingClientRect();
    root.style.setProperty(
      "--pointer-x",
      ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3)
    );
    root.style.setProperty(
      "--pointer-y",
      ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3)
    );
  };

  const resetPointer = () => {
    rootRef.current?.style.setProperty("--pointer-x", "0");
    rootRef.current?.style.setProperty("--pointer-y", "0");
  };

  return (
    <main
      ref={rootRef}
      className="roinamis-page"
      onPointerMove={respondToPointer}
      onPointerLeave={resetPointer}
    >
      <div className="page-veil" aria-hidden="true" />
      <div className="paper-grain" aria-hidden="true" />

      <header className="page-meta" aria-label="roinamis">
        <span className="brand-name">roinamis</span>
        <span>wear the story</span>
      </header>

      <section className="mark-stage" aria-label="roinamis brand mark">
        <div className="logo-window">
          <img className="logo-mark" src={waveMark} alt="roinamis wave logo" draggable={false} />
        </div>
      </section>

      <section className="signup-field" aria-labelledby="signup-heading">
        <div className="copy-block">
          <p className="eyebrow">Studio note</p>
          <h1 id="signup-heading">Be seen.</h1>
          <p className="supporting-line">with purpose.</p>
        </div>

        <SignUpForm />
      </section>

      <footer className="page-footer">
        <span>
          founded 2022 · <span className="brand-name">roinamis</span>
        </span>
        <div className="social-links" aria-label="roinamis social links">
          <a
            className="social-link"
            href="https://www.instagram.com/roinamis/?hl=en"
            target="_blank"
            rel="noreferrer"
            aria-label="follow roinamis on Instagram"
          >
            <Instagram size={14} strokeWidth={1.25} aria-hidden="true" />
          </a>
          <a
            className="social-link"
            href="https://www.tiktok.com/@roinamis"
            target="_blank"
            rel="noreferrer"
            aria-label="follow roinamis on TikTok"
          >
            <Music2 size={14} strokeWidth={1.25} aria-hidden="true" />
          </a>
        </div>
        <span>Made with intention</span>
      </footer>
    </main>
  );
};

export default Signup;
