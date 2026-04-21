import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AIdoption — Praktische AI-fixes voor je dagelijkse leven";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1E2D3D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#2C5A85",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          AI-FIXES
        </div>

        {/* Titel */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          AI voor je dagelijkse leven
        </div>

        {/* Subtitel */}
        <div
          style={{
            fontSize: 28,
            color: "#6C7B8B",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Praktische oplossingen. Kopieer de prompt. Bespaar direct tijd.
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 22,
            color: "#2C5A85",
            fontWeight: 600,
          }}
        >
          ai-doption.nl
        </div>
      </div>
    ),
    { ...size }
  );
}
