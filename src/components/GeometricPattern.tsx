export default function GeometricPattern({
  className = "",
  id = "islamic-star-pattern",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M28 2 L38 14 L54 14 L44 28 L54 42 L38 42 L28 54 L18 42 L2 42 L12 28 L2 14 L18 14 Z" />
            <circle cx="28" cy="28" r="6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
