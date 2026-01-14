export default function PrescriptionIcon({ className }: { className?: string }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Prescription pad outline */}
      <rect
        x="20"
        y="15"
        width="80"
        height="90"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />

      {/* Top line (Rx symbol area) */}
      <line
        x1="30"
        y1="30"
        x2="90"
        y2="30"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Rx Symbol */}
      <text
        x="35"
        y="50"
        fontFamily="serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        Rx
      </text>

      {/* Prescription lines */}
      <line
        x1="30"
        y1="65"
        x2="90"
        y2="65"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <line
        x1="30"
        y1="75"
        x2="80"
        y2="75"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <line
        x1="30"
        y1="85"
        x2="85"
        y2="85"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
}
