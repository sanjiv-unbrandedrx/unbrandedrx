export function formatPrice(price: string) {
  if (!price.includes("."))
    return (
      <p className="tabular-nums tracking-tighter">
        $ {price}
        <span className="text-xs">.00</span>
      </p>
    );
  const priceSplit = price.split(".");

  return (
    <p className="tabular-nums tracking-tighter">
      $ {priceSplit[0]}
      <span className="text-xs">.{priceSplit[1]}</span>
    </p>
  );
}
