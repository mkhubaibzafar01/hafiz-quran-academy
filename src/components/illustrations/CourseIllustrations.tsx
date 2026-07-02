function CardBackdrop({ uid }: { uid: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef5f0" />
          <stop offset="100%" stopColor="#d3e6da" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#${uid}-bg)`} />
      <g opacity="0.25" stroke="#1f5c3f" strokeWidth="1" fill="none">
        <path d="M340 20 L352 32 L368 32 L356 44 L368 56 L352 56 L340 68 L328 56 L312 56 L324 44 L312 32 L328 32 Z" />
      </g>
    </>
  );
}

export function QuranReadingIllustration({ className = "" }: { className?: string }) {
  const uid = "course-reading";
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Illustration of an open book representing the Quran reading and Tajweed course" xmlns="http://www.w3.org/2000/svg">
      <CardBackdrop uid={uid} />
      <g className="illus-float" transform="translate(140,75)">
        <path d="M60 0 C42 -10 20 -10 0 0 V90 C20 80 42 80 60 90 C78 80 100 80 120 90 V0 C100 -10 78 -10 60 0 Z" fill="#164a33" />
        <path d="M60 0 V90" stroke="#0c2c1f" strokeWidth="2" />
        <g strokeLinecap="round" strokeWidth="4">
          <line x1="12" y1="18" x2="44" y2="14" stroke="#d4a83e" />
          <line x1="12" y1="32" x2="42" y2="29" stroke="#e5c265" />
          <line x1="12" y1="46" x2="44" y2="43" stroke="#79b090" />
          <line x1="76" y1="14" x2="108" y2="18" stroke="#e5c265" />
          <line x1="78" y1="29" x2="108" y2="32" stroke="#d4a83e" />
          <line x1="76" y1="43" x2="108" y2="46" stroke="#79b090" />
        </g>
        {/* bookmark ribbon */}
        <path d="M60 -8 L60 30 L52 22 L44 30 L44 -8 Z" fill="#d4a83e" transform="translate(0,0)" />
      </g>
    </svg>
  );
}

export function HifzIllustration({ className = "" }: { className?: string }) {
  const uid = "course-hifz";
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Illustration of a book with stars representing Quran memorization (Hifz)" xmlns="http://www.w3.org/2000/svg">
      <CardBackdrop uid={uid} />
      {/* layered ghost pages suggesting repetition */}
      <g opacity="0.35" transform="translate(150,64)">
        <path d="M50 0 C36 -8 18 -8 0 0 V76 C18 68 36 68 50 76 C64 68 82 68 100 76 V0 C82 -8 64 -8 50 0 Z" fill="#79b090" />
      </g>
      <g opacity="0.6" transform="translate(145,70)">
        <path d="M50 0 C36 -8 18 -8 0 0 V76 C18 68 36 68 50 76 C64 68 82 68 100 76 V0 C82 -8 64 -8 50 0 Z" fill="#4a8f6c" />
      </g>
      <g className="illus-float" transform="translate(140,76)">
        <path d="M50 0 C36 -8 18 -8 0 0 V76 C18 68 36 68 50 76 C64 68 82 68 100 76 V0 C82 -8 64 -8 50 0 Z" fill="#164a33" />
        <path d="M50 0 V76" stroke="#0c2c1f" strokeWidth="2" />
      </g>
      {/* orbiting stars representing memorized portions */}
      <g fill="#d4a83e">
        <g transform="translate(120,60) scale(0.6)" className="illus-pulse">
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
        <g transform="translate(280,55) scale(0.5)" className="illus-pulse" style={{ animationDelay: "0.5s" }}>
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
        <g transform="translate(270,170) scale(0.45)" className="illus-pulse" style={{ animationDelay: "1s" }}>
          <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
        </g>
      </g>
    </svg>
  );
}
