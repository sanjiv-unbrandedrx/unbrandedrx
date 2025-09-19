"use client";
import { cn } from "@/lib/utils";
import { defineStepper } from "@stepperize/react";
import Button from "../ui/button-custom";
import { Progress } from "../ui/progress";
import Logo from "../svg/logo";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { DatePicker } from "../ui/date-picker";

const { useStepper, utils } = defineStepper(
  {
    id: "email",
    title: "See if this treatment is right for you",
    description: "",
    variant: "secondary",
  },
  {
    id: "location",
    title: "What state do you live in?",
    description:
      "This state is where your medication will be shipped to, if prescribed.",
    variant: "light",
  },
  {
    id: "eligibility",
    title: "To verify eligibility, tell us your date of birth:",
    description: "We can only treat patients who are 18 or older.",
    variant: "light",
  },
  {
    id: "complete",
    title: "Great, your account is set up!",
    description:
      "Now, let's get you started. The next step is to complete a 5-minute health profile for our medical team to review.",
    variant: "dark",
  }
);

export default function SignupStepperForm() {
  const stepper = useStepper();
  const currentIdx = utils.getIndex(stepper.current.id);
  const variantClasses = {
    secondary: "bg-secondary",
    light: "",
    dark: "bg-neutral-800 text-white",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-full px-4 xl:px-0",
        variantClasses[stepper.current.variant]
      )}
    >
      <div className="flex flex-col items-start justify-center max-w-xl gap-y-6">
        <StepIndicator
          currentStep={currentIdx + 1}
          totalSteps={stepper.all.length}
        />
        <div className="flex flex-col gap-y-2">
          <h2 className="flex-1 text-2xl xl:text-4xl font-medium font-title">
            {stepper.current.title}
          </h2>
          <p className="text-sm xl:text-xl">{stepper.current.description}</p>
        </div>
        {stepper.switch({
          email: () => <EmailComponent />,
          location: () => <LocationComponent />,
          eligibility: () => <EligibilityComponent />,
          complete: () => null,
        })}
        {!stepper.isLast ? (
          <Button
            variant="filled"
            size="xl"
            onClick={stepper.next}
            className="w-full"
          >
            Continue
          </Button>
        ) : (
          <Button
            variant="filledInverse"
            size="xl"
            color="light"
            className="w-full"
          >
            <Link href="/">Start My Medical Profile</Link>
          </Button>
        )}

        {stepper.isFirst && (
          <p className="text-muted-foreground w-full text-center text-xs">
            Already have an account?{" "}
            <Link href="/" className="underline underline-offset-2">
              Sign In
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  if (currentStep === 1) {
    return <Logo className="text-neutral-400 w-25" />;
  }
  return (
    <div className="w-full">
      <p className="tabular-nums mb-3">
        {Math.ceil((currentStep / totalSteps) * 100)}%
      </p>
      <div className="w-full flex items-center gap-x-1 justify-start">
        <Progress
          value={100}
          indicatorClassName={
            currentStep === totalSteps ? "bg-white" : "bg-neutral-700"
          }
          className="bg-transparent"
        />
        {Array.from({ length: totalSteps - currentStep }, () => 0).map(
          (i, idx) => (
            <Progress
              key={`progress-${i}-${idx}`}
              value={0}
              className={cn(
                currentStep === 2
                  ? "w-1/2"
                  : currentStep === 3
                  ? "w-1/3"
                  : "hidden"
              )}
              indicatorClassName={
                currentStep === totalSteps ? "bg-white" : "bg-neutral-700"
              }
            />
          )
        )}
      </div>
    </div>
  );
}

function EmailComponent() {
  return (
    <div className="space-y-5 w-full">
      <Input
        type="text"
        placeholder="Enter your e-mail"
        className="border-neutral-400"
      />
      <div className="flex justify-start items-start gap-x-2">
        <Checkbox className="border-neutral-400" name="policy" id="policy" />
        <label className="font-medium text-xs" htmlFor="policy">
          By clicking &quot;Continue&quot;, I agree to{" "}
          <Link href="/" className="underline underline-offset-2">
            Telehealth Consent
          </Link>{" "}
          and acknowledge the{" "}
          <Link href="/" className="underline underline-offset-2">
            Privacy Policy
          </Link>
          , and consent to receieve marketing communications.
        </label>
      </div>
    </div>
  );
}

function LocationComponent() {
  return (
    <Select>
      <SelectTrigger className="w-full border-neutral-400">
        <SelectValue placeholder="Select your state" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="state-1">State 1</SelectItem>
        <SelectItem value="state-2">State 2</SelectItem>
        <SelectItem value="state-3">State 3</SelectItem>
        <SelectItem value="state-4">State 4</SelectItem>
      </SelectContent>
    </Select>
  );
}

function EligibilityComponent() {
  return <DatePicker className="w-full" />;
}
