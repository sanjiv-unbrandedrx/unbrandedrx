import { cn } from "@/lib/utils";

export default function Badge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "bg-neutral-900 font-title font-medium py-1 px-3 rounded-3xl tracking-tight text-[9px] text-white leading-4",
        className
      )}
      {...props}
    />
  );
}
