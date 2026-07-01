export default function HowItWorksIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 350"
      className={className}
      role="img"
      aria-label="Illustration of a live one-to-one online Quran class in session"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hiw-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#164a33" />
          <stop offset="100%" stopColor="#0c2c1f" />
        </linearGradient>
        <linearGradient id="hiw-book" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f0da97" />
          <stop offset="100%" stopColor="#d4a83e" />
        </linearGradient>
        <radialGradient id="hiw-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a83e" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#d4a83e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="350" fill="url(#hiw-bg)" />

      {/* faint arch motifs repeated across the banner */}
      <g opacity="0.1" stroke="#f0da97" strokeWidth="2" fill="none">
        <path d="M60 350 V230 A70 70 0 0 1 200 230 V350" />
        <path d="M600 350 V230 A70 70 0 0 1 740 230 V350" />
      </g>

      {/* scattered stars */}
      <g fill="#f0da97" opacity="0.5">
        <g transform="translate(130,60) scale(0.4)" className="illus-pulse">
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
        <g transform="translate(680,80) scale(0.5)" className="illus-pulse" style={{ animationDelay: "0.7s" }}>
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
        <g transform="translate(400,50) scale(0.3)" className="illus-pulse" style={{ animationDelay: "1.3s" }}>
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
      </g>

      <circle cx="400" cy="230" r="150" fill="url(#hiw-glow)" />

      {/* Laptop, centered */}
      <g className="illus-float">
        <path d="M330 300 L470 300 L488 330 L312 330 Z" fill="#0c2c1f" stroke="#f0da97" strokeOpacity="0.25" />
        <rect x="336" y="150" width="128" height="150" rx="10" fill="#1f5c3f" stroke="#f0da97" strokeOpacity="0.3" strokeWidth="2" />
        <rect x="348" y="162" width="104" height="126" rx="4" fill="#0c2c1f" />

        <g transform="translate(362,192)">
          <path d="M38 0 C27 -6 14 -6 0 0 V54 C14 48 27 48 38 54 C49 48 62 48 76 54 V0 C62 -6 49 -6 38 0 Z" fill="url(#hiw-book)" />
          <path d="M38 0 V54" stroke="#0c2c1f" strokeOpacity="0.4" strokeWidth="1.5" />
          <g stroke="#0c2c1f" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round">
            <line x1="9" y1="11" x2="28" y2="8" />
            <line x1="9" y1="20" x2="26" y2="18" />
            <line x1="47" y1="8" x2="66" y2="11" />
            <line x1="49" y1="18" x2="66" y2="20" />
          </g>
        </g>
      </g>

      {/* Connection nodes suggesting a live call, either side of the laptop */}
      <g className="illus-float-slow">
        <circle cx="200" cy="200" r="34" fill="#113b29" stroke="#e5c265" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="200" cy="190" r="10" fill="#79b090" opacity="0.9" />
        <path d="M182 218 q18 -14 36 0" stroke="#79b090" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9" />
        <line x1="234" y1="205" x2="330" y2="220" stroke="#f0da97" strokeWidth="2" strokeDasharray="3 6" opacity="0.5" />
      </g>

      <g className="illus-float">
        <circle cx="600" cy="200" r="34" fill="#113b29" stroke="#e5c265" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="600" cy="190" r="10" fill="#e5c265" opacity="0.9" />
        <path d="M582 218 q18 -14 36 0" stroke="#e5c265" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9" />
        <line x1="470" y1="220" x2="566" y2="205" stroke="#f0da97" strokeWidth="2" strokeDasharray="3 6" opacity="0.5" />
      </g>
    </svg>
  );
}
