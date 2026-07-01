export default function CTAIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 180"
      className={className}
      role="img"
      aria-label="Illustration of an open archway with light, inviting the visitor to begin their Quran journey"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cta-arch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0da97" />
          <stop offset="100%" stopColor="#d4a83e" />
        </linearGradient>
        <radialGradient id="cta-glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f8edcb" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f8edcb" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* radiant glow inside the archway */}
      <ellipse cx="110" cy="80" rx="70" ry="80" fill="url(#cta-glow)" className="illus-pulse" />

      {/* light rays */}
      <g stroke="#f8edcb" strokeOpacity="0.6" strokeWidth="2" className="illus-spin-slow" style={{ transformOrigin: "110px 80px" }}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line key={deg} x1="110" y1="80" x2="110" y2="20" transform={`rotate(${deg} 110 80)`} opacity="0.5" />
        ))}
      </g>

      {/* archway / mihrab outline */}
      <path
        d="M60 170 V90 A50 50 0 0 1 160 90 V170"
        fill="none"
        stroke="url(#cta-arch)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M76 170 V92 A34 34 0 0 1 144 92 V170"
        fill="none"
        stroke="#f8edcb"
        strokeOpacity="0.5"
        strokeWidth="2.5"
      />

      {/* eight-point star capping the arch */}
      <g transform="translate(110,32) scale(1.1)" className="illus-float-slow">
        <path
          d="M0 -14 L4 -4 L14 0 L4 4 L0 14 L-4 4 L-14 0 L-4 -4 Z"
          fill="#d4a83e"
        />
      </g>

      {/* small path of dots leading toward the arch, suggesting a first step */}
      <g fill="#f0da97" opacity="0.8">
        <circle cx="30" cy="170" r="4" className="illus-pulse" />
        <circle cx="52" cy="164" r="4" className="illus-pulse" style={{ animationDelay: "0.3s" }} />
        <circle cx="190" cy="170" r="4" className="illus-pulse" style={{ animationDelay: "0.6s" }} />
        <circle cx="168" cy="164" r="4" className="illus-pulse" style={{ animationDelay: "0.9s" }} />
      </g>
    </svg>
  );
}
