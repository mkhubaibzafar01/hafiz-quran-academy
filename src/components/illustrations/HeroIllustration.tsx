export default function HeroIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="Illustration of a laptop displaying an open book, representing online Quran classes"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hero-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#164a33" />
          <stop offset="100%" stopColor="#0c2c1f" />
        </linearGradient>
        <linearGradient id="hero-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f5c3f" />
          <stop offset="100%" stopColor="#113b29" />
        </linearGradient>
        <linearGradient id="hero-book" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f0da97" />
          <stop offset="100%" stopColor="#d4a83e" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a83e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#d4a83e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="500" fill="url(#hero-bg)" />

      {/* Faint geometric arch (mihrab-style) frame behind the scene */}
      <g opacity="0.14" stroke="#f0da97" strokeWidth="2" fill="none">
        <path d="M100 340 V220 A100 100 0 0 1 300 220 V340" />
        <path d="M130 340 V225 A70 70 0 0 1 270 225 V340" />
      </g>

      {/* Scattered eight-point stars */}
      <g fill="#f0da97" opacity="0.5">
        <g transform="translate(72,96) scale(0.5)" className="illus-pulse">
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
        <g transform="translate(300,150) scale(0.35)" className="illus-pulse" style={{ animationDelay: "0.6s" }}>
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
        <g transform="translate(330,90) scale(0.6)" className="illus-pulse" style={{ animationDelay: "1.2s" }}>
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
      </g>

      {/* Crescent moon */}
      <g className="illus-float-slow" transform="translate(305,70)">
        <path
          d="M20 0a20 20 0 1 0 0 40 16 16 0 1 1 0-40Z"
          fill="#f0da97"
          opacity="0.85"
        />
      </g>

      {/* Soft glow behind the laptop */}
      <circle cx="200" cy="330" r="130" fill="url(#hero-glow)" />

      {/* Laptop base */}
      <g className="illus-float">
        <path d="M118 400 L282 400 L300 430 L100 430 Z" fill="#0c2c1f" stroke="#f0da97" strokeOpacity="0.25" />
        <rect x="185" y="416" width="30" height="6" rx="3" fill="#f0da97" opacity="0.4" />

        {/* Laptop screen */}
        <rect x="120" y="230" width="160" height="172" rx="10" fill="url(#hero-screen)" stroke="#f0da97" strokeOpacity="0.3" strokeWidth="2" />
        <rect x="132" y="242" width="136" height="148" rx="4" fill="#0c2c1f" />

        {/* Open book on screen (abstract, no script) */}
        <g transform="translate(150,270)">
          <path d="M50 0 C36 -8 18 -8 0 0 V70 C18 62 36 62 50 70 C64 62 82 62 100 70 V0 C82 -8 64 -8 50 0 Z" fill="url(#hero-book)" opacity="0.95" />
          <path d="M50 0 V70" stroke="#0c2c1f" strokeWidth="2" opacity="0.5" />
          {/* abstract text lines, not real script */}
          <g stroke="#0c2c1f" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="14" x2="38" y2="10" />
            <line x1="12" y1="26" x2="34" y2="23" />
            <line x1="12" y1="38" x2="38" y2="35" />
            <line x1="62" y1="10" x2="88" y2="14" />
            <line x1="66" y1="23" x2="88" y2="26" />
            <line x1="62" y1="35" x2="88" y2="38" />
          </g>
        </g>
      </g>

      {/* Small floating "live" indicator */}
      <g transform="translate(300,260)" className="illus-float-slow">
        <circle cx="0" cy="0" r="16" fill="#113b29" stroke="#f0da97" strokeOpacity="0.4" />
        <circle cx="0" cy="0" r="5" fill="#79b090" className="illus-pulse" />
      </g>
    </svg>
  );
}
