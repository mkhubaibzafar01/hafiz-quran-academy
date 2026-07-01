export default function AboutIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Illustration of a one-to-one online Quran lesson between a teacher and a student"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="about-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1f5c3f" />
          <stop offset="100%" stopColor="#113b29" />
        </linearGradient>
        <linearGradient id="about-book" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f0da97" />
          <stop offset="100%" stopColor="#d4a83e" />
        </linearGradient>
      </defs>

      <rect width="400" height="400" fill="url(#about-bg)" />

      {/* faint star pattern */}
      <g fill="#f0da97" opacity="0.4">
        <g transform="translate(60,60) scale(0.4)" className="illus-pulse">
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
        <g transform="translate(340,330) scale(0.5)" className="illus-pulse" style={{ animationDelay: "0.8s" }}>
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
      </g>

      {/* crescent accent */}
      <g transform="translate(310,55)" className="illus-float-slow" opacity="0.85">
        <path d="M16 0a16 16 0 1 0 0 32 13 13 0 1 1 0-32Z" fill="#f0da97" />
      </g>

      {/* Teacher screen (left) */}
      <g className="illus-float">
        <rect x="46" y="150" width="120" height="96" rx="10" fill="#0c2c1f" stroke="#f0da97" strokeOpacity="0.35" strokeWidth="2" />
        <circle cx="106" cy="188" r="18" fill="#79b090" opacity="0.9" />
        <path d="M78 232 q28 -22 56 0" stroke="#79b090" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9" />
      </g>

      {/* Student screen (right) */}
      <g className="illus-float-slow">
        <rect x="234" y="150" width="120" height="96" rx="10" fill="#0c2c1f" stroke="#f0da97" strokeOpacity="0.35" strokeWidth="2" />
        <circle cx="294" cy="188" r="18" fill="#e5c265" opacity="0.9" />
        <path d="M266 232 q28 -22 56 0" stroke="#e5c265" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9" />
      </g>

      {/* Connection line with pulsing dot */}
      <line x1="166" y1="198" x2="234" y2="198" stroke="#f0da97" strokeWidth="2" strokeDasharray="4 6" opacity="0.6" />
      <circle cx="200" cy="198" r="6" fill="#f0da97" className="illus-pulse" />

      {/* Open book beneath, shared focus of the lesson */}
      <g transform="translate(140,270)">
        <path
          d="M60 0 C42 -10 20 -10 0 0 V54 C20 44 42 44 60 54 C78 44 100 44 120 54 V0 C100 -10 78 -10 60 0 Z"
          fill="url(#about-book)"
        />
        <path d="M60 0 V54" stroke="#0c2c1f" strokeOpacity="0.4" strokeWidth="2" />
        <g stroke="#0c2c1f" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round">
          <line x1="14" y1="14" x2="44" y2="10" />
          <line x1="14" y1="26" x2="40" y2="23" />
          <line x1="76" y1="10" x2="106" y2="14" />
          <line x1="80" y1="23" x2="106" y2="26" />
        </g>
      </g>
    </svg>
  );
}
