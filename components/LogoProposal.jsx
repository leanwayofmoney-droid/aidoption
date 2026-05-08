/**
 * LogoProposal.jsx — VOORSTEL, nog niet in gebruik
 *
 * Geïnspireerd op Geld Sjoege:
 *  - Zeshoekig icoon met gradient + neuraal netwerk motief
 *  - Twee-kleurig woordmerk: "AI" vet wit / blauw + "doption" in accent-oranje
 *  - Optionele tagline: "PRAKTISCHE AI VOOR IEDEREEN"
 */

function LogoIcon({ size = 32 }) {
  const id = "logoGrad";
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
        {/* Gradient: donker navy links-boven → brand blauw rechts-onder */}
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1A3A57" />
          <stop offset="100%" stopColor="#3A7ABF" />
        </linearGradient>
      </defs>

      {/* Zeshoek (puntige bovenkant, zelfde oriëntatie als Geld Sjoege) */}
      {/* Center: 18,18 — radius: 16 */}
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        fill={`url(#${id})`}
        stroke="#4A7DAD"
        strokeWidth="0.75"
      />

      {/* Neurale verbindingslijnen (licht blauw, subtiel) */}
      <line x1="18" y1="10" x2="11.5" y2="24" stroke="rgba(155,188,216,0.45)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="18" y1="10" x2="24.5" y2="24" stroke="rgba(155,188,216,0.45)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="11.5" y1="24" x2="24.5" y2="24" stroke="rgba(155,188,216,0.45)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Knooppunt boven — oranje accent (het "AI" idee) */}
      <circle cx="18" cy="10" r="3" fill="#C8813F" />

      {/* Knooppunten onder — wit */}
      <circle cx="11.5" cy="24" r="2.2" fill="white" fillOpacity="0.85" />
      <circle cx="24.5" cy="24" r="2.2" fill="white" fillOpacity="0.85" />
    </svg>
  );
}

/** Gebruik: <LogoProposal variant="dark" tagline={true} /> */
export default function LogoProposal({ variant = "light", tagline = false }) {
  const aiColor  = variant === "dark" ? "#FFFFFF" : "#1E2D3D";
  const optColor = "#C8813F"; // oranje accent — zelfde als Geld Sjoege pakt groen

  return (
    <span className="inline-flex flex-col gap-0" style={{ lineHeight: 1 }}>
      <span className="inline-flex items-center gap-2.5">
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

      {tagline && (
        <span
          style={{
            fontSize: "0.55rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: variant === "dark" ? "#9BBCD8" : "#9BA8B5",
            paddingLeft: "42px", // uitlijnen met de tekst
            marginTop: "3px",
          }}
        >
          Praktische AI voor iedereen
        </span>
      )}
    </span>
  );
}
