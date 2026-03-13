"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ButtonCustom from "@/components/ui/button-custom";

export default function EmailCaptureWidget() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Show after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const showNameFields = email.includes("@") && email.includes(".");

  const handleSubmit = () => {
    // For now, just store in sessionStorage for later use
    sessionStorage.setItem(
      "unbrandedrx_lead",
      JSON.stringify({ email, firstName, lastName }),
    );
    setSubmitted(true);
    setTimeout(() => setDismissed(true), 2000);
  };

  const isValid =
    email.includes("@") &&
    email.includes(".") &&
    firstName.trim() &&
    lastName.trim();

  if (dismissed || submitted) {
    if (submitted && !dismissed) {
      return (
        <div className="fixed bottom-[120px] lg:bottom-6 right-4 lg:right-6 z-50 bg-white rounded-2xl border border-neutral-200 shadow-xl p-6 w-[calc(100%-2rem)] lg:w-[380px] transition-all">
          <p className="text-lg font-title font-semibold text-center">
            You&apos;re all set!
          </p>
          <p className="text-base text-muted-foreground text-center mt-1">
            We&apos;ll save your progress.
          </p>
        </div>
      );
    }
    return null;
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-[120px] lg:bottom-6 right-4 lg:right-6 z-50 bg-white rounded-2xl border border-neutral-200 shadow-xl p-6 w-[calc(100%-2rem)] lg:w-[380px] animate-in slide-in-from-bottom-4 duration-500">
      {/* Close button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4 text-muted-foreground" />
      </button>

      <p className="text-lg font-title font-semibold pr-6">
        Save your progress
      </p>
      <p className="text-sm text-muted-foreground mt-1 mb-4">
        Enter your email so you can pick up where you left off.
      </p>

      <div className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full rounded-xl border border-neutral-200 px-4 py-3.5 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
          autoComplete="email"
        />

        {showNameFields && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full rounded-xl border border-neutral-200 px-4 py-3.5 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
                autoComplete="given-name"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="w-full rounded-xl border border-neutral-200 px-4 py-3.5 text-base outline-none focus:border-foreground focus:ring-1 focus:ring-foreground transition-all"
                autoComplete="family-name"
              />
            </div>

            <ButtonCustom
              variant="filled"
              size="base"
              fullWidth
              onClick={handleSubmit}
              disabled={!isValid}
              className={!isValid ? "opacity-50 cursor-not-allowed" : ""}
            >
              Continue
            </ButtonCustom>

            <p className="text-xs text-muted-foreground text-center">
              By continuing, you agree to our{" "}
              <a
                href="/terms-and-conditions"
                className="underline"
                target="_blank"
              >
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="underline" target="_blank">
                Privacy Policy
              </a>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
}
