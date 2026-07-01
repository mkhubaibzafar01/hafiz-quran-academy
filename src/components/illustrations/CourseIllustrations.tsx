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

export function NooraniQaidaIllustration({ className = "" }: { className?: string }) {
  const uid = "course-qaida";
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Illustration of letter practice tiles for the Noorani Qaida course" xmlns="http://www.w3.org/2000/svg">
      <CardBackdrop uid={uid} />
      <g className="illus-float" transform="translate(120,55)">
        {[0, 1].map((row) =>
          [0, 1].map((col) => (
            <g key={`${row}-${col}`} transform={`translate(${col * 90},${row * 68})`}>
              <rect width="72" height="52" rx="10" fill="#fffdf8" stroke="#a7cdb6" strokeWidth="2" />
              <circle cx="20" cy="26" r="5" fill="#d4a83e" opacity="0.85" />
              <path d="M32 34 Q46 12 60 22" stroke="#1f5c3f" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
            </g>
          ))
        )}
      </g>
      <g className="illus-float-slow" transform="translate(300,175) rotate(-25)">
        <rect x="-6" y="-40" width="12" height="60" rx="4" fill="#e5c265" />
        <path d="M-6 20 L6 20 L0 34 Z" fill="#164a33" />
      </g>
    </svg>
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

export function TajweedIllustration({ className = "" }: { className?: string }) {
  const uid = "course-tajweed";
  const bars = [14, 26, 40, 22, 34, 46, 20, 30];
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Illustration of sound waves representing the Tajweed rules course" xmlns="http://www.w3.org/2000/svg">
      <CardBackdrop uid={uid} />
      <g className="illus-float" transform="translate(150,90)">
        <path d="M30 0 C21 -5 10 -5 0 0 V46 C10 41 21 41 30 46 C39 41 50 41 60 46 V0 C50 -5 39 -5 30 0 Z" fill="#164a33" />
      </g>
      <g stroke="#d4a83e" strokeWidth="6" strokeLinecap="round" className="illus-pulse">
        {bars.map((h, i) => (
          <line key={i} x1={230 + i * 16} y1={125 - h / 2} x2={230 + i * 16} y2={125 + h / 2} opacity={0.9 - i * 0.06} />
        ))}
      </g>
    </svg>
  );
}

export function AdultsRevertsIllustration({ className = "" }: { className?: string }) {
  const uid = "course-adults";
  return (
    <svg viewBox="0 0 400 250" className={className} role="img" aria-label="Illustration of an adult learner with a book, representing the course for adults and reverts" xmlns="http://www.w3.org/2000/svg">
      <CardBackdrop uid={uid} />
      {/* rising sun / new beginning */}
      <g transform="translate(290,70)" opacity="0.8">
        <circle r="26" fill="#f0da97" className="illus-pulse" />
        <g stroke="#d4a83e" strokeWidth="3" strokeLinecap="round">
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line key={deg} x1="0" y1="-34" x2="0" y2="-42" transform={`rotate(${deg})`} />
          ))}
        </g>
      </g>
      {/* simple abstract seated figure, faceless */}
      <g className="illus-float" transform="translate(110,110)">
        <circle cx="30" cy="0" r="18" fill="#164a33" />
        <path d="M0 90 C0 50 12 34 30 34 C48 34 60 50 60 90 Z" fill="#1f5c3f" />
        {/* open book on lap */}
        <path d="M6 78 C16 72 24 72 30 76 C36 72 44 72 54 78 V90 C44 84 36 84 30 88 C24 84 16 84 6 90 Z" fill="#f0da97" />
      </g>
    </svg>
  );
}
