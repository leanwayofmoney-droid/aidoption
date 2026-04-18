function LogoIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left parallelogram — dark navy */}
      <polygon points="2,0 10,0 8,22 0,22" fill="#1A3A57" />
      {/* Right parallelogram — primary brand blue */}
      <polygon points="13,0 21,0 19,22 11,22" fill="#2C5A85" />
    </svg>
  );
}

export default function LogoWordmark({ variant = "light" }) {
  /* variant "light" = op lichte achtergrond, "dark" = op donkere achtergrond */
  const aiColor    = variant === "dark" ? "#FFFFFF"  : "#2C5A85";
  const optColor   = variant === "dark" ? "#9BBCD8"  : "#6C7B8B";

  return (
    <span className="inline-flex items-center gap-2" style={{ lineHeight: 1 }}>
      <LogoIcon size={22} />
      <span
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "1.15rem",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        <span style={{ color: aiColor, fontWeight: 700 }}>AI</span>
        <span style={{ color: optColor, fontWeight: 300 }}>doption</span>
      </span>
    </span>
  );
}
