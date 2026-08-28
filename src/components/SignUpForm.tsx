import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPhone, setShowPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a complete email address.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const { error: insertError } = await supabase
      .from("email_signups")
      .insert({ email, phone: phone || null });

    setIsSubmitting(false);

    if (insertError) {
      if (insertError.code === "23505") {
        toast({
          title: "Already signed up",
          description: "This email is already on our list.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again.",
          variant: "destructive",
        });
      }
      return;
    }

    // Fire-and-forget: branded welcome email + Zapier webhook
    supabase.functions.invoke("send-welcome-email", { body: { email } }).catch(console.error);
    supabase.functions
      .invoke("zapier-webhook", { body: { email, phone: phone || null } })
      .catch(console.error);

    setIsSubmitted(true);
  };

  const buttonState = isSubmitting ? "loading" : isSubmitted ? "success" : "idle";

  return (
    <form onSubmit={handleSubmit} noValidate className="signup-form">
      <label className="email-label" htmlFor="email">
        <span>Email address</span>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="you@example.com"
          autoComplete="email"
          disabled={isSubmitting || isSubmitted}
          aria-describedby="form-note"
        />
      </label>

      {showPhone && (
        <label className="email-label phone-label" htmlFor="phone">
          <span>Phone (optional)</span>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 000 0000"
            autoComplete="tel"
            disabled={isSubmitting || isSubmitted}
          />
        </label>
      )}

      {!showPhone && !isSubmitted && (
        <button type="button" className="phone-toggle" onClick={() => setShowPhone(true)}>
          Add phone for SMS
        </button>
      )}

      <div className="form-lower">
        <p
          id="form-note"
          className={`consent-copy ${error ? "has-error" : ""}`}
          aria-live="polite"
        >
          {error ??
            (isSubmitted
              ? "You're on the list. We'll be in touch."
              : "By joining, you agree to receive roinamis updates. Unsubscribe any time.")}
          {!error && !isSubmitted && (
            <>
              {" "}
              <Link to="/privacy" className="consent-link">
                Privacy
              </Link>
            </>
          )}
        </p>
        <button
          className={`signup-button ${buttonState}`}
          type="submit"
          disabled={isSubmitting || isSubmitted}
        >
          <span className="button-copy" aria-live="polite">
            {isSubmitting ? "Sending" : isSubmitted ? "You're on the list" : "Receive the note"}
          </span>
          <span className="button-mark" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
