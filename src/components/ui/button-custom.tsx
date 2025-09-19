import { cn } from "@/lib/utils";

type ButtonVariant = "filled" | "outline" | "filledInverse" | "filledCart";
type ButtonSize = "xs" | "sm" | "base" | "lg" | "xl";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth?: boolean;
}

export default function ButtonCustom({
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  const variantClasses = {
    filled:
      "bg-zinc-800 text-white border border-neutral-900 hover:bg-zinc-900",
    filledInverse:
      "bg-white text-foreground hover:bg-zinc-100 border border-white",
    filledCart:
      "bg-[#002021] hover:bg-zinc-900 border border-neutral-900 text-white",
    outline:
      "text-neutral-800 border border-neutral-300 hover:border-neutral-900",
  };

  const sizeClasses = {
    xs: "text-xs px-4 py-1",
    sm: "text-sm px-7 py-2",
    base: "px-7 py-2",
    lg: "px-7 py-2",
    xl: "py-3.5 px-11 text-xl",
  };

  return (
    <button
      {...props}
      className={cn(
        "rounded-4xl font-title font-medium tracking-tight",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
    />
  );
}
