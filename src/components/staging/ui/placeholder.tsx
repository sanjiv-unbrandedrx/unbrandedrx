export default function Placeholder({
  width = 400,
  height = 300,
  label = "Image",
  icon = "image",
  className = "",
}: {
  width?: number;
  height?: number;
  label?: string;
  icon?: "image" | "product" | "icon" | "hero" | "step";
  className?: string;
}) {
  const iconPaths: Record<string, string> = {
    image:
      "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    product:
      "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    hero: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    step: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={label}
    >
      <rect width={width} height={height} rx="12" fill="#F0F0F0" />
      <g transform={`translate(${width / 2}, ${height / 2 - 16})`}>
        <svg
          x="-12"
          y="-12"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={iconPaths[icon]} />
        </svg>
      </g>
      <text
        x={width / 2}
        y={height / 2 + 20}
        textAnchor="middle"
        fill="#9CA3AF"
        fontSize="13"
        fontFamily="system-ui, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}
