export default function WhyUsIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="Illustration of a globe and clock representing flexible class times across timezones"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="whyus-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2a44" />
          <stop offset="100%" stopColor="#101828" />
        </linearGradient>
        <linearGradient id="whyus-globe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f7350" />
          <stop offset="100%" stopColor="#164a33" />
        </linearGradient>
        <radialGradient id="whyus-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a83e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#d4a83e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="500" fill="url(#whyus-bg)" />

      {/* stars */}
      <g fill="#f0da97" opacity="0.5">
        <g transform="translate(70,90) scale(0.4)" className="illus-pulse">
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
        <g transform="translate(330,120) scale(0.3)" className="illus-pulse" style={{ animationDelay: "0.5s" }}>
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
      </g>

      <circle cx="200" cy="250" r="150" fill="url(#whyus-glow)" />

      {/* Globe */}
      <g className="illus-float-slow" transform="translate(200,260)">
        <circle r="100" fill="url(#whyus-globe)" stroke="#f0da97" strokeOpacity="0.3" strokeWidth="2" />
        {/* longitude lines suggesting timezones */}
        <ellipse cx="0" cy="0" rx="40" ry="100" fill="none" stroke="#f0da97" strokeOpacity="0.35" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="75" ry="100" fill="none" stroke="#f0da97" strokeOpacity="0.35" strokeWidth="1.5" />
        <line x1="-100" y1="0" x2="100" y2="0" stroke="#f0da97" strokeOpacity="0.35" strokeWidth="1.5" />
        <ellipse cx="0" cy="-40" rx="90" ry="18" fill="none" stroke="#f0da97" strokeOpacity="0.25" strokeWidth="1.5" />
        <ellipse cx="0" cy="40" rx="90" ry="18" fill="none" stroke="#f0da97" strokeOpacity="0.25" strokeWidth="1.5" />
        {/* small location markers */}
        <circle cx="-55" cy="-30" r="4" fill="#e5c265" />
        <circle cx="60" cy="10" r="4" fill="#e5c265" />
        <circle cx="10" cy="60" r="4" fill="#e5c265" />
      </g>

      {/* Clock, overlapping top-right of globe */}
      <g className="illus-float" transform="translate(290,150)">
        <circle r="54" fill="#0c2c1f" stroke="#d4a83e" strokeWidth="3" />
        <circle r="4" fill="#d4a83e" />
        <line x1="0" y1="0" x2="0" y2="-32" stroke="#f0da97" strokeWidth="4" strokeLinecap="round" />
        <line x1="0" y1="0" x2="22" y2="10" stroke="#f0da97" strokeWidth="4" strokeLinecap="round" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="-46"
            x2="0"
            y2="-40"
            stroke="#e5c265"
            strokeWidth="2"
            opacity="0.7"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
    </svg>
  );
}
