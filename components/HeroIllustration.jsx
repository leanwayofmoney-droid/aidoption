export default function HeroIllustration() {
  const flowLines = [
    { endY: 248, opacity: 0.22, sw: 1.4 },
    { endY: 260, opacity: 0.38, sw: 1.5 },
    { endY: 272, opacity: 0.55, sw: 1.6 },
    { endY: 283, opacity: 0.78, sw: 2 },
    { endY: 294, opacity: 0.55, sw: 1.6 },
    { endY: 306, opacity: 0.38, sw: 1.5 },
    { endY: 318, opacity: 0.22, sw: 1.4 },
  ];

  return (
    <svg
      viewBox="0 0 260 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >

      {/* Top panel */}
      <rect
        x="60" y="18" width="140" height="114" rx="14"
        fill="#0F1A26"
        stroke="#2C5A85" strokeWidth="0.8" strokeOpacity="0.4"
      />
      <rect
        x="70" y="27" width="120" height="96" rx="10"
        fill="none"
        stroke="#2C5A85" strokeWidth="0.4" strokeOpacity="0.15"
      />

      {/* Atom glow */}
      <circle cx="130" cy="75" r="26" fill="#2C5A85" opacity="0.07" />
      <circle cx="130" cy="75" r="14" fill="#2C5A85" opacity="0.1" />

      {/* Atom nucleus */}
      <circle cx="130" cy="75" r="5" fill="#2C5A85" />
      <circle cx="130" cy="75" r="2.2" fill="#9BBCD8" />

      {/* Orbits */}
      <ellipse cx="130" cy="75" rx="30" ry="12" stroke="#2C5A85" strokeWidth="1.4" opacity="0.9" />
      <ellipse cx="130" cy="75" rx="30" ry="12" stroke="#4A7DAD" strokeWidth="1.3" opacity="0.55" transform="rotate(60 130 75)" />
      <ellipse cx="130" cy="75" rx="30" ry="12" stroke="#4A7DAD" strokeWidth="1.3" opacity="0.35" transform="rotate(-60 130 75)" />

      {/* Orbit particles */}
      <circle cx="160" cy="75" r="2.5" fill="#9BBCD8" opacity="0.75" />
      <circle cx="100" cy="75" r="2.5" fill="#9BBCD8" opacity="0.75" />

      {/* Stem connector */}
      <rect x="123" y="132" width="14" height="36" fill="#0B1520" />
      <line x1="123" y1="132" x2="123" y2="168" stroke="#2C5A85" strokeWidth="0.8" strokeOpacity="0.45" />
      <line x1="137" y1="132" x2="137" y2="168" stroke="#2C5A85" strokeWidth="0.8" strokeOpacity="0.45" />

      {/* Flow lines — bezier from stem fanning to right */}
      {flowLines.map(({ endY, opacity, sw }, i) => (
        <path
          key={i}
          d={`M 130 168 C 130 245 228 ${endY} 228 ${endY}`}
          stroke="#2C5A85"
          strokeWidth={sw}
          opacity={opacity}
          strokeLinecap="round"
        />
      ))}

      {/* Arrow body */}
      <line x1="227" y1="283" x2="248" y2="283" stroke="#2C5A85" strokeWidth="2.8" strokeLinecap="round" />

      {/* Arrow head */}
      <path
        d="M 241 274 L 251 283 L 241 292"
        stroke="#2C5A85"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Subtle right-edge glow */}
      <rect x="200" y="240" width="60" height="90" fill="url(#glow)" opacity="0.18" />
      <defs>
        <radialGradient id="glow" cx="0%" cy="50%" r="100%">
          <stop offset="0%" stopColor="#2C5A85" />
          <stop offset="100%" stopColor="#0B1520" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
