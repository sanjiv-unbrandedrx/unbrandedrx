export default function Badge({ ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className="bg-neutral-900 font-title font-medium py-1 px-3 rounded-3xl tracking-tight text-[9px] text-white leading-4"
      {...props}
    />
  );
}
