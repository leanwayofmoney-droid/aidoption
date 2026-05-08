function LogoIcon({ size = 32 }) {
  // Unieke gradient-ID zodat nav + footer niet conflicteren
  const gid = "aid-hex-grad";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1A3A57" />
          <stop offset="100%" stopColor="#3A7ABF" />
        </linearGradient>
      </defs>

      {/* Zeshoek — puntige boven/onderkant */}
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        fill={`url(#${gid})`}
        stroke="#4A7DAD"
        strokeWidth="0.75"
      />

      {/* Neurale verbindingslijnen */}
      <line x1="18" y1="10" x2="11.5" y2="24" stroke="rgba(155,188,216,0.45)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="18" y1="10" x2="24.5" y2="24" stroke="rgba(155,188,216,0.45)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11.5" y1="24" x2="24.5" y2="24" stroke="rgba(155,188,216,0.45)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Knooppunt boven — oranje accent */}
      <circle cx="18" cy="10" r="3" fill="#C8813F" />

      {/* Knooppunten onder — wit */}
      <circle cx="11.5" cy="24" r="2.2" fill="white" fillOpacity="0.85" />
      <circle cx="24.5" cy="24" r="2.2" fill="white" fillOpacity="0.85" />
    </svg>
  );
}

export default function LogoWordmark({ variant = "light" }) {
  const aiColor  = variant === "dark" ? "#FFFFFF" : "#1E2D3D";
  const optColor = "#C8813F";

  return (
    <span className="inline-flex items-center gap-2.5" style={{ lineHeight: 1 }}>
      <LogoIcon size={32} />
      <span style={{ fontFamily: "Inter, system-ui, sans-serif", lineHeight: 1 }}>
        <span style={{ fontSize: "1.25rem", fontWeight: 800, color: aiColor, letterSpacing: "-0.02em" }}>
          AI
        </span>
        <span style={{ fontSize: "1.25rem", fontWeight: 300, color: optColor, letterSpacing: "-0.01em" }}>
          doption
        </span>
      </span>
    </span>
  );
}
