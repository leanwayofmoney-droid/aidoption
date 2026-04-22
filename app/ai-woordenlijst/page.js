import WoordelijstClient from "../../components/WoordelijstClient";

const BASE = "https://ai-doption.nl";

export const metadata = {
  title: "AI-woordenlijst: 50 begrippen uitgelegd in gewone taal",
  description: "Van algoritme tot taalmodel: 50 AI-begrippen uitgelegd zoals je het aan je buurman zou uitleggen. Met concrete voorbeelden en zonder vakjargon.",
  alternates: { canonical: `${BASE}/ai-woordenlijst` },
  openGraph: {
    type: "website",
    url: `${BASE}/ai-woordenlijst`,
    title: "AI-woordenlijst: 50 begrippen in gewone taal",
    description: "Van algoritme tot taalmodel. Elk begrip uitgelegd met een concreet voorbeeld.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

export default function AiWoordenlijstPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* Header */}
      <section className="pt-20 pb-12">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#2C5A85", letterSpacing: "0.18em" }}
        >
          Elk vak heeft zijn eigen taal
        </p>
        <h1
          className="text-3xl md:text-4xl font-semibold mb-4 leading-tight"
          style={{ color: "#1E2D3D" }}
        >
          De AI-woordenlijst
        </h1>
        <p className="max-w-xl text-base leading-relaxed" style={{ color: "#6C7B8B" }}>
          Vijftig AI-begrippen uitgelegd zoals je het aan je buurman zou uitleggen. Geen definities op definities.
          Elk begrip heeft een concreet voorbeeld en een koppeling naar een relevante AI-fix waar dat van pas komt.
        </p>
      </section>

      {/* Interactieve lijst */}
      <section className="pb-24">
        <WoordelijstClient />
      </section>

    </div>
  );
}
