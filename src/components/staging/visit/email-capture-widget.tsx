"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/components/svg/logo";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function EmailCaptureWidget({ show = false }: { show?: boolean }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("unbrandedrx_email_dismissed") === "true";
    }
    return false;
  });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToSms, setAgreedToSms] = useState(false);
  const [step, setStep] = useState<"email" | "create" | "done">("email");

  // Show when parent signals (after goals step) with a brief delay
  useEffect(() => {
    if (show && !dismissed) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [show, dismissed]);

  const validEmail = email.includes("@") && email.includes(".");

  const handleLogin = () => {
    if (!validEmail) return;
    setStep("create");
  };

  const handleCreate = () => {
    if (!firstName.trim() || !lastName.trim() || !agreedToTerms) return;
    sessionStorage.setItem(
      "unbrandedrx_lead",
      JSON.stringify({ email, phone, firstName, lastName }),
    );
    setStep("done");
    setTimeout(() => dismiss(), 1500);
  };

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("unbrandedrx_email_dismissed", "true");
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") action();
  };

  if (dismissed) return null;
  if (!visible) return null;

  return (
    <>
      {/* Dark overlay (non-dismissible) */}
      <div className="fixed inset-0 z-50 bg-black/50" />

      {/* Bottom sheet */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom duration-400 max-h-[90vh] overflow-y-auto">
        <div className="px-6 pb-12 pt-6">
          <div className="max-w-md mx-auto">
          {step === "done" ? (
            /* ── Success ──────────────────────────────────── */
            <div className="text-center py-4">
              <p className="text-2xl font-title font-semibold">
                You&apos;re all set!
              </p>
              <p className="text-base text-muted-foreground mt-2">
                Your progress will be saved.
              </p>
            </div>
          ) : step === "create" ? (
            /* ── Create Account ─────────────────────────── */
            <>
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <Logo className="w-40" />
              </div>

              <h2 className="text-2xl font-title font-semibold text-center mb-1">
                See your treatment options
              </h2>
              <p className="text-base text-muted-foreground text-center mb-6">
                Join for a tailored experience crafted by experts.
              </p>

              <div className="space-y-3">
                {/* Email (pre-filled, editable) */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your e-mail"
                  className="w-full rounded-full border border-neutral-300 px-5 py-4 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
                  autoComplete="email"
                />

                {/* Phone number */}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full rounded-full border border-neutral-300 px-5 py-4 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
                  autoComplete="tel"
                  autoFocus
                />

                {/* First + Last name side by side */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, handleCreate)}
                    placeholder="First Name"
                    className="w-full rounded-full border border-neutral-300 px-5 py-4 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
                    autoComplete="given-name"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, handleCreate)}
                    placeholder="Last Name"
                    className="w-full rounded-full border border-neutral-300 px-5 py-4 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
                    autoComplete="family-name"
                  />
                </div>

                {/* Terms consent */}
                <label className="flex items-start gap-3 cursor-pointer pt-1">
                  <Checkbox
                    checked={agreedToTerms}
                    onCheckedChange={(checked) =>
                      setAgreedToTerms(checked === true)
                    }
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-muted-foreground leading-snug">
                    By creating an account, I agree to the{" "}
                    <a
                      href="/telemedicine-consent"
                      className="underline text-foreground"
                      target="_blank"
                    >
                      Telemedicine Consent
                    </a>
                    ,{" "}
                    <a
                      href="/privacy-policy"
                      className="underline text-foreground"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                    ,{" "}
                    <a
                      href="/returns-policy"
                      className="underline text-foreground"
                      target="_blank"
                    >
                      Refund Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/terms-and-conditions"
                      className="underline text-foreground"
                      target="_blank"
                    >
                      Terms &amp; Conditions
                    </a>
                    .
                  </span>
                </label>

                {/* SMS consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    checked={agreedToSms}
                    onCheckedChange={(checked) =>
                      setAgreedToSms(checked === true)
                    }
                    className="mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-muted-foreground leading-snug">
                    I consent to receive SMS messages from UnbrandedRx including
                    order confirmations, shipping updates, and refill reminders.
                    Message frequency varies. Msg &amp; data rates may apply.
                    Reply STOP to opt out.
                  </span>
                </label>

                {/* Submit button */}
                <button
                  onClick={handleCreate}
                  disabled={
                    !firstName.trim() || !lastName.trim() || !agreedToTerms
                  }
                  className="w-full rounded-full bg-zinc-900 text-white py-4 text-base font-title font-semibold hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Create Account
                </button>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-5">
                Already have an account?{" "}
                <button
                  onClick={() => setStep("email")}
                  className="underline font-medium text-foreground"
                >
                  Sign In
                </button>
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 my-5">
                <div className="flex-1 border-t border-neutral-200" />
                <span className="text-sm text-muted-foreground">or</span>
                <div className="flex-1 border-t border-neutral-200" />
              </div>

              {/* Google sign-in */}
              <button
                onClick={() => {
                  // TODO: integrate Google OAuth
                }}
                className="w-full rounded-full border border-neutral-300 py-4 text-base font-title font-semibold hover:bg-neutral-50 transition-colors flex items-center justify-center gap-3"
              >
                <GoogleIcon className="h-5 w-5" />
                Continue with Google
              </button>
            </>
          ) : (
            /* ── Email Step ─────────────────────────────── */
            <>
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <Logo className="w-40" />
              </div>

              <h2 className="text-2xl font-title font-semibold text-center mb-1">
                See your treatment options
              </h2>
              <p className="text-base text-muted-foreground text-center mb-6">
                Join for a tailored experience crafted by experts.
              </p>

              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, handleLogin)}
                  placeholder="Enter your e-mail"
                  className="w-full rounded-full border border-neutral-300 px-5 py-4 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
                  autoComplete="email"
                  autoFocus
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, handleLogin)}
                  placeholder="Enter your phone number"
                  className="w-full rounded-full border border-neutral-300 px-5 py-4 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
                  autoComplete="tel"
                />

                <button
                  onClick={handleLogin}
                  disabled={!validEmail}
                  className="w-full rounded-full bg-zinc-900 text-white py-4 text-base font-title font-semibold hover:bg-black transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-5">
                Already have an account?{" "}
                <button
                  onClick={handleLogin}
                  disabled={!validEmail}
                  className="underline font-medium text-foreground disabled:opacity-40"
                >
                  Sign In
                </button>
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 my-5">
                <div className="flex-1 border-t border-neutral-200" />
                <span className="text-sm text-muted-foreground">or</span>
                <div className="flex-1 border-t border-neutral-200" />
              </div>

              {/* Google sign-in */}
              <button
                onClick={() => {
                  // TODO: integrate Google OAuth
                }}
                className="w-full rounded-full border border-neutral-300 py-4 text-base font-title font-semibold hover:bg-neutral-50 transition-colors flex items-center justify-center gap-3"
              >
                <GoogleIcon className="h-5 w-5" />
                Continue with Google
              </button>
            </>
          )}
          </div>
        </div>
      </div>
    </>
  );
}
