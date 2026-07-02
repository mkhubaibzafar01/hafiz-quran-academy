interface LogoProps {
  /** Show the "Quran Academy" wordmark next to the icon. Defaults to true. */
  showText?: boolean;
  /** Background this logo sits on, so text colour stays legible. */
  theme?: "light" | "dark";
  /** Extra classes for the outer wrapper. */
  className?: string;
  /** Extra classes for the icon badge (e.g. to resize it). */
  iconClassName?: string;
}

export default function Logo({
  showText = true,
  theme = "light",
  className = "",
  iconClassName = "",
}: LogoProps) {
  const textColor = theme === "dark" ? "text-cream-50" : "text-primary-800";
  const accentColor = theme === "dark" ? "text-gold-300" : "text-gold-600";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.7rem] bg-gradient-to-br from-primary-500 via-primary-700 to-primary-900 shadow-sm shadow-primary-900/30 ring-1 ring-gold-300/25 ${iconClassName}`}
      >
        <svg viewBox="0 0 40 40" className="h-[78%] w-[78%]" xmlns="http://www.w3.org/2000/svg">
          {/* Pointed mihrab arch */}
          <path
            d="M12 31 V20 C12 13 15.5 9 20 8 C24.5 9 28 13 28 20 V31"
            fill="none"
            stroke="#e5c265"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Open book */}
          <path
            d="M20 19 C16.5 16.8 13 17 10.5 18.6 V26.6 C13 25 16.5 24.8 20 27 C23.5 24.8 27 25 29.5 26.6 V18.6 C27 17 23.5 16.8 20 19 Z"
            fill="#f0da97"
          />
          <path
            d="M20 19 V27"
            stroke="#0c2c1f"
            strokeWidth="1"
            strokeOpacity="0.35"
            strokeLinecap="round"
          />
          <g stroke="#0c2c1f" strokeOpacity="0.28" strokeWidth="0.8" strokeLinecap="round">
            <line x1="13" y1="20.3" x2="17.3" y2="19.6" />
            <line x1="13" y1="23" x2="17.3" y2="22.5" />
            <line x1="13" y1="25.6" x2="17.3" y2="25.3" />
            <line x1="22.7" y1="19.6" x2="27" y2="20.3" />
            <line x1="22.7" y1="22.5" x2="27" y2="23" />
            <line x1="22.7" y1="25.3" x2="27" y2="25.6" />
          </g>

          {/* Star accent crowning the arch */}
          <path
            d="M20 4.3 L20.8 5.9 L22.4 6.7 L20.8 7.5 L20 9.1 L19.2 7.5 L17.6 6.7 L19.2 5.9 Z"
            fill="#f8edcb"
          />
        </svg>
      </span>

      {showText && (
        <span
          className={`font-serif text-base font-semibold leading-none tracking-tight sm:text-lg ${textColor}`}
        >
          Quran <span className={accentColor}>Academy</span>
        </span>
      )}
    </span>
  );
}
